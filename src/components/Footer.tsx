'use client';

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const LINKS = {
  Services: [
    { label: 'Business Websites', href: '/services#services-grid' },
    { label: 'E-commerce Stores', href: '/services#services-grid' },
    { label: 'Website Redesign', href: '/services#services-grid' },
    { label: 'Business Automation', href: '/services#services-grid' },
    { label: 'Website Maintenance', href: '/services#services-grid' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
  ],
};

const SOCIALS = [
  // {
  //   label: 'Facebook',
  //   href: '#',
  //   svg: <FaFacebook />,
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/techsis-consult/',
    svg: <FaLinkedin />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@techsisconsult',
    svg: <FaTiktok />,
  },
  {
    label: 'Twitter',
    href: '#',
    svg: <FaXTwitter />,
  },
  // {
  //   label: 'Instagram',
  //   href: '#',
  //   svg: <FaInstagram />,
  // },
];

export default function Footer() {
  return (
    <footer className="bg-[#021823] text-white relative overflow-hidden">
      {/* gold top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4a843] to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* Logo text fallback — swap for <Image> once logo works on dark bg */}
              <div className="flex-shrink-0">
                <Image
                  src={'/tsc-logo2.png'}
                  alt="website-logo"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-xl font-extrabold tracking-tight">
                  TechSis<span className="text-[#d4a843]">Consult</span>
                </span>
                <span className="text-white/35 text-[10px] uppercase tracking-[0.18em] mt-0.5">
                  Smart Tech for Modern Businesses
                </span>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              We help modern businesses grow online with strategy, beautiful
              design, and technology that actually converts — from first website
              to full automation.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/12 hover:border-[#d4a843] hover:bg-[#d4a843]/10 text-white/45 hover:text-[#d4a843] flex items-center justify-center transition-all duration-200"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white text-sm font-bold mb-5 tracking-wide">
                {heading}
              </h4>

              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/45 hover:text-[#d4a843] text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 border-t border-white/8 border-b mb-8">
          {[
            {
              icon: <MdOutlineEmail />,
              label: 'hello@techsisconsult.com',
              href: 'mailto:hello@techsisconsult.com',
            },
            {
              icon: <FaPhone />,
              label: '+234 702 676 6769',
              href: 'tel:+2347026766769',
            },
            {
              icon: <FaLocationDot />,
              label: 'Enugu State, Nigeria',
              href: '#',
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 text-white/45 hover:text-[#d4a843] text-sm transition-colors duration-200"
            >
              <span className="flex-shrink-0 text-[#d4a843]/60">
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/28 text-xs">
            &copy; {new Date().getFullYear()} TechSisConsult. All rights
            reserved.
          </p>
          <p className="text-white/28 text-xs">
            Smart Tech for Modern Businesses
          </p>
        </div>
      </div>

      {/* large watermark text */}
      <div className="absolute -bottom-6 left-0 right-0 text-center pointer-events-none select-none overflow-hidden">
        <span className="text-white/[0.018] font-black text-[110px] leading-none tracking-tighter">
          TECHSISCONSULT
        </span>
      </div>
    </footer>
  );
}
