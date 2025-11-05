'use client';

import BlogHero from '@/components/blog/BlogHero';
import BlogGridArea from '@/components/blog/BlogGridArea';
import RelatedTours from '@/components/premium/tours/RelatedTours';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';

const BlogMain = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <BlogHero />
        <BlogGridArea />
        <RelatedTours />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default BlogMain;
