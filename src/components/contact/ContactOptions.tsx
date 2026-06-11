'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MdCalendarMonth } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;

const OPTIONS = [
  {
    id: 'call',
    emoji: <MdCalendarMonth className="w-12 h-12" />,
    title: 'Book a Free Strategy Call',
    desc: "Tell us about your project over a 30-minute call. We'll listen, ask the right questions, and tell you exactly how we can help — no pitch, no pressure.",
    cta: 'Schedule a Call',
    ctaStyle: 'bg-[#003049] text-white hover:bg-[#003049]/90 hover:shadow-lg',
    highlight: false,
    /*
      ── HOW TO CONNECT GOOGLE CALENDAR ──
      1. Go to calendar.google.com → Settings → Appointment Schedules
      2. Create a new schedule (30 min, your availability)
      3. Copy the booking link and replace the href below
    */
    href: 'https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID',
    external: true,
  },
  {
    id: 'form',
    emoji: '📝',
    title: 'Request a Quote',
    desc: "Fill out our project form and we'll send you a tailored proposal within 24 hours — including scope, timeline, and exact pricing.",
    cta: 'Request a Quote',
    ctaStyle:
      'bg-[#d4a843] text-[#003049] hover:bg-[#bf9630] hover:shadow-lg hover:shadow-[#d4a843]/25',
    highlight: true,
    href: '#contact-form',
    external: false,
  },
  {
    id: 'whatsapp',
    emoji: '💬',
    title: 'Chat on WhatsApp',
    desc: "Have a quick question or just want to say hello? Send us a message on WhatsApp and we'll get back to you fast.",
    cta: 'WhatsApp Us',
    ctaStyle:
      'bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:shadow-lg hover:shadow-[#25D366]/25',
    highlight: false,
    /*
      ── HOW TO SET UP WHATSAPP LINK ──
      Replace YOUR_NUMBER with your WhatsApp number in international format
      (no + sign, no spaces). E.g. 2348012345678
      The text after ?text= is the pre-filled message.
    */
    href: 'https://wa.me/YOUR_NUMBER?text=Hi%20TechSisConsult!%20I%20have%20a%20question%20about%20your%20services.',
    external: true,
  },
];

export default function ContactOptions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div ref={ref} className="text-center max-w-xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em] mb-3"
          >
            Choose Your Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl xl:text-4xl font-extrabold text-[#003049] leading-tight"
          >
            How Would You Like to{' '}
            <span className="text-[#d4a843]">Reach Us?</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {OPTIONS.map((opt, i) => (
            <motion.div
              key={opt.id}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease }}
              className={`relative rounded-3xl border-2 p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                opt.highlight
                  ? 'border-[#d4a843]/40 bg-[#d4a843]/4 hover:shadow-[#d4a843]/10'
                  : 'border-gray-100 bg-white hover:border-[#003049]/10 hover:shadow-[#003049]/6'
              }`}
            >
              <div className="flex flex-col gap-2">
                <span className="text-4xl leading-none">{opt.emoji}</span>
              </div>

              {/* text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-[#003049] text-xl font-extrabold">
                  {opt.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {opt.desc}
                </p>
              </div>

              {/* CTA */}
              <a
                href={opt.href}
                target={opt.external ? '_blank' : undefined}
                rel={opt.external ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${opt.ctaStyle}`}
              >
                {opt.cta}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
