import AboutCTA from '@/components/about/Cta';
import Hero from '@/components/about/Hero';
import MissionVisionValues from '@/components/about/Mission';
import OurStory from '@/components/about/OurStory';
import React from 'react';

export const metadata = {
  title: 'About Us — TechSisConsult',
  description:
    'Learn the story behind TechSisConsult — why we started, what we believe, and the mission driving everything we build.',
};

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
