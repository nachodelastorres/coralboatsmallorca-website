'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const SunsetTourGallery = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: '/assets/img/premium/sunset_new/suns2.webp',
      alt: 'Sunset boat tour sailing through golden waters of Alcudia Bay Mallorca',
      title: 'Sailing at Sunset'
    },
    {
      src: '/assets/img/premium/morning_new/10.webp',
      alt: 'Evening boat trip along Mallorca northern coastline',
      title: 'Evening Cruise in Alcudia Bay'
    },
    {
      src: '/assets/img/premium/morning_new/06.webp',
      alt: 'Swimming activities in golden evening light in Alcudia Bay',
      title: 'Golden Hour Swimming'
    },
    {
      src: '/assets/img/premium/morning_new/04.webp',
      alt: 'Beautiful evening waters perfect for swimming',
      title: 'Evening Waters'
    },
    {
      src: '/assets/img/premium/morning_new/02.webp',
      alt: 'Authentic Mallorcan tapas served on board during sunset boat tour',
      title: 'Mallorcan Tapas Meal'
    },
    {
      src: '/assets/img/premium/morning_new/00portrait.webp',
      alt: 'Classic 1968 Coral Boats vessel at sunset cruising Mallorca coastline',
      title: 'Our Classic Boat'
    },
    {
      src: '/assets/img/premium/sunset_new/suns1.webp',
      alt: 'Happy guests enjoying sunset boat tour experience in Mallorca',
      title: 'Making Memories'
    },
    {
      src: '/assets/img/premium/morning_new/03.webp',
      alt: 'Authentic homemade Sangria served on board during sunset tour',
      title: 'Homemade Sangria'
    },
    {
      src: '/assets/img/premium/morning_new/matress.webp',
      alt: 'Water activities in golden evening light in Alcudia Bay',
      title: 'Evening Water Adventures'
    },
    {
      src: '/assets/img/premium/sunset_new/sunset_hero.webp',
      alt: 'Alcudia coastline at sunset',
      title: 'Sunset Coastline'
    },
    {
      src: '/assets/img/premium/morning_new/icecream.webp',
      alt: 'Sweet treats during sunset boat cruise in Alcudia Bay',
      title: 'Sweet Treats'
    },
    {
      src: '/assets/img/premium/sunset_new/suns3.webp',
      alt: 'Sunset boat cruise along Alcudia coastline Mallorca',
      title: 'Alcudia Sunset Cruise'
    },
    {
      src: '/assets/img/premium/morning_new/interior.webp',
      alt: 'Interior of classic Coral Boats vessel at sunset in Alcudia Bay',
      title: 'Coral Boats Interior'
    },
    {
      src: '/assets/img/premium/morning_new/24.webp',
      alt: 'Enjoying the sunset boat cruise in Alcudia Bay Mallorca',
      title: 'Sunset Views'
    },
  ];

  return (
    <section className="premium-tour-gallery" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('sunsetTour.gallery.label')}</span>
              <h2 className="premium-section-header__title">
                {t('sunsetTour.gallery.title')}
              </h2>
              <p className="premium-section-header__description">
                {t('sunsetTour.gallery.description')}
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

export default SunsetTourGallery;
