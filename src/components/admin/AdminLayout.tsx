'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import {
  FaNewspaper,
  FaPlus,
  FaRightFromBracket,
  FaHouse,
} from 'react-icons/fa6';

const NAV = [
  {
    label: 'All Posts',
    href: '/admin/posts',
    icon: <FaNewspaper className="w-4 h-4" />,
  },
  {
    label: 'New Post',
    href: '/admin/posts/new',
    icon: <FaPlus className="w-4 h-4" />,
  },
  {
    label: 'Visit Site',
    href: '/',
    icon: <FaHouse className="w-4 h-4" />,
    external: true,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ── Sidebar ── */}
      <aside className="w-64 flex-shrink-0 bg-[#021823] flex flex-col min-h-screen fixed left-0 top-0 bottom-0 z-40">
        {/* Logo */}
        <div className="p-6 border-b border-white/8">
          <Image
            src="/website-logo.png"
            alt="TechSisConsult"
            width={140}
            height={40}
            className="h-9 w-auto object-contain brightness-0 invert"
          />
          <p className="text-white/30 text-[10px] uppercase tracking-widest mt-1.5 font-semibold">
            Admin Dashboard
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 flex flex-col gap-1">
          {NAV.map((item) => {
            const isActive =
              !item.external &&
              pathname.startsWith(item.href) &&
              !(
                item.href === '/admin/posts' && pathname === '/admin/posts/new'
              );

            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#d4a843] text-[#021823]'
                    : 'text-white/55 hover:bg-white/6 hover:text-white'
                }`}
              >
                <span
                  className={isActive ? 'text-[#021823]' : 'text-[#d4a843]'}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/55 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
          >
            <FaRightFromBracket className="w-4 h-4 text-red-400" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 ml-64 min-h-screen">{children}</main>
    </div>
  );
}
