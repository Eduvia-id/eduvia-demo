import React from 'react';
import TryoutHeaderCard from './_sections/tryout-header-card';
import TryoutAlert from './_sections/tryout-alert';
import TryoutContentGrid from './_sections/tryout-content-grid';

type TryoutDetail = {
  id: string;
  title: string;
  type: 'SKD' | 'SKB';
  duration: number;
  totalQuestions: number;
  questionBreakdown: {
    TWK: number;
    TIU: number;
    TKP: number;
  };
  description: string;
  targetScore: {
    safe: number;
    maximum: number;
    breakdown: {
      TWK: number;
      TIU: number;
      TKP: number;
    };
  };
  materials: Array<{
    id: string;
    title: string;
    type: 'PDF';
    duration: string;
  }>;
  status: 'completed' | 'available';
  correctAnswers?: number;
  userScore?: number
}

const tryoutData: TryoutDetail[] = [
  {
    id: '1',
    title: 'Tryout #1 - SKD Full Basic',
    type: 'SKD',
    duration: 100,
    totalQuestions: 100,
    questionBreakdown: { TWK: 30, TIU: 35, TKP: 35 },
    description: 'Tryout dasar #1 disusun untuk mengukur pemahaman penuh terhadap semua subtes SKD. Soal disusun menyerupai struktur dan tingkat kesulitan CAT resmi BKN. Disarankan dikerjakan tanpa gangguan untuk hasil yang maksimal.',
    targetScore: {
      safe: 350,
      maximum: 500,
      breakdown: { TWK: 150, TIU: 175, TKP: 175 }
    },
    materials: [
      {
        id: '1-1',
        title: '#01 | TWK - Pancasila dan UUD 1945',
        type: 'PDF',
        duration: '±15 menit'
      },
      {
        id: '1-2',
        title: '#02 | TWK - Sejarah Indonesia',
        type: 'PDF',
        duration: '±15 menit'
      }
    ],
    status: 'available'
  },
  {
    id: '2',
    title: 'Tryout #2 – SKD Full Advanced',
    type: 'SKD',
    duration: 120,
    totalQuestions: 110,
    questionBreakdown: { TWK: 35, TIU: 40, TKP: 35 },
    description: 'Tryout komprehensif tingkat lanjut #2 dengan tingkat kesulitan tinggi untuk mengukur kemampuan maksimal peserta. Direkomendasikan untuk persiapan final sebelum ujian sesungguhnya.',
    targetScore: {
      safe: 400,
      maximum: 550,
      breakdown: { TWK: 175, TIU: 200, TKP: 175 }
    },
    materials: [
      {
        id: '2-1',
        title: '#01 | TWK - Pancasila dan UUD 1945',
        type: 'PDF',
        duration: '±15 menit'
      },
      {
        id: '2-2',
        title: '#02 | TIU - Logika dan Matematika Advanced',
        type: 'PDF',
        duration: '±20 menit'
      }
    ],
    status: 'completed',
    correctAnswers: 94,
    userScore: 480
  }
];

export default async function TryoutDetailPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const selectedTryout = tryoutData[id % 2] || tryoutData['1'];
  const isCompleted = selectedTryout.status === 'completed';

  return (
    <>
      {/* Tryout Header Card */}
      <TryoutHeaderCard
        id={id}
        title={selectedTryout.title}
        description={selectedTryout.description}
        duration={selectedTryout.duration}
        questionBreakdown={selectedTryout.questionBreakdown}
        totalQuestions={selectedTryout.totalQuestions}
        type={selectedTryout.type}
        isCompleted={isCompleted}
        userScore={selectedTryout.userScore}
      />


      {/* Tryout Alert */}
      <TryoutAlert />

      {/* Tryout Content Grid */}
      <TryoutContentGrid
        isCompleted={isCompleted}
        materials={selectedTryout.materials}
        targetScore={selectedTryout.targetScore}
        totalQuestions={selectedTryout.totalQuestions}
        correctAnswers={selectedTryout.correctAnswers}
        userScore={selectedTryout.userScore}
      />

    </>
  );
}