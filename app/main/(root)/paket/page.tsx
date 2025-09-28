import React, { Suspense } from 'react';
import SearchFiltersLoading from './_sections/search-filters-loading';
import SearchAndFilters from './_sections/search-filters';
import CourseGridLoading from './_sections/course-grid-loading';
import CourseGrid from './_sections/course-grid';
import HeroCard from '@/app/main/_components/cards/hero-card';

export default function CoursePackage() {
  return (
    <>
      <HeroCard img='/images/img-hero-card.png'>
        <h1 className="text-3xl md:text-5xl font-bold">
          Hari ini adalah peluang baru untuk belajar lebih baik
        </h1>
        <p className="text-md md:text-lg text-blue-100">
          Gunakan waktumu sebaik mungkin. Semua materi, tryout, dan jadwal live class sudah disiapkan.
          Jangan tunda, setiap sesi yang kamu lewati bisa jadi penentu kelulusan.
        </p>
      </HeroCard>

      <Suspense fallback={<SearchFiltersLoading />}>
        <SearchAndFilters />
      </Suspense>

      <Suspense fallback={<CourseGridLoading />}>
        <CourseGrid />
      </Suspense>
    </>
  )
}