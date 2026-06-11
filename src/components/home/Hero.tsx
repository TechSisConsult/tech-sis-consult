'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdArrowCircleDown, MdArrowLeft, MdArrowRight } from 'react-icons/md';

const SLIDES = [
  {
    id: 1,
    bg: '/bg-1.png',
    bgGradient: 'from-[#001f30] via-[#003049] to-[#002540]',
    accent: '#d4a843',
    badge: 'Business Websites',
    headline: ['Turn More Website', 'Visitors Into', 'Paying Customers.'],
    highlight: 2,
    sub: 'We build professional business websites designed to increase trust, generate leads, and help your business grow online.',
    cta1: { label: 'Get My Website', href: '/contact' },
    cta2: { label: 'See Our Work', href: '/portfolio' },
    shape: '#d4a843',
  },
  {
    id: 2,
    bg: '/bg-2.png',
    bgGradient: 'from-[#1a0e00] via-[#2d1a00] to-[#1a0e00]',
    accent: '#003049',
    badge: 'E-commerce Stores',
    headline: ['Start Selling Online', 'Even While', 'You Sleep.'],
    highlight: 2,
    sub: 'We create e-commerce stores that make it easy for customers to discover, buy, and pay for your products anytime, anywhere.',
    cta1: { label: 'Launch My Store', href: '/contact' },
    cta2: { label: 'Our Services', href: '/services' },
    shape: '#d4a843',
  },
  {
    id: 3,
    bg: '/bg-3.png',
    bgGradient: 'from-[#001a20] via-[#002535] to-[#001520]',
    accent: '#d4a843',
    badge: 'Business Automation',
    headline: [
      'Spend Less Time',
      'on Admin.',
      'More Time Growing Your Business.',
    ],
    highlight: 1,
    sub: 'Automate bookings, payments, customer follow-ups, and lead management so your business runs smoother every day.',
    cta1: { label: 'Automate My Business', href: '/contact' },
    cta2: { label: 'Learn How', href: '/services' },
    shape: '#d4a843',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.75, ease },
  }),
};

const textVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease, delay: 0.15 + i * 0.12 },
  }),
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    const n = (current + 1) % SLIDES.length;
    setDirection(1);
    setCurrent(n);
  }, [current]);

  const prev = useCallback(() => {
    const n = (current - 1 + SLIDES.length) % SLIDES.length;
    setDirection(-1);
    setCurrent(n);
  }, [current]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = SLIDES[current];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        height: 'calc(100vh - 0px)',
        minHeight: '600px',
        paddingTop: '109px',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.article
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {slide.bg ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}
            />
          )}

          <div className="absolute inset-0 bg-[#003049]/60" />

          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d4a843 1.2px, transparent 1.2px)',
              backgroundSize: '38px 38px',
            }}
          />

          <div className="relative h-full max-w-[1280px] mx-auto px-6 lg:px-16 flex flex-col justify-center gap-7 pt-[100px]">
            {/* Badge */}
            <motion.article
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 bg-[#d4a843]/10 text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-md backdrop-blur-sm">
                {slide.badge}
              </span>
            </motion.article>

            <h1 className="flex flex-col gap-1">
              {slide.headline.map((line, i) => (
                <motion.span
                  key={`${slide.id}-line-${i}`}
                  custom={i + 1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className={`block font-extrabold leading-[1.08] tracking-tight text-[2.6rem] sm:text-5xl xl:text-[3.8rem] ${
                    i === slide.highlight ? 'text-[#d4a843]' : 'text-white'
                  }`}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              custom={slide.headline.length + 1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {slide.sub}
            </motion.p>

            <motion.article
              custom={slide.headline.length + 2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href={slide.cta1.href}
                className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#003049] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#d4a843]/30 hover:-translate-y-0.5"
              >
                {slide.cta1.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href={slide.cta2.href}
                className="inline-flex items-center gap-2 border-2 border-white/25 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
              >
                {slide.cta2.label}
              </a>
            </motion.article>
          </div>
        </motion.article>
      </AnimatePresence>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/8 hover:bg-[#d4a843] border border-white/15 hover:border-[#d4a843] text-white/70 hover:text-[#003049] flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <MdArrowLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/8 hover:bg-[#d4a843] border border-white/15 hover:border-[#d4a843] text-white/70 hover:text-[#003049] flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <MdArrowRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        {/* dots */}
        <div className="flex gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-2 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{
                width: i === current ? '2rem' : '0.5rem',
                background: 'rgba(255,255,255,0.2)',
              }}
            >
              {i === current && !paused && (
                <motion.span
                  key={current}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: '#d4a843' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                />
              )}
              {i === current && paused && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ background: '#d4a843' }}
                />
              )}
            </button>
          ))}
        </div>

        <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
          {String(current + 1).padStart(2, '0')} /{' '}
          {String(SLIDES.length).padStart(2, '0')}
        </p>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`flex flex-col gap-1 text-left transition-all duration-300 ${
              i === current ? 'opacity-100' : 'opacity-35 hover:opacity-60'
            }`}
          >
            <div
              className={`w-1 h-8 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#d4a843]' : 'bg-white/30'
              }`}
            />
          </button>
        ))}
      </div>

      <motion.article
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 right-8 lg:right-16 hidden sm:flex flex-col items-center gap-1.5 text-white/25 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.22em] uppercase font-semibold rotate-90 mb-2">
          Scroll
        </span>
        <MdArrowCircleDown className="w-6 h-6" />
      </motion.article>
    </section>
  );
}
