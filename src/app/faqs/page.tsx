import FAQsAccordion from '@/components/faqs/Accordion';
import FAQsCTA from '@/components/faqs/FaqsCta';
import FAQsHero from '@/components/faqs/Hero';

export const metadata = {
  title: 'FAQs — TechSisConsult',
  description:
    'Answers to the most common questions about our services, process, and timelines.',
};

const page = () => {
  return (
    <>
      <FAQsHero />
      <FAQsAccordion />
      <FAQsCTA />
    </>
  );
};

export default page;
