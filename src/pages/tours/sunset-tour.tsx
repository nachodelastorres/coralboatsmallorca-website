'use client';

import Wrapper from '@/layouts/wrapper';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import SunsetTourHero from '@/components/premium/tours/SunsetTourHero';
import SunsetTourDetails from '@/components/premium/tours/SunsetTourDetails';
import SunsetTourGallery from '@/components/premium/tours/SunsetTourGallery';
import SunsetTourItinerary from '@/components/premium/tours/SunsetTourItinerary';
import SunsetTourBooking from '@/components/premium/tours/SunsetTourBooking';
import RelatedTours from '@/components/premium/tours/RelatedTours';
import BlogPreviewSection from '@/components/premium/BlogPreviewSection';
import ViewContentTracker from '@/components/tracking/ViewContentTracker';

const SunsetTourPage = () => {
  return (
    <Wrapper>
      <ViewContentTracker
        tourName="Sunset Boat Tour Alcudia"
        tourSlug="alcudia-sunset-boat-tour"
      />
      <HeaderOne hasTopBar />

      <main>
        <SunsetTourHero />
        <SunsetTourDetails />
        <SunsetTourItinerary />
        <SunsetTourGallery />
        <SunsetTourBooking />
        <RelatedTours currentTour="sunset" />
        <BlogPreviewSection />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default SunsetTourPage;
