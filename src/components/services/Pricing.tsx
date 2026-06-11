'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
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
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.article
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

const TIERS = [
  {
    name: 'Starter',
    tag: 'Best for new businesses',
    price: { ngn: '300,000+', usd: '500+' },
    desc: 'A professional business website designed to establish your online presence, build trust, and start generating leads.',
    highlight: false,
    badge: null,
    features: [
      'Up to 5-page business website',
      'Mobile-responsive design',
      'WhatsApp chat integration',
      'Basic SEO setup',
      'Contact form & lead capture',
      'Google Analytics setup / Website visitor tracking',
      '1 round of revisions',
      '14-day post-launch support',
    ],
    notIncluded: [
      'Ecommerce functionality',
      'Advanced automation systems',
      'Custom integrations',
    ],
    cta: 'Get Started',
    ctaHref: '/contact',
  },

  {
    name: 'Growth',
    tag: 'Most popular',
    price: { ngn: '550,000+', usd: '1500+' },
    desc: 'A complete growth-focused solution including ecommerce, automation, and advanced marketing features to help your business scale online.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Up to 10-page website or full ecommerce store',
      'Custom branded UI/UX design',
      'Advanced SEO foundation',
      'Payment gateway integration',
      'Customer accounts & wishlist (for ecommerce)',
      'Lead capture & email automation',
      'Basic business automation setup',
      '2 rounds of revisions',
      '30-day post-launch support',
      'Full CMS training session',
      'Performance optimisation',
    ],
    notIncluded: [
      'Full enterprise automation suite',
      'Dedicated project management',
    ],
    cta: 'Start Growing',
    ctaHref: '/contact',
  },

  {
    name: 'Scale',
    tag: 'Enterprise',
    price: { ngn: '900,000+', usd: '2,500+' },
    desc: 'A full digital transformation system — advanced website, ecommerce, automation, and business systems designed for serious scaling.',
    highlight: false,
    badge: null,
    features: [
      'Unlimited pages / advanced ecommerce system',
      'Premium custom UI/UX design',
      'Full SEO strategy & implementation',
      'Advanced payment & inventory systems',
      'Complete business automation suite (CRM, booking, email flows)',
      'Custom workflow integrations',
      'Dedicated project manager',
      'Unlimited revisions during build phase',
      '45-day priority support',
      'Monthly performance reports',
      'Marketing & conversion optimisation setup',
    ],
    notIncluded: [],
    cta: "Let's Scale Together",
    ctaHref: '/contact',
  },
];

const MAINTENANCE_TIERS = [
  {
    name: 'Essential',
    tag: 'For small business websites',
    pricing: {
      monthly: { ngn: '35,000', usd: '50' },
      quarterly: {
        ngn: '95,000', // ~5% discount
        usd: '140',
      },
      biAnnual: {
        ngn: '180,000', // ~15% discount
        usd: '260',
      },
      yearly: {
        ngn: '330,000', // ~20% discount
        usd: '480',
      },
    },
    desc: 'Reliable maintenance and monitoring to keep your website secure, updated, and running smoothly.',
    highlight: false,
    badge: null,
    features: [
      'Plugin & software updates',
      'Security monitoring',
      'Weekly website backups',
      'Uptime monitoring',
      'Broken link checks',
      'Minor content updates',
      'Email support',
      'Monthly maintenance report',
    ],
    notIncluded: [
      'Performance optimisation',
      'Priority support',
      'Advanced technical fixes',
    ],
    cta: 'Protect My Website',
    ctaHref: '/contact',
  },

  {
    name: 'Growth',
    tag: 'Most popular',
    pricing: {
      monthly: { ngn: '75,000', usd: '100' },
      quarterly: {
        ngn: '205,000',
        usd: '290',
      },
      biAnnual: {
        ngn: '390,000',
        usd: '550',
      },
      yearly: {
        ngn: '720,000',
        usd: '1000',
      },
    },
    desc: 'Proactive website management with performance improvements and faster support.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Essential',
      'Performance & speed optimisation',
      'Bi-weekly backups',
      'Priority support',
      'SEO health monitoring',
      'Bug fixes & troubleshooting',
      'Monthly performance report',
      'Website health consultation',
    ],
    notIncluded: ['Dedicated account manager', 'Custom development hours'],
    cta: 'Get Website Support',
    ctaHref: '/contact',
  },

  {
    name: 'Premium',
    tag: 'For high-growth businesses',
    pricing: {
      monthly: { ngn: '150,000', usd: '250' },
      quarterly: {
        ngn: '420,000',
        usd: '600',
      },
      biAnnual: {
        ngn: '780,000',
        usd: '1100',
      },
      yearly: {
        ngn: '1,440,000',
        usd: '2000',
      },
    },
    desc: 'Full-scale website care with priority support, optimization, and strategic improvements.',
    highlight: false,
    badge: null,
    features: [
      'Everything in Growth',
      'Priority response times',
      'Weekly performance optimisation',
      'Advanced security monitoring',
      'Emergency recovery support',
      'Monthly strategy call',
      'Dedicated account manager',
      'Custom development hours included',
      'Detailed analytics reporting',
    ],
    notIncluded: [],
    cta: 'Get Premium Support',
    ctaHref: '/contact',
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<'ngn' | 'usd'>('ngn');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-white overflow-hidden" id="pricing">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em] mb-3"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl xl:text-5xl font-extrabold text-[#003049] leading-tight mb-4"
          >
            Simple Pricing,{' '}
            <span className="text-[#d4a843]">Zero Hidden Fees</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-gray-500 leading-relaxed mb-8"
          >
            Starting prices for each package. Final pricing depends on your
            specific requirements — request a free quote and we&apos;ll give you
            an exact number within 24 hours.
          </motion.p>

          {/* currency toggle */}
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="inline-flex items-center bg-gray-100 rounded-full p-1"
          >
            {(['ngn', 'usd'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  currency === c
                    ? 'bg-[#003049] text-white shadow-md'
                    : 'text-gray-500 hover:text-[#003049]'
                }`}
              >
                {c === 'ngn' ? '₦ NGN' : '$ USD'}
              </button>
            ))}
          </motion.article>
        </div>

        {/* pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={0.08 + i * 0.1}>
              <div
                className={`relative rounded-3xl border-2 overflow-hidden transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-[#003049] border-[#003049] shadow-2xl shadow-[#003049]/20 lg:-translate-y-4'
                    : 'bg-white border-gray-100 hover:border-[#003049]/15 hover:shadow-xl hover:shadow-[#003049]/6'
                }`}
              >
                {/* popular badge */}
                {tier.badge && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <span className="bg-[#d4a843] text-[#003049] text-[10px] font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-b-xl">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`p-8 flex flex-col gap-6 ${tier.badge ? 'pt-10' : ''}`}
                >
                  {/* tier header */}
                  <div>
                    <p
                      className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5 ${
                        tier.highlight ? 'text-[#d4a843]/70' : 'text-[#d4a843]'
                      }`}
                    >
                      {tier.tag}
                    </p>
                    <h3
                      className={`text-2xl font-extrabold mb-2 ${
                        tier.highlight ? 'text-white' : 'text-[#003049]'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        tier.highlight ? 'text-white/55' : 'text-gray-500'
                      }`}
                    >
                      {tier.desc}
                    </p>
                  </div>

                  {/* price */}
                  <div
                    className={`rounded-2xl p-5 ${
                      tier.highlight ? 'bg-white/8' : 'bg-gray-50'
                    }`}
                  >
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${
                        tier.highlight ? 'text-white/40' : 'text-gray-400'
                      }`}
                    >
                      Starting from
                    </p>
                    <div className="flex items-end gap-1">
                      <span
                        className={`text-4xl font-extrabold leading-none ${
                          tier.highlight ? 'text-[#d4a843]' : 'text-[#003049]'
                        }`}
                      >
                        {currency === 'ngn'
                          ? `₦${tier.price.ngn}`
                          : `$${tier.price.usd}`}
                      </span>
                    </div>
                    <p
                      className={`text-[10px] mt-1.5 ${
                        tier.highlight ? 'text-white/30' : 'text-gray-400'
                      }`}
                    >
                      Final price based on project scope
                    </p>
                  </div>

                  {/* features */}
                  <div className="flex flex-col gap-2.5">
                    <p
                      className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${
                        tier.highlight ? 'text-white/40' : 'text-gray-400'
                      }`}
                    >
                      What&apos;s included
                    </p>
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                            tier.highlight
                              ? 'bg-[#d4a843]/20'
                              : 'bg-[#d4a843]/12'
                          }`}
                        >
                          <svg
                            className="w-2.5 h-2.5 text-[#d4a843]"
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
                        </div>
                        <span
                          className={`text-sm leading-relaxed ${
                            tier.highlight ? 'text-white/70' : 'text-gray-600'
                          }`}
                        >
                          {f}
                        </span>
                      </div>
                    ))}

                    {/* not included */}
                    {tier.notIncluded.length > 0 && (
                      <div
                        className={`mt-1 pt-3 border-t flex flex-col gap-2.5 ${
                          tier.highlight ? 'border-white/10' : 'border-gray-100'
                        }`}
                      >
                        {tier.notIncluded.map((f) => (
                          <div key={f} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                              <svg
                                className="w-2.5 h-2.5 text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                            <span
                              className={`text-sm leading-relaxed ${
                                tier.highlight
                                  ? 'text-white/30'
                                  : 'text-gray-400'
                              }`}
                            >
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={tier.ctaHref}
                    className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                      tier.highlight
                        ? 'bg-[#d4a843] text-[#003049] hover:bg-[#bf9630] hover:shadow-xl hover:shadow-[#d4a843]/30'
                        : 'bg-[#003049] text-white hover:bg-[#003049]/90 hover:shadow-lg'
                    }`}
                  >
                    {tier.cta}
                    <FaArrowCircleRight />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* bottom note */}
        <Reveal delay={0.1} className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-[#d4a843]/8 border border-[#d4a843]/20 rounded-2xl px-6 py-4">
            <svg
              className="w-5 h-5 text-[#d4a843] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-[#003049] text-sm">
              <span className="font-bold">
                Not sure which plan is right for you?
              </span>{' '}
              <a
                href="/contact"
                className="text-[#d4a843] font-bold hover:underline"
              >
                Book a free 30-min consultation
              </a>{' '}
              — we&apos;ll recommend the best fit for your budget and goals.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
