'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative bg-[#021823] rounded-[2.5rem] overflow-hidden px-10 py-16 lg:py-20 lg:px-20 text-center"
        >
          {/* bg decoration */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d4a843 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse, rgba(212,168,67,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em]"
            >
              Let&apos;s Build Together
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl xl:text-[2.8rem] font-extrabold text-white leading-tight"
            >
              Ready to Give Your Business the{' '}
              <span className="text-[#d4a843]">
                Digital Presence It Deserves?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-white/55 text-base leading-relaxed"
            >
              You&apos;ve read the story. You know what we stand for. Now
              let&apos;s talk about what we can build together — a digital
              foundation that works for your business every hour of every day.
            </motion.p>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Schedule a Free Consultation
                <FaArrowCircleRight />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/25 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 whitespace-nowrap"
              >
                Explore Our Services
              </Link>
            </motion.article>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
