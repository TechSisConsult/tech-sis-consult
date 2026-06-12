import ContactHero from '@/components/contact/Hero';
import StrategyCall from '@/components/contact/StrategyCall';

export const metadata = {
  title: 'Contact Us — TechSisConsult',
  description:
    'Book a free 30-minute strategy call or chat with us on WhatsApp. We help businesses grow online.',
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
