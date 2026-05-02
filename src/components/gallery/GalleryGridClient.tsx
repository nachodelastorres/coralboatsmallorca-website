'use client';

/**
 * GalleryGridClient - Client Component for interactivity
 *
 * Fixed-order collage that tessellates without gaps. Cell math:
 *   - Item 0  (banner)   → 4×2 desktop, 2×2 on tablet/mobile (8 / 4 cells)
 *   - Landscape (or square treated as landscape) → 2×2 (4 cells)
 *   - Portrait → 1×2 (2 cells)
 * Total: 1·8 + 13·4 + 14·2 = 88 cells. Divides evenly across all breakpoints
 * (4·22, 3·28, 2·42 with banner downgraded). row-height tuned to ~16:9 so
 * landscapes barely crop.
 */

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_BASE_PATH = '/assets/img/premium/2026/gallery';

export interface GalleryImage {
  file: string;
  title: string;
  width: number;
  height: number;
  orient: 'landscape' | 'portrait' | 'square';
}

export interface GalleryGridTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  seoTitle: string;
  seoIntro: string;
  toursTitle: string;
  toursDescription: string;
  tourMorning: string;
  tourSunset: string;
  tourPrivate: string;
  whyAlcudiaTitle: string;
  whyAlcudiaDescription: string;
  beachesTitle: string;
  beachesP1: string;
  beachesP2: string;
  bookTitle: string;
  bookDescription: string;
  bookFooter: string;
  viewToursButton: string;
  contactButton: string;
  images: GalleryImage[];
  paths: {
    morningTour: string;
    sunsetTour: string;
    privateTour: string;
    tours: string;
    contact: string;
  };
}

interface GalleryGridClientProps {
  texts: GalleryGridTexts;
}

interface CollageTile extends GalleryImage {
  colSpan: 1 | 2 | 4;
  rowSpan: 2;
}

function computeSpans(img: GalleryImage, index: number): { colSpan: 1 | 2 | 4; rowSpan: 2 } {
  if (index === 0) return { colSpan: 4, rowSpan: 2 };
  if (img.orient === 'portrait') return { colSpan: 1, rowSpan: 2 };
  return { colSpan: 2, rowSpan: 2 };
}

const GalleryGridClient = ({ texts }: GalleryGridClientProps) => {
  const images = texts.images;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const tiles: CollageTile[] = images.map((img, i) => ({ ...img, ...computeSpans(img, i) }));

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setSelectedImage((cur) => (cur === null ? null : cur === 0 ? images.length - 1 : cur - 1));
  };

  const goToNext = () => {
    setSelectedImage((cur) => (cur === null ? null : cur === images.length - 1 ? 0 : cur + 1));
  };

  // Keyboard navigation while lightbox is open.
  useEffect(() => {
    if (selectedImage === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') goToPrevious();
      else if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  return (
    <>
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
                <span className="premium-section-header__label">{texts.sectionLabel}</span>
                <h2 className="premium-section-header__title">
                  {texts.sectionTitle}
                </h2>
                <p className="premium-section-header__description">
                  {texts.sectionDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="collage-grid">
            {tiles.map((tile, index) => {
              // sizes must reflect actual rendered width per breakpoint, otherwise
              // Next.js picks a too-small srcset and the browser upscales (blurry).
              // colSpan 4 = banner full-width, 2 = wide, 1 = portrait column.
              const sizes =
                tile.colSpan === 4
                  ? '(max-width: 600px) 100vw, (max-width: 992px) 67vw, 1200px'
                  : tile.colSpan === 2
                  ? '(max-width: 600px) 100vw, (max-width: 992px) 67vw, 50vw'
                  : '(max-width: 600px) 50vw, (max-width: 992px) 33vw, 25vw';
              return (
                <div
                  key={tile.file}
                  className={`gallery-item collage-tile col-span-${tile.colSpan} row-span-${tile.rowSpan} orient-${tile.orient}`}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={`${IMAGE_BASE_PATH}/${tile.file}`}
                    alt={tile.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={sizes}
                    priority={index === 0}
                  />
                  <div className="gallery-item__overlay">
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Section - Server Rendered via props */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                  {texts.seoTitle}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: texts.seoIntro }} />
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '15px', height: '100%' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                      <i className="fa-solid fa-ship" style={{ marginRight: '10px' }}></i>
                      {texts.toursTitle}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: texts.toursDescription }} />
                    <ul style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', paddingLeft: '20px' }}>
                      <li>
                        <Link href={texts.paths.morningTour} style={{ color: '#0891b2', textDecoration: 'none', fontWeight: '600' }}>
                          {texts.tourMorning.replace(/<[^>]*>/g, '')}
                        </Link>
                      </li>
                      <li>
                        <Link href={texts.paths.sunsetTour} style={{ color: '#0891b2', textDecoration: 'none', fontWeight: '600' }}>
                          {texts.tourSunset.replace(/<[^>]*>/g, '')}
                        </Link>
                      </li>
                      <li>
                        <Link href={texts.paths.privateTour} style={{ color: '#0891b2', textDecoration: 'none', fontWeight: '600' }}>
                          {texts.tourPrivate.replace(/<[^>]*>/g, '')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '15px', height: '100%' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                      <i className="fa-solid fa-location-dot" style={{ marginRight: '10px' }}></i>
                      {texts.whyAlcudiaTitle}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: texts.whyAlcudiaDescription }} />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px', padding: '30px', background: '#fff7ed', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                  <i className="fa-solid fa-umbrella-beach" style={{ marginRight: '10px' }}></i>
                  {texts.beachesTitle}
                </h3>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: texts.beachesP1 }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: texts.beachesP2 }} />
              </div>

              <div style={{ marginTop: '40px', padding: '30px', background: '#e0f2fe', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                  {texts.bookTitle}
                </h3>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: texts.bookDescription }} />

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <Link href={texts.paths.tours} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 30px',
                    background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(8, 145, 178, 0.3)',
                    transition: 'all 0.3s ease',
                  }}>
                    <i className="fa-solid fa-ship"></i>
                    <span>{texts.viewToursButton}</span>
                  </Link>
                  <Link href={texts.paths.contact} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 30px',
                    background: '#ffffff',
                    color: '#0891b2',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    border: '2px solid #0891b2',
                    transition: 'all 0.3s ease',
                  }}>
                    <i className="fa-solid fa-envelope"></i>
                    <span>{texts.contactButton}</span>
                  </Link>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
                  {texts.bookFooter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox: clicking the backdrop or anywhere outside the image frame closes.
          Only the image itself stops propagation, so the buttons (which sit on the
          backdrop) need their own stopPropagation to avoid closing on click. */}
      {selectedImage !== null && (() => {
        const cur = images[selectedImage];
        const stop = (e: React.MouseEvent) => e.stopPropagation();
        return (
          <div
            className="lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <button
              onClick={(e) => { stop(e); closeLightbox(); }}
              className="lightbox-btn lightbox-btn--close"
              aria-label="Close"
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <button
              onClick={(e) => { stop(e); goToPrevious(); }}
              className="lightbox-btn lightbox-btn--prev"
              aria-label="Previous image"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={(e) => { stop(e); goToNext(); }}
              className="lightbox-btn lightbox-btn--next"
              aria-label="Next image"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            <div
              className="lightbox-image-area"
              onClick={stop}
              style={{
                position: 'relative',
                width: `min(95vw, ${(85 * cur.width / cur.height).toFixed(2)}vh)`,
                aspectRatio: `${cur.width} / ${cur.height}`,
              }}
            >
              <Image
                src={`${IMAGE_BASE_PATH}/${cur.file}`}
                alt={cur.title}
                fill
                style={{ objectFit: 'contain' }}
                sizes="95vw"
                priority
              />
            </div>

            <div className="lightbox-counter">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        );
      })()}

      <style jsx>{`
        .collage-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 165px;
          grid-auto-flow: dense;
          gap: 14px;
        }
        .collage-tile {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .collage-tile:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
        }
        .col-span-1 { grid-column: span 1; }
        .col-span-2 { grid-column: span 2; }
        .col-span-4 { grid-column: span 4; }
        .row-span-2 { grid-row: span 2; }

        :global(.gallery-item__overlay) {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        :global(.gallery-item__overlay) i {
          font-size: 2rem;
          color: #ffffff;
        }
        .collage-tile:hover :global(.gallery-item__overlay) {
          opacity: 1;
        }

        /* Tablet: 3 cols. Banner downgrades to 2 cols → leaves 1×2 gap that
           the next portrait backfills via grid-auto-flow: dense. */
        @media (max-width: 992px) {
          .collage-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 155px;
          }
          .col-span-4 { grid-column: span 2; }
        }

        /* Mobile: 2 cols. Banner becomes 2×2 (full-width). Wides take full row,
           portraits pair up. */
        @media (max-width: 600px) {
          .collage-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 145px;
            gap: 10px;
          }
          .col-span-4 { grid-column: span 2; }
        }

        :global(.lightbox-btn) {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: #ffffff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10001;
        }
        :global(.lightbox-btn:hover) { background: rgba(255, 255, 255, 0.35); }
        :global(.lightbox-btn--close) { top: 20px; right: 20px; }
        :global(.lightbox-btn--prev) { left: 20px; top: 50%; transform: translateY(-50%); }
        :global(.lightbox-btn--next) { right: 20px; top: 50%; transform: translateY(-50%); }

        :global(.lightbox-image-area) {
          display: block;
        }
        :global(.lightbox-counter) {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          color: #ffffff;
          background: rgba(0, 0, 0, 0.45);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          z-index: 10000;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default GalleryGridClient;
