'use client';

import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutBoat from '@/components/about/AboutBoat';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AboutCTA from '@/components/about/AboutCTA';

const AboutMain = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutBoat />
        <AboutTeam />
        <AboutTestimonials />
        <AboutCTA />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AboutMain;
