import React from 'react'
import { Button } from "@/app/_components/button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type QuestionOption = {
  id: string;
  text: string;
}

export type Question = {
  id: number;
  category: 'TWK' | 'TIU' | 'TKP';
  question: string;
  options: QuestionOption[];
}

// TestQuestion Component
type TestQuestionProps = {
  currentQuestion: number;
  questionData: Question;
  selectedAnswer: string;
  answeredCount: number;
  totalQuestions: number;
  onAnswerSelect: (optionId: string) => void;
  onPrevious: () => void;
  onNext: () => void;
}


export default function TestQuestion({
  currentQuestion,
  questionData,
  selectedAnswer,
  answeredCount,
  totalQuestions,
  onAnswerSelect,
  onPrevious,
  onNext
}: TestQuestionProps) {
  return (
    <div className="flex-1 order-2 lg:order-1 bg-white rounded-lg shadow-xl h-fit p-4 sm:p-6 space-y-4">
      <div className="space-y-2">
        <h3 className="text-md text-salmon-normal font-semibold">
          Soal Nomor {currentQuestion}
        </h3>

        <h2 className="text-base sm:text-lg text-gray-900 leading-relaxed">
          {questionData.question}
        </h2>

        <div className="space-y-2">
          {questionData.options.map((option) => (
            <label
              key={option.id}
              className={`flex items-center space-x-3 p-3 sm:p-4 rounded-lg border cursor-pointer transition-colors ${selectedAnswer === option.id
                ? 'bg-blue-50 border-blue-300'
                : 'bg-white border-gray-200 hover:border-blue-200'
                }`}
            >
              <input
                type="radio"
                name="answer"
                value={option.id}
                checked={selectedAnswer === option.id}
                onChange={() => onAnswerSelect(option.id)}
                className="w-4 h-4 text-blue-600 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="font-medium text-gray-700 mr-2">{option.id}.</span>
                <span className="text-gray-900 break-words">{option.text}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-3">
        <Button
          onClick={onPrevious}
          disabled={currentQuestion === 1}
        >
          <HiChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </Button>

        <div className="text-sm sm:text-base lg:text-md text-center text-salmon-normal">
          {answeredCount} dari {totalQuestions} soal dijawab
        </div>

        <Button
          onClick={onNext}
          disabled={currentQuestion === totalQuestions}
        >
          <span>Selanjutnya</span>
          <HiChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};