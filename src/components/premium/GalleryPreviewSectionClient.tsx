'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface GalleryImage {
  file: string;
  title: string;
}

interface GalleryPreviewSectionClientProps {
  images: GalleryImage[];
  ctaButton: string;
  ctaSecondary: string;
  galleryPath: string;
}

const GalleryPreviewSectionClient = ({
  images,
  ctaButton,
  ctaSecondary,
  galleryPath,
}: GalleryPreviewSectionClientProps) => {
  return (
    <>
      <div className="row g-4">
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="gallery-preview-item"
              style={{
                position: 'relative',
                height: '350px',
                borderRadius: '15px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.gallery-preview-item__overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.gallery-preview-item__overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <Image
                src={`/assets/img/premium/gallery_new/${image.file}`}
                alt={image.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div
                className="gallery-preview-item__overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    margin: 0,
                    color: '#ffffff',
                    textShadow: '0 2px 10px rgba(0,0,0,1)'
                  }}
                >
                  {image.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-12 text-center">
          <Link href={galleryPath}>
            <button
              className="premium-cta-button"
              style={{
                background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                color: '#ffffff',
                padding: '18px 45px',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(8, 145, 178, 0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(8, 145, 178, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(8, 145, 178, 0.3)';
              }}
            >
              <span>{ctaButton}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
          <p
            style={{
              marginTop: '15px',
              color: '#64748b',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}
          >
            <i className="fa-solid fa-images" style={{ marginRight: '8px', color: '#0891b2' }}></i>
            {ctaSecondary}
          </p>
        </div>
      </div>
    </>
  );
};

export default GalleryPreviewSectionClient;
