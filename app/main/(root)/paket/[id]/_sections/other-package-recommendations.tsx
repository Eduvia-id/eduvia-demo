"use client";

import CourseCard, { CoursePackage } from '@/app/main/_components/cards/course-card';
import { motion } from 'motion/react'
import Link from 'next/link';
import React from 'react'
import { HiChevronRight } from 'react-icons/hi';


const courses: CoursePackage[] = [
  {
    id: '1',
    title: 'SKD Full Paket',
    price: 'Rp249.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKD'
  },
  {
    id: '2',
    title: 'SKB Formasi Guru',
    price: 'Rp199.000',
    features: ['Khusus formasi guru', 'Soal SKB + pembahasan', 'Materi per bidang'],
    category: 'SKB'
  },
  {
    id: '3',
    title: 'SKB Tenaga Kesehatan',
    price: 'Rp199.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKB'
  },
];

export default function OtherPackageRecommendations() {
  return (
    <section className="my-8 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/paket" className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Paket Lainnya</h2>
          <div className='p-1 bg-salmon-normal rounded-full'>
            <HiChevronRight className="w-6 h-6 text-white" />
          </div>
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg p-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            course={course} />
        ))}
      </div>
    </section>
  )
}
