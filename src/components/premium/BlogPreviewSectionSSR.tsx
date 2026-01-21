/**
 * BlogPreviewSectionSSR - Server Component for SEO
 *
 * Renders blog preview section with H2, H3 titles server-side.
 * All text content is passed as props for proper i18n SSR.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';
import BlogPreviewSectionClient from './BlogPreviewSectionClient';

export interface BlogItem {
  id: number;
  slug: string;
  image: string;
  badgeTitle: string;
  title: string;
  description: string;
  publishedDate: string;
  imageAlt?: string;
  link: string;
}

export interface BlogPreviewSectionTexts {
  label: string;
  title: string;
  description: string;
  readTime: string;
  readMore: string;
  ctaButton: string;
  ctaSecondary: string;
  blogPath: string;
  blogs: BlogItem[];
}

interface BlogPreviewSectionSSRProps {
  texts: BlogPreviewSectionTexts;
}

const BlogPreviewSectionSSR = ({ texts }: BlogPreviewSectionSSRProps) => {
  return (
    <section className="premium-blog-preview" style={{ padding: '80px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '50px' }}>
              <span className="premium-section-header__label">{texts.label}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.title}
              </h2>
              <p className="premium-section-header__description">
                {texts.description}
              </p>
            </div>
          </div>
        </div>

        {/* Client component for scroll interactivity */}
        <BlogPreviewSectionClient
          blogs={texts.blogs}
          readTime={texts.readTime}
          readMore={texts.readMore}
          ctaButton={texts.ctaButton}
          ctaSecondary={texts.ctaSecondary}
          blogPath={texts.blogPath}
        />
      </div>
    </section>
  );
};

export default BlogPreviewSectionSSR;
