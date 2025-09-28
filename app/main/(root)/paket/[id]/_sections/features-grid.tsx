"use client";

import { motion } from 'motion/react'
import React from 'react'
import { HiDesktopComputer, HiClock, HiDocumentText, HiPlay } from 'react-icons/hi';

export default function FeaturesGrid() {
  return (
    <section className="my-8 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-2xl font-bold text-sapphire-normal mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Fitur Dalam Paket Ini
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: HiDocumentText,
            title: "Materi PDF",
            subtitle: "TWK,TIU,TKP",
            iconColor: "text-red-500",
            bgColor: "bg-red-50"
          },
          {
            icon: HiPlay,
            title: "Video",
            subtitle: "Pembahasan per topik",
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50"
          },
          {
            icon: HiDesktopComputer,
            title: "5x Tryout",
            subtitle: "Tryout CAT SKD Lengkap",
            iconColor: "text-orange-500",
            bgColor: "bg-orange-50"
          },
          {
            icon: HiClock,
            title: "Akses 30 Hari",
            subtitle: "Terhitung sejak aktivasi",
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="flex gap-4 items-center bg-white rounded-lg p-6 border border-gray-300"
          >
            <div className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
              <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
            </div>
            <div className='flex-1'>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
