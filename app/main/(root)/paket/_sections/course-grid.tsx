"use client";

import CourseCard, { CoursePackage } from "@/app/main/_components/cards/course-card"
import { motion } from "motion/react"
import { useQueryState } from "nuqs"

const coursePackages: CoursePackage[] = [
  {
    id: '1',
    title: 'SKD Full Paket',
    price: 'Rp249.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKD'
  },
  {
    id: '2',
    title: 'SKB Formasi Guru',
    price: 'Rp199.000',
    features: ['Khusus formasi guru', 'Soal SKB + pembahasan', 'Materi per bidang'],
    category: 'SKB'
  },
  {
    id: '3',
    title: 'SKB Tenaga Kesehatan',
    price: 'Rp199.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKB'
  },
  {
    id: '4',
    title: 'SKD + Coaching',
    price: 'Rp399.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKD'
  },
  {
    id: '5',
    title: 'Paket Bundling SKD + SKB',
    price: 'Rp199.000',
    features: ['Khusus formasi guru', 'Soal SKB + pembahasan', 'Materi per bidang'],
    category: 'SKD'
  },
  {
    id: '6',
    title: 'SKD Hemat',
    price: 'Rp149.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKD'
  },
  {
    id: '7',
    title: 'SKB Formasi Guru',
    price: 'Rp399.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKB'
  },
  {
    id: '8',
    title: 'SKB Tenaga Kesehatan',
    price: 'Rp199.000',
    features: ['Khusus formasi guru', 'Soal SKB + pembahasan', 'Materi per bidang'],
    category: 'SKB'
  },
  {
    id: '9',
    title: 'SKB Hukum dan Sosial',
    price: 'Rp149.000',
    features: ['Materi PDF & Video', 'Tryout CAT + Pembahasan', 'Live Zoom Class mingguan'],
    category: 'SKB'
  }
]

export default function CourseGrid() {
  const [searchQuery] = useQueryState('search', { defaultValue: '' })
  const [activeTab] = useQueryState('tab', { defaultValue: 'semua' })

  const filteredCourses = coursePackages.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'semua' || course.category.toLowerCase() === activeTab.toLowerCase()
    return matchesSearch && matchesTab
  })

  if (filteredCourses.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-gray-500 text-lg">Tidak ada paket yang ditemukan</div>
        <p className="text-gray-400 mt-2">Coba ubah kata kunci pencarian atau filter</p>
      </motion.section>
    )
  }

  return (
    <motion.section
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-8 lg:px-12 my-8"
    >
      {filteredCourses.map((course, index) => (
        <CourseCard
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          course={course}
          layout
        />
      ))}
    </motion.section>
  )
}
