'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowCircleDown,
  FaArrowCircleRight,
  FaStar,
  FaGlobeAmericas,
} from 'react-icons/fa';
import Image1 from '../../../public/bg-1.png';
import Image2 from '../../../public/bg-4.png';
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
      className="relative min-h-screen bg-gradient-to-r from-[#021823] to-[#d4a843]/50 overflow-hidden flex items-center"
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
          <motion.div {...fadeUp(0.05)}>
            <span className="text-[#d4a843] font-semibold tracking-wide">
              TECHSIS CONSULT
            </span>
          </motion.div>
          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-tight"
          >
            Get More Customers,
            <br />
            Build More Trust,
            <br />
            <span className="text-[#d4a843]">Grow Around the Clock.</span>
          </motion.h1>

          {/* sub */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-white/70 text-lg leading-relaxed max-w-xl"
          >
            We help businesses establish a powerful online presence through
            professional websites, ecommerce solutions, and smart automation
            systems designed to attract customers, build credibility, and
            generate opportunities 24/7.
          </motion.p>

          {/* CTAs */}
          <motion.section {...fadeUp(0.35)} className="flex flex-wrap gap-4">
            <Link
              href="/contact#strategy-call"
              className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-sm px-7 py-3.5 rounded-t-xl rounded-r-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5"
            >
              Schedule a Call
              <FaArrowCircleRight />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-white/25 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold text-sm px-7 py-3.5 rounded-t-xl rounded-r-xl transition-all duration-200"
            >
              Explore Services
            </Link>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4 h-[280px] lg:h-[500px]">
            <article className="relative overflow-hidden rounded-3xl row-span-2 shadow-2xl group">
              <Image
                src={Image1}
                alt="office"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021823]/45 via-transparent to-transparent" />
            </article>

            <article className="relative overflow-hidden rounded-3xl shadow-xl group">
              <Image
                src={Image2}
                alt="office"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021823]/45 via-transparent to-transparent" />
            </article>

            <article className="relative overflow-hidden rounded-3xl shadow-xl group">
              <Image
                src={Image3}
                alt="office"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021823]/45 via-transparent to-transparent" />
            </article>
          </div>

          {/* Client Satisfaction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.8 }}
            className="absolute sm:bottom-6 bottom-1 left-6 bg-white rounded-2xl p-5 shadow-2xl shadow-black/20 max-w-[230px] border border-[#d4a843]/15"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    fill="none"
                    stroke="#f0ece2"
                    strokeWidth="5"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    fill="none"
                    stroke="#d4a843"
                    strokeWidth="5"
                    strokeDasharray={`${0.98 * 2 * Math.PI * 24} ${2 * Math.PI * 24}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#021823]">
                  98%
                </span>
              </div>

              <p className="text-gray-700 text-sm font-semibold leading-tight">
                Client Satisfaction Rate
              </p>
            </div>

            <div className="h-px bg-gray-200 my-3" />

            <p className="flex items-center gap-1.5 text-xs font-medium text-[#d4a843]">
              <FaStar className="text-[10px]" />
              Trusted by growing businesses
            </p>
          </motion.div>

          {/* TechSis Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            transition={{ delay: 1 }}
            className="absolute top-6 right-6 bg-[#021823]/90 backdrop-blur-md border border-[#d4a843]/30 rounded-2xl p-5 shadow-xl shadow-black/30"
          >
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d4a843]/15 text-[#d4a843]">
                <FaGlobeAmericas className="text-[11px]" />
              </span>
              <p className="text-[#d4a843] text-xs tracking-[0.2em] uppercase">
                TechSis Consult
              </p>
            </div>

            <h4 className="text-white font-bold mt-2">Websites That Work</h4>

            <p className="text-white/60 text-xs mt-2">
              Web Design • Ecommerce • Automation
            </p>
          </motion.div>
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
