'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FaBolt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';

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

const MVV = [
  {
    type: 'Mission',
    icon: <FaBolt />,
    headline: "What We're Here to Do",
    statement:
      'To equip every ambitious business with the smart digital tools, strategy, and presence they need to grow — removing the barrier between great businesses and the customers who need them.',
    accent: 'bg-[#021823] text-white',
    iconBg: 'bg-[#d4a843]/20 text-[#d4a843]',
    tag: 'Our Mission',
  },
  {
    type: 'Vision',
    icon: <FaEye />,
    headline: "Where We're Going",
    statement:
      'A future where no business — regardless of size or location — is left behind digitally. Where African businesses in particular have world-class digital infrastructure and compete confidently on a global stage.',
    accent: 'bg-[#d4a843] text-[#021823]',
    iconBg: 'bg-[#021823]/15 text-[#021823]',
    tag: 'Our Vision',
  },
];

const VALUES = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Integrity',
    desc: 'We tell you what you need to hear, not what you want to hear. Honest pricing, transparent timelines, real results.',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Excellence',
    desc: 'Good enough is never good enough. Every project — regardless of budget — gets our full attention and highest standard of craft.',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Empathy',
    desc: "We treat every client's business as if it were our own. Your goals, your stress, your wins — we take all of it personally.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: 'Growth Mindset',
    desc: 'Technology evolves fast. We stay ahead so our clients stay ahead — always learning, always levelling up.',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: 'Inclusivity',
    desc: "Smart tech shouldn't be a privilege. We're committed to making world-class digital solutions accessible to businesses of every size.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Reliability',
    desc: "We deliver on time and we're here after launch. Launching your site is the beginning of our relationship, not the end.",
  },
];

export default function MissionVisionValues() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-20">
        {/* ── Section header ── */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em] mb-3"
          >
            What Drives Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl xl:text-5xl font-extrabold text-[#021823] leading-tight"
          >
            Mission, Vision &amp; <span className="text-[#d4a843]">Values</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {MVV.map((item, i) => (
            <Reveal key={item.type} delay={i * 0.15}>
              <div
                className={`relative rounded-3xl overflow-hidden p-9 lg:p-11 ${item.accent} h-full`}
              >
                {/* bg dot texture */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '26px 26px',
                  }}
                />
                {/* glow blob */}
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                  style={{
                    background:
                      item.type === 'Mission'
                        ? 'radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(0,48,73,0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                <div className="relative z-10 flex flex-col gap-5 h-full">
                  {/* tag + icon row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full ${
                        item.type === 'Mission'
                          ? 'bg-[#d4a843]/15 text-[#d4a843]'
                          : 'bg-[#021823]/12 text-[#021823]'
                      }`}
                    >
                      {item.tag}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold">{item.headline}</h3>

                  <p
                    className={`text-base leading-relaxed flex-1 ${
                      item.type === 'Mission'
                        ? 'text-white/70'
                        : 'text-[#021823]/75'
                    }`}
                  >
                    {item.statement}
                  </p>

                  {/* decorative bottom line */}
                  <div
                    className={`h-1 w-16 rounded-full ${
                      item.type === 'Mission'
                        ? 'bg-[#d4a843]/40'
                        : 'bg-[#021823]/25'
                    }`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Values grid ── */}
        <div>
          <Reveal delay={0.05} className="text-center mb-12">
            <p className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em] mb-3">
              Our Core Values
            </p>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-[#021823] leading-tight">
              The Standards We Hold Ourselves To
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.08 + i * 0.08}>
                <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#021823]/12 hover:shadow-xl hover:shadow-[#021823]/5 hover:-translate-y-1.5 transition-all duration-300 cursor-default h-full flex flex-col gap-4">
                  {/* icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#021823]/6 group-hover:bg-[#021823] text-[#021823] group-hover:text-[#d4a843] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-[#021823] font-extrabold text-base mb-2">
                      {v.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  {/* hover accent bar */}
                  <div className="h-0.5 w-0 group-hover:w-12 bg-[#d4a843] rounded-full transition-all duration-500 mt-auto" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
