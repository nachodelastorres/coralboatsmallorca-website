'use client';

import React from 'react';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-one';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import OurExperiencesTimeline from '@/components/about/OurExperiencesTimeline';
import BlogPreviewSection from '@/components/premium/BlogPreviewSection';
import FooterOne from '@/layouts/footers/footer-one';

const GalleryPage = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <GalleryHero />
        <GalleryGrid />
        <OurExperiencesTimeline />
        <BlogPreviewSection />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default GalleryPage;
