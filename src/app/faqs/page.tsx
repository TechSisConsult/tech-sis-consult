import FAQsAccordion from '@/components/faqs/Accordion';
import FAQsCTA from '@/components/faqs/FaqsCta';
import FAQsHero from '@/components/faqs/Hero';
import React from 'react';

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
