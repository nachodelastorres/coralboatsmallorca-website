'use client';

import Wrapper from '@/layouts/wrapper';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import CharterPricingHero from '@/components/premium/charter/pricing/CharterPricingHero';
import CharterPricingTable from '@/components/premium/charter/pricing/CharterPricingTable';
import CharterExtras from '@/components/premium/charter/pricing/CharterExtras';
import CharterBookingForm from '@/components/premium/charter/pricing/CharterBookingForm';
import GalleryPreviewSection from '@/components/premium/GalleryPreviewSection';
import BlogPreviewSection from '@/components/premium/BlogPreviewSection';
import RelatedTours from '@/components/premium/tours/RelatedTours';

const CharterPricingPage = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />

      <main>
        <CharterPricingHero />
        <CharterPricingTable />
        <CharterExtras />
        <CharterBookingForm />
        <GalleryPreviewSection />
        <BlogPreviewSection />
        <RelatedTours currentTour="charter" />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default CharterPricingPage;
