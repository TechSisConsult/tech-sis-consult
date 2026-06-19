import FAQsAccordion from '@/components/faqs/Accordion';
import FAQsCTA from '@/components/faqs/FaqsCta';
import FAQsHero from '@/components/faqs/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Find answers to frequently asked questions about TechSis Consult, including our web design services, website development process, SEO strategies, pricing, project timelines, and digital solutions. Learn how we help businesses build strong online presence, improve visibility, and achieve sustainable digital growth through professional and customized web services.',
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
