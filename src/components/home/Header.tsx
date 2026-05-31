'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { FaBook, FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
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
    svg: (
      <Image
        src={'/twitter-x-gray.png'}
        alt="twitter-logo"
        width={20}
        height={20}
      />
    ),
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

export default function Header() {
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
      <div className="w-full bg-[#003049]">
        <div className="max-w-[1280px] mx-auto px-6 h-9 flex items-center justify-between py-6">
          <Link
            href="mailto:hello@techsisconsult.org"
            className="flex items-center gap-2 text-white/65 hover:text-[#d4a843] text-sm transition-colors duration-200"
          >
            <MdOutlineEmail className="w-4 h-4" />
            hello@techsisconsult.org
          </Link>
          <div className="flex items-center gap-3.5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/55 hover:text-[#d4a843] transition-colors duration-200"
              >
                {s.svg}
              </Link>
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
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/website-logo.png"
              alt="TechSisConsult"
              width={180}
              height={52}
              className="h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative ${isActive ? 'text-[#d4a843] scale-125' : 'text-[#003049] hover:text-[#d4a843]'} text-lg font-semibold tracking-wide transition-colors duration-200 py-1 group`}
                >
                  {link.label}
                  {/* <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#003049] rounded-full transition-all duration-300 group-hover:w-full" /> */}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 border border-[#bf9630] hover:bg-[#bf9630] text-[#003049] text-sm font-bold px-5 py-2.5 rounded-xs transition-all duration-200 hover:shadow-lg hover:shadow-[#d4a843]/30 hover:-translate-y-px flex-shrink-0"
          >
            Book a Free Consult
            <FaBook />
          </Link>

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
                    className={`${isActive ? 'text-[#d4a843] scale-100 lg:scale-75' : 'text-[#003049] hover:text-[#d4a843]'} font-semibold text-sm py-2.5 border-b border-gray-50 last:border-0 transition-colors`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex justify-center items-center bg-[#d4a843] text-[#003049] font-bold py-3 rounded-full text-sm"
              >
                Book an Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
