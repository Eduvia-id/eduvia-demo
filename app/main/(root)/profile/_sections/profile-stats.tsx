"use client";

import React from 'react'
import {
  HiVideoCamera,
  HiClock,
  HiClipboardCheck,
} from 'react-icons/hi'
import { motion } from 'motion/react'

export default function ProfileStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 px-8 md:px-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-xl flex items-center gap-4"
      >
        <HiClipboardCheck className="w-10 h-10 text-sapphire-normal" />
        <div>
          <p className="text-sm text-gray-600">Rata-Rata Skor</p>
          <p className="text-2xl font-bold text-gray-900">364</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-xl flex items-center gap-4"
      >
        <HiVideoCamera className="w-10 h-10 text-sapphire-normal" />
        <div>
          <p className="text-sm text-gray-600">Zoom Class Diikuti</p>
          <p className="text-2xl font-bold text-gray-900">3 dari 5</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-xl flex items-center gap-4"
      >
        <HiClock className="w-10 h-10 text-sapphire-normal" />
        <div>
          <p className="text-sm text-gray-600">Total Jam Belajar</p>
          <p className="text-2xl font-bold text-gray-900">± 18 Jam</p>
        </div>
      </motion.div>
    </section>
  )
}
