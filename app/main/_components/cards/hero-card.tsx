"use client";

import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

type HeroCardProps = {
  img: string;
  children: React.ReactNode
}

export default function HeroCard({ img, children }: HeroCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-6 sm:px-8 lg:px-12 my-6"
    >
      <div className="relative rounded-4xl mx-auto bg-sapphire-normal text-white overflow-hidden">
        <div className="absolute bg-top bg-cover w-full h-full"
          style={{ backgroundImage: "url('./backgrounds/bg-hero-card.svg')" }}></div>
        <div className="relative flex flex-col md:flex-row gap-4  md:gap-8 lg:gap-16 items-center z-10">
          <Image
            src={img}
            alt='Image Hero Card'
            width={394}
            height={394}
            className='w-sm'
            priority
          />
          <div className='p-6 lg:p-12 h-full space-y-4'>
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
