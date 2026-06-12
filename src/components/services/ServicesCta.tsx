'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesCTA() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.article
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
                  <FaArrowCircleRight />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border-2 border-white/20 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 whitespace-nowrap"
                >
                  Learn About Us First
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
