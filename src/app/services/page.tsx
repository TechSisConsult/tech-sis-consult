import ServicesHero from '@/components/services/Hero';
import HowWeWork from '@/components/services/HowWeWork';
// import Pricing from '@/components/services/Pricing';
import ServicesCTA from '@/components/services/ServicesCta';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata = {
  title: 'Our Services — TechSisConsult',
  description:
    'Business websites, e-commerce stores, website redesigns, and business automation — smart digital solutions built for modern businesses.',
};

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
