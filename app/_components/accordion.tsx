"use client";

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiChevronUp } from 'react-icons/hi';

interface AccordionItem {
  question: string;
  answer: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border border-[#919191] rounded-lg py-2 px-4 text-black"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none gap-4"
          >
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-salmon-normal text-white'>
              {index + 1}
            </div>
            <span className='flex-1'>{item.question}</span>
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ type: 'keyframes' }}
              className="text-salmon-normal text-2xl"
            >
              <HiChevronUp width={24} height={24} />
            </motion.span>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2">
                  {typeof item.answer === 'string' ? (
                    <p>{item.answer}</p>
                  ) : (
                    item.answer
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};