'use client';

import Wrapper from '@/layouts/wrapper';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import MorningTourHero from '@/components/premium/tours/MorningTourHero';
import MorningTourDetails from '@/components/premium/tours/MorningTourDetails';
import MorningTourGallery from '@/components/premium/tours/MorningTourGallery';
import MorningTourItinerary from '@/components/premium/tours/MorningTourItinerary';
import MorningTourBooking from '@/components/premium/tours/MorningTourBooking';
import RelatedTours from '@/components/premium/tours/RelatedTours';
import BlogPreviewSection from '@/components/premium/BlogPreviewSection';
import DiscoverAlcudiaSEO from '@/components/premium/DiscoverAlcudiaSEO';
import ViewContentTracker from '@/components/tracking/ViewContentTracker';

const MorningTourPage = () => {
  return (
    <Wrapper>
      <ViewContentTracker
        tourName="Morning Boat Tour Alcudia"
        tourSlug="alcudia-morning-boat-tour"
      />
      <HeaderOne hasTopBar />

      <main>
        <MorningTourHero />
        <MorningTourDetails />
        <MorningTourItinerary />
        <MorningTourGallery />
        <MorningTourBooking />
        <RelatedTours currentTour="morning" />
        <BlogPreviewSection />
        <DiscoverAlcudiaSEO />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default MorningTourPage;
