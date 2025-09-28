"use client";

import { motion } from 'motion/react';

const sections = [
  {
    id: 'general-terms',
    title: 'Ketentuan Umum',
    icon: '📋',
    content: [
      'eduvia.id adalah penyelenggara layanan bimbingan belajar daring melalui situs www.eduvia.id.',
      'Layanan Kami ditujukan untuk pengguna yang mempersiapkan ujian seleksi CPNS, PPPK, dan jenis seleksi lainnya.',
      'Dengan mengakses situs ini, Anda setuju terhadap Syarat dan Ketentuan ini.',
      'Pengguna harus berusia minimal 18 tahun atau memiliki izin dari wali jika di bawah umur.'
    ]
  },
  {
    id: 'learning-products',
    title: 'Produk Belajar',
    icon: '📚',
    content: [
      'Produk belajar terdiri dari tryout, kelas live, rekaman kelas, dan modul PDF.',
      'Kami dapat mengubah, menambah, atau menghapus produk belajar sewaktu-waktu.',
      'Akses produk belajar berlaku terbatas sesuai dengan deskripsi paket yang dibeli.',
      'Pengguna hanya dapat mengakses produk melalui platform resmi kami.'
    ]
  },
  {
    id: 'user-account',
    title: 'Akun Pengguna',
    icon: '👤',
    content: [
      'Satu akun hanya berlaku untuk satu pengguna.',
      'Login akun dibatasi pada dua perangkat tetap.',
      'Pengguna bertanggung jawab menjaga kerahasiaan akun dan sandi.',
      'Penggunaan akun oleh pihak ketiga dilarang dan dapat menyebabkan akun dinonaktifkan.'
    ]
  },
  {
    id: 'user-behavior',
    title: 'Perilaku Pengguna',
    icon: '⚖️',
    content: [
      'Pengguna wajib menjaga etika dan sopan santun di seluruh media komunikasi.',
      'Segala bentuk ujaran kebencian dan tindakan tidak kondusif akan dikenai sanksi.',
      'Kami berhak menonaktifkan akun tanpa pemberitahuan jika terjadi pelanggaran.'
    ]
  },
  {
    id: 'fees-payment',
    title: 'Biaya dan Pembayaran',
    icon: '💳',
    content: [
      'Harga tiap paket tercantum pada deskripsi produk.',
      'Pembayaran dilakukan melalui gateway yang tersedia di platform.',
      'Midtrans dan Xendit tidak diselesaikan dalam waktu yang ditentukan.',
      'Kami tidak menerima klaim atas penggunaan kode promo yang sudah tidak berlaku.'
    ]
  },
  {
    id: 'refund-policy',
    title: 'Kebijakan Pembelian dan Pengembalian Dana',
    icon: '🔄',
    content: [
      'Produk digital yang telah dibeli tidak dapat ditukar atau dikembalikan.',
      'Pengembalian dana hanya dimungkinkan dalam kondisi khusus seperti duplikat payment, atau kelebihan transfer > Rp10.000,-.',
      'Pengajuan refund harus disertai bukti transaksi yang sah dan diajukan ke cs@eduviamentra@gmail.com dalam waktu maksimal 24 jam.'
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Hak Kekayaan Intelektual',
    icon: '©️',
    content: [
      'Seluruh konten dalam platform adalah milik www.eduvia.id.',
      'Pengguna tidak diperbolehkan mendistribusikan, menjual, atau memperjualbelikan konten.',
      'Kami berhak menindak pelanggaran secara hukum sesuai perundang-undangan yang berlaku.'
    ]
  },
  {
    id: 'third-party-links',
    title: 'Tautan ke Aplikasi Pihak Ketiga',
    icon: '🔗',
    content: [
      'Kami menyediakan tautan ke layanan pihak ketiga seperti Zoom, Google Drive, dll.',
      'Kami tidak bertanggung jawab atas isu, keamanan, atau kebijakan dari layanan pihak ketiga tersebut.'
    ]
  },
  {
    id: 'communication',
    title: 'Komunikasi',
    icon: '📧',
    content: [
      'Kami akan mengirimkan notifikasi, informasi layanan, dan promosi melalui email atau WhatsApp.',
      'Dengan menggunakan layanan kami, pengguna setuju menerima komunikasi tersebut.'
    ]
  },
  {
    id: 'force-majeure',
    title: 'Keadaan Kahar (Force Majeure)',
    icon: '⚠️',
    content: [
      'Kami tidak bertanggung jawab atas gangguan layanan akibat bencana alam, gangguan teknis, atau kondisi di luar kendali kami.'
    ]
  },
  {
    id: 'legal-disputes',
    title: 'Ketentuan Hukum dan Penyelesaian Sengketa',
    icon: '⚖️',
    content: [
      'Syarat dan Ketentuan ini tunduk pada hukum Republik Indonesia.',
      'Sengketa akan diselesaikan secara musyawarah, atau melalui Pengadilan Negeri sesuai domisili www.eduvia.id.'
    ]
  },
  {
    id: 'other-terms',
    title: 'Ketentuan Lain',
    icon: '📄',
    content: [
      'Kami berhak memperbaharui Syarat dan Ketentuan ini sewaktu-waktu.',
      'Pengguna diharapkan menyetujui jika tetap menggunakan layanan setelah pembaruan.',
      'Jika ada klausul yang dianggap tidak sah, bagian lainnya tetap berlaku.'
    ]
  },
  {
    id: 'contact-info',
    title: 'Informasi Kontak',
    icon: '📞',
    content: [
      'Alamat: Jl. Karang Empat 1 No.5, RT.011/RW.07, Kel. Ploso, Kec. Tambaksari, Kota Surabaya, Jawa Timur 60133',
      'Email: eduviamentra@gmail.com',
      'WhatsApp: 081357280094',
      'NIB/NPWP: 2806250044155 / 100000000331696'
    ]
  }
];

export default function TermsConditions() {
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
          transition={{ duration: 0.5 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kebijakan Privasi
          </motion.h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 my-8">
        {sections.map((section, index) => {
          const isLast = index + 1 === sections.length;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 40 * (isLast ? 0 : isEven ? -1 : 1),
                y: isLast ? 40 : 0
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`space-y-4  ${isLast ? 'col-span-2' : ''}`}
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
          )
        })}
      </section>
    </>
  )
}
