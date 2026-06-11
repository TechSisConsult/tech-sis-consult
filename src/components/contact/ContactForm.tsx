'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES = [
  'Business Website',
  'Ecommerce Store',
  'Website Redesign',
  'Business Automation',
  'Not sure yet — need advice',
];

const BUDGETS = [
  'Under ₦150,000',
  '₦150,000 – ₦350,000',
  '₦350,000 – ₦650,000',
  '₦650,000+',
  "I'm flexible / not sure",
];

const TIMELINES = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  'Just exploring for now',
];

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    /*
      ── HOW TO CONNECT THIS FORM ──

      OPTION A: Formspree (easiest, free tier available)
        1. Go to formspree.io and create a form
        2. Replace the URL below with your Formspree endpoint
        3. Remove the fake delay

      OPTION B: EmailJS (free, no backend needed)
        1. Install: npm install @emailjs/browser
        2. Replace the fetch below with:
           import emailjs from '@emailjs/browser';
           await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');

      OPTION C: Your own API route (Next.js)
        Create src/app/api/contact/route.ts and send email via nodemailer/resend
    */

    try {
      // ── Swap this fetch for your real endpoint ──
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState('success');
        setForm({
          name: '',
          email: '',
          phone: '',
          business: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
        });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 text-[#003049] text-sm font-medium rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/15 transition-all duration-200';

  const labelClass =
    'block text-[#003049] text-xs font-bold uppercase tracking-widest mb-2';

  return (
    <section
      id="contact-form"
      className="py-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
          {/* ── LEFT: context ── */}
          <div ref={ref} className="flex flex-col gap-8 lg:sticky lg:top-32">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="flex flex-col gap-5"
            >
              <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em]">
                Request a Quote
              </p>
              <h2 className="text-3xl xl:text-4xl font-extrabold text-[#003049] leading-tight">
                Tell Us About{' '}
                <span className="text-[#d4a843]">Your Project</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Fill in the form and we&apos;ll get back to you within 24 hours
                with a tailored proposal — clear scope, honest pricing, no
                obligation.
              </p>
            </motion.article>

            {/* what happens next */}
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4"
            >
              <p className="text-[#003049] text-xs font-extrabold uppercase tracking-widest">
                What happens next
              </p>
              {[
                { step: '01', text: 'We review your project details' },
                { step: '02', text: 'We send a tailored proposal within 24h' },
                { step: '03', text: 'You decide — zero pressure' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#d4a843]/12 flex items-center justify-center">
                    <span className="text-[#d4a843] text-[10px] font-extrabold">
                      {s.step}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-0.5">
                    {s.text}
                  </p>
                </div>
              ))}
            </motion.article>

            {/* trust note */}
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="flex items-center gap-3 text-gray-400 text-xs"
            >
              <svg
                className="w-4 h-4 text-[#d4a843] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Your information is private and will never be shared.
            </motion.article>
          </div>

          {/* ── RIGHT: form ── */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            {formState === 'success' ? (
              <motion.article
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 flex flex-col items-center text-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-[#003049]">
                  Message Received!
                </h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                  Thank you for reaching out. We&apos;ll review your project
                  details and get back to you within 24 hours with a tailored
                  proposal.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="inline-flex items-center gap-2 text-[#003049] hover:text-[#d4a843] text-sm font-bold transition-colors duration-200 mt-2"
                >
                  Submit another enquiry →
                </button>
              </motion.article>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10 flex flex-col gap-6"
              >
                {/* row 1 — name + business */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Amaka Johnson"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Business Name</label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your Business Ltd"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* row 2 — email + phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@yourbusiness.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp / Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* service select */}
                <div>
                  <label className={labelClass}>What do you need? *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* row 3 — budget + timeline */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a range…</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Timeline</label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">When do you need it?</option>
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* message */}
                <div>
                  <label className={labelClass}>Tell Us More</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your business and what you're looking to achieve. The more detail you give, the better we can tailor our proposal."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* error state */}
                {formState === 'error' && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    <svg
                      className="w-4 h-4 text-red-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-red-600 text-xs font-semibold">
                      Something went wrong. Please try again or{' '}
                      <a
                        href="mailto:hello@techsisconsult.org"
                        className="underline"
                      >
                        email us directly
                      </a>
                      .
                    </p>
                  </div>
                )}

                {/* submit */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 bg-[#003049] hover:bg-[#003049]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
                >
                  {formState === 'submitting' ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send My Project Details
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
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  By submitting, you agree we may contact you about your
                  project. No spam, ever. You can also reach us at{' '}
                  <a
                    href="mailto:hello@techsisconsult.org"
                    className="text-[#d4a843] hover:underline font-medium"
                  >
                    hello@techsisconsult.org
                  </a>
                </p>
              </form>
            )}
          </motion.article>
        </div>
      </div>
    </section>
  );
}
