import { createClient } from '@/lib/supabase/server';
import type { Post } from '@/lib/insights-utils';

/*
  SERVER-ONLY. Import this from Server Components, route handlers and
  server actions only. Client components must import types/helpers from
  '@/lib/insights-utils' instead.
*/

/* Re-export so existing server-side imports keep working */
export { CATEGORIES, formatDate, generateSlug } from '@/lib/insights-utils';
export type { Post } from '@/lib/insights-utils';

/* ── Public queries ── */

export async function getAllPosts(category?: string): Promise<Post[]> {
  const supabase = await createClient();

  let query = supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (category && category !== 'All') {
    query = query.eq('category', category);
  }

  const { data, error } = await query;
  if (error) {
    console.error(error);
    return [];
  }
  return data ?? [];
}

export async function getFeaturedPost(): Promise<Post | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(1)
    .single();

  if (error) return null;
  return data;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) return null;
  return data;
}

export async function getRelatedPosts(
  category: string,
  excludeSlug: string,
): Promise<Post[]> {
  const supabase = await createClient();

  const { data } = await supabase
    .from('posts')
    .select('id, title, slug, category, read_time, published_at, excerpt')
    .eq('published', true)
    .eq('category', category)
    .neq('slug', excludeSlug)
    .limit(2);

  return (data ?? []) as Post[];
}

/* ── Admin queries (RLS gives authenticated admin full access) ── */

export async function getAllPostsAdmin(): Promise<Post[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }
  return data ?? [];
}

export async function getPostByIdAdmin(id: string): Promise<Post | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
}
