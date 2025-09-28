"use client";

import React from 'react';
import { motion } from 'motion/react';
import CourseCard, { CoursePackage } from '@/app/main/_components/cards/course-card';

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

function PopularPackageSection() {
  return (
    <section className='relative'>
      <div className='py-8 lg:py-12 px-8 lg:px-12'>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Paket Populer
        </motion.h2>
        <motion.p className="text-center mb-12 max-w-2xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

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
      </div>

      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='absolute -z-10 top-0 left-0 bg-sapphire-normal w-full h-2/3'></motion.div>
    </section>
  )
}

export default PopularPackageSection
