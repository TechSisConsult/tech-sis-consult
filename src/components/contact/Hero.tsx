'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdArrowRight } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { y: 22, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.65, ease, delay } },
});

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-t from-[#021823] to-[#d4a843]/80 pt-[70px] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4a843 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <main className="relative max-w-[1280px] mx-auto px-6 py-10 lg:py-15 flex flex-col gap-8">
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
          <MdArrowRight className="w-6 h-6 text-[#d4a843]" />
          <span className="text-[#d4a843]">Contact</span>
        </motion.nav>

        <article className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="flex flex-col gap-5 max-w-xl">
            <motion.h1
              {...fadeUp(0.18)}
              className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              We Look Forward to{' '}
              <span className="text-[#d4a843]">Hearing From You.</span>
            </motion.h1>
            <motion.p
              {...fadeUp(0.28)}
              className="text-white/50 text-base leading-relaxed"
            >
              We are a remote-first digital agency based in Enugu State, Nigeria
              - working with businesses across Africa and internationally. Every
              enquiry is reviewed personally. You&apos;ll always hear back from
              a real person.
            </motion.p>
          </div>

          <motion.article
            {...fadeUp(0.35)}
            className="flex flex-col gap-4 flex-shrink-0 lg:min-w-[280px]"
          >
            {/* Phone */}
            <div className="flex flex-col gap-1">
              <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.2em]">
                Give Us a Call
              </p>
              <a
                href="tel:+2347026766769"
                className="text-[#d4a843] text-xl font-extrabold hover:text-[#e8bc5a] transition-colors duration-200 tracking-tight"
              >
                +234 702 676 6769
              </a>
            </div>

            <div className="h-px bg-white/8" />

            <div className="flex flex-col gap-2">
              <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.2em]">
                Chat on WhatsApp
              </p>
              <a
                href="https://wa.me/2347026766769?text=Hi%20TechSisConsult!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-px w-fit"
              >
                <FaWhatsapp className="w-4 h-4" />
                Send a WhatsApp Message
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <a
                href="#strategy-call"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#d4a843] hover:bg-[#e6b74a] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-px w-fit"
              >
                <FaPhoneAlt className="w-4 h-4" />
                Book a Free Strategy Call
              </a>
              <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.2em]">
                Recommended — free & no obligation
              </p>
            </div>

            <div className="h-px bg-white/8" />

            <div className="flex flex-col gap-1">
              <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.2em]">
                Send an Email
              </p>
              <a
                href="mailto:hello@techsisconsult.com"
                className="text-[#d4a843] font-bold text-sm hover:text-[#e8bc5a] hover:underline transition-colors duration-200"
              >
                hello@techsisconsult.com
              </a>
            </div>
          </motion.article>
        </article>
      </main>

      <div className="h-px bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent" />
    </section>
  );
}
