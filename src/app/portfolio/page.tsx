import PortfolioHero from '@/components/portfolio/Hero';
import PortfolioGrid from '@/components/portfolio/PorfolioGrid';
import PortfolioCTA from '@/components/portfolio/PortfolioCta';

export const metadata = {
  title: 'Our Work — TechSisConsult',
  description:
    "A showcase of websites, ecommerce stores, and digital solutions we've built for our clients.",
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
