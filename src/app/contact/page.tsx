import ContactHero from '@/components/contact/Hero';
import StrategyCall from '@/components/contact/StrategyCall';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with TechSis Consult for professional web design, website development, SEO, branding, business automation, and digital growth solutions. Contact our team today to discuss your project, request a consultation, and discover how we can help your business build a stronger online presence and attract more customers.',
};

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <StrategyCall />
    </>
  );
};

export default ContactPage;
