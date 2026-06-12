'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowCircleRight, FaFileImage } from 'react-icons/fa';
import { FaMoneyBills } from 'react-icons/fa6';
import { MdMonitor } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;

const QUICK_LINKS = [
  {
    label: 'View Our Services',
    href: '/services',
    icon: <MdMonitor />,
  },
  {
    label: 'See Our Work',
    href: '/portfolio',
    icon: <FaFileImage />,
  },
];

export default function FAQsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const linksRef = useRef(null);
  const linksInView = useInView(linksRef, { once: true, margin: '-60px' });

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-6">
        {/* quick links row */}
        <div ref={linksRef} className="grid sm:grid-cols-3 gap-4 mb-4">
          {QUICK_LINKS.map((l, i) => (
            <motion.article
              key={l.label}
              initial={{ opacity: 0, y: 20 }}
              animate={linksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            >
              <Link
                href={l.href}
                className="flex items-center gap-3 bg-white border border-gray-100 hover:border-[#003049]/15 hover:shadow-lg hover:shadow-[#003049]/5 rounded-2xl px-5 py-4 group transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#003049]/6 group-hover:bg-[#003049] text-[#003049] group-hover:text-[#d4a843] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  {l.icon}
                </div>
                <span className="text-[#003049] font-bold text-sm group-hover:text-[#d4a843] transition-colors duration-200">
                  {l.label}
                </span>
                <svg
                  className="w-4 h-4 text-gray-300 group-hover:text-[#d4a843] ml-auto transition-all duration-200 group-hover:translate-x-0.5"
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
              </Link>
            </motion.article>
          ))}
        </div>

        {/* main CTA banner */}
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative bg-[#003049] rounded-[2.5rem] overflow-hidden px-10 py-14 lg:py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* bg decor */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d4a843 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          {/* text */}
          <div className="relative z-10 max-w-lg text-center lg:text-left flex flex-col gap-3">
            <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em]">
              Still have questions?
            </p>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight">
              Let&apos;s Have a{' '}
              <span className="text-[#d4a843]">Real Conversation</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              No bots, no templates — just a straightforward chat about your
              business and how we can help. Book a free 30-minute call and
              let&apos;s figure it out together.
            </p>
          </div>

          {/* buttons */}
          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#003049] font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book a Free Call
              <FaArrowCircleRight />
            </Link>
            <Link
              href="mailto:hello@techsisconsult.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 whitespace-nowrap"
            >
              Send Us an Email
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
