"use client";

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  year: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rani",
    year: "(CPNS 2024)",
    rating: 5,
    text: "Berkat Eduvia, saya lulus formasi CPNS Kemenkumham. Materinya lengkap & tryoutnya super mirip!"
  },
  {
    id: 2,
    name: "Budi",
    year: "(CPNS 2024)",
    rating: 5,
    text: "Berkat Eduvia, saya lulus formasi CPNS Kemenkumham. Materinya lengkap & tryoutnya super mirip!",
  },
  {
    id: 3,
    name: "Sari",
    year: "(CPNS 2024)",
    rating: 5,
    text: "Berkat Eduvia, saya lulus formasi CPNS Kemenkumham. Materinya lengkap & tryoutnya super mirip!",
  },
  {
    id: 4,
    name: "Ahmad",
    year: "(CPNS 2024)",
    rating: 5,
    text: "Platform yang sangat membantu dalam persiapan CPNS. Soal-soalnya berkualitas dan sesuai dengan ujian sebenarnya.",
  },
  {
    id: 5,
    name: "Maya",
    year: "(CPNS 2024)",
    rating: 5,
    text: "Terima kasih Eduvia! Berkat bimbingan dan latihan soal yang intensif, saya berhasil lolos seleksi CPNS.",
  },
  {
    id: 6,
    name: "Deni",
    year: "(CPNS 2024)",
    rating: 5,
    text: "Eduvia benar-benar game changer! Materi comprehensive dan simulasi ujiannya sangat realistis.",
  }
];

export default function TestimonialSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className='relative my-16'>
      {/*  Background */}
      <div className='w-full md:w-xl top-0 bottom-0 absolute bg-sapphire-normal rounded-2xl'></div>

      <div className='relative space-y-8 py-8 lg:py-12'>

        {/* Header */}
        <h2 className="text-center md:text-left text-4xl md:text-5xl font-bold text-white mx-8 lg:mx-12">
          Testimoni Siswa
        </h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Scrollable container */}
          <div
            ref={constraintsRef}
            className="flex overflow-hidden cursor-grab active:cursor-grabbing items-center"
          >
            <div className="absolute text-white ml-12">
              <HiOutlineChatBubbleOvalLeftEllipsis className="w-40 h-40 md:w-60 md:h-60" />
            </div>
            <motion.div
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              dragMomentum={false}
              className="z-10 flex flex-1 gap-4 sm:gap-6 pb-4 w-fit"
              whileDrag={{ cursor: "grabbing" }}
            >
              {testimonials.map((testimonial, index) => {
                const isFirst = index === 0;
                const isLast = index + 1 === testimonials.length
                return (
                  <motion.div
                    key={testimonial.id}
                    className={`w-72 sm:w-80 bg-white rounded-2xl shadow-lg p-4 sm:p-6 select-none ${isFirst ? 'ml-52 md:ml-72' : isLast ? 'mr-8' : ''}`}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Avatar and Info */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <Image
                        src="/images/img-placeholder-avatar.jpg"
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.year}
                        </p>
                        <div className="flex gap-1 mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative">
                      <div className="absolute -top-1 -left-1 text-sapphire-normal text-2xl sm:text-3xl font-serif leading-none">&quot;</div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-4 sm:pl-6 pr-2 min-h-[4rem] sm:min-h-[5rem]">
                        {testimonial.text}
                      </p>
                      <div className="absolute -bottom-2 -right-1 text-sapphire-normal text-2xl sm:text-3xl font-serif rotate-180 leading-none">&quot;</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Mobile touch hint */}
          <div className="block md:hidden mt-4 text-center">
            <div className="inline-flex items-center gap-2 bg-sapphire-light text-sapphire-normal px-4 py-2 rounded-full text-xs">
              <span>←</span>
              <span>Geser secara horizontal</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  )
}
