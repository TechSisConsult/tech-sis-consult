'use client';

import { motion } from 'motion/react';
import { FormEvent, useEffect, useState } from 'react';
import { FaCheckCircle, FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';
import Link from 'next/link';

const WHATSAPP_NUMBER = '2347026766769';
const BUSINESS_EMAIL = 'hello@techsisconsult.com';

/*
  ── PROMO CONFIG ─────────────────────────────────────────────
  October 1, 2026
  Nigerian time: WAT / UTC+1
*/
const PROMO_START = new Date('2026-10-01T00:00:00+01:00').getTime();
const PROMO_END = new Date('2026-10-01T23:59:59+01:00').getTime();

/*
  ── DEV MODE ─────────────────────────────────────────────────
  Set to true while testing/designing.
  Set to false before going live.
*/
const DEV_PREVIEW = true;

const ease = [0.22, 1, 0.36, 1] as const;

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(now: number): TimeLeft {
  const diff = PROMO_END - now;

  if (diff <= 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/* ── Expired page ─────────────────────────────────────────── */

function ExpiredPage() {
  return (
    <section className="min-h-screen bg-[#021823] flex items-center justify-center px-6">
      <div className="text-center max-w-lg flex flex-col items-center gap-6">
        <span className="text-6xl">🇳🇬</span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          The October 1st Offer Has Ended
        </h1>

        <p className="text-white/55 text-base leading-relaxed">
          All 3 spots have been claimed — thank you to everyone who reached out.
          Keep an eye on our next promo or book a regular strategy call.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact#strategy-call"
            className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-px"
          >
            Book a Free Strategy Call
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#d4a843] text-white hover:text-[#d4a843] font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Main promo page ──────────────────────────────────────── */

export default function PromoPage() {
  const [now, setNow] = useState(() => Date.now());

  const [form, setForm] = useState({
    name: '',
    business: '',
    whatsapp: '',
    email: '',
    message: '',
  });

  /*
    Keep the countdown and page status updated every second.
  */
  useEffect(() => {
    const id = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const promoActive = DEV_PREVIEW || (now >= PROMO_START && now < PROMO_END);

  const promoExpired = !DEV_PREVIEW && now >= PROMO_END;

  const timeLeft = getTimeLeft(now);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const buildMessage = () =>
    `Hello TechSis Consult,

I want to claim one of the 3 October 1 website offer slots.

Name: ${form.name}
Business: ${form.business}
WhatsApp: ${form.whatsapp}
Email: ${form.email}

What I need:
${form.message}`;

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        buildMessage(),
      )}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleEmail = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
      'October 1 Website Offer — 50% Off',
    )}&body=${encodeURIComponent(buildMessage())}`;
  };

  if (promoExpired) {
    return <ExpiredPage />;
  }

  if (!promoActive) {
    return <ExpiredPage />;
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#021823] text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#f7bb3b]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#f7bb3b]/10 blur-[120px]" />
      </div>

      {/* Urgency bar */}
      <div className="relative z-20 border-b border-white/10 bg-[#f7bb3b] text-[#021823]">
        <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-center gap-3 px-4 text-center">
          <span className="text-xs font-black tracking-[0.14em] sm:text-sm">
            OCTOBER 1 ONLY
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#021823] sm:block" />

          <span className="text-xs font-bold sm:text-sm">
            3 BUSINESSES · 50% OFF
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-44px)] max-w-7xl items-center px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          {/* =====================================================
              LEFT — HEADLINE + OFFER
          ====================================================== */}

          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7bb3b]/30 bg-[#f7bb3b]/10 px-4 py-2"
            >
              <span className="text-[#f7bb3b]">🇳🇬</span>

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f7bb3b] sm:text-xs">
                Independence Day Special
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="max-w-3xl text-[42px] font-black leading-[0.98] tracking-[-0.055em] sm:text-[56px] lg:text-[64px]"
            >
              Turn Your Business Into a{' '}
              <span className="text-[#f7bb3b]">24/7 Sales Asset</span> — Without
              Spending the Usual Price
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
            >
              For October 1 only, 3 businesses can get a professionally
              designed, conversion-focused website for 50% off — so prospects
              can understand, trust, and contact you before they ever call.
            </motion.p>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-7"
            >
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                <FaClock className="text-[#f7bb3b]" />

                <span>Offer closes October 1 at 11:59 PM</span>
              </div>

              <div className="flex items-center gap-2">
                {[
                  {
                    value: timeLeft.hours,
                    label: 'Hours',
                  },
                  {
                    value: timeLeft.minutes,
                    label: 'Minutes',
                  },
                  {
                    value: timeLeft.seconds,
                    label: 'Seconds',
                  },
                ].map((unit, i) => (
                  <div key={unit.label} className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="font-bold text-[#f7bb3b]">:</span>
                    )}

                    <div className="min-w-[56px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur-md">
                      <div className="text-xl font-black text-white sm:text-2xl">
                        {pad(unit.value)}
                      </div>

                      <div className="text-[9px] uppercase tracking-wider text-white/40">
                        {unit.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {[
                'Business & service websites',
                'Landing pages',
                'Small corporate websites',
                'Fast, focused delivery',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-white/65 sm:text-sm"
                >
                  <FaCheckCircle className="shrink-0 text-[#f7bb3b]" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — FORM
          ====================================================== */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            onSubmit={handleWhatsApp}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-7 lg:p-8"
          >
            {/* Form heading */}
            <div className="mb-6">
              <div className="mb-3 inline-flex items-center rounded-full bg-[#f7bb3b]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f7bb3b]">
                50% OFF · 3 SPOTS
              </div>

              <h2 className="text-2xl font-black sm:text-3xl">
                Claim Your October 1 Spot
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Tell us about your business and what you need. We&apos;ll review
                your details and get back to you.
              </p>
            </div>

            {/* Fields */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  field: 'name',
                  type: 'text',
                  placeholder: 'Your name',
                },
                {
                  field: 'business',
                  type: 'text',
                  placeholder: 'Business name',
                },
                {
                  field: 'whatsapp',
                  type: 'tel',
                  placeholder: 'WhatsApp number',
                },
                {
                  field: 'email',
                  type: 'email',
                  placeholder: 'Email address',
                },
              ].map(({ field, type, placeholder }) => (
                <input
                  key={field}
                  required
                  type={type}
                  placeholder={placeholder}
                  value={form[field as keyof typeof form]}
                  onChange={(e) =>
                    updateField(field as keyof typeof form, e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-[#f7bb3b]/60"
                />
              ))}

              <textarea
                required
                rows={4}
                placeholder="What would you like your website to help your business achieve?"
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/10 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-[#f7bb3b]/60 sm:col-span-2"
              />
            </div>

            {/* Buttons */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f7bb3b] px-5 py-3.5 text-sm font-black text-[#021823] transition hover:scale-[1.02] hover:bg-[#ffc84f]"
              >
                <FaWhatsapp />
                Send via WhatsApp
              </button>

              <button
                type="button"
                onClick={handleEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:border-[#f7bb3b]/50 hover:bg-white/10"
              >
                <FaEnvelope className="text-[#f7bb3b]" />
                Send via Email
              </button>
            </div>

            {/* Scope */}
            <p className="mt-5 text-center text-[10px] leading-4 text-white/35">
              Offer applies to qualifying standard business, service,
              landing-page and small corporate websites. Excludes e-commerce,
              marketplaces, web applications, custom portals and complex
              integrations.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
