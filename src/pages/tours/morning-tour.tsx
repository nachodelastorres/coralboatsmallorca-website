'use client';

import Wrapper from '@/layouts/wrapper';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import MorningTourHero from '@/components/premium/tours/MorningTourHero';
import MorningTourDetails from '@/components/premium/tours/MorningTourDetails';
import MorningTourGallery from '@/components/premium/tours/MorningTourGallery';
import MorningTourItinerary from '@/components/premium/tours/MorningTourItinerary';
import MorningTourBooking from '@/components/premium/tours/MorningTourBooking';

const MorningTourPage = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />

      <main>
        <MorningTourHero />
        <MorningTourDetails />
        <MorningTourItinerary />
        <MorningTourGallery />
        <MorningTourBooking />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default MorningTourPage;
