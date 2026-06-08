import ServicesHero from '@/components/services/Hero';
import HowWeWork from '@/components/services/HowWeWork';
// import Pricing from '@/components/services/Pricing';
import ServicesCTA from '@/components/services/ServicesCta';
import ServicesGrid from '@/components/services/ServicesGrid';
import React from 'react';

const page = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <HowWeWork />
      {/* <Pricing /> */}
      <ServicesCTA />
    </>
  );
};

export default page;
