'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: 'How long does a project take?',
    a: "Most projects are completed within 2–6 weeks depending on scope and complexity. You'll get a clear timeline before we start.",
  },
  {
    q: 'Do I need to pay everything upfront?',
    a: 'No. We work on a 50% deposit to begin, and the remaining 50% on delivery. Larger projects can be broken into milestones.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'All packages include post-launch support. After that period, we offer affordable monthly maintenance plans.',
  },
  {
    q: 'Can I upgrade my package later?',
    a: 'Absolutely. Many clients start with Starter and upgrade as their business grows. We make it seamless.',
  },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.55, ease, delay: i * 0.08 }}
      className="border-b border-gray-100 pb-5"
    >
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4a843]/12 flex items-center justify-center mt-0.5">
          <svg
            className="w-3.5 h-3.5 text-[#d4a843]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <div>
          <p className="text-[#003049] font-bold text-sm mb-1.5">{q}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesCTA() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-60px' });

  return (
    <>
      {/* ── FAQ strip ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div ref={faqRef}>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em] mb-3"
              >
                Common Questions
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-3xl xl:text-4xl font-extrabold text-[#003049] leading-tight mb-4"
              >
                Still Have <span className="text-[#d4a843]">Questions?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-gray-500 text-base leading-relaxed"
              >
                Here are the ones we hear most often. If yours isn&apos;t here,{' '}
                <Link
                  href="/contact"
                  className="text-[#d4a843] font-semibold hover:underline"
                >
                  just ask us directly.
                </Link>
              </motion.p>
            </div>

            <div className="flex flex-col gap-5">
              {FAQS.map((f, i) => (
                <FAQItem key={f.q} q={f.q} a={f.a} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main CTA banner ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease }}
            className="relative bg-[#003049] rounded-[2.5rem] overflow-hidden px-10 py-16 lg:py-20 lg:px-20"
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
              className="absolute -top-24 right-1/4 w-96 h-40 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(212,168,67,0.14) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center lg:text-left">
                <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em] mb-3">
                  Ready to Start?
                </p>
                <h2 className="text-3xl lg:text-4xl xl:text-[2.8rem] font-extrabold text-white leading-tight mb-4">
                  Let&apos;s Build Something{' '}
                  <span className="text-[#d4a843]">
                    Your Business is Proud Of
                  </span>
                </h2>
                <p className="text-white/55 text-base leading-relaxed">
                  Tell us about your project and we&apos;ll come back to you
                  within 24 hours with a clear plan, honest pricing, and zero
                  pressure.
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#003049] font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Request a Free Quote
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border-2 border-white/20 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 whitespace-nowrap"
                >
                  Learn About Us First
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
