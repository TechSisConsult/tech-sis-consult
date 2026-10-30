import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getPostBySlug, getRelatedPosts, formatDate } from '@/lib/insights';
import { createClient } from '@/lib/supabase/server';
import { FaArrowLeft, FaClock, FaArrowRight } from 'react-icons/fa6';

/* ── SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found — TechSisConsult' };

  return {
    title: `${post.title} — TechSisConsult Insights`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://techsisconsult.com/insights/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://techsisconsult.com/insights/${post.slug}`,
      type: 'article',
      publishedTime: post.published_at ?? post.created_at,
      authors: [post.author],
      images: post.cover_image
        ? [{ url: post.cover_image, width: 1200, height: 630, alt: post.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export const revalidate = 3600;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.category, post.slug);

  /* JSON-LD Article schema */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image || undefined,
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://techsisconsult.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TechSisConsult',
      logo: {
        '@type': 'ImageObject',
        url: 'https://techsisconsult.com/website-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://techsisconsult.com/insights/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#021823] min-h-screen pt-[109px]">
        {/* ── Cover image ── */}
        <header className="relative">
          <div className="relative h-[40vh] min-h-[280px] max-h-[480px] w-full overflow-hidden">
            {post.cover_image ? (
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#021823] via-[#021823]/50 to-transparent" />
          </div>

          {/* Breadcrumb */}
          <div className="absolute bottom-0 left-0 right-0 max-w-[800px] mx-auto px-6 pb-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4"
            >
              <Link
                href="/"
                className="text-white/40 hover:text-[#d4a843] transition-colors"
              >
                Home
              </Link>
              <svg
                className="w-3 h-3 text-white/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href="/insights"
                className="text-white/40 hover:text-[#d4a843] transition-colors"
              >
                Insights
              </Link>
              <svg
                className="w-3 h-3 text-white/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-[#d4a843] truncate max-w-[200px]">
                {post.category}
              </span>
            </nav>
          </div>
        </header>

        {/* ── Article body ── */}
        <div className="max-w-[800px] mx-auto px-6 py-10">
          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-[#d4a843] text-[#021823] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/35 text-[11px] font-semibold">
              <FaClock className="w-3 h-3" />
              {post.read_time} min read
            </span>
            <span className="text-white/25 text-[11px]">·</span>
            <time
              dateTime={post.published_at ?? post.created_at}
              className="text-white/35 text-[11px] font-semibold"
            >
              {formatDate(post.published_at ?? post.created_at)}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl xl:text-[2.6rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 pb-8 border-b border-white/8 mb-10">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#003049]">
              <Image
                src={post.author_image}
                alt={post.author}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white text-sm font-bold">{post.author}</p>
              <p className="text-white/35 text-xs">Founder, TechSisConsult</p>
            </div>
          </div>

          {/* ── Tiptap HTML content ── */}
          <article
            className="
              prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-extrabold prose-headings:tracking-tight
              prose-p:text-white/65 prose-p:leading-relaxed
              prose-a:text-[#d4a843] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-li:text-white/65
              prose-blockquote:border-[#d4a843] prose-blockquote:text-white/60
              prose-code:text-[#d4a843] prose-code:bg-white/5 prose-code:rounded prose-code:px-1
              prose-img:rounded-2xl prose-img:shadow-xl
              prose-hr:border-white/10
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold text-white/40 bg-white/5 border border-white/8 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Back */}
          <div className="mt-10 pt-8 border-t border-white/8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#d4a843] text-sm font-bold transition-colors group"
            >
              <FaArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to Insights
            </Link>
          </div>
        </div>

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section className="border-t border-white/8 py-16">
            <div className="max-w-[1280px] mx-auto px-6">
              <p className="text-[#d4a843] text-[11px] font-bold uppercase tracking-[0.22em] mb-8">
                More in {post.category}
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/insights/${rp.slug}`}
                    className="group flex gap-5 bg-white/3 hover:bg-white/6 border border-white/8 hover:border-[#d4a843]/25 rounded-2xl p-5 transition-all duration-200"
                  >
                    <div className="flex-1 flex flex-col gap-2 min-w-0">
                      <p className="text-[#d4a843] text-[10px] font-bold uppercase tracking-widest">
                        {rp.category}
                      </p>
                      <h3 className="text-white font-extrabold text-sm leading-snug group-hover:text-[#d4a843] transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                      <p className="text-white/35 text-[11px] flex items-center gap-1.5">
                        <FaClock className="w-2.5 h-2.5" />
                        {rp.read_time} min · {formatDate(rp.published_at ?? '')}
                      </p>
                    </div>
                    <FaArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#d4a843] flex-shrink-0 self-center transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── */}
        <section className="border-t border-white/8 py-16">
          <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col gap-5 items-center">
            <p className="text-white/40 text-sm">
              Want to apply what you just read to your own business?
            </p>
            <Link
              href="/contact#strategy-call"
              className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#d4a843]/20 hover:-translate-y-0.5"
            >
              Book a Free Strategy Call
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
