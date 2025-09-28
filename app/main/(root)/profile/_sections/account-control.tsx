"use client";

import {
  HiChevronRight,
  HiLockClosed,
  HiCog,
  HiRefresh,
} from 'react-icons/hi'
import { motion } from 'motion/react'
import { HiArrowLeftStartOnRectangle } from 'react-icons/hi2'

export default function AccountControl() {
  return (
    <section className='my-8 px-8 md:px-12'>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-xl font-bold text-gray-900 mb-4"
      >
        Kontrol Akun
      </motion.h2>
      <div className="space-y-4">
        {[
          { icon: HiLockClosed, title: 'Ganti Password' },
          { icon: HiCog, title: 'Pengaturan' },
          { icon: HiRefresh, title: 'Riwayat Akses' }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
            className="flex items-center justify-between px-2 py-4 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <item.icon className={`w-8 h-8 text-sapphire-normal`} />
              <span className="font-medium text-gray-900">{item.title}</span>
            </div>
            <HiChevronRight className="w-8 h-8 text-gray-900" />
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
      >
        <HiArrowLeftStartOnRectangle className="w-5 h-5" />
        <span>Log Out</span>
      </motion.button>
    </section>
  )
}
