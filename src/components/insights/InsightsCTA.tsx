'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { FaArrowRight } from 'react-icons/fa6';

const ease = [0.22, 1, 0.36, 1] as const;

export default function InsightsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errMsg, setErrMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrMsg('');

    const supabase = createClient();

    /* Check if already subscribed */
    const { data: existing } = await supabase
      .from('subscribers')
      .select('id, active')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.active) {
        /* Already active — show success silently */
        setStatus('success');
        setEmail('');
        return;
      }
      /* Re-activate */
      await supabase
        .from('subscribers')
        .update({ active: true })
        .eq('email', email);
      setStatus('success');
      setEmail('');
      return;
    }

    /* New subscriber */
    const { error } = await supabase.from('subscribers').insert({ email });

    if (error) {
      setStatus('error');
      setErrMsg('Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-[#021823] border-t border-white/8 pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* newsletter card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative bg-gradient-to-br from-[#0a2d40] to-[#021823] border border-white/8 rounded-2xl overflow-hidden px-8 py-12 lg:py-16 lg:px-16"
        >
          {/* bg decor */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d4a843 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(212,168,67,0.14) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* left */}
            <div className="flex flex-col gap-4">
              <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em]">
                Stay in the Loop
              </p>
              <h2 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight">
                Get New Articles Straight{' '}
                <span className="text-[#d4a843]">to Your Inbox</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Practical tips on web design, SEO, and growing your business
                online — written for African entrepreneurs. No spam, no fluff.
                Unsubscribe anytime.
              </p>
            </div>

            {/* right */}
            <div className="flex flex-col gap-4">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-6 py-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      You&apos;re subscribed!
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">
                      We&apos;ll send new articles straight to your inbox.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="flex-1 bg-white/6 border border-white/12 text-white placeholder-white/30 text-sm font-medium rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/15 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] disabled:opacity-60 text-[#021823] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#d4a843]/20 flex-shrink-0"
                  >
                    {status === 'loading' ? (
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
                        Subscribing…
                      </>
                    ) : (
                      <>
                        Subscribe
                        <FaArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* error message */}
              {status === 'error' && (
                <p className="text-red-400 text-xs font-semibold">{errMsg}</p>
              )}

              <p className="text-white/25 text-[11px]">
                No spam. Unsubscribe anytime. Read our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-[#d4a843]/60 hover:text-[#d4a843] transition-colors"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/8"
        >
          <p className="text-white/35 text-sm text-center sm:text-left">
            Ready to apply these strategies to your business?
          </p>
          <Link
            href="/contact#strategy-call"
            className="inline-flex items-center gap-2 text-[#d4a843] hover:text-[#e8bc5a] font-bold text-sm transition-colors duration-200 group"
          >
            Book a free strategy call
            <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
