'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa6';

const ease = [0.22, 1, 0.36, 1] as const;

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES = [
  { id: 'website', label: 'Business Website' },
  { id: 'ecommerce', label: 'E-commerce Store' },
  { id: 'redesign', label: 'Website Redesign' },
  { id: 'automation', label: 'Business Automation' },
];

const WHAT_TO_EXPECT = [
  {
    step: '01',
    text: 'We review your details before the call — so we show up prepared, not winging it.',
  },
  {
    step: '02',
    text: "We listen first. You'll tell us about your business, your goals, and what's holding you back.",
  },
  {
    step: '03',
    text: "We share ideas on how we'd approach your project — honest advice, no upsell.",
  },
  {
    step: '04',
    text: "If it's a fit, we send a custom proposal within 24 hours. If not, we'll point you in the right direction.",
  },
];

export default function StrategyCall() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [formState, setFormState] = useState<FormState>('idle');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    questions: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const res = await fetch('/api/strategy-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          services: selectedServices
            .map((id) => SERVICES.find((s) => s.id === id)?.label)
            .join(', '),
        }),
      });

      if (res.ok) {
        setFormState('success');
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          questions: '',
        });
        setSelectedServices([]);
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const inputClass =
    'w-full bg-white border border-gray-200 text-[#021823] text-sm font-medium rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/15 transition-all duration-200';

  const labelClass =
    'block text-[#021823] text-xs font-bold uppercase tracking-widest mb-2';

  return (
    <section
      id="strategy-call"
      className="py-12 bg-gray-50 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          ref={ref}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start"
        >
          <div className="flex flex-col gap-8 lg:sticky lg:top-32">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              <span className="inline-flex items-center gap-2 bg-[#d4a843]/12 border border-[#d4a843]/30 text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
                Limited Spots Available
              </span>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="flex flex-col gap-3"
            >
              <h2 className="text-4xl xl:text-[2.8rem] font-extrabold text-[#021823] leading-[1.1]">
                30-Minute <span className="text-[#d4a843]">Free</span> Strategy
                Session
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get a 100% free, no-obligation strategy call where we&apos;ll
                dig into your business, understand your goals, and map out
                exactly how a smart digital presence can help you grow. No
                fluff. No pitch. Just real, actionable insight.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="flex flex-col gap-5"
            >
              <p className="text-[#021823] text-xs font-extrabold uppercase tracking-widest">
                Here&apos;s What to Expect
              </p>
              {WHAT_TO_EXPECT.map((item, i) => (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d4a843]/30 flex items-center justify-center shadow-md shadow-[#d4a843]/20">
                    <span className="text-[#021823] text-[10px] font-extrabold">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-1">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3"
            >
              <p className="text-[#021823] text-xs font-extrabold uppercase tracking-widest">
                After you submit
              </p>
              <div className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#d4a843] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We review your details and reply within a few hours with a
                  confirmed time, a Google Meet link, and a brief agenda. You
                  choose when it happens.
                </p>
              </div>
            </motion.article>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.article
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 flex flex-col items-center text-center gap-6"
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
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-extrabold text-[#021823]">
                      You&apos;re on the List!
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                      We&apos;ve received your request. Within a few hours,
                      we&apos;ll send you a confirmed time slot and a Google
                      Meet link — tailored around your availability.
                    </p>
                  </div>
                  <div className="bg-[#d4a843]/8 border border-[#d4a843]/20 rounded-2xl px-5 py-4 text-sm text-[#021823] font-medium leading-relaxed max-w-sm">
                    While you wait — check your inbox and add{' '}
                    <span className="font-bold">hello@techsisconsult.com</span>{' '}
                    to your contacts so our reply doesn&apos;t go to spam.
                  </div>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-sm font-bold text-[#021823]/40 hover:text-[#d4a843] transition-colors mt-1"
                  >
                    Submit another request →
                  </button>
                </motion.article>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10 flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-extrabold text-[#021823]">
                      Request Your Free Call
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Fill in your details and we&apos;ll take it from there.
                    </p>
                  </div>

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
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Business Ltd"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@business.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <section>
                    <label className={labelClass}>
                      Which services are you interested in?
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 mt-1">
                      {SERVICES.map((s) => {
                        const checked = selectedServices.includes(s.id);
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => toggleService(s.id)}
                            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border-2 text-sm font-semibold text-left transition-all duration-200 ${
                              checked
                                ? 'border-[#d4a843] bg-[#d4a843]/8 text-[#021823]'
                                : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                            }`}
                          >
                            <div
                              className={`flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                                checked
                                  ? 'border-[#d4a843] bg-[#d4a843]'
                                  : 'border-gray-300'
                              }`}
                            >
                              {checked && (
                                <svg
                                  className="w-2.5 h-2.5 text-[#021823]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  {/* budget — free text */}
                  <div>
                    <label className={labelClass}>
                      What is your budget for this project?
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="e.g. ₦200,000 or $500 — be as specific or rough as you like"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Questions you&apos;d like us to address
                    </label>
                    <textarea
                      name="questions"
                      rows={4}
                      value={form.questions}
                      onChange={handleChange}
                      placeholder="What would make this call genuinely useful for you? Any specific concerns, ideas, or things you're unsure about?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

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
                        Something went wrong. Please{' '}
                        <a
                          href="mailto:hello@techsisconsult.com"
                          className="underline"
                        >
                          email us directly
                        </a>{' '}
                        or{' '}
                        <a
                          href="https://wa.me/2347026766769"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          message us on WhatsApp
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-[#021823] hover:bg-[#021823]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm px-8 py-4 rounded-t-xl rounded-r-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-px"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <FaSpinner />
                        Sending your request…
                      </>
                    ) : (
                      <>
                        Request My Free Strategy Call
                        <FaPhone />
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center leading-relaxed">
                    We&apos;ll reply within a few hours with a confirmed time
                    and Google Meet link. No spam, no pressure — ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
