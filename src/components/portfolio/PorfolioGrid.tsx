'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaArrowCircleRight, FaExternalLinkAlt } from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    id: 1,
    tag: 'Healthcare Website',
    tagColor: 'bg-[#021823] text-white',
    client: 'Akulue Memorial Hospital',
    title:
      'A Modern Digital Presence Designed to Build Trust and Improve Patient Access',
    desc: 'Akulue Memorial Hospital needed a professional online presence that reflected the quality of care they provide. We designed and developed a fast, mobile-friendly website that makes it easy for patients to learn about services, access important information, and connect with the hospital from anywhere. The result is a modern healthcare website that strengthens credibility, improves accessibility, and supports patient engagement.',
    imgDetail: '/client-site.png',
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
  {
    id: 2,
    tag: 'Solar Energy Website',
    tagColor: 'bg-[#390405] text-[#f4ce79]',
    client: 'Jimoh Solar',
    title:
      'A Lead-Driven Solar Website Built Around an Interactive Load Calculator',
    desc: 'Jimoh Solar is a Concept Project — of a company that needed a tool that could qualify and convert visitors before a single phone call. We designed and built a seven-page solar energy platform centered on a multi-step Smart Load Estimator, letting prospective customers select their appliances and power situation to receive an instant, personalised system recommendation. The site also includes a full services breakdown, a browsable component store, and a contact flow that hands off straight to WhatsApp or email. The result is a fast, fully responsive site that does real selling work before the sales team ever gets involved.',
    imgDetail: '/client-sites/jimoh-solar-site.png',
    detailBg: 'bg-[#f4ce79]/10',
    results: [
      { metric: '5-Step', label: 'Interactive Load Calculator' },
      { metric: '100%', label: 'Mobile Responsive' },
      { metric: '7', label: 'Custom-Designed Pages' },
    ],
    services: [
      'Solar Industry Web Design',
      'Custom Interactive Calculator',
      'Responsive Development',
      'Lead Capture & WhatsApp Integration',
    ],
    url: 'https://techsisconsult25.github.io/demo-solar-site/',
    featured: true,
  },
{
  id: 3,
  tag: 'Developer Portfolio',
  tagColor: 'bg-[#1E3A8A] text-white',
  client: 'Personal Brand',
  title: 'A Professional Full-Stack Developer Portfolio Built to Showcase Skills and Win Opportunities',
  desc: 'A modern portfolio website designed to present technical skills, featured projects, and professional experience in a clean and engaging way. Built with performance, responsiveness, and user experience in mind, the website helps recruiters, clients, and collaborators quickly understand the developer’s capabilities and easily get in touch. This project demonstrates that we also create high-quality portfolio websites for professionals looking to stand out online.',
  imgDetail: '/developer-portfolio.jpg',
  detailBg: 'bg-[#1E3A8A]/10',
  results: [
    { metric: '100%', label: 'Mobile Responsive' },
    { metric: 'Fast', label: 'Performance Optimized' },
    { metric: 'Professional', label: 'Personal Branding' },
  ],
  services: [
    'Portfolio Website Design',
    'Full-Stack Development',
    'Responsive Development',
    'SEO Foundation',
  ],
  url: 'https://portfolio-alpha-tan-w839rb33ci.vercel.app',
  featured: false,
},
];

// const FILTERS = [
//   'All',
//   'Business Website',
//   'E-commerce',
//   'Redesign',
//   'Automation',
// ];

function ProjectCard({ p }: { p: (typeof PROJECTS)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-[#021823]/6 p-8 lg:p-10 gap-7 h-full"
    >
      <div className="flex flex-col gap-5">
        {/* top row: tag + featured badge */}
        <div className="flex items-center justify-between">
          <span
            className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full ${p.tagColor}`}
          >
            {p.tag}
          </span>
          {p.featured && (
            <span className="bg-[#d4a843] text-[#021823] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* client + service tags */}
        <div className="flex flex-col gap-1">
          <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.2em]">
            {p.client}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {p.services.map((s) => (
              <span
                key={s}
                className="text-[10px] font-semibold text-[#021823]/60 bg-[#021823]/6 px-2.5 py-0.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* title */}
        <h2 className="text-2xl xl:text-[1.65rem] font-extrabold text-[#021823] leading-snug">
          {p.title}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>

        <div
          className={`relative rounded-2xl overflow-hidden aspect-[16/9] ${p.detailBg} border border-gray-100`}
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
              <div className="flex gap-3 items-end px-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-[#021823]/8 rounded-xl border border-[#021823]/10 flex flex-col gap-1.5 p-2"
                    style={{ width: 60, height: 90 - i * 8 }}
                  >
                    <div className="h-1.5 bg-[#021823]/20 rounded-full w-full" />
                    <div className="h-1.5 bg-[#d4a843]/30 rounded-full w-3/4" />
                    <div className="h-1.5 bg-[#021823]/15 rounded-full w-5/6" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* results metrics */}
      <div className="flex flex-col gap-4 mt-auto">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
          Results
        </p>
        <div className="grid grid-cols-3 gap-3">
          {p.results.map((r) => (
            <div
              key={r.label}
              className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100"
            >
              <p className="text-[#021823] text-xl font-extrabold leading-none">
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
          className="inline-flex items-center gap-2 bg-[#021823] hover:bg-[#021823]/90 text-white font-bold text-sm px-6 py-3 rounded-t-xl rounded-r-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
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
    </motion.article>
  );
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === activeFilter);

  return (
    <section className="py-20 bg-white" id="services-grid">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-14">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-sm">
              No projects in this category yet — check back soon.
            </p>
          </motion.article>
        )}
      </div>
    </section>
  );
}
