"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/app/_components/button'
import { motion } from 'motion/react'

export default function CoursePackageStatus() {
  return (
    <section className='my-8 px-8 md:px-12'>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl font-bold text-gray-900 mb-4"
      >Status Paket Belajar</motion.h2>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white rounded-xl p-6 shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Image
            src="/images/img-tentang-kami.png"
            alt="Learning Package"
            className="w-full md:w-48 object-cover rounded-lg"
            width={590}
            height={392}
          />
          <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div>
              <p className="text-md text-gray-500">Nama Paket</p>
              <p className="text-xl font-semibold text-gray-900">SKD Full Paket</p>
            </div>
            <div>
              <p className="text-md text-gray-500">Progress Materi</p>
              <p className="text-xl font-semibold text-gray-900">14/20 (70%)</p>
            </div>
            <div>
              <p className="text-md text-gray-500">Tryout</p>
              <p className="text-xl font-semibold text-gray-900">4/5 Dikerjakan</p>
            </div>
            <div>
              <p className="text-md text-gray-500">Aksi</p>
              <Button>
                Lihat Paket
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
