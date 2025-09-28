"use client";

import { Button } from '@/app/_components/button'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import { HiMail } from 'react-icons/hi'
import { HiPencil } from 'react-icons/hi2'

export default function ProfileCard() {
  return (
    <section className='my-8 px-8 md:px-12'>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-sapphire-normal rounded-xl p-6 text-white flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <Image
            src="/images/img-placeholder-avatar.jpg"
            alt="John Doe"
            className="w-20 h-20 rounded-full border-4 border-white/20 object-cover"
            width={80}
            height={80}
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-blue-100 flex items-center">
              <HiMail className="w-4 h-4 mr-2" />
              johndoe@gmail.com
            </p>
          </div>
        </div>
        <Button color='secondary'>
          <HiPencil className="w-4 h-4" />
          <span>Edit Profil</span>
        </Button>
      </motion.div>
    </section>
  )
}
