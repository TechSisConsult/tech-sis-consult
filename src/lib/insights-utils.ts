/*
  Client-safe helpers for Insights.
  This file must NEVER import from '@/lib/supabase/server' or 'next/headers'.
  Client components import from here; server code imports from '@/lib/insights'.
*/

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  tags: string[];
  author: string;
  author_image: string;
  read_time: number;
  featured: boolean;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export const CATEGORIES = [
  'All',
  'Web Design',
  'Business Tips',
  'SEO',
  'Ecommerce',
  'Automation',
];

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
