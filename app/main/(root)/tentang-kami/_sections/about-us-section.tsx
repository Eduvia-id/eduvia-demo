"use client";

import { Button } from '@/app/_components/button';
import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { HiGlobeAlt } from 'react-icons/hi';
import { HiComputerDesktop } from 'react-icons/hi2';
import { motion } from 'motion/react';

export default function AboutUsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.span
          className="text-sapphire-normal border border-sapphire-normal p-2 rounded-full text-sm font-medium mb-4 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tentang Kami
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-12 mt-4">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              <strong className='text-salmon-normal'>Eduvia.id</strong> adalah platform pendidikan digital yang fokus pada
              penyediaan layanan belajar online, tryout berbasis sistem CAT, kelas live
              interaktif, video pembelajaran, serta modul digital untuk membantu peserta
              mempersiapkan diri menghadapi berbagai seleksi penting di sektor pemerintahan
              dan pelayanan publik khususnya.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              Melalui pendekatan belajar yang praktis, adaptif, dan berbasis sistem CAT
              terkini, eduvia.id memberikan pengalaman belajar yang efisien, menyenangkan,
              dan selaras dengan kebutuhan tes terkini.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="space-y-3">
            {[
              "SKD CPNS (Seleksi Kompetensi Dasar)",
              "SKB CPNS (Seleksi Kompetensi Bidang)",
              "Seleksi PPPK (Pegawai Pemerintah dengan Perjanjian Kerja)"
            ].map((service, index) => (
              <motion.div
                key={index}
                className="text-sapphire-normal md:text-lg font-medium text-center px-6 py-4 border border-gray-300 rounded-md"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {service}
              </motion.div>
            ))}
          </div>

          {/* Overlapping Images */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src='/images/img-tentang-kami.png'
                width={872}
                height={600}
                alt='Image Tentang Kami'
                className="w-full rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src='/images/img-tentang-kami.png'
                width={578}
                height={397}
                alt='Image Tentang Kami'
                className="relative w-2/3 rounded-xl z-10 -mt-28 mx-auto border-2 border-white shadow-md"
              />
            </motion.div>
          </div>

          {/* Professional Team Section */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-sapphire-normal mb-4"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Dipimpin oleh Profesional di Bidangnya
            </motion.h3>
            <motion.p
              className="text-gray-700 leading-relaxed text-justify"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Eduvia.id didirikan dan dikelola oleh tim yang memiliki pengalaman di
              bidang pendidikan, seleksi ASN, dan kebijakan publik. Kami memahami
              secara mendalam dinamika dan standar kelulusan tes CPNS & PPPK, dan
              menerjemahkannya ke dalam sistem pembelajaran yang terstruktur, relevan,
              dan tepat sasaran.
            </motion.p>
          </div>

          {/* Accessibility Section */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-sapphire-normal mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Terjangkau & Mudah Diakses dari Seluruh Indonesia
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-8 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Kami percaya bahwa setiap individu berhak mendapatkan akses pendidikan
              berkualitas, tanpa terkendala lokasi atau biaya. Karena itu, seluruh layanan
              eduvia.id dapat diakses dari mana saja melalui:
            </motion.p>

            {/* Access Methods */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <HiGlobeAlt className='w-8 h-8' />
                </motion.div>

                <div className='flex-1'>
                  <p className="text-gray-500">Website resmi kami</p>
                  <span className='text-xl'>www.eduvia.id</span>
                </div>

                <Button variant='outline' href='/' target='_blank' rel='noopener noreferrer'>
                  Link
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div
                  className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <HiComputerDesktop className='w-8 h-8' />
                </motion.div>
                <div className='flex-1'>
                  <p className="text-xl">Kelas online dan tryout berbasis web yang ringan & mobile-friendly</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: FaInstagram, bg: "bg-pink-500", platform: "Instagram", handle: "@eduvia" },
                { icon: FaTiktok, bg: "bg-black", platform: "TikTok", handle: "@eduvia" },
                { icon: FaYoutube, bg: "bg-red-600", platform: "YouTube", handle: "@eduvia" },
                { icon: FaWhatsapp, bg: "bg-green-500", platform: "Whatsapp", handle: "Link" }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 border border-gray-300 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 + (index * 0.2) } }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.1 }
                  }}

                >
                  <div className={`w-12 h-12 ${social.bg} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                    <social.icon className='w-8 h-8 text-white' />
                  </div>
                  <p className="text-sm text-gray-500">{social.platform}</p>
                  <p className="font-medium">{social.handle}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 h-fit gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src='/images/img-tentang-kami.png'
                width={428}
                height={428}
                alt='Image Tentang Kami'
                className="w-full aspect-square rounded-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src='/images/img-tentang-kami.png'
                width={428}
                height={428}
                alt='Image Tentang Kami'
                className="w-full aspect-square rounded-tr-[100px] rounded-bl-[100px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2"
            >
              <Image
                src='/images/img-tentang-kami.png'
                width={872}
                height={600}
                alt='Image Tentang Kami'
                className="w-full rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  )
}
