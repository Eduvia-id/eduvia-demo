import React, { useState } from 'react'
import { TestQuestion } from '../page';
import { HiDownload } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi2';
import { Button } from '@/app/_components/button';
import { useQueryState, parseAsStringEnum } from 'nuqs';

type QuestionTab = 'Semua' | 'Benar' | 'Salah' | 'Kosong';

// Category mapping for display
const categoryNames = {
  'TWK': 'Tes Wawasan Kebangsaan',
  'TIU': 'Tes Integrasi Umum',
  'TKP': 'Tes Karakteristik Pribadi'
};

export default function QuestionReview({ questions }: { questions: TestQuestion[] }) {
  const [selectedTab, setSelectedTab] = useQueryState(
    'tab',
    parseAsStringEnum<QuestionTab>(['Semua', 'Benar', 'Salah', 'Kosong']).withDefault('Semua')
  );
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const filteredQuestions = questions.filter(q => {
    if (selectedTab === 'Benar') return q.isCorrect;
    if (selectedTab === 'Salah') return !q.isCorrect && q.userAnswer;
    if (selectedTab === 'Kosong') return !q.userAnswer;
    return true;
  });

  // Group questions by category
  const groupedQuestions = filteredQuestions.reduce((acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = [];
    }
    acc[question.category].push(question);
    return acc;
  }, {} as Record<string, TestQuestion[]>);

  return (
    <section className="px-6 sm:px-8 lg:px-12 my-6">
      <h3 className="text-xl font-semibold mb-4">Pembahasan</h3>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        {(['Semua', 'Benar', 'Salah', 'Kosong'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border border-sapphire-normal ${selectedTab === tab
              ? 'bg-sapphire-normal text-white'
              : ' text-sapphire-normal hover:bg-sapphire-light'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Button className="w-full mb-6 space-x-2">
        <HiDownload className="w-4 h-4" />
        <span>Download Pembahasan</span>
      </Button>

      {/* Categories List */}
      <div className="space-y-4">
        {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
          <div key={category}>
            <button
              onClick={() => toggleCategory(category)}
              className="w-full p-4 flex items-center justify-between bg-white rounded-lg shadow-lg"
            >
              <span className="text-lg font-medium text-gray-800">
                {categoryNames[category as keyof typeof categoryNames]}
              </span>
              <div className="p-2 bg-sapphire-normal text-white rounded-full">
                <HiChevronDown
                  className={`w-5 h-5 transition-transform ${expandedCategory === category ? 'rotate-180' : ''
                    }`}
                />
              </div>
            </button>

            {expandedCategory === category && (
              <div className="my-4 space-y-4">
                {categoryQuestions.map((question) => (
                  <div key={question.id} className="bg-white rounded-lg shadow-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-md font-medium text-salmon-normal">
                          Soal Nomor {question.id}
                        </span>
                        <p className="text-gray-800 text-sm leading-relaxed">
                          {question.question}
                        </p>
                      </div>

                      <div className={`px-3 py-1 rounded font-medium text-white text-sm ${question.isCorrect
                        ? 'bg-green-600'
                        : question.userAnswer
                          ? 'bg-red-600'
                          : 'bg-gray-600'
                        }`}>
                        {question.isCorrect ? 'Benar' : question.userAnswer ? 'Salah' : 'Kosong'}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <div
                          key={option.id}
                          className={`p-3 rounded border text-sm ${option.id === question.correctAnswer
                            ? 'bg-green-100 border-green-300'
                            : option.id === question.userAnswer && !question.isCorrect
                              ? 'bg-red-100 border-red-300'
                              : 'bg-white border-gray-200'
                            }`}
                        >
                          <span className="font-medium">{option.id}. </span>
                          {option.text}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-blue-50 rounded">
                      <p className="text-sm font-medium text-gray-700 mb-2">Kunci Jawaban</p>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">
                          {question.correctAnswer}. {question.options.find(o => o.id === question.correctAnswer)?.text}
                        </span>
                      </p>

                      <p className="text-sm font-medium text-gray-700 mb-2">Pembahasan</p>
                      <p className="text-sm text-gray-600">
                        {question.explanation}
                      </p>
                    </div>

                    <Button variant='outline'>
                      Materi Terkait
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}