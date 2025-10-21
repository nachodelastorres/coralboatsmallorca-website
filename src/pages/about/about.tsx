'use client';

import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';
import AboutHero from '@/components/about/AboutHero';
import AboutBoatHistory from '@/components/about/AboutBoatHistory';

const AboutMain = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <AboutHero />
        <AboutBoatHistory />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AboutMain;
