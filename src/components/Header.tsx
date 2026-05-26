'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { FaBook, FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    svg: <FaFacebook />,
  },
  {
    label: 'Twitter',
    href: '#',
    svg: <FaTwitter />,
  },
  {
    label: 'Instagram',
    href: '#',
    svg: <FaInstagram />,
  },
  {
    label: 'TikTok',
    href: '#',
    svg: <FaTiktok />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-[#003049]">
        <div className="max-w-[1280px] mx-auto px-6 h-9 flex items-center justify-between">
          <a
            href="mailto:fatimaoyiza18@gmail.com"
            className="flex items-center gap-2 text-white/65 hover:text-[#d4a843] text-xs transition-colors duration-200"
          >
            <MdOutlineEmail className="w-4 h-4" />
            hello@techsisconsult.org
          </a>
          <div className="flex items-center gap-3.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/55 hover:text-[#d4a843] transition-colors duration-200"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-white transition-shadow duration-300 ${
          scrolled
            ? 'shadow-[0_4px_20px_rgba(0,48,73,0.10)]'
            : 'shadow-none border-b border-gray-100'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <Image
              src="/website-logo.png"
              alt="TechSisConsult"
              width={180}
              height={52}
              className="h-40 w-48 object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[#003049] hover:text-[#d4a843] text-lg font-semibold tracking-wide transition-colors duration-200 py-1 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#003049] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 border border-[#bf9630] hover:bg-[#bf9630] text-[#003049] text-sm font-bold px-5 py-2.5 rounded-xs transition-all duration-200 hover:shadow-lg hover:shadow-[#d4a843]/30 hover:-translate-y-px flex-shrink-0"
          >
            Book an Appointment
            <FaBook />
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 ml-auto"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[#003049] rounded-full origin-center transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-[#003049] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[#003049] rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
          >
            <nav className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#003049] hover:text-[#d4a843] font-semibold text-sm py-2.5 border-b border-gray-50 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex justify-center items-center bg-[#d4a843] text-[#003049] font-bold py-3 rounded-full text-sm"
              >
                Book an Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
