import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTABanner from '@/components/home/CtaBanner';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import ResultsSection from '@/components/home/ResultsSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <ResultsSection />
      <CTABanner />
    </div>
  );
};

export default HomePage;
