'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { MdArrowRight } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { y: 26, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.65, ease, delay } },
});

export default function ContactHero() {
  return (
    <section className="relative bg-[#003049] pt-[109px] overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4a843 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* glow */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 py-16 lg:py-20 flex flex-col gap-5">
        {/* breadcrumb */}
        <motion.nav
          {...fadeUp(0.05)}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
        >
          <Link
            href="/"
            className="text-white/40 hover:text-[#d4a843] transition-colors duration-200"
          >
            Home
          </Link>
          <MdArrowRight className="text-white/40 w-4 h-4" />
          <span className="text-[#d4a843]">Contact</span>
        </motion.nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <motion.p
              {...fadeUp(0.1)}
              className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em]"
            >
              Get In Touch
            </motion.p>
            <motion.h1
              {...fadeUp(0.18)}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Need More Customers Online?{' '}
              <span className="text-[#d4a843]">Let&apos;s Talk.</span>
            </motion.h1>
            <motion.p
              {...fadeUp(0.28)}
              className="text-white/50 text-base leading-relaxed"
            >
              Tell us about your business and goals,and we&apos;ll recommend the
              best path forward - whether that&apos;s a new website, a redesign,
              or ongoing support.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent" />
    </section>
  );
}
