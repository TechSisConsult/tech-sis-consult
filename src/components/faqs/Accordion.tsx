'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { Fragment, useRef, useState } from 'react';
import { FaArrowCircleRight, FaPlus } from 'react-icons/fa';
import { FAQS } from '@/data/faqsData';
import { MdChatBubbleOutline } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;
const MotionPlus = motion.create(FaPlus);

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease, delay: (index % 10) * 0.04 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-[#d4a843]/40 shadow-md shadow-[#d4a843]/8'
          : 'border-gray-100 hover:border-gray-200'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group bg-white cursor-pointer"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span
            className={`flex-shrink-0 text-sm font-extrabold tabular-nums transition-colors duration-200 ${
              isOpen
                ? 'text-[#d4a843]'
                : 'text-gray-300 group-hover:text-[#d4a843]'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={`text-sm font-bold leading-snug transition-colors duration-200 ${
              isOpen
                ? 'text-[#003049]'
                : 'text-[#003049]/80 group-hover:text-[#003049]'
            }`}
          >
            {item.question}
          </span>
        </div>

        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-[#d4a843] text-[#003049]'
              : 'bg-gray-100 text-gray-400 group-hover:bg-[#003049]/8 group-hover:text-[#003049]'
          }`}
        >
          <MotionPlus
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease }}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden bg-white"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="ml-9">
                <div className="h-px bg-gradient-to-r from-[#d4a843]/40 to-transparent mb-4" />
                <p className="text-gray-500 text-md leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[860px] mx-auto px-6">
        <div ref={ref} className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em] mb-3"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl xl:text-4xl font-extrabold text-[#003049] leading-tight mb-3"
          >
            Everything You Need to Know{' '}
            <span className="text-[#d4a843]">Before We Start</span>
          </motion.h2>
        </div>

        {/* accordion list */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease }}
          className="mt-10 bg-[#003049] rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#d4a843]/15 flex items-center justify-center flex-shrink-0">
              <MdChatBubbleOutline className="w-5 h-5 text-[#d4a843]" />
            </div>
            <p className="text-white font-semibold text-sm">
              Still have a question?{' '}
              <span className="text-white/45 font-normal">
                We&apos;re happy to help — reach out directly.
              </span>
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#003049] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg flex-shrink-0 whitespace-nowrap"
          >
            Ask Us Directly
            <FaArrowCircleRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
