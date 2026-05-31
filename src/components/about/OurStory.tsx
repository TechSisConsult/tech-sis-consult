'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

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
      initial={{ y: 32, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const MILESTONES = [
  {
    year: '2019',
    title: 'The Problem We Saw',
    desc: "Watching talented business owners — with real products, real passion, real value — go unnoticed online simply because they didn't have a proper website. Not because they couldn't afford it, but because no one had shown them what was possible.",
  },
  {
    year: '2020',
    title: 'The Decision to Act',
    desc: 'We stopped waiting for someone else to fix it. TechSisConsult was founded on one belief: every business deserves a digital presence that works as hard as its owner does — even at 2am on a Sunday.',
  },
  {
    year: '2022',
    title: 'Expanding the Vision',
    desc: 'It was never just about websites. We expanded into ecommerce, redesigns, and full business automation — building complete digital ecosystems that let our clients earn, grow, and scale without being chained to their desks.',
  },
  {
    year: 'Now',
    title: 'Building the Future',
    desc: 'Today, TechSisConsult is on a mission to help 500+ businesses across Africa and beyond build the digital presence they deserve. Boutique by choice. Relentless by nature.',
  },
];

const WHAT_WE_BELIEVE = [
  "A website isn't an expense — it's your best-performing employee.",
  'Your business should earn revenue while you sleep.',
  "Great design and smart tech aren't just for big corporations.",
  'Every business owner deserves a digital partner who actually cares.',
];

export default function OurStory() {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left — copy */}
          <div className="flex flex-col gap-7">
            <Reveal delay={0.05}>
              <p className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em]">
                How It Started
              </p>
            </Reveal>

            <Reveal delay={0.13}>
              <h2 className="text-4xl xl:text-[2.8rem] font-extrabold text-[#003049] leading-[1.1]">
                I Watched Great Businesses Stay{' '}
                <span className="text-[#d4a843]">Invisible Online.</span> So I
                Did Something About It.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-gray-500 text-base leading-relaxed">
                I kept meeting the same type of person — a driven, hard-working
                business owner with a genuinely great product or service,
                hustling every single day, yet barely visible to the customers
                who were already searching for exactly what they offered.
              </p>
            </Reveal>

            <Reveal delay={0.27}>
              <p className="text-gray-500 text-base leading-relaxed">
                The problem wasn&apos;t effort. It was the absence of the right
                digital foundation. No website, or one that was outdated and
                untrustworthy. No way for customers to find them at midnight, on
                a holiday, on the other side of the country. No system capturing
                leads while they slept, no storefront open 24 hours a day, 7
                days a week.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="text-gray-500 text-base leading-relaxed">
                A well-built website isn&apos;t just a page on the internet.
                It&apos;s your most tireless salesperson — always on, always
                professional, always converting. It builds credibility before
                you even pick up the phone. It sells while you sleep. It opens
                doors you didn&apos;t even know existed. And most businesses
                were operating without it.
              </p>
            </Reveal>

            <Reveal delay={0.41}>
              <p className="text-gray-600 text-base leading-relaxed font-semibold border-l-4 border-[#d4a843] pl-5 italic">
                &ldquo;That&apos;s exactly why TechSisConsult exists — to give
                every modern business the smart digital foundation it needs to
                grow, compete, and win online.&rdquo;
              </p>
            </Reveal>

            {/* what we believe pills */}
            <Reveal delay={0.48}>
              <div className="flex flex-col gap-3 mt-1">
                <p className="text-[#003049] text-xs font-bold uppercase tracking-widest">
                  We believe that:
                </p>
                {WHAT_WE_BELIEVE.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#d4a843]/15 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#d4a843]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div ref={imgRef} className="relative lg:sticky lg:top-12">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={imgInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease }}
              className="relative rounded-3xl overflow-hidden bg-[#003049] aspect-[4/4] max-w-[420px] ml-auto"
            >
              <Image
                src="/founder.png"
                fill
                alt="Founder"
                className="object-cover"
              />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #d4a843 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />
              <div className="absolute top-0 right-0 w-1.5 h-full bg-[#d4a843]" />

              {/* Large quote mark watermark */}
              <div className="absolute top-8 left-8 text-[#d4a843]/10 text-[120px] font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-[#003049] via-[#003049]/80 to-transparent">
                <p className="text-white text-lg font-extrabold leading-snug">
                  Fatima Oyiza Jimoh
                </p>
                <p className="text-[#d4a843] text-[10px] font-bold uppercase tracking-widest mb-1.5">
                  Founder, TechSisConsult
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
