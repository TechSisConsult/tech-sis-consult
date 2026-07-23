'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-gray-50 relative overflow-hidden">
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7bb3b]/35 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* section header */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[26px] sm:text-4xl xl:text-5xl font-extrabold text-[#021823] leading-tight"
            >
              What Does Your Business{' '}
              <span className="text-[#f7bb3b]">Need Right Now?</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-l from-[#021823] to-[#f7bb3b] bg-clip-text text-transparent text-sm sm:text-base leading-relaxed max-w-sm lg:max-w-xs lg:text-right"
          >
            Whether you need more leads, more sales or less manual work, we
            build the systems that help your business grow.
          </motion.p>
        </div>

        {/* cards grid */}

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 sm:gap-6 mt-10 sm:mt-16">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="
    group
    relative
    overflow-hidden
    rounded-[24px]
    sm:rounded-[32px]
    bg-[#021823]
    p-6
    sm:p-8
    lg:p-10
    min-h-[360px]
    sm:min-h-[420px]
    flex
    flex-col
    justify-between
    lg:col-span-2
  "
          >
            {/* Decorative glow */}
            <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-[#f7bb3b]/20 blur-[120px]" />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
        linear-gradient(to right,#ffffff 1px,transparent 1px),
        linear-gradient(to bottom,#ffffff 1px,transparent 1px)
      `,
                backgroundSize: '50px 50px',
              }}
            />

            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-[#f7bb3b]/15 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#f7bb3b]">
                Need More Customers?
              </span>

              <h3 className="mt-6 sm:mt-8 max-w-lg text-[28px] sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                Your Website Should Be
                <span className="text-[#f7bb3b]"> Your Best Salesperson.</span>
              </h3>

              <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 text-white/70">
                Most business websites look nice but fail to generate enquiries.
                We build websites designed to earn trust, generate leads and
                turn visitors into paying customers.
              </p>
            </div>

            {/* Bottom */}

            <div className="relative z-10 mt-8 sm:mt-12 flex flex-wrap items-center justify-between gap-4 sm:gap-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  'Lead Generation',
                  'SEO Ready',
                  'Fast Loading',
                  'Mobile First',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/80 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-2xl bg-[#f7bb3b] px-5 py-3 sm:px-7 sm:py-4 text-sm sm:text-base font-bold text-[#021823] transition-all duration-300 hover:scale-105"
              >
                Build My Website
                <FaArrowCircleRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="
    group
    relative
    overflow-hidden
    rounded-[24px]
    sm:rounded-[32px]
    bg-[#f7bb3b]
    p-6
    sm:p-8
    min-h-[360px]
    sm:min-h-[420px]
    flex
    flex-col
    justify-between
    hover:-translate-y-2
    transition-all
    duration-500
  "
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/20 blur-[90px]" />

            {/* Number */}
            <span className="absolute right-5 top-5 sm:right-8 sm:top-8 text-4xl sm:text-6xl font-black text-[#021823]/10">
              02
            </span>

            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-[#021823]/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#021823]">
                Ready To Sell Online?
              </span>

              <h3 className="mt-6 sm:mt-8 text-2xl sm:text-4xl font-black leading-tight text-[#021823]">
                Launch an
                <br />
                Ecommerce Store
              </h3>

              <p className="mt-3 sm:mt-5 text-sm leading-6 sm:text-[15px] sm:leading-7 text-[#021823]/75">
                Sell products, accept online payments, manage inventory and grow
                your business with a premium shopping experience.
              </p>
            </div>

            <div className="relative z-10">
              <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                {[
                  'Online Payments',
                  'Inventory Management',
                  'Customer Accounts',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#021823]" />

                    <span className="text-xs sm:text-sm font-medium text-[#021823]/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/ecommerce"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#021823] transition-all duration-300 group-hover:gap-4"
              >
                Learn More
                <FaArrowCircleRight />
              </Link>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="
    group
    relative
    overflow-hidden
    rounded-[24px]
    sm:rounded-[32px]
    bg-white
    border
    border-slate-200
    p-6
    sm:p-8
    min-h-[280px]
    hover:-translate-y-2
    hover:shadow-2xl
    transition-all
    duration-500
  "
          >
            {/* Number */}

            <span className="absolute right-5 top-5 sm:right-8 sm:top-6 text-4xl sm:text-5xl font-black text-[#021823]/6">
              03
            </span>

            <div className="flex items-center justify-between">
              <span className="inline-flex rounded-full bg-[#021823]/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#021823]">
                Your Website Is Costing You Sales!
              </span>
            </div>

            <h3 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-black text-[#021823]">
              Before
              <span className="mx-2 sm:mx-3 text-[#f7bb3b]">→</span>
              After
            </h3>

            <p className="mt-3 sm:mt-4 max-w-sm text-sm leading-6 sm:text-[15px] sm:leading-7 text-slate-500">
              Turn an outdated website into a modern digital asset that builds
              trust, attracts customers and increases conversions.
            </p>

            {/* Transformation */}

            <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
              <div className="flex-1 rounded-2xl border border-red-200 bg-red-50 p-3 sm:p-4">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-red-500">
                  Before
                </p>

                <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-500">
                  <li>Slow Website</li>
                  <li>No SEO</li>
                  <li>Old Design</li>
                </ul>
              </div>

              <div className="text-xl sm:text-2xl font-black text-[#f7bb3b]">
                →
              </div>

              <div className="flex-1 rounded-2xl border border-green-200 bg-green-50 p-3 sm:p-4">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-green-600">
                  After
                </p>

                <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>Fast Loading</li>
                  <li>More Leads</li>
                  <li>Premium Brand</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* ================= Business Automation ================= */}

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="
    group
    relative
    overflow-hidden
    rounded-[24px]
    sm:rounded-[32px]
    bg-[#021823]
    p-6
    sm:p-8
    min-h-[200px]
    lg:col-span-2
    hover:-translate-y-2
    transition-all
    duration-500
  "
          >
            {/* Glow */}

            <div className="absolute right-0 top-0 h-60 w-72 rounded-full bg-[#f7bb3b]/15 blur-[110px]" />

            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `
        linear-gradient(to right,#ffffff 1px,transparent 1px),
        linear-gradient(to bottom,#ffffff 1px,transparent 1px)
      `,
                backgroundSize: '45px 45px',
              }}
            />

            <span className="absolute right-5 top-5 sm:right-8 sm:top-6 text-4xl sm:text-6xl font-black text-white/5">
              04
            </span>

            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#f7bb3b]">
                Still Doing Everything Manually?
              </span>

              <h3 className="mt-5 sm:mt-7 text-2xl sm:text-4xl font-black leading-tight text-white">
                Let Your Business
                <br />
                Work While You Sleep.
              </h3>

              <p className="mt-3 sm:mt-5 max-w-xl text-sm leading-6 sm:text-[15px] sm:leading-7 text-white/70">
                Connect your website, CRM, WhatsApp, email marketing and lead
                management into one seamless automated system.
              </p>
            </div>

            {/* Workflow */}

            <div className="relative z-10 mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {['Website', 'Leads', 'CRM', 'Email', 'WhatsApp', 'Sales'].map(
                (step, index) => (
                  <div key={step} className="flex items-center">
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 sm:px-5 sm:py-3 backdrop-blur-xl">
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {step}
                      </p>
                    </div>
                    {index !== 5 && (
                      <FaArrowAltCircleRight className="mx-2 sm:mx-3 text-[#f7bb3b]" />
                    )}
                  </div>
                ),
              )}
            </div>

            <div className="relative z-10 mt-6 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl bg-[#f7bb3b] px-5 py-3 sm:px-7 sm:py-4 text-sm sm:text-base font-bold text-[#021823] transition-all duration-300 hover:scale-105"
              >
                Automate My Business
                <FaArrowCircleRight />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
