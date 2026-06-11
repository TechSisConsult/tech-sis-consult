'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  FaArrowCircleRight,
  FaArrowCircleUp,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const ease = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    id: 1,
    tag: 'Healthcare Website',
    tagColor: 'bg-[#003049] text-white',
    client: 'Akulue Memorial Hospital',
    title:
      'A Modern Digital Presence Designed to Build Trust and Improve Patient Access',
    desc: 'Akulue Memorial Hospital needed a professional online presence that reflected the quality of care they provide. We designed and developed a fast, mobile-friendly website that makes it easy for patients to learn about services, access important information, and connect with the hospital from anywhere. The result is a modern healthcare website that strengthens credibility, improves accessibility, and supports patient engagement.',
    imgMain: '/client-sites/hospital-site.jpg',
    imgDetail: '/client-site.png',
    mainBg: 'bg-gradient-to-br from-[#003049] to-[#004a6e]',
    detailBg: 'bg-[#d4a843]/10',
    results: [
      { metric: '100%', label: 'Mobile Responsive' },
      { metric: '24/7', label: 'Online Accessibility' },
      { metric: 'Improved', label: 'Patient Experience' },
    ],
    services: [
      'Healthcare Website Design',
      'Responsive Development',
      'SEO Foundation',
      'Patient Contact Integration',
    ],
    url: 'https://akuluehospital.org.ng/',
    featured: true,
  },
];

// const FILTERS = [
//   'All',
//   'Business Website',
//   'E-commerce',
//   'Redesign',
//   'Automation',
// ];

function FeaturedCard({ p }: { p: (typeof PROJECTS)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-[#003049]/6 group"
    >
      <div
        className={`relative aspect-[4/3] lg:aspect-auto ${p.mainBg} overflow-hidden`}
      >
        {p.imgMain ? (
          <Image src={p.imgMain} alt={p.title} fill className="object-fill" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #d4a843 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="relative w-full max-w-[320px] bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/15">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                <div className="w-2 h-2 rounded-full bg-green-400/60" />
                <div className="flex-1 h-4 bg-white/8 rounded-full ml-2" />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="h-3 bg-white/20 rounded-full w-3/4" />
                <div className="h-2 bg-white/10 rounded-full w-full" />
                <div className="h-2 bg-white/10 rounded-full w-5/6" />
                <div className="mt-2 h-8 bg-[#d4a843]/30 rounded-lg w-1/3" />
              </div>
            </div>
            <p className="text-white/30 text-xs font-semibold text-center">
              Add screenshot: /images/project-{p.id}-main.jpg
            </p>
          </div>
        )}

        <div className="absolute top-5 left-5 z-10">
          <span
            className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full ${p.tagColor}`}
          >
            {p.tag}
          </span>
        </div>

        {p.featured && (
          <div className="absolute top-5 right-5 z-10 bg-[#d4a843] text-[#003049] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="bg-white flex flex-col justify-between p-8 lg:p-10 gap-7">
        <div className="flex flex-col gap-5">
          {/* client + service tags */}
          <div className="flex flex-col gap-1">
            <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.2em]">
              {p.client}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {p.services.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-semibold text-[#003049]/60 bg-[#003049]/6 px-2.5 py-0.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* title */}
          <h2 className="text-2xl xl:text-[1.65rem] font-extrabold text-[#003049] leading-snug">
            {p.title}
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>

          <div
            className={`relative rounded-2xl overflow-hidden aspect-[16/7] ${p.detailBg} border border-gray-100`}
          >
            {p.imgDetail ? (
              <Image
                src={p.imgDetail}
                alt={`${p.title} detail`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* simulated mobile screens */}
                <div className="flex gap-3 items-end px-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-[#003049]/8 rounded-xl border border-[#003049]/10 flex flex-col gap-1.5 p-2"
                      style={{ width: 60, height: 90 - i * 8 }}
                    >
                      <div className="h-1.5 bg-[#003049]/20 rounded-full w-full" />
                      <div className="h-1.5 bg-[#d4a843]/30 rounded-full w-3/4" />
                      <div className="h-1.5 bg-[#003049]/15 rounded-full w-5/6" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* results metrics */}
        <div className="flex flex-col gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
            Results
          </p>
          <div className="grid grid-cols-3 gap-3">
            {p.results.map((r) => (
              <div
                key={r.label}
                className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100"
              >
                <p className="text-[#003049] text-xl font-extrabold leading-none">
                  {r.metric}
                </p>
                <p className="text-gray-400 text-[10px] mt-1 leading-snug font-semibold">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#003049] hover:bg-[#003049]/90 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
          >
            View Project
            <FaExternalLinkAlt />
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold text-[#d4a843] hover:underline transition-all flex items-center"
          >
            Get Mine <FaArrowCircleRight className="ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  // const headerRef = useRef(null);
  // const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === activeFilter);

  return (
    <section className="py-20 bg-white" id="services-grid">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-14">
        {/* filter tabs */}
        {/* <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs font-bold px-5 py-2.5 rounded-full border-2 transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-[#003049] text-white border-[#003049] shadow-md'
                    : 'bg-white text-[#003049] border-gray-200 hover:border-[#003049]/30'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div> */}

        {filtered.length > 0 ? (
          <div className="flex flex-col gap-8">
            {filtered.map((p) => (
              <FeaturedCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-sm">
              No projects in this category yet — check back soon.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
