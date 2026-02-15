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
import RelatedTours from '@/components/premium/tours/RelatedTours';
import BlogPreviewSection from '@/components/premium/BlogPreviewSection';
import DiscoverAlcudiaSEO from '@/components/premium/DiscoverAlcudiaSEO';
import ViewContentTracker from '@/components/tracking/ViewContentTracker';

const PrivateCharterPage = () => {
  return (
    <Wrapper>
      <ViewContentTracker
        tourName="Private Boat Charter Alcudia"
        tourSlug="alcudia-private-boat-charter"
      />
      <HeaderOne hasTopBar />

      <main>
        <PrivateCharterHero />
        <PrivateCharterCapacity />
        <PrivateCharterEvents />
        <PrivateCharterPricingCTA />
        <PrivateCharterGallery />
        <PrivateCharterBooking />
        <PrivateCharterFeatures />
        <RelatedTours currentTour="charter" />
        <BlogPreviewSection />
        <DiscoverAlcudiaSEO />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default PrivateCharterPage;
