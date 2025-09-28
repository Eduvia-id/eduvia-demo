"use client";

import { Suspense } from 'react'
import SearchAndFilters from './_sections/search-filters'
import SearchFiltersLoading from './_sections/search-filters-loading'
import TryoutSkeleton from './_sections/tryout-skeleton'
import TryoutGrid from './_sections/tryout-content'
import { Tryout } from '@/app/main/_components/cards/tryout-card'
import HeroCard from '@/app/main/_components/cards/hero-card'
import { motion } from 'motion/react'


const tryoutData: Tryout[] = [
  {
    id: '1',
    title: 'Tryout #1 - SKD Full',
    type: 'SKD',
    duration: 100,
    totalQuestions: 100,
    status: 'completed',
    correctAnswers: 85
  },
  {
    id: '2',
    title: 'Tryout #2 - SKD Simulasi Nasional',
    type: 'SKD',
    duration: 100,
    totalQuestions: 100,
    status: 'available'
  },
  {
    id: '3',
    title: 'Tryout #3 - SKD Intensif Practice',
    type: 'SKD',
    duration: 120,
    totalQuestions: 95,
    status: 'completed',
    correctAnswers: 78
  },
  {
    id: '4',
    title: 'Tryout #4 - SKD Comprehensive',
    type: 'SKD',
    duration: 120,
    totalQuestions: 110,
    status: 'completed',
    correctAnswers: 92
  },
  {
    id: '5',
    title: 'Tryout #5 - SKD Mock Test',
    type: 'SKD',
    duration: 100,
    totalQuestions: 100,
    status: 'available'
  },
  {
    id: '6',
    title: 'Tryout #6 - SKB Teknis',
    type: 'SKB',
    duration: 90,
    totalQuestions: 80,
    status: 'completed',
    correctAnswers: 67
  },
  {
    id: '7',
    title: 'Tryout #7 - SKB Wawancara',
    type: 'SKB',
    duration: 60,
    totalQuestions: 50,
    status: 'available'
  },
  {
    id: '8',
    title: 'Tryout #8 - SKD Advanced',
    type: 'SKD',
    duration: 150,
    totalQuestions: 140,
    status: 'completed',
    correctAnswers: 128
  },
  {
    id: '9',
    title: 'Tryout #9 - SKB Praktik',
    type: 'SKB',
    duration: 180,
    totalQuestions: 75,
    status: 'available'
  },
  {
    id: '10',
    title: 'Tryout #10 - SKD Final',
    type: 'SKD',
    duration: 200,
    totalQuestions: 175,
    status: 'completed',
    correctAnswers: 156
  }
];

export default function TryoutPage() {
  const totalTryouts = tryoutData.length;
  const completedTryouts = tryoutData.filter(tryout => tryout.status === 'completed').length;
  const progressPercentage = (completedTryouts / totalTryouts) * 100;

  return (
    <>
      <HeroCard img='/images/img-hero-card.png'>
        <>
          <h1 className="text-4xl md:text-5xl font-bold">
            Simulasi Tryout CPNS
          </h1>
          <p className="text-xl max-w-2xl text-justify">
            Latih dirimu dengan tryout CAT sistem real. Setiap tryout terdiri dari soal TWK, TIU, TKP sesuai format BKN. Kamu bisa kerjakan kapan pun, di mana pun.
          </p>
          <div className="w-full max-w-md">
            <div className="bg-white/20 rounded-full h-4 mb-2 overflow-hidden">
              <motion.div
                className="bg-orange-400 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              />
            </div>
            <strong>
              Progress kamu: {completedTryouts} dari {totalTryouts} tryout selesai
            </strong>
          </div>
        </>
      </HeroCard>

      <Suspense fallback={<SearchFiltersLoading />}>
        <SearchAndFilters />
      </Suspense>

      <Suspense fallback={<TryoutSkeleton />}>
        <TryoutGrid tryoutData={tryoutData} />
      </Suspense>
    </>
  )
}

