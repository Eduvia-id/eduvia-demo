import { HTMLMotionProps, motion } from 'motion/react';
import Image from 'next/image';
import { HiCheckCircle } from 'react-icons/hi2';
import { Button } from '../../../_components/button';

export type CoursePackage = {
  id: string
  title: string
  price: string
  originalPrice?: string
  features: string[]
  category: 'SKD' | 'SKB'
}

type CourseCardProps = Omit<HTMLMotionProps<"div">, 'children'> & {
  course: CoursePackage;
}

export default function CourseCard({ course, ...motionProps }: CourseCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg p-4 space-y-4"
      {...motionProps}
    >
      <Image
        alt={`Image ${course.title}`}
        src='/images/img-card.png'
        width={478}
        height={329}
        className='w-full rounded-xl' />
      <h3 className="text-xl font-bold mt-2">{course.title}</h3>
      <div className="flex items-center justify-between gap-2">
        <div className='max-w-56 space-y-2'>
          <p className="text-xl font-bold text-salmon-normal">{course.price}</p>
          <ul className="space-y-1 mb-4">
            {course.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <HiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Button href={`/paket/${course.id}`} >
          Pilih Paket
        </Button>
      </div>
    </motion.div>
  )
}