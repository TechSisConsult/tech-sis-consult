'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import FounderImage from '../../../public/founder.png';
import { FaCheck } from 'react-icons/fa6';

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
                I Noticed Something Most Businesses Overlook{' '}
                <span className="text-[#d4a843]">
                  About Their Online Presence.
                </span>{' '}
                So I Did Something About It.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-gray-500 text-base leading-relaxed">
                I kept meeting hardworking business owners with strong products
                and real results — people already doing business, already
                serving customers, and even active on social media. But
                something was still missing: structure, clarity, and a central
                place where everything about their business truly lived.
              </p>
            </Reveal>

            <Reveal delay={0.27}>
              <p className="text-gray-500 text-base leading-relaxed">
                Social media helped them get attention, but it didn’t fully
                represent their brand. Important details were scattered,
                credibility wasn’t always clear at first glance, and potential
                customers often had no single place to understand who they were,
                what they offered, and why they should be trusted.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="text-gray-500 text-base leading-relaxed">
                That’s where a well-built website changes everything. It brings
                structure to your business online. It organizes your services,
                communicates your value clearly, and builds trust instantly —
                without needing constant explanation or back-and-forth.
              </p>
            </Reveal>

            <Reveal delay={0.41}>
              <p className="text-gray-600 text-base leading-relaxed font-semibold border-l-4 border-[#d4a843] pl-5 italic">
                “That’s exactly why TechSis Consult exists — to help modern
                businesses convert their online presence into something that
                consistently attract customers, builds trust instantly, and
                gives them a real advantage over competitors who still look
                unstructured online.”
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
                      <FaCheck className="w-3 h-3 text-[#d4a843]" />
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
                src={FounderImage}
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
