'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

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
      className="inline-block w-[3px] h-[0.85em] bg-[#d4a843] align-middle ml-1 rounded-sm"
    />
  );
}

export default function Hero() {
  const LINE_1 = 'Great Websites';
  const LINE_2 = 'builds Thriving Businesses';

  /* type line 1 first, then line 2 */
  const { displayed: text1, done: done1 } = useTypewriter(LINE_1, 60, 700);
  const { displayed: text2, done: done2 } = useTypewriter(
    done1 ? LINE_2 : '',
    55,
    120,
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ffffff] via-[#021823] to-[#f7bb3b]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pt-28 pb-10 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          {/* ── Heading ── */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-white font-black tracking-[-0.06em] leading-[1.08]
              text-[32px] sm:text-[40px] md:text-[58px] lg:text-[70px]"
          >
            {/* ── video card — Davelaw ── */}
            <span className="inline-block mx-2 sm:mx-4 align-middle">
              <div className="relative overflow-hidden rounded-2xl border shadow-2xl">
                <div className="relative h-16 w-24 sm:h-20 sm:w-32 md:h-28 md:w-44">
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
            <span>
              {text1}
              {!done1 && <Cursor visible={true} />}
            </span>

            <br />
            <span>
              {text2}
              {done1 && <Cursor visible={!done2 || true} />}
            </span>

            {/* ── image card — Hospital ── */}
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
            className="mx-auto mt-10 max-w-2xl leading-9 text-white/65 text-sm md:text-xl"
          >
            Premium websites that generate leads, build trust and help your
            business grow.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          >
            <Link
              href="/contact"
              className="rounded-2xl bg-[#d4a843] text-[12px] sm:text-[16px] px-5 py-3 sm:px-8 sm:py-5 font-bold text-[#021823] transition hover:scale-105"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 text-[12px] sm:text-[16px] px-5 py-3 sm:px-8 sm:py-5 font-bold text-white transition hover:border-[#d4a843]"
            >
              View Portfolio
              <FaArrowRight className="text-[#d4a843]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
