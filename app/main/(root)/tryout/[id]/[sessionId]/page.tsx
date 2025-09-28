"use client";

import { useQueryState, parseAsInteger } from 'nuqs';
import React, { useState, useEffect } from 'react';
import TestHeader from './_sections/test-header';
import TestQuestion, { Question } from './_sections/test-question';
import SidebarQuestionList from './_sections/sidebar-question-list';

type CATSession = {
  title: string;
  totalQuestions: number;
  endTime: Date;
  answeredQuestions: Set<number>;
  currentQuestion: Question;
}

const sessionData: CATSession = {
  title: 'Tryout #1 - SKD Full Part 1',
  totalQuestions: 50,
  endTime: new Date(Date.now() + 100 * 60 * 1000), // 100 minutes from now
  answeredQuestions: new Set([2, 5, 8, 12, 15, 18, 22, 25]), // Some pre-answered questions
  currentQuestion: {
    id: 1,
    category: 'TWK',
    question: 'Nilai-nilai yang terkandung dalam sila pertama Pancasila "Ketuhanan Yang Maha Esa" antara lain:',
    options: [
      { id: 'A', text: 'Menjunjung tinggi demokrasi dan musyawarah' },
      { id: 'B', text: 'Menghargai kebebasan beragama dan beribadah' },
      { id: 'C', text: 'Mengutamakan kepentingan bangsa di atas golongan' },
      { id: 'D', text: 'Menjunjung tinggi hak asasi manusia dan hukum internasional' },
      { id: 'E', text: 'Mengembangkan ilmu pengetahuan dan teknologi' }
    ]
  }
};

// Main CATInterface Component
export default function CATPage() {
  // Use nuqs for question navigation with proper integer parsing
  const [currentQuestion, setCurrentQuestion] = useQueryState('q', parseAsInteger.withDefault(1));

  // State management
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // Use answered questions from mock data (can be modified)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(sessionData.answeredQuestions);

  // Initialize timer
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const endTime = sessionData.endTime.getTime();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
      return remaining;
    };

    setTimeRemaining(calculateTimeRemaining());

    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        // Auto-submit when time runs out
        console.log('Time up! Auto-submitting...');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Load saved answer when question changes
  useEffect(() => {
    if (answers[currentQuestion]) {
      setSelectedAnswer(answers[currentQuestion]);
    } else if (answeredQuestions.has(currentQuestion)) {
      // If question was answered before but no saved answer, select random option
      const randomOptions = ['A', 'B', 'C', 'D', 'E'];
      const randomAnswer = randomOptions[Math.floor(Math.random() * randomOptions.length)];
      setSelectedAnswer(randomAnswer);
      setAnswers(prev => ({ ...prev, [currentQuestion]: randomAnswer }));
    } else {
      setSelectedAnswer('');
    }
  }, [currentQuestion, answers, answeredQuestions]);

  // Event handlers
  const handleAnswerSelect = (optionId: string) => {
    setSelectedAnswer(optionId);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionId
    }));
    setAnsweredQuestions(prev => new Set([...prev, currentQuestion]));
  };

  const handleNext = () => {
    if (currentQuestion < sessionData.totalQuestions) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      const prevQuestion = currentQuestion - 1;
      setCurrentQuestion(prevQuestion);
    }
  };

  const handleQuestionJump = (questionNum: number) => {
    setCurrentQuestion(questionNum);
  };

  const currentQuestionData = sessionData.currentQuestion;
  const answeredCount = answeredQuestions.size;

  return (
    <>
      {/* Test Header Component */}
      <TestHeader
        title={sessionData.title}
        timeRemaining={timeRemaining}
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 my-4 sm:my-6">
        {/* Test Question Component */}
        <TestQuestion
          currentQuestion={currentQuestion}
          questionData={currentQuestionData}
          selectedAnswer={selectedAnswer}
          answeredCount={answeredCount}
          totalQuestions={sessionData.totalQuestions}
          onAnswerSelect={handleAnswerSelect}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        {/* Sidebar Question List Component */}
        <SidebarQuestionList
          totalQuestions={sessionData.totalQuestions}
          currentQuestion={currentQuestion}
          answeredQuestions={answeredQuestions}
          onQuestionJump={handleQuestionJump}
        />
      </div>
    </>
  );
}