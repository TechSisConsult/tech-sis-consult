'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { FaCheck } from 'react-icons/fa6';
import FounderImage from '../../../public/founder.jpeg';

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
    <motion.article
      ref={ref}
      initial={{ y: 32, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.article>
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
    <section className="pt-15 mt-[70px] bg-gradient-to-r from-white to-[#d4a843] overflow-hidden rounded-r-[25%]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left — copy */}
          <div className="flex flex-col gap-7">
            <Reveal delay={0.13}>
              <h2 className="text-4xl xl:text-[2.8rem] font-extrabold text-[#021823] leading-[1.1]">
                We Help Businesses Grow Through{' '}
                <span className="text-[#d4a843]">
                  Smart Digital Solutions
                </span>{' '}
              </h2>
            </Reveal>

            <Reveal delay={0.27}>
              <p className="text-gray-500 text-base leading-relaxed">
                Social media can help you get attention, but it doesn&apos;t
                fully represent your brand. Important details can be scattered,
                credibility isn&apos;t always clear at first glance, and
                potential customers often have no single place to understand who
                you are, what you offer, and why you should be trusted.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="text-gray-500 text-base leading-relaxed">
                That&apos;s where a well-built website changes everything. It
                brings structure to your business online. It organizes your
                services, communicates your value clearly, and builds trust
                instantly — without needing constant explanation or
                back-and-forth.
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
                <p className="text-[#021823] text-xs font-bold uppercase tracking-widest">
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
            <motion.article
              initial={{ x: 50, opacity: 0 }}
              animate={imgInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease }}
              className="relative rounded-3xl overflow-hidden bg-[#021823] aspect-[4/4] max-w-[420px] ml-auto"
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

              <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-[#021823] via-[#021823]/80 to-transparent">
                <p className="text-white text-lg font-extrabold leading-snug">
                  Fatima Oyiza Jimoh
                </p>
                <p className="text-[#d4a843] text-[10px] font-bold uppercase tracking-widest mb-1.5">
                  Team Lead
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
