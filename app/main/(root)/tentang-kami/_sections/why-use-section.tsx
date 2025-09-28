"use client";

import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function WhyUsSection() {
  return (
    <section>
      <motion.div
        className='relative bg-cover text-white pb-24'
        style={{ backgroundImage: "url('./images/img-tentang-kami.png')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute bg-sapphire-normal opacity-50 inset-0 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div className="relative max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 z-10">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Kenapa Memilih eduvia.id?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fokus pada CPNS dan PPPK",
              "Simulasi CAT Real Test",
              "Kelas Live & On-Demand",
              "Dampingan Belajar Oleh Tim Profesional ASN",
              "Update Soal Berkala",
              "Harga Ramah Dompet"
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex bg-white rounded-xl p-6 gap-2 items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <FaCheckSquare className="w-12 h-12 text-green-500" />
                <h3 className="flex-1 font-bold text-sapphire-normal">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className='relative z-10 -top-24 w-full px-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="bg-salmon-normal rounded-xl px-8 py-12 md:max-w-2xl mx-auto"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-lg text-semibold leading-relaxed text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Eduvia.id hadir sebagai partner belajar terpercaya, membantu Anda lulus seleksi CPNS dan PPPK dengan strategi yang tepat dan materi yang teruji. Mari mulai langkah menuju ASN bersama eduvia.id!
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
