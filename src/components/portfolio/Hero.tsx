'use client';

import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioHero() {
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

      <div className="relative max-w-[1280px] mx-auto px-6 py-16 lg:py-20 flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease }}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Work We&apos;re <span className="text-[#d4a843]">Proud Of</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease }}
              className="text-white/50 text-base leading-relaxed"
            >
              Every project here represents a real business that needed a
              digital presence — and got one that works. More projects are added
              regularly as we grow.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.35, ease }}
            className="flex-shrink-0 flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-7 py-5"
          >
            <div className="text-center">
              <p className="text-[#d4a843] text-4xl font-extrabold leading-none">
                1
              </p>
              <p className="text-white/40 text-[11px] mt-1 tracking-wide">
                Featured
                <br />
                Project
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-[#d4a843] text-4xl font-extrabold leading-none">
                +
              </p>
              <p className="text-white/40 text-[11px] mt-1 tracking-wide">
                More
                <br />
                Coming
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent" />
    </section>
  );
}
