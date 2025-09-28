"use client"

import React from 'react'
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

function PackageSection() {
  return (
    <section className='w-full my-8 px-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='mx-auto flex flex-col-reverse md:flex-row items-center py-4 md:py-0 px-8 bg-salmon-normal rounded-xl max-w-3xl gap-4'
      >
        <div className='text-white flex flex-col justify-center gap-4 items-center md:items-start text-center md:text-start'>
          <h2 className="text-3xl font-bold">
            Siap Lolos CPNS 2025?
          </h2>
          <p>
            Jangan tunda perjuanganmu. Ribuan siswa telah membuktikan bersama Eduvia.
            Yuk mulai sekarang!
          </p>
          <Link href='/paket' className='flex items-center justify-center px-12 py-2 rounded-md text-sm text-center font-medium  bg-white text-salmon-normal w-fit hover:bg-gray-100'>
            Pilih Paket
          </Link>
        </div>
        <Image
          src="/images/img-home-package.png"
          alt='Image Packge'
          width={252}
          height={284}
          className='w-64' />
      </motion.div>
    </section>
  )
}

export default PackageSection
