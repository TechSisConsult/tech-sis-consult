'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import {
  FaArrowCircleRight,
  FaCode,
  FaHeart,
  FaLightbulb,
} from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    icon: <FaLightbulb />,
    title: 'Strategy First',
    desc: 'We start with your goals, not just visuals. Every project is backed by a clear growth plan.',
  },
  {
    icon: <FaCode />,
    title: 'Modern Technology',
    desc: "Built on today's most powerful stacks — fast, secure, scalable, and ready for tomorrow.",
  },
  {
    icon: <FaHeart />,
    title: 'Human-Centered',
    desc: 'We design experiences your customers will love and your team can manage with ease.',
  },
];

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
    <motion.article
      ref={ref}
      initial={{ y: 36, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

export default function AboutSnippet() {
  const boxRef = useRef(null);
  const boxInView = useInView(boxRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* faint blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-[#021823]/[0.022] translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#d4a843]/[0.05] -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Visual card ── */}
        <div ref={boxRef} className="relative">
          <motion.article
            initial={{ x: -50, opacity: 0 }}
            animate={boxInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease }}
            className="relative rounded-3xl overflow-hidden max-w-[420px] aspect-[4/5]"
          >
            <div
              className="absolute inset-0 opacity-[0.7]"
              style={{
                backgroundImage: "url('bg-2.png')",
                backgroundSize: '420px 600px',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* gold left stripe */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#d4a843]" />

            {/* interior copy */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-[#021823]/60 max-h-[300px] items-start mt-[150px] md:mt-[320px]">
              <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Who We Are
              </p>
              <h3 className="text-white text-xl md:text-3xl font-extrabold leading-tight mb-4">
                Tech built for everyone
              </h3>
              <p className="text-white/50 text-sm md:text-md leading-relaxed">
                TechSisConsult is a modern tech agency empowering businesses
                with smart digital solutions — websites, stores, and automation
                that drive real growth.
              </p>
            </div>
          </motion.article>

          {/* floating stat badge */}
          {/* <motion.article
            initial={{ opacity: 0, scale: 0.82, y: 20 }}
            animate={boxInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="absolute -bottom-5 -right-3 bg-[#d4a843] rounded-2xl px-6 py-5 shadow-xl shadow-[#d4a843]/25"
          >
            <p className="text-[#021823] text-3xl font-extrabold">98%</p>
            <p className="text-[#021823]/70 text-xs font-semibold mt-0.5">
              Client Retention Rate
            </p>
          </motion.article> */}
        </div>

        {/* ── Text side ── */}
        <div className="flex flex-col gap-6">
          <Reveal delay={0.08}>
            <p className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.2em]">
              About Us
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="text-4xl xl:text-5xl font-extrabold text-[#021823] leading-tight">
              Your business deserves a powerful digital presence
            </h2>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="text-gray-500 text-base leading-relaxed">
              We combine strategic thinking with cutting-edge technology to help
              modern businesses grow online — from the ground up, or with a bold
              redesign. We don&apos;t just build websites; we build digital
              growth engines.
            </p>
          </Reveal>

          {/* pillars */}
          <div className="flex flex-col gap-4 mt-1">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.3 + i * 0.1}>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#021823]/6 group-hover:bg-[#021823] text-[#021823] group-hover:text-[#d4a843] flex items-center justify-center transition-all duration-300">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-[#021823] font-bold text-sm mb-1">
                      {p.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.62}>
            <Link
              href="/services#services-grid"
              className="inline-flex items-center gap-2 bg-[#021823] hover:bg-[#021823]/90 text-white font-bold text-sm px-7 py-3.5 rounded-t-xl rounded-r-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-px w-fit mt-2"
            >
              Explore Our Services
              <FaArrowCircleRight />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
