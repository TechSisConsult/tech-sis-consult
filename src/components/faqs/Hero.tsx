'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { MdArrowRight } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;

export default function FAQsHero() {
  return (
    <section className="relative bg-[#003049] pt-[109px] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4a843 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        {/* breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] mb-8"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-white/40 hover:text-[#d4a843] transition-colors duration-200"
          >
            Home
          </Link>
          <MdArrowRight className="text-white/40 w-4 h-4" />
          <span className="text-[#d4a843]">FAQs</span>
        </motion.nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* left — headline */}
          <div className="flex flex-col gap-4 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em]"
            >
              Got Questions?
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease }}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              We&apos;ve Got <span className="text-[#d4a843]">Answers</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease }}
              className="text-white/50 text-base leading-relaxed"
            >
              Everything you need to know before working with us — from how we
              work and what things cost, to timelines and what happens after
              launch. Can&apos;t find your answer?{' '}
              <Link
                href="/contact"
                className="text-[#d4a843] hover:underline font-semibold"
              >
                Just ask us directly.
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent" />
    </section>
  );
}
