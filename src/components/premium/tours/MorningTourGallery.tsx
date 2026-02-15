'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const MorningTourGallery = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: '/assets/img/premium/morning_new/morning-boat-tour-sailing-alcudia-bay.webp',
      alt: 'Morning boat tour sailing through crystal-clear waters of Alcudia Bay Mallorca',
      title: 'Sailing in Paradise'
    },
    {
      src: '/assets/img/premium/morning_new/boat-trip-mallorca-northern-coastline.webp',
      alt: 'Boat trip along Mallorca northern coastline',
      title: 'Boat trip in Alcudia Bay'
    },
    {
      src: '/assets/img/premium/morning_new/snorkeling-mediterranean-fish-alcudia-bay.webp',
      alt: 'Snorkeling activities with professional equipment in Alcudia Bay',
      title: 'Snorkeling Adventures'
    },
    {
      src: '/assets/img/premium/morning_new/crystal-clear-turquoise-waters-alcudia-bay.webp',
      alt: 'Crystal-clear turquoise waters perfect for swimming and snorkeling',
      title: 'Crystal Waters'
    },
    {
      src: '/assets/img/premium/morning_new/authentic-mallorcan-tapas-onboard-boat-tour.webp',
      alt: 'Authentic Mallorcan tapas served on board during morning boat tour',
      title: 'Mallorcan Tapas Meal'
    },
    {
      src: '/assets/img/premium/morning_new/coral-boats-classic-1968-boat-mallorca.webp',
      alt: 'Classic 1968 Coral Boats vessel cruising Mallorca coastline',
      title: 'Our Classic Boat'
    },
    {
      src: '/assets/img/premium/morning_new/guests-enjoying-morning-boat-tour-alcudia.webp',
      alt: 'Happy guests enjoying morning boat tour experience in Mallorca',
      title: 'Making Memories'
    },
    {
      src: '/assets/img/premium/morning_new/traditional-homemade-sangria-boat-excursion.webp',
      alt: 'Authentic homemade Sangria served on board during morning tour',
      title: 'Homemade Sangria'
    },
    {
      src: '/assets/img/premium/morning_new/water-activities-floats-paradise-alcudia.webp',
      alt: 'Water activities with professional equipment in Alcudia Bay',
      title: 'Water Adventures'
    },
    {
      src: '/assets/img/premium/morning_new/hidden-coves-secret-beaches-alcudia-coastline.webp',
      alt: 'Alcudia coastline with hidden coves and secret beaches',
      title: 'Alcudia Coastline'
    },
    {
      src: '/assets/img/premium/morning_new/sweet-moments-icecream-boat-cruise.webp',
      alt: 'Icecream during morning boat cruise in Alcudia Bay',
      title: 'Sweet Treats'
    },
    {
      src: '/assets/img/premium/morning_new/boat-cruise-alcudia-coastline-cliffs.webp',
      alt: 'Boat cruise along Alcudia coastline Mallorca',
      title: 'Alcudia Cruise'
    },
    {
      src: '/assets/img/premium/morning_new/classic-boat-interior-coral-boats.webp',
      alt: 'Interior of classic Coral Boats vessel sailing in Alcudia Bay',
      title: 'Coral Boats Interior'
    },
    {
      src: '/assets/img/premium/morning_new/panoramic-coastline-views-morning-cruise.webp',
      alt: 'Enjoying the morning boat cruise in Alcudia Bay Mallorca with water activities',
      title: 'Coastiline Views'
    },
  ];

  return (
    <section className="premium-tour-gallery" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('morningTour.gallery.label')}</span>
              <h2 className="premium-section-header__title">
                {t('morningTour.gallery.title')}
              </h2>
              <p className="premium-section-header__description">
                {t('morningTour.gallery.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="gallery-main">
              <div className="main-image-wrapper">
                <Image
                  src={images[activeImage].src}
                  alt={images[activeImage].alt}
                  width={1200}
                  height={700}
                  className="main-image"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority={activeImage === 0}
                />
                <div className="image-caption">
                  <h4>{images[activeImage].title}</h4>
                </div>
              </div>

              <div className="gallery-thumbnails">
                {images.map((image, index) => (
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
            <Link href={getPath('/gallery')}>
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
                <span>{t('tours.gallery.cta_button')}</span>
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
              {t('tours.gallery.cta_secondary')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningTourGallery;
