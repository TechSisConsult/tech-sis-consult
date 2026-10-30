import InsightsHeroClient from '@/components/insights/InsightsHeroClient';
import FeaturedPost from '@/components/insights/FeaturedPost';
import InsightsGrid from '@/components/insights/InsightsGrid';
import InsightsCTA from '@/components/insights/InsightsCTA';
import { getAllPosts, getFeaturedPost } from '@/lib/insights';

export const metadata = {
  title: 'Insights — TechSisConsult',
  description:
    'Practical articles on web design, SEO, ecommerce, and business automation for Nigerian and African business owners.',
  alternates: { canonical: 'https://techsisconsult.com/insights' },
  openGraph: {
    title: 'Insights — TechSisConsult',
    description:
      'Practical articles on web design, SEO, ecommerce, and business automation.',
    url: 'https://techsisconsult.com/insights',
    type: 'website',
  },
};

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: rawCategory } = await searchParams;
  const category = rawCategory ?? 'All';

  const [featured, posts] = await Promise.all([
    getFeaturedPost(),
    getAllPosts(category === 'All' ? undefined : category),
  ]);

  /* Don't show the featured post twice on the "All" view */
  const gridPosts =
    category === 'All' && featured
      ? posts.filter((p) => p.id !== featured.id)
      : posts;

  return (
    <main>
      <InsightsHeroClient activeCategory={category} />
      {category === 'All' && featured && <FeaturedPost post={featured} />}
      <InsightsGrid posts={gridPosts} activeCategory={category} />
      <InsightsCTA />
    </main>
  );
}
