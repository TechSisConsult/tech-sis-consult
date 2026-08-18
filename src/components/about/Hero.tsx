'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import FounderImage from '../../../public/founder.jpeg';

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#021823] pt-[70px]">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={FounderImage}
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(2, 24, 35, 0.98) 0%,
              rgba(2, 24, 35, 0.90) 35%,
              rgba(2, 24, 35, 0.65) 65%,
              rgba(2, 24, 35, 0.35) 100%
            )
          `,
        }}
      />

      <div
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(247,187,59,0.16) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-16 lg:py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease,
            }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#f7bb3b]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f7bb3b]">
              About TechSis Consult
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.16,
              ease,
            }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            We Build Digital Experiences That{' '}
            <span className="text-[#f7bb3b]">Help Businesses Grow.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.27,
              ease,
            }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60"
          >
            TechSis Consult helps businesses turn their online presence into
            something that builds trust, communicates value, and creates real
            opportunities for growth.
          </motion.p>

          {/* Small positioning statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.36,
              ease,
            }}
            className="mt-7 flex items-center gap-3"
          >
            <div className="h-8 w-1 rounded-full bg-[#f7bb3b]" />

            <p className="text-sm font-semibold text-white/80">
              Strategy. Design. Technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#f7bb3b]/40 to-transparent" />
    </section>
  );
}
