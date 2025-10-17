'use client';

import React from 'react';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-one';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import FooterOne from '@/layouts/footers/footer-one';

const GalleryPage = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default GalleryPage;
