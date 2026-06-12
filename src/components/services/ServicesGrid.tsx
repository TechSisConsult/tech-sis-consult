'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { FaBolt, FaClock } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { MdMonitor, MdRocketLaunch } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  {
    id: 'service-1',
    number: '01',
    title: 'Business Websites',
    tagline: 'Your 24/7 digital storefront',
    shortDesc:
      'We design and build professional websites that do more than look good — they establish credibility, communicate your value clearly, and help convert visitors into real business enquiries.',
    icon: <MdMonitor className="w-6 h-6" />,
    color: 'bg-[#003049]',
    highlight: false,
    pricingModel: 'Tailored to business needs after consultation',
    deliverables: [
      'Custom website tailored to your brand',
      'Fully mobile-responsive design',
      'WhatsApp or direct contact integration',
      'Professional contact forms',
      'Basic analytics setup for performance tracking',
      'Fast-loading, optimized performance',
      'Easy-to-manage content structure',
      'Post-launch support period',
    ],
    ideal:
      'New businesses, service providers, consultants, coaches, and anyone building a credible online presence.',
    timeline: '2 – 4 weeks',
    cta: 'Book a Consultation',
  },

  {
    id: 'service-2',
    number: '02',
    title: 'Ecommerce Stores',
    tagline: 'Sell while you sleep',
    shortDesc:
      'We build scalable ecommerce systems that help you showcase products professionally, streamline purchasing, and increase online sales.',
    icon: <FaBagShopping className="w-6 h-6" />,
    color: 'bg-[#d4a843]',
    highlight: true,
    pricingModel: 'Tailored to business needs after consultation',
    deliverables: [
      'Shopify or WooCommerce setup',
      'Branded storefront design',
      'Product catalogue configuration',
      'Secure payment gateway integration',
      'Order and checkout system setup',
      'Shipping and delivery configuration',
      'Inventory management setup',
      'Sales tracking and analytics',
    ],
    ideal:
      'Product-based businesses, fashion brands, beauty brands, food vendors, and retail stores.',
    timeline: '3 – 6 weeks',
    cta: 'Discuss Your Store',
  },

  {
    id: 'service-3',
    number: '03',
    title: 'Website Redesign',
    tagline: 'From outdated to outstanding',
    shortDesc:
      'We transform underperforming websites into modern, fast, and conversion-focused digital assets that better represent your brand and goals.',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    color: 'bg-[#003049]',
    highlight: false,
    pricingModel: 'Tailored to business needs after consultation',
    deliverables: [
      'Full website audit and evaluation',
      'Complete UI/UX redesign',
      'Performance and speed optimization',
      'Mobile responsiveness improvements',
      'Content restructuring guidance',
      'SEO structure improvements',
      'Safe migration with zero data loss',
      'Easy-to-manage content structure',
      'Post-launch support period',
    ],
    ideal:
      'Businesses with outdated or underperforming websites that need modernization and better results.',
    timeline: '2 – 4 weeks',
    cta: 'Redesign My Website',
  },

  {
    id: 'service-4',
    number: '04',
    title: 'Business Automation',
    tagline: 'Stop doing repetitive work manually',
    shortDesc:
      'We help you remove daily repetitive tasks from your business by setting up simple systems that handle follow-ups, bookings, payments, and customer communication automatically.',
    icon: <FaBolt className="w-6 h-6" />,
    color: 'bg-[#003049]',
    highlight: false,
    pricingModel: 'Tailored to business needs after consultation',

    deliverables: [
      'Automatic customer replies and follow-ups (so no lead is ignored)',
      'Online booking and appointment scheduling system',
      'Automatic payment and invoice tracking',
      'Instant customer notifications (WhatsApp, email, or SMS)',
      'Simple workflow systems that reduce daily manual tasks',
    ],

    ideal:
      'Business owners who are tired of repeating the same tasks every day — especially those handling customers, bookings, or sales manually.',

    timeline: '2 – 4 weeks',
    cta: 'Automate My Business',
  },

  {
    id: 'service-5',
    number: '05',
    title: 'Website Maintenance',
    tagline: 'Keep your website secure, fast & reliable',
    shortDesc:
      'We provide ongoing technical care to ensure your website remains secure, updated, and performing optimally at all times.',
    icon: <FaClock className="w-6 h-6" />,
    color: 'bg-[#003049]',
    highlight: false,
    pricingModel: 'Monthly maintenance plan after consultation',
    deliverables: [
      'Regular updates and maintenance',
      'Security monitoring and protection',
      'Backup and recovery systems',
      'Performance optimization',
      'Bug fixes and error monitoring',
      'Plugin and system updates',
      'Minor content updates',
      'Uptime monitoring and support',
    ],
    ideal:
      'Businesses that depend on their website for leads, sales, or customer engagement.',
    timeline: 'Ongoing service',
    cta: 'Maintain My Website',
  },

  {
    id: 'service-6',
    number: '06',
    title: 'Landing Pages',
    tagline: 'Turn traffic into real enquiries',
    shortDesc:
      'We design focused landing pages that help businesses generate leads, promote offers, and convert traffic into measurable results.',
    icon: <MdRocketLaunch className="w-6 h-6" />,
    color: 'bg-[#d4a843]',
    highlight: false,
    pricingModel: 'Tailored to business needs after consultation',
    deliverables: [
      'High-converting landing page design',
      'Mobile-responsive layout',
      'Call-to-action optimization',
      'WhatsApp or contact integration',
      'Basic SEO setup',
      'Conversion-focused structure',
    ],
    ideal:
      'Businesses running campaigns, promotions, product launches, or ad traffic.',
    timeline: '1 – 2 weeks',
    cta: 'Build My Landing Page',
  },
];

function ServiceCard({ s, index }: { s: (typeof SERVICES)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      id={s.id}
      initial={{ y: 48, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className={`group relative rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
        s.highlight
          ? 'bg-[#d4a843] border-[#d4a843] shadow-2xl shadow-[#d4a843]/25'
          : 'bg-white border-gray-100 hover:border-[#003049]/12 hover:shadow-2xl hover:shadow-[#003049]/6'
      }`}
    >
      {/* ── card top ── */}
      <div className="p-7 flex flex-col gap-5">
        {/* number + icon row */}
        <div className="flex items-start justify-between">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              s.highlight
                ? 'bg-[#003049]/20 text-[#003049]'
                : 'bg-[#003049]/7 text-[#003049] group-hover:bg-[#003049] group-hover:text-[#d4a843]'
            }`}
          >
            {s.icon}
          </div>
          <span
            className={`text-5xl font-black leading-none select-none ${
              s.highlight ? 'text-[#003049]/10' : 'text-[#003049]/6'
            }`}
          >
            {s.number}
          </span>
        </div>

        {/* text */}
        <div>
          <p
            className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5 ${
              s.highlight ? 'text-[#003049]/60' : 'text-[#d4a843]'
            }`}
          >
            {s.tagline}
          </p>
          <h3
            className={`text-xl font-extrabold mb-3 ${s.highlight ? 'text-[#003049]' : 'text-[#003049]'}`}
          >
            {s.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${s.highlight ? 'text-[#003049]/72' : 'text-gray-500'}`}
          >
            {s.shortDesc}
          </p>
        </div>

        {/* quick meta pills */}
        <div className="flex flex-wrap gap-2">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full ${
              s.highlight
                ? 'bg-[#003049]/12 text-[#003049]'
                : 'bg-[#003049]/6 text-[#003049]'
            }`}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {s.timeline}
          </span>
        </div>

        {/* expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 w-fit group/btn ${
            s.highlight
              ? 'text-[#003049] hover:text-[#003049]/70'
              : 'text-[#003049] hover:text-[#d4a843]'
          }`}
        >
          {expanded ? 'Show Less' : "See What's Included"}
          <motion.svg
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>
      </div>

      {/* ── expandable detail panel ── */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.article
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div
              className={`px-7 pb-7 border-t flex flex-col gap-6 ${
                s.highlight ? 'border-[#003049]/15' : 'border-gray-100'
              }`}
            >
              <div className="pt-5">
                <p
                  className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${
                    s.highlight ? 'text-[#003049]/50' : 'text-[#d4a843]'
                  }`}
                >
                  What&apos;s included
                </p>
                <ul className="grid grid-cols-1 gap-2.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          s.highlight ? 'bg-[#003049]/15' : 'bg-[#d4a843]/12'
                        }`}
                      >
                        <svg
                          className={`w-3 h-3 ${s.highlight ? 'text-[#003049]' : 'text-[#d4a843]'}`}
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
                          s.highlight ? 'text-[#003049]/75' : 'text-gray-600'
                        }`}
                      >
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ideal for */}
              <div
                className={`rounded-xl p-4 ${s.highlight ? 'bg-[#003049]/12' : 'bg-gray-50'}`}
              >
                <p
                  className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${
                    s.highlight ? 'text-[#003049]/50' : 'text-[#d4a843]'
                  }`}
                >
                  Ideal for
                </p>
                <p
                  className={`text-sm leading-relaxed ${s.highlight ? 'text-[#003049]/70' : 'text-gray-500'}`}
                >
                  {s.ideal}
                </p>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className={`inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 w-fit ${
                  s.highlight
                    ? 'bg-[#003049] text-white hover:bg-[#003049]/90 hover:shadow-lg'
                    : 'bg-[#d4a843] text-[#003049] hover:bg-[#bf9630] hover:shadow-lg hover:shadow-[#d4a843]/25'
                }`}
              >
                {s.cta}
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
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-white overflow-hidden" id="services-grid">
      <div className="max-w-[1280px] mx-auto px-6">
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-[#d4a843] text-sm font-bold uppercase tracking-[0.22em] mb-3"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl xl:text-5xl font-extrabold text-[#003049] leading-tight mb-4"
          >
            Everything Your Business Needs{' '}
            <span className="text-[#d4a843]">to Win Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-gray-500 leading-relaxed"
          >
            Click any service to expand and see exactly what you get — no hidden
            extras, no surprises. Just honest, high-quality work.
          </motion.p>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
