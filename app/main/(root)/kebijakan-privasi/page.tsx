"use client";

import { motion } from 'motion/react';

const sections = [
  {
    id: 'user-terms',
    title: 'Persetujuan Pengguna',
    content: [
      'Dengan mendaftar dan/atau menggunakan platform eduvia.id, Pengguna dianggap telah membaca, memahami, dan menyetujui seluruh isi Kebijakan Privasi ini.',
      'Jika Pengguna tidak menyetujui sebagian atau seluruh ketentuan, maka tidak diperkenankan menggunakan layanan Kami.'
    ]
  },
  {
    id: 'data-collection',
    title: 'Pengumpulan Data Pribadi',
    content: [
      'Kami mengumpulkan data pribadi dari Pengguna melalui pengisian formulir pendaftaran, penggunaan layanan, interaksi dalam platform, dan partisipasi dalam survei, promo, atau kompetisi.',
      'Data yang dikumpulkan dapat mencakup nama, tanggal lahir, jenis kelamin, email, nomor telepon, nama sekolah, foto, preferensi, dan riwayat transaksi.',
      'Kami juga dapat mengumpulkan data secara otomatis seperti alamat IP, jenis perangkat, aktivitas pengguna, serta sumber kunjungan.'
    ]
  },
  {
    id: 'data-usage',
    title: 'Penggunaan Data Pribadi',
    content: [
      'Mengelola akun pengguna dan memberikan layanan yang dibutuhkan.',
      'Mengirimkan informasi terkait pembaruan layanan, promosi, dan komunikasi lain yang relevan.',
      'Meningkatkan pengalaman pengguna melalui analisis statistik dan riset.',
      'Memastikan keamanan, pemrosesan transaksi, dan penyelesaian masalah teknis.'
    ]
  },
  {
    id: 'data-storage',
    title: 'Penyimpanan dan Keamanan',
    content: [
      'Data pribadi disimpan dalam jaringan yang aman dan terenkripsi.',
      'Kami menyimpan data pribadi selama pengguna masih aktif, dan hingga 5 tahun setelah berhenti menggunakan layanan.',
      'Kami menerapkan prosedur teknis dan kebijakan keamanan untuk melindungi informasi dari akses ilegal.'
    ]
  },
  {
    id: 'user-rights',
    title: 'Hak Pengguna',
    content: [
      'Pengguna berhak meminta penghapusan atau perbaikan data pribadi dengan menghubungi kami melalui email: eduviamentra@gmail.com.',
      'Pengguna dapat menarik persetujuan atas pemrosesan data kapan saja, dengan konsekuensi terbatasnya akses ke layanan.'
    ]
  },
  {
    id: 'third-party',
    title: 'Tautan ke Pihak Ketiga',
    content: [
      'Platform Kami dapat berisi tautan ke situs atau layanan pihak ketiga.',
      'Kami tidak bertanggung jawab atas konten dan kebijakan privasi situs-situs tersebut.'
    ]
  },
  {
    id: 'policy-changes',
    title: 'Perubahan Kebijakan',
    content: [
      'Kebijakan ini dapat diperbarui dari waktu ke waktu dan akan dipublikasikan pada halaman ini.',
      'Perubahan signifikan akan diinformasikan kepada pengguna melalui email atau notifikasi di platform.'
    ]
  },
  {
    id: 'contact',
    title: 'Kontak Kami',
    content: [
      'Jika Anda memiliki pertanyaan terkait kebijakan privasi ini, silakan hubungi kami di:',
      'Email: eduviamentra@gmail.com • Website: www.eduvia.id'
    ]
  }
];

export default function PrivacyPolicy() {

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-white py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('./images/img-hero-tentang-kami.png')" }}>
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
            Kebijakan Privasi
          </motion.h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl px-12 py-6 text-white bg-sapphire-normal text-center space-y-4">
          <p className="inline-block font-medium text-sapphire-normal bg-white rounded-full px-4 py-2">Kebijakan Privasi</p>

          <h2 className="text-3xl font-bold">Selamat datang di eduvia.id!</h2>

          <p className="leading-relaxed text-lg">
            eduvia.id mengakui pentingnya melindungi privasi setiap Pengguna yang mengakses dan
            menggunakan layanan Kami.
          </p>

          <p className="leading-relaxed text-lg">
            Kami berkomitmen untuk melindungi dan menghormati privasi Pengguna, sesuai dengan ketentuan
            hukum Republik Indonesia, termasuk Undang-Undang Perlindungan Data Pribadi.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="space-y-8 px-4 sm:px-6 lg:px-8 my-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 * (index % 2 === 0 ? 1 : -1) }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-4'
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 bg-salmon-normal py-4 px-8 rounded-lg">
              <div className="bg-white rounded-full w-4 h-4"></div>
              <h3 className="text-xl font-bold text-white">{section.title}</h3>
            </div>

            <div className="space-y-4">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}