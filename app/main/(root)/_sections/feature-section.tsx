"use client";

import React from 'react'
import { motion } from 'motion/react';
import Image from 'next/image';

const features = [
  {
    title: "Materi Terstruktur",
    description: "Modul PDF & video disusun sesuai kisi-kisi resmi BKN",
    image: "/images/img-feature-1.png"
  },
  {
    title: "Simulasi Tryout CAT",
    description: "Soal dan sistem mirip 100% ujian CPNS asli (TWK, TIU, TKP)",
    image: "/images/img-feature-2.png"
  },
  {
    title: "Live Class via Zoom",
    description: "Belajar langsung dari tutor CPNS berpengalaman",
    image: "/images/img-feature-3.png"
  },
  {
    title: "Jadwal Belajar",
    description: "Pantau materi, tryout, dan kehadiranmu tiap minggu",
    image: "/images/img-feature-4.png"
  }
];

function FeatureSection() {
  return (
    <section className='my-8 mx-8 lg:mx-12'>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-black mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Fitur Unggulan
      </motion.h2>
      <motion.p className="text-center mb-12 max-w-2xl mx-auto text-[#666666]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, id) => (
          <FeatureCard
            key={id}
            id={id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  )
}

const FeatureCard = ({
  id,
  title,
  description,
  image,
}: {
  id: number
  title: string;
  description: string;
  image: string;
}) => (
  <motion.div
    className="p-6 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: id * 0.1 }}
  >
    <Image
      alt={`image ${title}`}
      src={image}
      width={172}
      height={172}
      className='mx-auto mb-4' />
    <h3 className="font-bold text-xl mb-2 text-black">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default FeatureSection
