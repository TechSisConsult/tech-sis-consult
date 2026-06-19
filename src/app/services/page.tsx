import ServicesHero from '@/components/services/Hero';
import HowWeWork from '@/components/services/HowWeWork';
// import Pricing from '@/components/services/Pricing';
import ServicesCTA from '@/components/services/ServicesCta';
import ServicesGrid from '@/components/services/ServicesGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Discover the professional services offered by TechSis Consult, including website design, web development, e-commerce solutions, SEO optimization, branding, business automation, and digital marketing. We help businesses build strong online identities, attract more customers, and achieve sustainable growth through tailored digital solutions designed for performance and visibility.',
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
