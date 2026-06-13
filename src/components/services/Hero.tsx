'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease, delay } },
});

const SERVICES_QUICK = [
  { label: 'Business Websites', href: '#service-1' },
  { label: 'E-commerce Stores', href: '#service-2' },
  { label: 'Website Redesign', href: '#service-3' },
  { label: 'Business Automation', href: '#service-4' },
];

export default function ServicesHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-[70px]">
      <Image
        src="/bg-6.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#021823]/70 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4a843 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div
        className="absolute -top-40 -right-40 w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.13) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.article
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.3 }}
        className="absolute left-6 lg:left-14 top-[15%] bottom-[15%] w-[2px] rounded-full origin-top pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #d4a843, transparent)',
        }}
      />
      <motion.article
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.45 }}
        className="absolute right-6 lg:right-14 top-[15%] bottom-[15%] w-[2px] rounded-full origin-top pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #d4a843, transparent)',
        }}
      />

      <div className="relative z-10 w-full max-w-[860px] mx-auto px-6 py-12 flex flex-col items-center text-center gap-7">
        <motion.h1
          {...fadeUp(0.22)}
          className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold text-white leading-[1.08] tracking-tight"
        >
          Smart Digital Solutions{' '}
          <span className="relative inline-block text-[#d4a843]">
            Built to Grow
            <motion.svg
              className="absolute -bottom-2 left-0 w-full overflow-visible"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M2 6 Q150 1 298 6"
                stroke="#d4a843"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ delay: 1, duration: 0.9, ease }}
              />
            </motion.svg>
          </span>{' '}
          Your Business
        </motion.h1>

        <motion.p
          {...fadeUp(0.33)}
          className="text-white/60 text-lg leading-relaxed max-w-2xl"
        >
          Every service we offer is designed around one goal — giving your
          business the digital foundation it needs to attract customers, build
          trust, and generate revenue around the clock.
        </motion.p>

        <motion.article
          {...fadeUp(0.42)}
          className="flex items-center gap-5 w-full max-w-md"
        >
          <div className="h-px flex-1 bg-white/12" />
          <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.22em] whitespace-nowrap">
            Smart Tech for Modern Businesses
          </span>
          <div className="h-px flex-1 bg-white/12" />
        </motion.article>

        <motion.article
          {...fadeUp(0.5)}
          className="flex flex-wrap justify-center gap-3"
        >
          {SERVICES_QUICK.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2 bg-white/6 backdrop-blur-sm border border-white/12 hover:border-[#d4a843]/50 hover:bg-[#d4a843]/10 hover:text-[#d4a843] text-white/75 text-xs font-semibold rounded-full px-4 py-2 transition-all duration-200"
            >
              {s.label}
            </a>
          ))}
        </motion.article>

        {/* CTAs */}
        <motion.article
          {...fadeUp(0.6)}
          className="flex flex-wrap justify-center gap-4 mt-1"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5"
          >
            Schedule a Free Call
            <FaArrowCircleRight />
          </Link>
          <Link
            href="#services-grid"
            className="inline-flex items-center gap-2 border-2 border-white/22 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Explore Services
          </Link>
        </motion.article>
      </div>
      <motion.article
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 pointer-events-none z-10"
      ></motion.article>

      {/* wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg
          viewBox="100 80 1100 52"
          className="w-full"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0 52 Q320 8 640 30 Q960 52 1280 18 L1280 52 Z" />
        </svg>
      </div>
    </section>
  );
}
