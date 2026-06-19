import PortfolioHero from '@/components/portfolio/Hero';
import PortfolioGrid from '@/components/portfolio/PorfolioGrid';
import PortfolioCTA from '@/components/portfolio/PortfolioCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore the TechSis Consult portfolio showcasing our completed projects in web design, website development, SEO optimization, branding, and digital solutions. Discover how we help businesses create powerful online experiences, improve visibility, and achieve measurable growth through professionally designed, high-performance websites tailored to their goals.',
};

const page = () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  );
};

export default page;
