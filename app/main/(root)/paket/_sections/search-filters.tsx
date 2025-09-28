"use client";

import { motion } from "motion/react"
import { useQueryState } from "nuqs"
import { HiSearch } from "react-icons/hi"

const tabs = [
  { id: 'semua', label: 'Semua' },
  { id: 'skd', label: 'SKD' },
  { id: 'skb', label: 'SKB' }
]

export default function SearchAndFilters() {
  const [searchQuery, setSearchQuery] = useQueryState('search', { defaultValue: '' })
  const [activeTab, setActiveTab] = useQueryState('tab', { defaultValue: 'semua' })

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between px-6 sm:px-8 lg:px-12"
    >
      <div className="relative flex-1 w-full">
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sapphire-normal'>
          <HiSearch className='w-6 h-6' />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full font-roboto rounded-full border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-1 pl-10 focus:border-sapphire-normal focus:ring-sapphire-normal bg-transparent text-gray-800 border-gray-300'
        />
      </div>

      <div className="flex space-x-2 mx-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 font-medium transition-colors rounded-full ${activeTab === tab.id
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </motion.section>
  )
}