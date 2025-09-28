import React from 'react'

// SidebarQuestionList Component
type SidebarQuestionListProps = {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: Set<number>;
  onQuestionJump: (questionNum: number) => void;
}

export default function SidebarQuestionList({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  onQuestionJump
}: SidebarQuestionListProps) {
  const getQuestionStatus = (questionNum: number): 'current' | 'answered' | 'unanswered' => {
    if (questionNum === currentQuestion) return 'current';
    if (answeredQuestions.has(questionNum)) return 'answered';
    return 'unanswered';
  };

  const getQuestionButtonClass = (questionNum: number) => {
    const status = getQuestionStatus(questionNum);
    const baseClass = 'w-12 h-12 rounded-lg border text-sm font-medium transition-colors cursor-pointer hover:shadow-md';

    switch (status) {
      case 'current':
        return `${baseClass} bg-blue-500 text-white border-blue-500`;
      case 'answered':
        return `${baseClass} bg-blue-100 text-blue-700 border-blue-200`;
      default:
        return `${baseClass} bg-white text-gray-700 border-gray-200 hover:border-blue-300`;
    }
  };

  return (
    <div className="w-full lg:w-80 order-1 lg:order-2 bg-white rounded-lg shadow-xl h-fit p-4 sm:p-6 space-y-2">
      <h3 className="text-md text-salmon-normal font-semibold">Daftar Soal</h3>

      <div>
        <div className="lg:hidden">
          {/* Mobile Layout - Scrollable */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => onQuestionJump(num)}
                  className={`${getQuestionButtonClass(num)} flex-shrink-0 w-10 h-10`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          {/* Desktop Layout - Grid */}
          <div className="grid grid-cols-5 gap-3">
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
    </div>
  );
};