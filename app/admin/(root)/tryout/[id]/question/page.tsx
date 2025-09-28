'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useQueryState } from 'nuqs';
import { HiChevronLeft, HiPlus, HiMinus, HiUpload, HiX, HiPhotograph } from 'react-icons/hi';
import Link from 'next/link';
import FileUpload from '@/app/admin/_components/forms/file-upload';
import { Button } from '@/app/_components/button';
import Textarea from '@/app/admin/_components/forms/textarea';
import Input from '@/app/admin/_components/forms/input';
import Badge from '@/app/admin/_components/badge';

// ==========================================
// Types & Interfaces (types/tryout.ts)
// ==========================================
interface Answer {
  id: string;
  text: string;
  image?: File | null;
  isCorrect: boolean;
}

interface Question {
  id: number;
  questionText: string;
  image?: File | null;
  answers: Answer[];
  explanation: string;
  questionType: 'TWK' | 'TIU' | 'TKP';
}

interface TryoutData {
  id: number;
  judulTryout: string;
  jenis: 'SKD' | 'SKB';
  totalQuestions: number;
}

// ==========================================
// Constants (constants/tryout.ts)
// ==========================================
const dummyTryoutData: TryoutData[] = [
  {
    id: 1,
    judulTryout: 'Tryout SKD #1',
    jenis: 'SKD',
    totalQuestions: 10
  }
];

const questionTypeOptions = [
  { value: 'TWK', label: 'TWK (Tes Wawasan Kebangsaan)' },
  { value: 'TIU', label: 'TIU (Tes Intelegensia Umum)' },
  { value: 'TKP', label: 'TKP (Tes Karakteristik Pribadi)' }
];

// ==========================================
// Components (components/tryout/)
// ==========================================

// components/tryout/QuestionListComponent.tsx
interface QuestionListProps {
  totalQuestions: number;
  currentQuestionNum: string;
  answeredQuestions: Set<number>;
  onQuestionJump: (questionNum: number) => void;
  onTotalQuestionsChange: (newTotal: number) => void;
}

const QuestionListComponent: React.FC<QuestionListProps> = ({
  totalQuestions,
  currentQuestionNum,
  answeredQuestions,
  onQuestionJump,
  onTotalQuestionsChange
}) => {
  const getQuestionStatus = (questionNum: number): 'current' | 'answered' | 'unanswered' => {
    if (questionNum === parseInt(currentQuestionNum)) return 'current';
    if (answeredQuestions.has(questionNum)) return 'answered';
    return 'unanswered';
  };

  const getQuestionButtonClass = (questionNum: number) => {
    const status = getQuestionStatus(questionNum);
    const baseClass = 'w-10 h-10 sm:w-12 sm:h-12 rounded-lg border text-sm font-medium transition-colors cursor-pointer hover:shadow-md flex items-center justify-center';

    switch (status) {
      case 'current':
        return `${baseClass} bg-sapphire-normal text-white border-sapphire-normal`;
      case 'answered':
        return `${baseClass} bg-sapphire-light text-sapphire-normal border-sapphire-light-hover`;
      default:
        return `${baseClass} bg-white text-gray-700 border-gray-200 hover:border-sapphire-normal`;
    }
  };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900 font-semibold">Daftar Soal</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTotalQuestionsChange(Math.max(1, totalQuestions - 1))}
            className="p-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
          >
            <HiMinus className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-gray-700 min-w-[60px] text-center">
            {totalQuestions} soal
          </span>
          <button
            onClick={() => onTotalQuestionsChange(totalQuestions + 1)}
            className="p-1 rounded-md bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
          >
            <HiPlus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        {/* Mobile Layout - Scrollable */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => onQuestionJump(num)}
                className={getQuestionButtonClass(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
          }}
        >
          {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => onQuestionJump(num)}
              className={getQuestionButtonClass(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

// components/tryout/ImageUploadSection.tsx
interface ImageUploadSectionProps {
  label: string;
  image: File | null;
  onImageChange: (file: File | null) => void;
  placeholder?: string;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  label,
  image,
  onImageChange,
  placeholder = "Upload gambar"
}) => {
  const [showUpload, setShowUpload] = useState(false);

  const handleShowUpload = () => {
    setShowUpload(true);
  };

  const handleCancelUpload = () => {
    setShowUpload(false);
    onImageChange(null);
  };

  if (!showUpload && !image) {
    return (
      <Button
        type="button"
        onClick={handleShowUpload}
        variant='outline'
        size='sm'
      >
        <HiPhotograph className="h-3 w-3" />
        Tambah Gambar
      </Button>
    )
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <FileUpload
        fileType="image"
        value={image}
        onChange={onImageChange}
        placeholder={placeholder}
      />
      <Button
        type="button"
        onClick={handleCancelUpload}
        variant='outline'
        color='danger'
        size='sm'
      >
        <HiX className="h-3 w-3" />
        Batalkan
      </Button>
    </div>
  );
};

// components/tryout/QuestionTypeTab.tsx
interface QuestionTypeTabProps {
  currentType: 'TWK' | 'TIU' | 'TKP';
  onTypeChange: (type: 'TWK' | 'TIU' | 'TKP') => void;
}

const QuestionTypeTab: React.FC<QuestionTypeTabProps> = ({
  currentType,
  onTypeChange
}) => {
  return (
    <div className="flex gap-2">
      {questionTypeOptions.map((type) => (
        <Button
          key={type.value}
          onClick={() => onTypeChange(type.value as 'TWK' | 'TIU' | 'TKP')}
          variant={currentType === type.value ? 'fill' : 'outline'}
          type='button'
        >
          {type.value}
        </Button>
      ))}
    </div>
  );
};

// components/tryout/AnswerOptionsSection.tsx
interface AnswerOptionsSectionProps {
  answers: Answer[];
  errors: Record<string, string>;
  onAnswerTextChange: (answerId: string, text: string) => void;
  onAnswerImageChange: (answerId: string, file: File | null) => void;
  onCorrectAnswerChange: (answerId: string) => void;
}

const AnswerOptionsSection: React.FC<AnswerOptionsSectionProps> = ({
  answers,
  errors,
  onAnswerTextChange,
  onAnswerImageChange,
  onCorrectAnswerChange
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 my-4">
        Opsi Jawaban <span className="text-red-500">*</span>
      </label>
      <div className="space-y-4">
        {answers.map((answer) => (
          <div key={answer.id} className="my-4 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={answer.isCorrect}
                  onChange={() => onCorrectAnswerChange(answer.id)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
              </div>
              <span className="w-6 text-sm font-medium text-gray-700">
                {answer.id}.
              </span>
              <div className="flex-1">
                <Input
                  type="text"
                  value={answer.text}
                  onChange={(e) => onAnswerTextChange(answer.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Masukkan opsi jawaban ${answer.id}`}
                />
              </div>
              <Badge
                onClick={() => onCorrectAnswerChange(answer.id)}
                status={answer.isCorrect ? '✓ Set Benar' : 'Set Benar'}
                type={answer.isCorrect ? 'success' : 'default'}
                className='cursor-pointer'
              />
            </div>

            <ImageUploadSection
              label={`Gambar Jawaban ${answer.id} (Opsional)`}
              image={answer.image || null}
              onImageChange={(file) => onAnswerImageChange(answer.id, file)}
              placeholder={`Upload gambar untuk jawaban ${answer.id}`}
            />
          </div>
        ))}
      </div>
      {errors.answers && (
        <p className="mt-1 text-sm text-red-600">{errors.answers}</p>
      )}
      {errors.correctAnswer && (
        <p className="mt-1 text-sm text-red-600">{errors.correctAnswer}</p>
      )}
    </div>
  );
};

// ==========================================
// Hooks (hooks/useTryoutQuestions.ts)
// ==========================================
const useTryoutQuestions = (tryoutId: string) => {
  const [tryoutData, setTryoutData] = useState<TryoutData | null>(null);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const data = dummyTryoutData.find(item => item.id === parseInt(tryoutId));
    if (data) {
      setTryoutData(data);
      setTotalQuestions(data.totalQuestions);
    }
  }, [tryoutId]);

  const validateQuestion = (question: Question) => {
    const newErrors: Record<string, string> = {};

    if (!question.questionText.trim()) {
      newErrors.questionText = 'Soal harus diisi';
    }

    const hasEmptyAnswer = question.answers.some(answer => !answer.text.trim());
    if (hasEmptyAnswer) {
      newErrors.answers = 'Semua opsi jawaban harus diisi';
    }

    const hasCorrectAnswer = question.answers.some(answer => answer.isCorrect);
    if (!hasCorrectAnswer) {
      newErrors.correctAnswer = 'Harus ada satu jawaban yang benar';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveQuestion = (question: Question) => {
    if (!validateQuestion(question)) {
      return false;
    }

    setQuestions(prev => {
      const existingIndex = prev.findIndex(q => q.id === question.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = question;
        return updated;
      } else {
        return [...prev, question];
      }
    });

    setAnsweredQuestions(prev => new Set([...prev, question.id]));
    return true;
  };

  return {
    tryoutData,
    totalQuestions,
    setTotalQuestions,
    questions,
    answeredQuestions,
    errors,
    saveQuestion,
    setErrors
  };
};

// ==========================================
// Main Component (pages/tryout/[id]/soal.tsx)
// ==========================================
export default function TryoutQuestionForm() {
  const router = useRouter();
  const params = useParams();
  const tryoutId = params?.id as string;

  // nuqs for navigation
  const [currentQuestionNum, setCurrentQuestionNum] = useQueryState('q', {
    defaultValue: '1',
    parse: (value) => value || '1',
    serialize: (value) => value
  });

  const [questionType, setQuestionType] = useQueryState('type', {
    defaultValue: 'TWK' as 'TWK' | 'TIU' | 'TKP',
    parse: (value) => (value as 'TWK' | 'TIU' | 'TKP') || 'TWK',
    serialize: (value) => value
  });

  const {
    tryoutData,
    totalQuestions,
    setTotalQuestions,
    questions,
    answeredQuestions,
    errors,
    saveQuestion,
    setErrors
  } = useTryoutQuestions(tryoutId);

  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: 1,
    questionText: '',
    image: null,
    answers: [
      { id: 'A', text: '', image: null, isCorrect: false },
      { id: 'B', text: '', image: null, isCorrect: false },
      { id: 'C', text: '', image: null, isCorrect: false },
      { id: 'D', text: '', image: null, isCorrect: false },
      { id: 'E', text: '', image: null, isCorrect: false }
    ],
    explanation: '',
    questionType: 'TWK'
  });

  const [isLoading, setIsLoading] = useState(false);

  // Update current question when question number changes
  useEffect(() => {
    const questionNum = parseInt(currentQuestionNum);
    const existingQuestion = questions.find(q => q.id === questionNum);

    if (existingQuestion) {
      setCurrentQuestion(existingQuestion);
    } else {
      setCurrentQuestion({
        id: questionNum,
        questionText: '',
        image: null,
        answers: [
          { id: 'A', text: '', image: null, isCorrect: false },
          { id: 'B', text: '', image: null, isCorrect: false },
          { id: 'C', text: '', image: null, isCorrect: false },
          { id: 'D', text: '', image: null, isCorrect: false },
          { id: 'E', text: '', image: null, isCorrect: false }
        ],
        explanation: '',
        questionType: questionType
      });
    }
  }, [currentQuestionNum, questions, questionType]);

  // Event Handlers
  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentQuestion(prev => ({
      ...prev,
      questionText: e.target.value
    }));

    if (errors.questionText) {
      setErrors(prev => ({ ...prev, questionText: '' }));
    }
  };

  const handleQuestionImageChange = (file: File | null) => {
    setCurrentQuestion(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleAnswerChange = (answerId: string, text: string) => {
    setCurrentQuestion(prev => ({
      ...prev,
      answers: prev.answers.map(answer =>
        answer.id === answerId ? { ...answer, text } : answer
      )
    }));
  };

  const handleAnswerImageChange = (answerId: string, file: File | null) => {
    setCurrentQuestion(prev => ({
      ...prev,
      answers: prev.answers.map(answer =>
        answer.id === answerId ? { ...answer, image: file } : answer
      )
    }));
  };

  const handleCorrectAnswerChange = (answerId: string) => {
    setCurrentQuestion(prev => ({
      ...prev,
      answers: prev.answers.map(answer => ({
        ...answer,
        isCorrect: answer.id === answerId
      }))
    }));
  };

  const handleExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentQuestion(prev => ({
      ...prev,
      explanation: e.target.value
    }));
  };

  const handleQuestionTypeChange = (type: 'TWK' | 'TIU' | 'TKP') => {
    setQuestionType(type);
    setCurrentQuestion(prev => ({
      ...prev,
      questionType: type
    }));
  };

  // Navigation handlers
  const saveCurrentQuestion = () => {
    return saveQuestion(currentQuestion);
  };

  const onQuestionJump = (questionNum: number) => {
    saveCurrentQuestion();
    setCurrentQuestionNum(questionNum.toString());
  };

  const goToNextQuestion = () => {
    if (saveCurrentQuestion()) {
      const nextNum = Math.min(parseInt(currentQuestionNum) + 1, totalQuestions);
      setCurrentQuestionNum(nextNum.toString());
    }
  };

  const goToPreviousQuestion = () => {
    if (parseInt(currentQuestionNum) > 1) {
      saveCurrentQuestion();
      const prevNum = parseInt(currentQuestionNum) - 1;
      setCurrentQuestionNum(prevNum.toString());
    }
  };

  const handleSubmit = async () => {
    if (!saveCurrentQuestion()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('All questions:', questions);
      console.log('Total questions:', totalQuestions);

      router.push('/tryout');
    } catch (error) {
      console.error('Error submitting questions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <Link href='/tryout'>
          <HiChevronLeft className="h-8 w-8 text-salmon-normal cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          Input Soal Try Out
        </h1>
        {tryoutData && (
          <span className="text-gray-500">- {tryoutData.judulTryout}</span>
        )}
      </div>

      <div className='flex justify-between'>
        {/* Question Type Tabs */}
        <QuestionTypeTab
          currentType={questionType}
          onTypeChange={handleQuestionTypeChange}
        />

        {/* Upload Options */}
        <div className="flex gap-3">
          <Button color='success'>
            <HiUpload className="h-4 w-4" />
            Upload Excel
          </Button>
          <Button>
            <HiUpload className="h-4 w-4" />
            Upload Word
          </Button>
        </div>
      </div>


      {/* Question List */}
      <QuestionListComponent
        totalQuestions={totalQuestions}
        currentQuestionNum={currentQuestionNum}
        answeredQuestions={answeredQuestions}
        onQuestionJump={onQuestionJump}
        onTotalQuestionsChange={setTotalQuestions}
      />

      {/* Current Question Form */}
      <div className="my-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Soal no {currentQuestionNum}
        </h2>

        {/* Question Text */}
        <div className="space-y-2 my-4">
          <Textarea
            label='Soal'
            value={currentQuestion.questionText}
            onChange={handleQuestionChange}
            rows={4}
            placeholder="Masukkan soal"
            required
            resize='vertical'
          />
          {errors.questionText && (
            <p className="mt-1 text-sm text-red-600">{errors.questionText}</p>
          )}

          {/* Question Image Upload */}
          <ImageUploadSection
            label="Gambar Soal (Opsional)"
            image={currentQuestion.image || null}
            onImageChange={handleQuestionImageChange}
            placeholder="Upload gambar untuk soal"
          />
        </div>

        {/* Answer Options */}
        <AnswerOptionsSection
          answers={currentQuestion.answers}
          errors={errors}
          onAnswerTextChange={handleAnswerChange}
          onAnswerImageChange={handleAnswerImageChange}
          onCorrectAnswerChange={handleCorrectAnswerChange}
        />

        {/* Explanation */}
        <div className="my-4">
          <Textarea
            label='Catatan'
            value={currentQuestion.explanation}
            onChange={handleExplanationChange}
            placeholder="Masukkan catatan setelah menjawab"
            rows={4}
            resize='vertical'
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            onClick={goToPreviousQuestion}
            disabled={parseInt(currentQuestionNum) === 1}>
            Sebelumnya
          </Button>

          <div className="flex gap-3">
            <Button
              onClick={goToNextQuestion}
              disabled={parseInt(currentQuestionNum) >= totalQuestions}
              variant='outline'
            >
              Selanjutnya
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Menyimpan...' : 'Simpan Semua'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}