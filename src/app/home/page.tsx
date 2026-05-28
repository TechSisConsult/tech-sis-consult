import AboutSnippet from '@/components/home/AboutSnippet';
import CTABanner from '@/components/home/CtaBanner';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyUs from '@/components/home/WhyUs';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSnippet />
      <ServicesPreview />
      <WhyUs />
      <CTABanner />
    </div>
  );
};

export default HomePage;
