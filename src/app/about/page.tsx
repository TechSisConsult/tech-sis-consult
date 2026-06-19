import AboutCTA from '@/components/about/Cta';
import MissionVisionValues from '@/components/about/Mission';
import OurStory from '@/components/about/OurStory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn more about TechSis Consult, a trusted web design and digital solutions company dedicated to helping businesses grow online. We specialize in professional website design, web development, SEO, branding, business automation, and digital growth strategies that help brands increase visibility, attract more customers, and achieve sustainable success in today's competitive digital landscape.",
};

const page = () => {
  return (
    <>
      <OurStory />
      <MissionVisionValues />
      <AboutCTA />
    </>
  );
};

export default page;
