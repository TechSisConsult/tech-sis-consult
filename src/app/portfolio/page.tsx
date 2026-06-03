import PortfolioHero from '@/components/portfolio/Hero';
import PortfolioGrid from '@/components/portfolio/PorfolioGrid';
import PortfolioCTA from '@/components/portfolio/PortfolioCta';
import React from 'react';

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
