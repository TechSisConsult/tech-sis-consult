import AboutCTA from '@/components/about/Cta';
import Hero from '@/components/about/Hero';
import MissionVisionValues from '@/components/about/Mission';
import OurStory from '@/components/about/OurStory';
import React from 'react';

const page = () => {
  return (
    <>
      <Hero />
      <OurStory />
      <MissionVisionValues />
      <AboutCTA />
    </>
  );
};

export default page;
