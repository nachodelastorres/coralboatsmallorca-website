'use client';

import Wrapper from '@/layouts/wrapper';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import PrivateCharterHero from '@/components/premium/charter/PrivateCharterHero';
import PrivateCharterEvents from '@/components/premium/charter/PrivateCharterEvents';
import PrivateCharterCapacity from '@/components/premium/charter/PrivateCharterCapacity';
import PrivateCharterFeatures from '@/components/premium/charter/PrivateCharterFeatures';
import PrivateCharterGallery from '@/components/premium/charter/PrivateCharterGallery';
import PrivateCharterBooking from '@/components/premium/charter/PrivateCharterBooking';
import PrivateCharterPricingCTA from '@/components/premium/charter/PrivateCharterPricingCTA';

const PrivateCharterPage = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />

      <main>
        <PrivateCharterHero />
        <PrivateCharterCapacity />
        <PrivateCharterEvents />
        <PrivateCharterPricingCTA />
        <PrivateCharterGallery />
        <PrivateCharterBooking />
        <PrivateCharterFeatures />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default PrivateCharterPage;
