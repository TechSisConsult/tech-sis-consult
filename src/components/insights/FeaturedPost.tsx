'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { type Post, formatDate } from '@/lib/insights-utils';
import { FaArrowRight, FaClock } from 'react-icons/fa6';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = { post: Post };

export default function FeaturedPost({ post }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section aria-label="Featured article" className="bg-[#021823] py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d4a843] mb-6"
        >
          Featured Article
        </motion.p>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="group relative grid lg:grid-cols-[1.4fr_1fr] overflow-hidden rounded-2xl border border-white/8 hover:border-[#d4a843]/30 transition-all duration-400"
        >
          {/* ── image side ── */}
          <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
            {post.cover_image ? (
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#021823] to-[#003049]">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #d4a843 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
            )}

            {/* category badge */}
            <div className="absolute top-5 left-5 z-10">
              <span className="bg-[#d4a843] text-[#021823] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#021823]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#021823]/60" />
          </div>

          {/* ── content side ── */}
          <div className="bg-[#021823] p-8 lg:p-10 xl:p-14 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              {/* meta */}
              <div className="flex items-center gap-4 text-white/35 text-[11px] font-semibold">
                <time dateTime={post.published_at ?? post.created_at}>
                  {formatDate(post.published_at ?? post.created_at)}
                </time>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <FaClock className="w-3 h-3" />
                  {post.read_time} min read
                </span>
              </div>

              {/* title */}
              <h2 className="text-2xl xl:text-3xl font-extrabold text-white leading-snug group-hover:text-[#d4a843] transition-colors duration-300">
                {post.title}
              </h2>

              {/* excerpt */}
              <p className="text-white/55 text-base leading-relaxed">
                {post.excerpt}
              </p>

              {/* tags */}
              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-white/50 bg-white/6 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* bottom row */}
            <div className="flex items-center justify-between border-t border-white/8 pt-6">
              {/* author */}
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-[#003049]">
                  <Image
                    src={post.author_image}
                    alt={post.author}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{post.author}</p>
                  <p className="text-white/35 text-[10px]">
                    Founder, TechSisConsult
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/insights/${post.slug}`}
                className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#d4a843]/20 hover:-translate-y-px"
              >
                Read Article
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
