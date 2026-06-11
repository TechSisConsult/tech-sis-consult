'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  {
    id: '01',
    title: 'Business Websites',
    desc: 'Professional, fast, conversion-focused websites that represent your brand and win customers around the clock.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tags: ['Custom Design', 'Mobile-First', 'SEO Ready'],
    highlight: false,
  },
  {
    id: '02',
    title: 'Ecommerce Stores',
    desc: 'Sell anything, anywhere. Powerful stores with seamless checkout, inventory management, and payment integrations.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    tags: ['Shopify / WooCommerce', 'Payments', 'Analytics'],
    highlight: true,
  },
  {
    id: '03',
    title: 'Website Redesign',
    desc: 'Existing site not converting? We give it a strategic overhaul — improving performance, UX, and identity.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    tags: ['UX Audit', 'Speed Boost', 'Brand Refresh'],
    highlight: false,
  },
  {
    id: '04',
    title: 'Business Automation',
    desc: 'Stop doing repetitive tasks manually. Set up smart workflows for leads, emails, bookings, and more.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    tags: ['CRM Setup', 'Email Flows', 'Lead Funnels'],
    highlight: false,
  },
];

function Card({ s, i }: { s: (typeof SERVICES)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      initial={{ y: 44, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease }}
      className={`group relative flex flex-col gap-5 items-center rounded-3xl p-7 border transition-all duration-400 hover:-translate-y-2 cursor-default ${
        s.highlight
          ? 'bg-[#d4a843] border-[#d4a843] shadow-xl shadow-[#d4a843]/25'
          : 'bg-white border-gray-100 hover:border-[#003049]/10 hover:shadow-2xl hover:shadow-[#003049]/6'
      }`}
    >
      {/* faint number */}
      <span
        className={`absolute top-6 right-7 text-5xl font-black leading-none select-none ${
          s.highlight ? 'text-[#003049]/10' : 'text-[#003049]/6'
        }`}
      >
        {s.id}
      </span>

      {/* icon box */}
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          s.highlight
            ? 'bg-[#003049]/20 text-[#003049]'
            : 'bg-[#003049]/6 text-[#003049] group-hover:bg-[#003049] group-hover:text-[#d4a843]'
        }`}
      >
        {s.icon}
      </div>

      {/* copy */}
      <div className="flex flex-col items-center">
        <h3
          className={`text-lg font-extrabold mb-2 ${
            s.highlight ? 'text-[#003049]' : 'text-[#003049]'
          }`}
        >
          {s.title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            s.highlight ? 'text-[#003049]/72' : 'text-gray-500'
          }`}
        >
          {s.desc}
        </p>
      </div>

      {/* tag pills */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {s.tags.map((t) => (
          <span
            key={t}
            className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
              s.highlight
                ? 'bg-[#003049]/15 text-[#003049]'
                : 'bg-[#003049]/6 text-[#003049]'
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* arrow link */}
      <a
        href="#contact"
        className={`inline-flex items-center gap-1.5 text-sm font-bold group/link transition-colors ${
          s.highlight
            ? 'text-[#003049] hover:text-[#003049]/70'
            : 'text-[#003049] hover:text-[#d4a843]'
        }`}
      >
        Book a Free Consultation
        <FaArrowCircleRight />
      </a>
    </motion.article>
  );
}

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      className="py-28 bg-gray-50 relative overflow-hidden"
    >
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/35 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* section header */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
            >
              What We Offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl xl:text-5xl font-extrabold text-[#003049] leading-tight"
            >
              Services Built for{' '}
              <span className="text-[#d4a843]">Modern Businesses</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-base leading-relaxed max-w-xs lg:text-right"
          >
            From your first website to a fully automated business machine — we
            cover every digital need, end to end.
          </motion.p>
        </div>

        {/* cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <Card key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
