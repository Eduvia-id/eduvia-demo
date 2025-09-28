import { HTMLMotionProps, motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../../../_components/button'
import { HiCheckCircle } from 'react-icons/hi2'

export type Tryout = {
  id: string;
  title: string;
  type: 'SKD' | 'SKB';
  duration: number;
  totalQuestions: number;
} & (
    | { status: 'completed'; correctAnswers: number }
    | { status: 'available'; correctAnswers?: never }
  );

type TryoutCardProps = Omit<HTMLMotionProps<"div">, 'children'> & {
  tryout: Tryout;
}

export default function TryoutCard({ tryout, ...motionProps }: TryoutCardProps) {
  const isCompleted = tryout.status === "completed";

  return (
    <motion.div
      {...motionProps}
      className="bg-white rounded-lg overflow-hidden shadow-lg grid grid-rows-[auto_1fr_auto]"
    >
      {/* Header */}
      <div className={`relative overflow-hidden ${isCompleted ? 'bg-sapphire-normal' : 'bg-salmon-normal'}`}>
        <Image
          src="/backgrounds/bg-tryout.svg"
          width={100}
          height={100}
          alt='Tryout Card Background Image'
          className='absolute w-full'
        />
        <div className="relative text-white text-center space-y-6 p-10 z-10">
          <h3 className="text-4xl font-bold">Tryout</h3>
          <p className={`py-2 text-lg rounded-md ${isCompleted ? 'bg-sapphire-darker' : 'bg-salmon-darker'}`}>
            {tryout.type}
          </p>
        </div>
      </div>

      {/* Content - akan stretch untuk fill available space */}
      <div className="p-6 space-y-4 flex flex-col">
        <h4 className="font-semibold text-gray-900">{tryout.title}</h4>
        <div className='space-y-2 flex-1'>
          <p className={`text-sm ${isCompleted ? 'text-sapphire-normal' : 'text-salmon-normal'}`}>
            Durasi: {tryout.duration} menit
          </p>
          <div className="space-y-2">
            {isCompleted && (
              <>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">Selesai</span>
                </div>
                <p className="text-lg font-bold text-salmon-normal">
                  Nilai: {tryout.correctAnswers}/{tryout.totalQuestions}
                </p>
              </>
            )}
          </div>
        </div>
        <Button color={isCompleted ? 'primary' : 'secondary'} href={isCompleted ? 'tryout/1' : 'tryout/2'} className='w-full'>Detail</Button>
      </div>

    </motion.div>
  )
}
