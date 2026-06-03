import ContactForm from '@/components/contact/ContactForm';
import ContactOptions from '@/components/contact/ContactOptions';
import ContactHero from '@/components/contact/Hero';
import React from 'react';

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
    </>
  );
};

export default page;
