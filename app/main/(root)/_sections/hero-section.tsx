"use client"

import React from 'react'
import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/app/_components/button';
import { HiBookOpen, HiUserGroup } from 'react-icons/hi';

function HeroSection() {
  return (
    <section className='my-8'>
      <div className="flex flex-col items-center lg:items-end lg:flex-row mx-8 md:mx-12 gap-4 md:gap-20">
        <div className='flex flex-col gap-8 my-4 md:my-8'>
          <motion.h1
            className="text-5xl md:text-6xl font-semibold text-neutral-darker"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Belajar CPNS Lebih Terarah & Terukur
          </motion.h1>
          <motion.p
            className="text-lg text-[#848484]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Eduvia hadir sebagai solusi belajar CPNS yang terstruktur, modern, dan sesuai kebutuhanmu. Dengan kombinasi materi PDF & video, sistem tryout berbasis CAT seperti ujian asli, serta kelas live via Zoom bersama tutor berpengalaman, kamu bisa belajar lebih fokus dan siap lolos seleksi SKD & SKB.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='flex gap-4'
          >
            <Button href='/login' color='secondary'>
              Daftar Sekarang
            </Button>

            <Button href='/paket' variant='outline' color='secondary'>
              Lihat Paket Belajar
            </Button>
          </motion.div>
        </div>

        <div className='relative text-sapphire-normal'>
          <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.6 }}>
            <Image
              src='/images/img-hero.png'
              alt='Hero Image'
              width={510}
              height={447}
              className='w-lg lg:w-7xl' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='hidden lg:flex absolute z-10 bg-white shadow-md  items-center justify-center top-2/5 -right-4 p-2 gap-4 rounded-md'>
            <HiUserGroup className='h-6 w-6' />
            <div>
              <p className='font-semibold'>10.000+</p>
              <p className='text-[#787878]'>Siswa Terdaftar</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='hidden lg:flex absolute z-10 bg-white shadow-md items-center justify-center bottom-1/5 -left-10 p-2 gap-4 rounded-md'>
            <HiBookOpen className='h-6 w-6' />
            <div>
              <p className='font-semibold'>100+</p>
              <p className='text-[#787878]'>Paket Belajar</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center justify-around  bg-sapphire-normal text-white">
        {['Pemerintah Daerah', 'Pemerintah Pusat', 'Kementrian', 'Badan Masyarakat'].map((item, id) => (
          <motion.div
            key={id}
            className="text-center p-4 cursor-default text-sm lg:text-lg"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            viewport={{ once: true }}
            transition={{ delay: id * 0.1 }}
          >
            <p className="lg:font-semibold">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
