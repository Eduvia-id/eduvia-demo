"use client"

import { Accordion } from '@/app/_components/accordion';
import React from 'react'
import { motion } from 'motion/react';

function FaqSection() {
  const faqItems = [
    {
      question: "Apa itu eduvia.id?",
      answer: "eduvia.id adalah platform bimbingan belajar online yang menyediakan layanan tryout CAT, kelas live, modul PDF, dan video pembelajaran untuk persiapan tes CPNS, PPPK, dan seleksi ASN lainnya."
    },
    {
      question: "Siapa saja yang bisa menggunakan eduvia.id?",
      answer: "Layanan eduvia.id dapat digunakan oleh siapa saja yang ingin mempersiapkan diri menghadapi seleksi CPNS, PPPK, atau tes sejenis lainnya. Cocok untuk fresh graduate maupun profesional."
    },
    {
      question: "Apa saja produk yang tersedia di eduvia.id?",
      answer: "Kami menyediakan paket tryout, kelas live interaktif, kelas rekaman, dan bundling layanan termasuk modul dan video belajar."
    },
    {
      question: "Bagaimana cara mendaftar di eduvia.id?",
      answer: "Kunjungi situs www.eduvia.id, pilih produk yang diinginkan, klik daftar atau beli sekarang, isi data, dan lakukan pembayaran melalui sistem yang tersedia."
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer: "Kami menggunakan Midtrans sebagai payment gateway. Anda dapat membayar menggunakan Virtual Account (BCA, Mandiri, BRI, dll), e-wallet (GoPay, OVO, ShopeePay, DANA), QRIS, dan kartu kredit."
    },
    {
      question: "Apakah saya bisa mengakses kelas di lebih dari satu perangkat?",
      answer: "Setiap akun hanya dapat login di dua perangkat tetap. Jika login di perangkat ketiga, sistem akan otomatis memblokir akses."
    },
    {
      question: "Apakah produk bisa dibatalkan atau direfund setelah dibeli?",
      answer: "Produk digital yang sudah dibeli tidak dapat dikembalikan atau dibatalkan. Refund hanya berlaku jika terjadi double payment atau kegagalan sistem dari pihak kami."
    },
    {
      question: "Bagaimana jika saya mengalami kendala teknis saat akses?",
      answer: "Silakan hubungi tim admin kami melalui WhatsApp atau email ke eduviamentra@gmail.com dengan menyertakan bukti kendala dan data akun Anda."
    },
    {
      question: "Apakah eduvia.id menjamin kelulusan CPNS/PPPK?",
      answer: "Kami tidak memberikan jaminan kelulusan karena keberhasilan dipengaruhi banyak faktor. Namun, kami berkomitmen menyediakan materi dan pendampingan terbaik untuk membantu Anda sukses."
    },
    {
      question: "Bagaimana cara menghubungi layanan pelanggan eduvia.id?",
      answer: "Anda dapat menghubungi kami melalui email di eduviamentra@gmail.com atau melalui kontak WhatsApp yang tersedia di situs kami."
    }
  ];

  return (
    <section className="my-8 px-8 md:px-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-black mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Question
      </motion.h2>
      <motion.p className="text-center mb-12 max-w-2xl mx-auto text-[#666666]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </motion.p>
      <Accordion items={faqItems} />
    </section>
  );
}

export default FaqSection
