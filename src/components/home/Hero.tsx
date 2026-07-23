'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FaPlay, FaArrowRight, FaBolt } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="mx-auto max-w-[900px]"
        >
          <div
            className="
        rounded-[24px]
        sm:rounded-[36px]
        border
        border-white/30

        shadow-[0_30px_80px_rgba(2,24,35,.15)]
        px-5
        py-8
        sm:px-8
        md:px-14
        md:py-24
        text-center
      "
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-xl border border-[#f7bb3b]/30 px-2.5 py-1.5 sm:px-3 sm:py-2 mt-6 sm:mt-10 shadow-2xl"
            >
              {/* <span className="h-2 w-2 rounded-full bg-[#f7bb3b]" /> */}

              <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#8b6a18]">
                Premium Website Consultancy
              </span>
            </motion.div>
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease,
              }}
              className="mt-6 sm:mt-8 text-[26px] leading-[1.1] sm:text-[34px] sm:leading-[1.05] md:text-[60px] md:leading-[1.02] font-black tracking-[-0.04em] sm:tracking-[-0.05em] text-[#ffffff]"
            >
              Every Day Without the{' '}
              <span className="text-[#f7bb3b]/95">Right</span> Website
              <br />
              <span className="text-[#f7bb3b]/95">Is a Day </span>
              <br />
              You&apos;re Losing Customers.
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease,
              }}
              className="mx-auto mt-5 sm:mt-8 max-w-[680px] text-[13px] leading-7 sm:text-sm sm:leading-9 text-[#ffffff] md:text-lg"
            >
              While you&apos;re busy running your business, your website should
              be attracting leads, answering questions and building trust
              automatically. We design premium websites that instantly increase
              credibility, help you stand out from competitors and convert more
              visitors into paying customers.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease,
              }}
              className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
            >
              <Link
                href="/contact#strategy-call"
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-2xl bg-[#021823] px-6 py-3.5 sm:px-8 sm:py-5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,24,35,.18)]"
              >
                Book Strategy Session
                <FaArrowRight className="text-[#f7bb3b] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/40 bg-white/25 px-6 py-3.5 sm:px-8 sm:py-5 text-sm sm:text-base font-semibold text-[#021823] backdrop-blur-xl transition-all duration-300 hover:bg-white/40"
              >
                <FaPlay className="text-[#f7bb3b]" />
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                ease,
              }}
              className="mt-8 sm:mt-10"
            >
              <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 rounded-2xl sm:rounded-3xl border border-white/30 bg-white/10 px-5 py-5 sm:px-8 sm:py-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(2,24,35,.12)]">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#021823]">
                    100%
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    Custom Design
                  </p>
                </div>

                <div className="hidden h-12 w-px bg-slate-300 md:block" />

                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#021823]">
                    SEO
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    Optimized
                  </p>
                </div>

                <div className="hidden h-12 w-px bg-slate-300 md:block" />

                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#021823]">
                    24/7
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-slate-300">
                    Business Online
                  </p>
                </div>

                <div className="hidden h-12 w-px bg-slate-300 md:block" />

                <div className="text-center">
                  <FaBolt className="text-2xl sm:text-3xl font-black text-[#f7bb3b]" />

                  <p className="mt-1 text-xs sm:text-sm text-[#021823]">
                    Lightning Fast
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
