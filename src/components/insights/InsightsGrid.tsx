'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type Post, formatDate } from '@/lib/insights-utils';
import { FaArrowRight, FaClock } from 'react-icons/fa6';

const ease = [0.22, 1, 0.36, 1] as const;

const CATEGORY_COLORS: Record<string, string> = {
  'Web Design': 'bg-blue-500/15 text-blue-300 border-blue-400/25',
  'Business Tips': 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
  SEO: 'bg-purple-500/15 text-purple-300 border-purple-400/25',
  Ecommerce: 'bg-orange-500/15 text-orange-300 border-orange-400/25',
  Automation: 'bg-[#d4a843]/15 text-[#d4a843] border-[#d4a843]/25',
};

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease }}
      className="group flex flex-col bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-[#d4a843]/30 hover:bg-white/[0.055] transition-all duration-300"
    >
      {/* cover image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#021823] to-[#003049] flex-shrink-0">
        {post.cover_image ? (
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #d4a843 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />
        )}

        {/* category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-sm ${
              CATEGORY_COLORS[post.category] ??
              'bg-white/10 text-white border-white/20'
            }`}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* meta */}
        <div className="flex items-center gap-3 text-white/30 text-[11px] font-semibold">
          <time dateTime={post.published_at ?? post.created_at}>
            {formatDate(post.published_at ?? post.created_at)}
          </time>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <FaClock className="w-2.5 h-2.5" />
            {post.read_time} min
          </span>
        </div>

        {/* title */}
        <h2 className="text-white font-extrabold text-base leading-snug group-hover:text-[#d4a843] transition-colors duration-300 flex-1">
          {post.title}
        </h2>

        {/* excerpt */}
        <p className="text-white/45 text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        {/* footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/8 mt-auto">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 bg-[#003049]">
              <Image
                src={post.author_image}
                alt={post.author}
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="text-white/50 text-[11px] font-semibold">
              {post.author.split(' ')[0]}
            </p>
          </div>

          <Link
            href={`/insights/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-[#d4a843] hover:text-[#e8bc5a] text-xs font-bold transition-colors duration-200 group/link"
          >
            Read
            <FaArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

type Props = {
  posts: Post[];
  activeCategory: string;
};

export default function InsightsGrid({ posts, activeCategory }: Props) {
  if (posts.length === 0) {
    return (
      <section className="bg-[#021823] py-20">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <p className="text-white/30 text-sm">
            No articles in{' '}
            <span className="text-[#d4a843] font-bold">{activeCategory}</span>{' '}
            yet — check back soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#021823] py-10 pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/40 text-sm">
            {activeCategory === 'All'
              ? `All articles (${posts.length})`
              : `${activeCategory} · ${posts.length} article${posts.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
