'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PROJECTS = [
  {
    id: 1,
    tag: 'Solar Energy Website',
    tagColor: 'bg-[#390405] text-[#f4ce79]',
    client: 'Davelaw Technologies',
    title:
      'A Conversion-Focused Website Built to Generate More Solar Enquiries',
    blurb:
      'A solar energy company website built to generate more enquiries and showcase products with a clean, trust-building layout.',
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
    stack: ['Custom Design', 'Responsive Dev', 'SEO'],
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
    blurb:
      'A modern hospital website designed to build trust and make it easier for patients to reach the right department.',
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
    stack: ['Healthcare Design', 'Responsive Dev', 'SEO'],
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
    blurb:
      'A lead-driven solar website built around an interactive calculator that helps customers estimate their energy needs.',
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
    stack: ['Interactive Calculator', 'Responsive Dev', 'WhatsApp'],
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
    blurb:
      'A modern real estate website with property listings and search, built to generate enquiries and build buyer trust.',
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
    stack: ['Property Listings', 'Responsive Dev', 'WhatsApp'],
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
    blurb:
      'A full-stack developer portfolio built to showcase real projects and skills to potential clients and employers.',
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
    stack: ['Full-Stack Dev', 'Responsive Design', 'SEO'],
    url: 'https://portfolio-alpha-tan-w839rb33ci.vercel.app',
    featured: false,
  },
];

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white border border-[#021823]/8 shadow-[0_2px_20px_rgba(2,24,35,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(2,24,35,0.12)]"
    >
      {/* Image */}
      <Link
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden rounded-t-[1.75rem]"
        aria-label={`View ${p.client} project`}
      >
        <Image
          src={p.imgDetail}
          alt={p.title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#021823]">
            {p.client}
          </h3>
          <Link
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${p.client} in a new tab`}
            className="mt-1 shrink-0 text-[#021823]/40 transition-all duration-300 group-hover:text-[#d4a843] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <FaArrowUpRightFromSquare className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-sm leading-relaxed text-[#021823]/55 line-clamp-2">
          {p.blurb}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {p.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#021823]/10 bg-[#021823]/[0.04] px-3 py-1 text-xs font-medium text-[#021823]/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-1 text-xs font-bold text-[#d4a843] hover:text-[#021823] transition-colors w-fit"
        >
          Get Yours →
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
