'use client';

import React from 'react';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-one';
import ToursOverviewHero from '@/components/tours-overview/ToursOverviewHero';
import ToursOverviewCards from '@/components/tours-overview/ToursOverviewCards';
import ToursOverviewSEO from '@/components/tours-overview/ToursOverviewSEO';
import ToursOverviewFAQ from '@/components/tours-overview/ToursOverviewFAQ';
import FooterOne from '@/layouts/footers/footer-one';

const ToursPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <ToursOverviewHero />
        <ToursOverviewCards />
        <ToursOverviewSEO />
        <ToursOverviewFAQ />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default ToursPage;
