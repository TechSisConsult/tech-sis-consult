'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { MdCall, MdOutlineEmail } from 'react-icons/md';
import WebsiteLogo from '../../public//website-logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: <FaFacebook className="w-3.5 h-3.5" />,
  },
  {
    label: 'Twitter/X',
    href: '#',
    icon: <FaXTwitter className="w-3.5 h-3.5" />,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <FaInstagram className="w-3.5 h-3.5" />,
  },
  { label: 'TikTok', href: '#', icon: <FaTiktok className="w-3.5 h-3.5" /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── TOP BAR ── */}
      <div className="w-full bg-[#021823]">
        <div className="max-w-[1280px] mx-auto px-6 h-9 flex items-center justify-between">
          {/* email */}
          <Link
            href="mailto:hello@techsisconsult.com"
            className="flex items-center gap-1.5 text-white/60 hover:text-[#d4a843] text-xs font-medium transition-colors duration-200"
          >
            <MdOutlineEmail className="w-3.5 h-3.5 flex-shrink-0" />
            hello@techsisconsult.com
          </Link>

          {/* socials */}
          <div className="flex items-center gap-3.5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/50 hover:text-[#d4a843] transition-colors duration-200"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <main
        className={`w-full bg-white/85 transition-shadow duration-300 ${
          scrolled
            ? 'shadow-[0_4px_20px_rgba(0,48,73,0.10)]'
            : 'border-b border-gray-100'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={WebsiteLogo}
              alt="TechSisConsult"
              width={160}
              height={44}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1 group ${
                    isActive
                      ? 'text-[#d4a843]'
                      : 'text-[#021823] hover:text-[#d4a843]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-l from-[#021823] via-white/10 to-[#d4a843] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact#strategy-call"
            className="hidden lg:inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] text-sm font-bold px-5 py-2.5 rounded-t-xl rounded-r-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#d4a843]/30 hover:-translate-y-px flex-shrink-0"
          >
            <MdCall className="w-4 h-4" />
            Book a Free Call
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 ml-auto"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[#021823] rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-[#021823] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[#021823] rounded-full origin-center"
            />
          </button>
        </div>
      </main>

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
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-semibold text-sm py-2.5 border-b border-gray-50 last:border-0 transition-colors ${
                      isActive
                        ? 'text-[#d4a843]'
                        : 'text-[#021823] hover:text-[#d4a843]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact#strategy-call"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex justify-center items-center gap-2 bg-[#d4a843] text-[#021823] font-bold py-3 rounded-t-xl rounded-r-xl text-sm"
              >
                <MdCall className="w-4 h-4" />
                Book a Free Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
