"use client";

import React from 'react'
import { motion } from 'motion/react'
import {
  HiMail,
  HiAcademicCap,
  HiPhone,
  HiLocationMarker,
  HiUser
} from 'react-icons/hi'

type ActivityData = {
  title: string
  total: number
  progress?: number
}

const activities: ActivityData[] = [
  { title: 'Materi Dibuka', progress: 14, total: 20 },
  { title: 'Tryout Dikerjakan', progress: 4, total: 5 }
]

export default function PersonalInformationActivity() {
  return (
    <section className="grid lg:grid-cols-2 gap-4 my-8 px-8 md:px-12">
      {/* Personal Information */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-sapphire-normal mb-4">Informasi Pribadi</h2>
        <div className="space-y-2">
          {[
            { icon: HiUser, label: 'Nama Lengkap', value: 'John Doe' },
            { icon: HiMail, label: 'Email', value: 'johndoe@gmail.com' },
            { icon: HiPhone, label: 'No. WhatsApp', value: '0812-3456-7890' },
            { icon: HiAcademicCap, label: 'Asal Instansi', value: 'Universitas Indonesia' },
            { icon: HiLocationMarker, label: 'Kota / Kabupaten', value: 'Jakarta Selatan' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              className="flex items-center space-x-3"
            >
              <item.icon className="w-5 h-5 text-salmon-normal" />
              <div className='grid grid-cols-2 flex-1'>
                <p className="text-gray-900">{item.label} :</p>
                <p className="text-gray-400">{item.value}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Activity Summary */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-sapphire-normal mb-4">Ringkasan Aktivitas</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.3 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{activity.title}</span>
                <span className="text-salmon-normal font-medium">
                  {activity.progress || 0} dari {activity.total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((activity.progress || 0) / (activity.total || 1)) * 100}%` }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.3 }}
                  className="bg-sapphire-normal h-4 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
