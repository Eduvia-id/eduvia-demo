import { Button } from '@/app/_components/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiCheckCircle, HiChevronLeft, HiClock } from 'react-icons/hi';

type TryoutHeaderCardProps = {
  id: number;
  title: string;
  type: 'SKD' | 'SKB';
  duration: number;
  totalQuestions: number;
  questionBreakdown: {
    TWK: number;
    TIU: number;
    TKP: number;
  };
  description: string;
  isCompleted: boolean;
  userScore?: number
}

export default function TryoutHeaderCard({ id, isCompleted, type, duration, title, totalQuestions, questionBreakdown, description, userScore }: TryoutHeaderCardProps) {

  return (
    <section className="px-6 sm:px-8 lg:px-12 my-6 space-y-4">
      <Link
        href='/tryout'
        className="flex items-center text-gray-600 cursor-pointer w-fit"
      >
        <HiChevronLeft className="w-6 h-6 text-salmon-normal" />
        <span className="font-semibold text-gray-900 text-lg">Detail Tryout</span>
      </Link>

      <div className='flex flex-col lg:flex-row gap-4'>
        {/* Tryout Card */}
        <div
          className={`${isCompleted ? "bg-sapphire-normal" : "bg-salmon-normal"
            } relative rounded-2xl p-8 text-white min-w-80 flex items-center justify-center overflow-hidden`}
        >
          <Image
            src="/backgrounds/bg-tryout.svg"
            width={100}
            height={100}
            alt='Tryout Card Background Image'
            className='absolute w-full'
          />

          <div className="relative space-y-4 text-center">
            <h2 className="text-4xl font-bold">Tryout</h2>
            <p className={`py-2 text-lg rounded-md ${isCompleted ? 'bg-sapphire-darker' : 'bg-salmon-darker'}`}>{type}</p>

            {isCompleted && (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Selesai</span>
                </div>
                <div className="text-2xl font-bold">
                  {userScore}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tryout Info */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-sapphire-normal">
            <HiClock className="w-4 h-4" />
            <span className="text-sm font-medium">Durasi: {duration} Menit</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

          <div className="text-salmon-normal text-sm">
            <strong>Jumlah Soal: {totalQuestions} Soal</strong> (TWK:{" "}
            {questionBreakdown.TWK}, TIU: {questionBreakdown.TIU}, TKP:{" "}
            {questionBreakdown.TKP})
          </div>

          <p className="text-gray-700 leading-relaxed">{description}</p>

          {isCompleted ?
            <Button className='px-8 text-lg w-fit' href={`/tryout/${id}/1/result`}>Lihat Hasil</Button>
            : <Button className='px-8 text-lg w-fit' href={`/tryout/${id}/1`}> Mulai Tryout</Button>
          }
        </div>

      </div>


    </section>
  );
}
