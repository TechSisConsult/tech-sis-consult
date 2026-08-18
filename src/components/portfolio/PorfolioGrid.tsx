'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// const ease = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    id: 1,
    tag: 'Solar Energy Website',
    tagColor: 'bg-[#390405] text-[#f4ce79]',
    client: 'Davelaw Technologies',
    title:
      'A Conversion-Focused Website Built to Generate More Solar Enquiries',
    imgDetail: '/client-sites/davelaw.png',
    detailBg: 'bg-[#f4ce79]/10',
    results: [
      { metric: '100%', label: 'Mobile Responsive' },
      { metric: 'SEO', label: 'Optimized Structure' },
      { metric: '24/7', label: 'Lead Generation' },
    ],
    services: [
      'Solar Company Website Design',
      'Custom UI/UX Design',
      'Responsive Web Development',
      'Product Catalogue',
      'WhatsApp & Contact Integration',
      'Search Engine Optimization',
    ],
    url: 'https://davelawtechnologies.com',
    featured: true,
  },
  {
    id: 2,
    tag: 'Healthcare Website',
    tagColor: 'bg-[#021823] text-white',
    client: 'Akulue Memorial Hospital',
    title:
      'A Modern Digital Presence Designed to Build Trust and Improve Patient Access',
    imgDetail: '/client-sites/hospital-site.png',
    detailBg: 'bg-[#f7bb3b]/10',
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
    id: 3,
    tag: 'Solar Energy Website',
    tagColor: 'bg-[#390405] text-[#f4ce79]',
    client: 'Jimoh Solar',
    title:
      'A Lead-Driven Solar Website Built Around an Interactive Load Calculator',
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
    id: 4,
    tag: 'Real Estate Website',
    tagColor: 'bg-[#0b2d1f] text-[#d4f7d0]',
    client: 'Jimoh Estates',
    title:
      'A Modern Real Estate Website Designed to Generate Property Enquiries and Build Buyer Trust',
    imgDetail: '/client-sites/jimoh-estates-site.png',
    detailBg: 'bg-[#d4f7d0]/10',
    results: [
      { metric: '25+', label: 'Premium Property Listings' },
      { metric: '100%', label: 'Mobile Responsive' },
      { metric: '8', label: 'Custom-Designed Pages' },
    ],
    services: [
      'Real Estate Website Design',
      'Property Listing & Search Experience',
      'Responsive Development',
      'Lead Capture & WhatsApp Integration',
    ],
    url: 'https://techsisconsult25.github.io/real-estate-demo/',
    featured: true,
  },
  {
    id: 5,
    tag: 'Developer Portfolio',
    tagColor: 'bg-[#1E3A8A] text-white',
    client: 'Personal Brand',
    title:
      'A Professional Full-Stack Developer Portfolio Built to Showcase Skills and Win Opportunities',
    imgDetail: '/client-sites/developer-portfolio.jpg',
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

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-[2rem] bg-[#021823] aspect-[16/10]"
    >
      {/* Background Image */}
      <Image
        src={p.imgDetail}
        alt={p.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#021823] via-[#021823]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
            {p.tag}
          </span>

          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {p.title}
          </h3>

          <div className="mt-5 flex items-center gap-5">
            <Link
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white group/link"
            >
              View Project
              <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="text-sm font-bold text-[#f7bb3b] hover:text-white transition-colors"
            >
              Get Yours
            </Link>
          </div>
        </div>
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
