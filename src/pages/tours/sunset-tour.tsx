'use client';

import Wrapper from '@/layouts/wrapper';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import SunsetTourHero from '@/components/premium/tours/SunsetTourHero';
import SunsetTourDetails from '@/components/premium/tours/SunsetTourDetails';
import SunsetTourGallery from '@/components/premium/tours/SunsetTourGallery';
import SunsetTourItinerary from '@/components/premium/tours/SunsetTourItinerary';
import SunsetTourBooking from '@/components/premium/tours/SunsetTourBooking';

const SunsetTourPage = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />

      <main>
        <SunsetTourHero />
        <SunsetTourDetails />
        <SunsetTourItinerary />
        <SunsetTourGallery />
        <SunsetTourBooking />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default SunsetTourPage;
