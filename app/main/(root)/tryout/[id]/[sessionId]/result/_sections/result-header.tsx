import React from 'react'

type ResultHeaderProps = {
  title: string;
  date: string;
  duration: string;
  totalScore: number;
}

export default function ResultHeader({ title, date, duration, totalScore }: ResultHeaderProps) {
  return (
    <section className="px-6 sm:px-8 lg:px-12 my-6 flex gap-6">
      <div className="flex-1 flex flex-col justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Hasil {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <span>Dikerjakan pada: {date}</span>
          <span>|</span>
          <span>Durasi: {duration}</span>
        </div>
        <div className="mt-3">
          <span className='font-medium text-green-500'>
            Status: Selesai
          </span>
        </div>
      </div>

      <div className="bg-sapphire-light-active text-sapphire-normal px-8 py-4 rounded-lg">
        <div className="text-center">
          <h3 className="text-2xl font-medium mb-2">Total Skor Anda</h3>
          <p className="text-lg opacity-90 mb-2">{title}</p>
          <div className="text-5xl font-bold mb-2">{totalScore}</div>
        </div>
      </div>

    </section>
  )
}
