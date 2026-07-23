'use client';

import { motion, useInView, Variants } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#021823]/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#052a3d] shadow-2xl"
        >
          {/* Background image behind the subject */}
          <div className="absolute inset-0">
            <Image
              src="/client-sites/hospital-site.png"
              alt="Background texture"
              fill
              className="object-cover opacity-40"
            />
          </div>

          <motion.div
            variants={scaleIn}
            className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-10"
          >
            <div className="flex-1 text-white max-w-xl">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              >
                Profiting websites.
                <br />
                <span className="text-[#c9a227]">Happy clients.</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-slate-300 text-base md:text-lg"
              >
                We build digital experiences that convert visitors into revenue
                and leave your customers smiling.
              </motion.p>
            </div>
          </motion.div>

          {/* Floating testimonial card */}
          <motion.div
            variants={fadeIn}
            className="
    absolute
    right-4
    bottom-4
    md:right-10
    md:bottom-10
    z-20
    w-[250px]
    lg:w-[360px]
  "
          >
            <div
              className="
      rounded-2xl
      border border-white/10
      bg-[#021823]/45
      backdrop-blur-xl
      p-2 md:p-4
      shadow-[0_25px_60px_rgba(0,0,0,.35)]
    "
            >
              <Quote className="mb-3 h-3 w-3 text-[#d4a843]" />

              <p className="text-[10px] md:text-sm leading-7 text-white/90">
                &quot;They created a modern website that significantly improved
                our hospital&apos;s visibility and credibility online.&quot;
              </p>

              <div className="mt-5 flex items-center gap-3">
                <Image
                  src="/client-sites/akulue-client.jpg"
                  alt="Director"
                  width={56}
                  height={56}
                  className="rounded-full border border-[#d4a843] object-cover"
                />

                <div>
                  <p className="text-[10px] text-sm font-bold text-white">
                    Ebele Tai-Nwankwo
                  </p>

                  <p className="text-[10px] md:text-xs text-[#d4a843]">
                    Director, Akulue Memorial Hospital
                  </p>

                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-[#d4a843] text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
