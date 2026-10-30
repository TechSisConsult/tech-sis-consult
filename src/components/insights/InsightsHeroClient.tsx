'use client';

import { useRouter, usePathname } from 'next/navigation';
import InsightsHero from './InsightHero';

export default function InsightsHeroClient({
  activeCategory,
}: {
  activeCategory: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams();
    if (category !== 'All') params.set('category', category);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <InsightsHero
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
    />
  );
}
