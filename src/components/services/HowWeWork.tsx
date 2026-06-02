'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  FaArrowCircleRight,
  FaBookOpen,
  FaCode,
  FaHeart,
  FaSearch,
} from 'react-icons/fa';
import { FaBullseye, FaRocket } from 'react-icons/fa6';
import { MdChatBubble, MdChatBubbleOutline } from 'react-icons/md';

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
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 28, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We start by deeply understanding your business — your goals, your audience, your competitors, and what success actually looks like for you. No assumptions.',
    icon: <FaSearch className="w-6 h-6" />,
    duration: 'Day 1–2',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    desc: "We map out the full project scope — sitemap, wireframes, tech stack, timeline, and milestones. You see exactly what's being built before a single line of code is written.",
    icon: <FaBookOpen className="w-6 h-6" />,
    duration: 'Day 3–5',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'We create high-fidelity mockups of your project — every page, every screen. You review, give feedback, and approve before we move into development.',
    icon: <FaHeart className="w-6 h-6" />,
    duration: 'Week 1–2',
  },
  {
    number: '04',
    title: 'Build',
    desc: 'Development begins. We build clean, fast, and scalable — with regular check-ins and a staging link so you can watch your project come to life in real time.',
    icon: <FaCode className="w-6 h-6" />,
    duration: 'Week 2–4',
  },
  {
    number: '05',
    title: 'Review & Launch',
    desc: "We run full quality checks — speed, mobile responsiveness, forms, links, SEO. Once you're happy, we go live. Then we celebrate together.",
    icon: <FaRocket className="w-6 h-6" />,
    duration: 'Final week',
  },
  {
    number: '06',
    title: 'Support',
    desc: "Launch day isn't the end — it's the beginning. We provide 30 days of post-launch support, then ongoing maintenance packages to keep everything running perfectly.",
    icon: <FaBullseye className="w-6 h-6" />,
    duration: 'Ongoing',
  },
];

export default function HowWeWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* header */}
        <div
          ref={headerRef}
          className="grid lg:grid-cols-2 gap-10 items-end mb-16"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em] mb-3"
            >
              How We Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-4xl xl:text-5xl font-extrabold text-[#003049] leading-tight"
            >
              Our Process —{' '}
              <span className="text-[#d4a843]">No Surprises,</span> Ever
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-gray-500 text-base leading-relaxed"
          >
            Every project follows the same proven six-step framework — from
            understanding your goals on Day 1, to supporting your growth long
            after launch. You always know where we are and what comes next.
          </motion.p>
        </div>

        {/* steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={0.06 + i * 0.08}>
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#003049]/12 hover:shadow-xl hover:shadow-[#003049]/5 hover:-translate-y-1.5 transition-all duration-300 cursor-default h-full flex flex-col gap-5 overflow-hidden">
                {/* large number watermark */}
                <span className="absolute -top-3 -right-1 text-[80px] font-black text-[#003049]/[0.04] leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                {/* icon + duration row */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#003049]/6 group-hover:bg-[#003049] text-[#003049] group-hover:text-[#d4a843] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    {step.duration}
                  </span>
                </div>

                {/* text */}
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4a843] text-[11px] font-extrabold">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-[#003049] text-lg font-extrabold">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* hover bottom bar */}
                <div className="h-0.5 w-0 group-hover:w-10 bg-[#d4a843] rounded-full transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* bottom callout strip */}
        <Reveal delay={0.1} className="mt-12">
          <div className="bg-[#003049] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4a843]/20 flex items-center justify-center flex-shrink-0">
                <MdChatBubbleOutline className="w-5 h-5 text-[#d4a843]" />
              </div>
              <p className="text-white font-semibold text-sm">
                Have questions about our process?{' '}
                <span className="text-white/50 font-normal">
                  We&apos;re happy to walk you through it on a free call.
                </span>
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#003049] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg flex-shrink-0 whitespace-nowrap"
            >
              Hop on a free call
              <FaArrowCircleRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
