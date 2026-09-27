'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaBolt, FaCode } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { useEffect, useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Typewriter hook ── */
function useTypewriter(text: string, speed = 55, startDelay = 800) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayed('');
    setDone(false);

    const startTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ── Blinking cursor ── */
function Cursor({ visible }: { visible: boolean }) {
  return (
    <motion.span
      animate={{ opacity: visible ? [1, 0, 1] : 0 }}
      transition={
        visible
          ? { duration: 0.85, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 0 }
      }
      aria-hidden="true"
      className="inline-block w-[3px] h-[0.85em] bg-[#f7bb3b] align-middle ml-1 rounded-sm"
    />
  );
}

/* ── Highlight stack: horizontal row under CTAs on mobile/tablet, ── */
/* ── vertical floating stack on the right from xl breakpoint up ── */
const highlights = [
  { icon: <FaCheckCircle />, label: '98% Client Satisfaction' },
  { icon: <FaBolt />, label: 'Fast Turnaround' },
  { icon: <FaCode />, label: '100% Custom-Built' },
  { icon: <MdPeople />, label: 'Conversion-Focused Websites' },
];

function HighlightStack() {
  return (
    <div
      className="mt-10 flex flex-row flex-wrap justify-center gap-3
        xl:absolute xl:right-8 xl:top-1/2 xl:-translate-y-1/2
        xl:flex-col xl:flex-nowrap xl:justify-start xl:mt-0"
      style={{ zIndex: 2 }}
      aria-label="Why work with TechSis Consult"
    >
      {highlights.map((h, i) => (
        <motion.div
          key={h.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease }}
          className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md
            px-3 py-2 shadow-lg
            xl:gap-3 xl:px-4 xl:py-3 xl:w-64"
        >
          <span
            className="text-[#f7bb3b] text-base xl:text-lg shrink-0"
            aria-hidden="true"
          >
            {h.icon}
          </span>
          <span className="text-xs sm:text-sm xl:text-sm font-semibold tracking-wide text-[#021823] whitespace-nowrap">
            {h.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const LINE_1 = 'Websites that Sell';
  const LINE_2 = 'while You Sleep';

  const { displayed: text1, done: done1 } = useTypewriter(LINE_1, 60, 700);
  const { displayed: text2 } = useTypewriter(done1 ? LINE_2 : '', 55, 120);

  return (
    <section className="relative overflow-hidden min-h-screen">
      <Image
        src="/hero.jpg"
        alt="Hero-background-image"
        fill
        priority
        quality={100}
        className="object-cover object-center"
        style={{ zIndex: 0 }}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#021823]/90 via-[#021823]/60 to-[#f7bb3b]/30" />

      <div
        className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pt-28 pb-10 md:px-10"
        style={{ zIndex: 2 }}
      >
        <div className="mx-auto max-w-6xl w-full text-center">
          {/* ── Heading ── */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-white font-black tracking-[-0.06em] leading-[1.08]
              text-[32px] sm:text-[40px] md:text-[58px] lg:text-[70px]"
          >
            <span className="inline-block mx-2 sm:mx-4 align-middle">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <div className="relative h-16 w-24 sm:h-20 sm:w-32 md:h-36 md:w-60">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/client-sites/davelaw-home.png"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source
                      src="/client-sites/davelaw-demo.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
              </div>
            </span>

            {/* Line 1 */}
            <span>
              {text1}
              {!done1 && <Cursor visible />}
            </span>

            <br />

            {/* Line 2 */}
            <span>
              {text2}
              {done1 && <Cursor visible />}
            </span>

            {/* image card — Hospital */}
            <span className="inline-block mx-2 sm:mx-4 align-middle">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="relative h-16 w-24 sm:h-20 sm:w-32 md:h-28 md:w-44">
                  <Image
                    src="/client-sites/hospital-home.png"
                    alt=""
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src="/client-sites/hospital-services.png"
                    alt=""
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              </div>
            </span>
          </motion.h1>

          {/* ── Sub-heading ── */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl leading-9 rounded-xl text-[#ffffff]/85 border border-white/15 bg-white/5 backdrop-blur-md px-4 py-3 shadow-lg"
          >
            <span className="text-[#f7bb3b] sm:text-[#ffffff]/85">
              From first
            </span>{' '}
            glance to loyal customer: We build the brand that carries them
            through every step.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <Link
              href="/contact"
              className="rounded-2xl bg-[#f7bb3b] text-[12px] sm:text-[16px] px-5 py-3 sm:px-8 sm:py-5 font-bold text-[#021823] transition hover:scale-105"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 text-[12px] sm:text-[16px] px-5 py-3 sm:px-8 sm:py-5 font-bold  text-[#021823] bg-[white]/5 transition backdrop-blur-md shadow-lg hover:border-[#021823] hover:scale-105"
            >
              View Portfolio
              <FaArrowRight className="text-[#f7bb3b]" />
            </Link>
          </motion.div>

          {/* ── Highlight stack (horizontal on mobile/tablet, floats right on xl+) ── */}
          <HighlightStack />
        </div>
      </div>
    </section>
  );
}
