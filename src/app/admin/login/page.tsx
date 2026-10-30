'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError('Invalid email or password. Please try again.');
      setLoading(false);
      return;
    }

    router.push('/admin/posts');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#021823] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/website-logo.png"
            alt="TechSisConsult"
            width={160}
            height={44}
            className="h-11 w-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Card */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-extrabold text-white">Admin Login</h1>
            <p className="text-white/40 text-sm mt-1">
              Sign in to manage your blog posts
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@techsisconsult.com"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/15 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm rounded-xl pl-11 pr-11 py-3.5 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/15 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPass ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#d4a843] hover:bg-[#bf9630] disabled:opacity-60 disabled:cursor-not-allowed text-[#021823] font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#d4a843]/20 flex items-center justify-center gap-2 mt-1"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing in…
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          TechSisConsult Admin · Restricted Access
        </p>
      </div>
    </div>
  );
}
