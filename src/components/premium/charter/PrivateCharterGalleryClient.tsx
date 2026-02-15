'use client';

/**
 * PrivateCharterGalleryClient - Client Component for interactivity
 *
 * Receives all text props from Server Component.
 * Handles image slider state.
 */

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface PrivateCharterGalleryTexts {
  label: string;
  title: string;
  description: string;
  ctaButton: string;
  ctaSecondary: string;
  galleryPath: string;
  images: GalleryImage[];
}

interface PrivateCharterGalleryClientProps {
  texts: PrivateCharterGalleryTexts;
}

const PrivateCharterGalleryClient = ({ texts }: PrivateCharterGalleryClientProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="premium-tour-gallery" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{texts.label}</span>
              {/* H2 - Server Rendered via props */}
              <h2 className="premium-section-header__title">
                {texts.title}
              </h2>
              <p className="premium-section-header__description">
                {texts.description}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="gallery-main">
              <div
                className="main-image-wrapper"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <Image
                  src={texts.images[activeImage].src}
                  alt={texts.images[activeImage].alt}
                  width={1200}
                  height={700}
                  className="main-image"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority={activeImage === 0}
                />
                {/* Hover caption with slide-up effect */}
                <div
                  className="image-caption-hover"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                    padding: '40px 20px 16px',
                    transform: isHovering ? 'translateY(0)' : 'translateY(100%)',
                    opacity: isHovering ? 1 : 0,
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                  }}
                >
                  <p
                    style={{
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      margin: 0,
                      lineHeight: '1.5',
                      textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <i className="fa-solid fa-anchor" style={{ fontSize: '0.8rem', color: '#06b6d4' }}></i>
                    {texts.images[activeImage].caption}
                  </p>
                </div>
              </div>

              <div className="gallery-thumbnails">
                {texts.images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={150}
                      className="thumbnail-image"
                      sizes="200px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-12 text-center">
            <Link href={texts.galleryPath}>
              <button
                className="premium-gallery-cta"
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
                <span>{texts.ctaButton}</span>
                <i className="fa-solid fa-images"></i>
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
              <i className="fa-solid fa-camera" style={{ marginRight: '8px', color: '#0891b2' }}></i>
              {texts.ctaSecondary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterGalleryClient;
