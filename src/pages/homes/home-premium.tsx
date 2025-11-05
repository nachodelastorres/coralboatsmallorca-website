'use client';

import Wrapper from '@/layouts/wrapper';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import HeroPremium from '@/components/premium/HeroPremium';
import ToursPremium from '@/components/premium/ToursPremium';
import AboutPremium from '@/components/premium/AboutPremium';
import PrivateChartersPremium from '@/components/premium/PrivateChartersPremium';
import TestimonialsPremium from '@/components/premium/TestimonialsPremium';
import WhyChooseUsPremium from '@/components/premium/WhyChooseUsPremium';
import GalleryPreviewSection from '@/components/premium/GalleryPreviewSection';
import BlogPreviewSection from '@/components/premium/BlogPreviewSection';

const HomePremium = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />

      <main>
        <HeroPremium />
        <ToursPremium />
        <PrivateChartersPremium />
        <AboutPremium />
        <TestimonialsPremium />
        <GalleryPreviewSection />
        <BlogPreviewSection />
        <WhyChooseUsPremium />
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default HomePremium;
