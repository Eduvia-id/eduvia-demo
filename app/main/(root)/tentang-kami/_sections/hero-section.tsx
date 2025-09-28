"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section
      className="relative text-white py-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/img-hero-tentang-kami.png')" }}>
      <motion.div
        className="absolute bg-black opacity-50 inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tentang Kami
        </motion.h1>
      </div>
    </section>
  )
}
