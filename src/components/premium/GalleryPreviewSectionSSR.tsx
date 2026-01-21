/**
 * GalleryPreviewSectionSSR - Server Component for SEO
 *
 * Renders the gallery preview section header (H2, description) server-side.
 * The interactive gallery grid is handled by GalleryPreviewSectionClient.
 *
 * NO 'use client' directive - this is a Server Component
 */

import GalleryPreviewSectionClient, { GalleryImage } from './GalleryPreviewSectionClient';

export interface GalleryPreviewSectionTexts {
  label: string;
  title: string;
  description: string;
  ctaButton: string;
  ctaSecondary: string;
  galleryPath: string;
  images: GalleryImage[];
}

interface GalleryPreviewSectionSSRProps {
  texts: GalleryPreviewSectionTexts;
}

const GalleryPreviewSectionSSR = ({ texts }: GalleryPreviewSectionSSRProps) => {
  return (
    <section className="premium-gallery-preview" style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
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

        {/* Client component for interactive gallery grid */}
        <GalleryPreviewSectionClient
          images={texts.images}
          ctaButton={texts.ctaButton}
          ctaSecondary={texts.ctaSecondary}
          galleryPath={texts.galleryPath}
        />
      </div>
    </section>
  );
};

export default GalleryPreviewSectionSSR;
