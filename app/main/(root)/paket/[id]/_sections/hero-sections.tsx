"use client";

import { Button } from '@/app/_components/button'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 my-8 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Content */}
      <div className="space-y-6">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          SKD Full Paket
        </motion.h1>

        <motion.div
          className="text-3xl font-bold text-orange-500"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Rp249.000
        </motion.div>

        <motion.p
          className="text-gray-600 leading-relaxed text-justify"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Paket ini dirancang khusus untuk mempersiapkan kamu menghadapi Seleksi Kompetensi Dasar (SKD) dengan materi yang lengkap, terstruktur, dan sistem belajar terarah. Termasuk modul PDF, video pembahasan soal, latihan interaktif, tryout berbasis CAT asli, dan kelas live Zoom setiap minggu. Cocok untuk pemula maupun pejuang CPNS yang ingin memperkuat dasar dan teknik menjawab.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Button className='px-10'>
            Daftar
          </Button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image
          src="/images/img-tentang-kami.png"
          alt="Study Group"
          className="w-full h-full object-cover rounded-xl overflow-hidden"
          width={502}
          height={350}
        />
      </motion.div>
    </section>
  )
}
