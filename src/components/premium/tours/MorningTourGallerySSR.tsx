/**
 * MorningTourGallerySSR - Server Component for SEO
 *
 * Renders the gallery section header (H2, description) server-side for SEO.
 * The interactive gallery slider remains client-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import MorningTourGalleryClient from './MorningTourGalleryClient';

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface MorningTourGalleryTexts {
  label: string;
  title: string;
  description: string;
  ctaButton: string;
  ctaSecondary: string;
  galleryPath: string;
  images: GalleryImage[];
}

interface MorningTourGallerySSRProps {
  texts: MorningTourGalleryTexts;
}

const MorningTourGallerySSR = ({ texts }: MorningTourGallerySSRProps) => {
  return (
    <section className="premium-tour-gallery" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
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

        {/* Client component for interactive gallery */}
        <MorningTourGalleryClient
          ctaButton={texts.ctaButton}
          ctaSecondary={texts.ctaSecondary}
          galleryPath={texts.galleryPath}
          images={texts.images}
        />
      </div>
    </section>
  );
};

export default MorningTourGallerySSR;
