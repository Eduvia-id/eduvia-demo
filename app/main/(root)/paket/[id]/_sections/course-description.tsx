"use client";

import { motion } from 'motion/react';
import { HiStar } from 'react-icons/hi';


export default function CourseDescription() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 my-8 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Additional Informations */}
      <div className='space-y-2'>
        <motion.h3
          className="text-xl font-bold text-sapphire-normal"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Informasi Tambahan
        </motion.h3>
        <ul className="space-y-2 text-gray-700">
          {[
            "Format Belajar: Mandiri + Live Class",
            "Cocok untuk: Semua peserta SKD (lulusan SMA, S1)",
            "Pembahasan Materi: Otomatis setiap minggu",
            "Sistem: Akses via dashboard, mobile-friendly"
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <span className="mr-2">•</span>
              <span><strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Frequently Ask Question */}
      <div className='space-y-2'>
        <motion.h3
          className="text-xl font-bold text-sapphire-normal"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently Ask Question
        </motion.h3>
        <div className='space-y-2' >
          {[
            {
              q: "Q: Kapan paket mulai aktif?",
              a: "A: Setelah pembayaran berhasil, akses aktif otomatis."
            },
            {
              q: "Q: Apakah bisa upgrade ke paket lain?",
              a: "A: Bisa. Kamu tinggal hubungi CS kami."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <h4 className="font-semibold text-orange-600 mb-2">{faq.q}</h4>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefit */}
      <div className="space-y-2">
        <motion.h3
          className="text-xl font-bold text-sapphire-normal"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Dalam 30 hari, anda akan
        </motion.h3>
        <ul className="space-y-2 text-gray-700">
          {[
            "Menyelesaikan 20+ modul PDF materi SKD",
            "Menonton 10+ video pembahasan soal",
            "Mengerjakan 5 tryout CAT dengan sistem real",
            "Mengikuti 4 sesi Zoom langsung bersama tutor"
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="mr-2">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Testimonials */}
      <div className='space-y-2'>
        <motion.h3
          className="text-xl font-bold text-sapphire-normal"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Testimoni
        </motion.h3>
        <div className="space-y-2">
          {[
            {
              name: "Rani (CPNS 2024)",
              rating: 5,
              text: "Tryout-nya realistis banget. Saya bisa analisis kelemahan saya dari skor detail."
            },
            {
              name: "Rani (CPNS 2024)",
              rating: 5,
              text: "Tryout-nya realistis banget. Saya bisa analisis kelemahan saya dari skor detail."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg border border-gray-200 cursor-default"
            >
              <motion.div
                className="flex items-center mb-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-sm text-gray-900">{testimonial.name}</span>
                <div className="flex ml-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 72 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + (i * 0.1),
                      }}
                      viewport={{ once: true }}
                    >
                      <HiStar className="w-3 h-3 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                &quot;{testimonial.text}&quot;
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
