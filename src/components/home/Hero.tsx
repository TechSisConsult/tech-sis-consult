'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowCircleDown, FaArrowCircleRight } from 'react-icons/fa';
import Image1 from '../../../public/bg-1.png';
import Image2 from '../../../public/bg-2.png';
import Image3 from '../../../public/bg-3.png';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { y: 32, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease, delay },
  },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#021823] overflow-hidden flex items-center"
      style={{ paddingTop: '70px' }}
    >
      <section className="relative w-full max-w-[1280px] mx-auto px-6 py-10 lg:py-15 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-7">
          <motion.section {...fadeUp(0.05)}>
            <span className="inline-flex items-center gap-2 bg-[#d4a843]/10 border border-[#d4a843]/25 text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-md">
              Smart Tech for Modern Businesses
            </span>
          </motion.section>

          {/* headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-3xl lg:text-5xl font-extrabold text-white leading-[1.08] tracking-tight"
          >
            Turn Your Business Into a{' '}
            <span className="text-[#d4a843]">24/7 Revenue Machine.</span>
          </motion.h1>

          {/* sub */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-white/60 text-lg leading-relaxed max-w-lg"
          >
            We build professional websites, ecommerce stores, and automation
            systems that help modern businesses attract customers, build trust,
            and grow online — around the clock.
          </motion.p>

          {/* CTAs */}
          <motion.section {...fadeUp(0.35)} className="flex flex-wrap gap-4">
            <Link
              href="/contact#strategy-call"
              className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5"
            >
              Schedule a Call
              <FaArrowCircleRight />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-white/25 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Explore Services
            </Link>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="hidden lg:grid grid-cols-2 gap-4 h-[400px]"
        >
          <article className="relative overflow-hidden row-span-2">
            <Image src={Image1} alt="office" className="object-cover" fill />
          </article>

          <article className="relative overflow-hidden">
            <Image src={Image2} alt="office" className="w-full" fill />
          </article>

          <article className="relative overflow-hidden bg-[#021823]/80 border border-white/8">
            <Image src={Image3} alt="office" className="w-full" fill />
          </article>
        </motion.section>

        <motion.section
          {...fadeUp(0.5)}
          className="lg:hidden relative rounded-2xl overflow-hidden bg-[#021823]/50 border border-white/10 p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-[#d4a843] text-3xl font-extrabold">98%</p>
            <p className="text-white/50 text-xs mt-1">Client Retention</p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div>
            <p className="text-[#d4a843] text-3xl font-extrabold">50+</p>
            <p className="text-white/50 text-xs mt-1">Projects Done</p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div>
            <p className="text-[#d4a843] text-3xl font-extrabold">5+</p>
            <p className="text-white/50 text-xs mt-1">Years Active</p>
          </div>
        </motion.section>
      </section>

      <motion.section
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.22em] uppercase font-semibold">
          Scroll
        </span>
        <FaArrowCircleDown />
      </motion.section>
    </section>
  );
}
