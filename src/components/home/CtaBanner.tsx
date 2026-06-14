'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-[#f8f8f6]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative bg-[#021823] rounded-[2.5rem] overflow-hidden px-10 py-16 lg:py-20 lg:px-20"
        >
          {/* bg decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #d4a843 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#d4a843]/10"
              style={{ filter: 'blur(60px)' }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#d4a843]/5"
              style={{ filter: 'blur(80px)' }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em] mb-3"
              >
                Ready to grow?
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl lg:text-4xl xl:text-[2.8rem] font-extrabold text-white leading-tight mb-4"
              >
                Ready to Experience the{' '}
                <span className="text-[#d4a843]">Power of Precision?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-white/55 text-base leading-relaxed"
              >
                Let&apos;s talk about your business, your goals, and how
                TechSisConsult can help you build a digital presence that works
                as hard as you do.
              </motion.p>
            </div>

            <motion.article
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold px-8 py-4 rounded-t-xl rounded-r-xl text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Book a Free Consult
                <FaArrowCircleRight />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/25 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold px-8 py-4 rounded-t-xl rounded-r-xl text-sm transition-all duration-200 whitespace-nowrap"
              >
                View Services
              </a>
            </motion.article>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
