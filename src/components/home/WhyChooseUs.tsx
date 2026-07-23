'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

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
      initial={{ y: 36, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

export default function WhyChooseUs() {
  const boxRef = useRef(null);

  const boxInView = useInView(boxRef, {
    once: true,
    margin: '-100px',
  });

  return (
    <section id="about" className="relative overflow-hidden bg-white py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#f7bb3b]/5 blur-[130px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#021823]/5 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#021823 1px,transparent 1px),
              linear-gradient(to bottom,#021823 1px,transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-20 items-center">
          <div ref={boxRef} className="relative">
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              animate={
                boxInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.9,
                ease,
              }}
              className="relative overflow-hidden rounded-[36px] shadow-[0_40px_90px_rgba(2,24,35,.18)]"
            >
              {/* Website Preview */}

              <div
                className="relative aspect-[16/10]"
                style={{
                  backgroundImage: "url('/client-sites/davelaw.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center',
                }}
              >
                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#021823]/95 via-[#021823]/50 to-transparent" />

                {/* Gold Glow */}

                <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#f7bb3b]/20 blur-[120px]" />

                {/* Featured Label */}

                <div className="absolute left-8 top-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-5 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#f7bb3b]" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                      Featured Project
                    </span>
                  </div>
                </div>

                {/* Bottom Text */}

                <div className="absolute bottom-0 inset-x-0 p-10">
                  <div className="max-w-lg">
                    <p className="text-[#f7bb3b] text-xs uppercase tracking-[0.22em] font-bold">
                      Renewable Energy Website
                    </p>

                    <h3 className="mt-3 text-4xl font-black leading-tight text-white">
                      Helping Solar Companies
                      <br />
                      Generate More Leads
                    </h3>

                    <p className="mt-5 text-[15px] leading-8 text-white/75">
                      A premium digital experience designed to build trust,
                      increase enquiries and position Davelaw Technologies as a
                      leader in renewable energy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Glass Review Card */}

              {/* <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={
                  boxInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                  ease,
                }}
                className="absolute right-8 bottom-8 w-[320px] rounded-[30px] border border-white/15 bg-white/10 backdrop-blur-3xl p-7 shadow-2xl"
              >
                <div className="flex gap-1 text-[#f7bb3b]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <p className="mt-5 text-[15px] leading-7 italic text-white/90">
                  &quot;TechSis Consult transformed our online presence into
                  something that truly reflects the quality of our
                  business.&quot;
                </p>

                <div className="my-6 h-px bg-white/10" />

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#f7bb3b] to-[#bf8b12]" />

                  <div>
                    <h4 className="font-bold text-white">
                      Davelaw Technologies
                    </h4>

                    <p className="text-xs text-white/60">
                      Renewable Energy Company
                    </p>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>

          <div className="flex flex-col">
            <Reveal delay={0.05}>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#f7bb3b]/20 bg-[#f7bb3b]/8 px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#f7bb3b]" />

                <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#8d6c1f]">
                  Why TechSis Consult
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="mt-8 text-[42px] leading-[1.05] lg:text-[56px] font-black tracking-[-0.04em] text-[#021823]">
                We Build Websites
                <br />
                That Actually
                <span className="relative ml-3 inline-block text-[#f7bb3b]">
                  Grow Businesses
                  <span className="absolute bottom-2 left-0 h-3 w-full rounded-full bg-[#f7bb3b]/20 -z-10" />
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-[15px] leading-8 text-slate-600">
                We combine business strategy, premium design and modern
                technology to create websites that generate enquiries, build
                credibility and help ambitious businesses grow around the clock.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-[#021823]/10 via-[#021823]/5 to-transparent" />
            </Reveal>

            <Reveal delay={0.7}>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#021823] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  View Our Work
                  <FaArrowCircleRight className="text-[#f7bb3b]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 px-8 py-4 font-semibold text-[#021823] transition-all duration-300 hover:border-[#021823]"
                >
                  Book Strategy Call
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
