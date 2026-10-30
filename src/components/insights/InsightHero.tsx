'use client';

import { motion } from 'motion/react';
import { CATEGORIES } from '@/lib/insights-utils';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function InsightsHero({
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <section className="relative bg-[#021823] pt-[109px] overflow-hidden">
      {/* dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4a843 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* diagonal gold stripe */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.06]"
        style={{
          background:
            'linear-gradient(135deg, transparent 40%, #d4a843 40%, #d4a843 42%, transparent 42%)',
        }}
      />

      {/* glow blob */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.14) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-14 pb-0">
        {/* breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] mb-10"
        >
          <Link
            href="/"
            className="text-white/40 hover:text-[#d4a843] transition-colors duration-200"
          >
            Home
          </Link>
          <svg
            className="w-3 h-3 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-[#d4a843]">Insights</span>
        </motion.nav>

        {/* main content */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end pb-10">
          <div className="flex flex-col gap-5">
            {/* eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.25em]"
            >
              The TechSisConsult Blog
            </motion.p>

            {/* headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight max-w-2xl"
            >
              Insights to Help Your Business{' '}
              <span className="text-[#d4a843]">Win Online.</span>
            </motion.h1>

            {/* sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease }}
              className="text-white/50 text-base leading-relaxed max-w-xl"
            >
              Practical articles on web design, SEO, ecommerce, and business
              automation — written for Nigerian and African business owners who
              want to grow online without the jargon.
            </motion.p>
          </div>

          {/* post count chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease }}
            className="hidden lg:flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-8 py-6 gap-1 flex-shrink-0"
          >
            <p className="text-[#d4a843] text-5xl font-extrabold leading-none">
              {CATEGORIES.length - 1}
            </p>
            <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold text-center">
              Topics
              <br />
              Covered
            </p>
          </motion.div>
        </div>

        {/* category filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="flex flex-wrap gap-2 pb-6"
          role="tablist"
          aria-label="Filter posts by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => onCategoryChange(cat)}
              className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#d4a843] text-[#021823] border-[#d4a843] shadow-lg shadow-[#d4a843]/20'
                  : 'text-white/60 border-white/12 bg-white/5 hover:border-[#d4a843]/40 hover:text-[#d4a843]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* bottom gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4a843]/35 to-transparent" />
    </section>
  );
}
