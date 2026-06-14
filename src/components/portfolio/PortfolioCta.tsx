'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative bg-[#021823] rounded-[2.5rem] overflow-hidden px-10 py-14 lg:py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* bg decor */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d4a843 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          {/* text */}
          <div className="relative z-10 max-w-lg text-center lg:text-left flex flex-col gap-3">
            <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em]">
              Ready to be next?
            </p>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight">
              Let&apos;s Build Something{' '}
              <span className="text-[#d4a843]">You&apos;re Proud to Share</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Every project in our portfolio started with a single conversation.
              Tell us about your business and let&apos;s figure out what we can
              build together.
            </p>
          </div>

          {/* buttons */}
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold px-8 py-4 rounded-t-xl rounded-r-xl text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Start a Project
              <FaArrowCircleRight />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold px-8 py-4 rounded-t-xl rounded-r-xl text-sm transition-all duration-200 whitespace-nowrap"
            >
              View Our Services
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
