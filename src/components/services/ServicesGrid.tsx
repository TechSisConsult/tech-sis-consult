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
      "A professionally built website is one of the most powerful investments a business can make online. We design and build websites that don't just look great — they generate enquiries, build trust, and help you grow.",
    icon: <MdMonitor className="w-6 h-6" />,
    color: 'bg-[#003049]',
    highlight: false,
    startingPriceNGN: '₦300,000+',
    startingPriceUSD: '$500+',
    deliverables: [
      'Custom website tailored to your brand',
      'Fully mobile-responsive design',
      'WhatsApp chat integration',
      'Contact forms & lead capture',
      'Visitor tracking & analytics dashboard',
      'Fast loading & performance optimisation',
      'Easy content management system',
      '30-day post-launch support',
    ],
    ideal:
      'New businesses, service providers, consultants, coaches, and anyone looking to establish a professional online presence.',
    timeline: '2 – 4 weeks',
    cta: 'Get a Website',
  },

  {
    id: 'service-2',
    number: '02',
    title: 'Ecommerce Stores',
    tagline: 'Sell while you sleep',
    shortDesc:
      'From single-product launches to full catalogue stores, we build ecommerce experiences that turn visitors into customers and help you scale online sales.',
    icon: <FaBagShopping className="w-6 h-6" />,
    color: 'bg-[#d4a843]',
    highlight: true,
    startingPriceNGN: '₦500,000+',
    startingPriceUSD: '$800+',
    deliverables: [
      'Shopify or WooCommerce setup',
      'Custom branded storefront design',
      'Product listing & catalogue setup',
      'Secure payment gateway integration',
      'Customer account & wishlist functionality',
      'Shipping & delivery configuration',
      'Inventory management system',
      'Order tracking & notifications',
      'Abandoned cart recovery',
      'Sales analytics dashboard',
    ],
    ideal:
      'Product-based businesses, fashion brands, beauty businesses, food vendors, retailers, and growing ecommerce brands.',
    timeline: '3 – 6 weeks',
    cta: 'Build My Store',
  },

  {
    id: 'service-3',
    number: '03',
    title: 'Website Redesign',
    tagline: 'From outdated to outstanding',
    shortDesc:
      "If your current website is slow, difficult to navigate, or no longer reflects your brand, we'll transform it into a modern, high-performing business asset.",
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
    startingPriceNGN: '₦350,000+',
    startingPriceUSD: '$600+',
    deliverables: [
      'Full UX audit of existing website',
      'Competitor website analysis',
      'Complete visual redesign',
      'Speed & performance optimisation',
      'Mobile responsiveness overhaul',
      'Content restructuring & copywriting support',
      'SEO audit & on-page fixes',
      'Migration with zero data loss',
    ],
    ideal:
      "Established businesses with an existing website that's underperforming, outdated, or no longer aligned with their goals.",
    timeline: '3 – 5 weeks',
    cta: 'Redesign My Site',
  },

  {
    id: 'service-4',
    number: '04',
    title: 'Business Automation',
    tagline: 'Work smarter, not harder',
    shortDesc:
      'We automate repetitive business processes so you can save time, reduce manual work, improve customer experience, and focus on growth.',
    icon: <FaBolt className="w-6 h-6" />,
    color: 'bg-[#003049]',
    highlight: false,
    startingPriceNGN: '₦400,000+',
    startingPriceUSD: '$700+',
    deliverables: [
      'Lead management system setup',
      'Automated email & follow-up sequences',
      'Lead capture & nurture funnels',
      'Online booking & scheduling system',
      'Payment & invoice automation',
      'Customer notification systems',
      'Custom workflow automation',
      'Reporting & performance tracking',
    ],
    ideal:
      'Service-based businesses, consultants, agencies, clinics, schools, and businesses looking to reduce manual work.',
    timeline: '2 – 4 weeks',
    cta: 'Automate My Business',
  },

  {
    id: 'service-5',
    number: '05',
    title: 'Website Maintenance',
    tagline: 'Keep Your Website Secure, Fast & Up-to-Date',
    shortDesc:
      'Your website is a valuable business asset that needs ongoing care. We proactively maintain, secure, and optimise your website so it continues performing at its best.',
    icon: <FaClock className="w-6 h-6" />,
    color: 'bg-[#003049]',
    highlight: false,
    startingPriceNGN: '₦30,000/month',
    startingPriceUSD: '$50/month',
    deliverables: [
      'Regular website updates & maintenance',
      'Security monitoring & malware protection',
      'Website backups & recovery support',
      'Performance & speed optimisation',
      'Plugin, theme & software updates',
      'Broken link & error monitoring',
      'Content updates & minor changes',
      'Uptime monitoring & technical support',
    ],
    ideal:
      'Businesses that rely on their website for leads, sales, bookings, or customer engagement and want peace of mind knowing it is professionally managed.',
    timeline: 'Ongoing Monthly Service',
    cta: 'Maintain My Website',
  },

  {
    id: 'service-6',
    number: '06',
    title: 'Landing Pages',
    tagline: 'Turn visitors into enquiries',
    shortDesc:
      'Need leads, bookings, or enquiries without paying for a full website? Our high-converting landing pages are designed to turn traffic into customers.',
    icon: <MdRocketLaunch className="w-6 h-6" />,
    color: 'bg-[#d4a843]',
    highlight: false,
    startingPriceNGN: '₦200,000+',
    startingPriceUSD: '$350+',
    deliverables: [
      'Custom landing page design',
      'Mobile-responsive layout',
      'Lead capture forms',
      'WhatsApp integration',
      'Call-to-action optimisation',
      'Basic SEO setup',
      'Analytics integration',
      '30-day support',
    ],
    ideal:
      'Businesses running ads, launching products, promoting events, generating leads, or validating new offers.',
    timeline: '1 – 2 weeks',
    cta: 'Build My Landing Page',
  },
];

function ServiceCard({ s, index }: { s: (typeof SERVICES)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
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
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
