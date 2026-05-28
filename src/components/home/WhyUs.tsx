'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { FaBookOpen, FaCheckCircle, FaHeart, FaStar } from 'react-icons/fa';
import { MdFlashAuto, MdFlashOn, MdMonitor } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const REASONS = [
  {
    icon: <FaCheckCircle />,
    title: 'Process Excellence',
    desc: 'Every project follows a proven delivery framework — discovery, design, build, launch, and support. No surprises, no missed deadlines.',
  },
  {
    icon: <FaBookOpen />,
    title: 'Strategic Planning',
    desc: "We don't just execute — we think. Your project starts with a strategy session so every decision ties back to your business goals.",
  },
  {
    icon: <FaHeart />,
    title: 'Experience Design',
    desc: 'Beautiful is baseline. We design experiences that guide visitors intuitively toward the action you want them to take.',
  },
  {
    icon: <MdMonitor />,
    title: 'Smart Technology',
    desc: 'We leverage the latest tools — AI, automation, modern frameworks — so your digital presence is future-proof from day one.',
  },
];

export default function WhyUs() {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — text + reasons list */}
        <div className="flex flex-col gap-8">
          <Reveal delay={0.05}>
            <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em]">
              Why Choose Us
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="text-4xl xl:text-[2.8rem] font-extrabold text-[#003049] leading-[1.1]">
              Reasons Why We are the Best{' '}
              <span className="text-[#d4a843]">Digital Agency</span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-5">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={0.18 + i * 0.1}>
                <div className="flex gap-4 group">
                  {/* icon + vertical connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#003049]/7 group-hover:bg-[#d4a843] text-[#003049] group-hover:text-[#003049] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                      {r.icon}
                    </div>
                    {i < REASONS.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[#003049]/10 to-transparent min-h-[20px]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h4 className="text-[#003049] font-extrabold text-sm mb-1.5">
                      {r.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT — image with overlapping stat card */}
        <div ref={imgRef} className="relative">
          {/* Main image placeholder */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={imgInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br aspect-square max-w-[480px] ml-auto"
          >
            {/* placeholder texture */}
            <div
              className="absolute inset-0 opacity-[0.6]"
              style={{
                backgroundImage: "url('bg-4.png')",
                backgroundSize: '420px 600px',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* silhouette accent */}
            <div className="absolute inset-0 flex items-end justify-center pb-0">
              <div className="w-full h-3/4 bg-gradient-to-t from-[#003049]/80 to-transparent" />
            </div>

            {/* Gold top-right corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4a843]/15 rounded-bl-[4rem]" />
            <div className="absolute top-4 right-4 text-[#d4a843]/60">
              <MdFlashOn className="w-8 h-8" />
            </div>

            {/* Label inside image */}
            <div className="absolute px-4 py-2 bg-[#003049]/80">
              <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-widest mb-2">
                Our Approach
              </p>
              <p className="text-white text-xl font-extrabold leading-snug">
                Where strategy meets beautiful execution
              </p>
            </div>
          </motion.div>

          {/* Floating review card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 20 }}
            animate={imgInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.45, ease }}
            className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-2xl shadow-[#003049]/12 border border-gray-100 p-5 w-60"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-[#d4a843]" />
              ))}
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-3 italic">
              &ldquo;They didn&apos;t just build our site — they transformed how
              we do business online.&rdquo;
            </p>
            <div className="flex items-center gap-2.5">
              <Image
                src={'/client.jpg'}
                alt="client1"
                width={20}
                height={20}
                className="rounded-full w-8 h-8 object-fill"
              />
              <div>
                <p className="text-[#003049] text-xs font-extrabold">
                  Ebele Tai-Nwankwo
                </p>
                <p className="text-gray-400 text-[10px]">
                  Director, Akulue Memorial Hospital
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
