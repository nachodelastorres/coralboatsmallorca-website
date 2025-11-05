'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const PrivateCharterGallery = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: '/assets/img/premium/home_new/boat.webp',
      alt: 'Classic Coral Boats charter vessel for private events in Alcudia Mallorca',
      title: 'Our Classic Vessel'
    },
    {
      src: '/assets/img/premium/home_new/14.webp',
      alt: 'Large group enjoying private boat charter in Bay of Alcudia Mallorca',
      title: 'Perfect for Groups'
    },
    {
      src: '/assets/img/premium/home_new/15.webp',
      alt: 'Private charter boat sailing crystal clear waters of Alcudia Bay',
      title: 'Crystal Clear Waters'
    },
    {
      src: '/assets/img/premium/home_new/19.webp',
      alt: 'Guests relaxing on private charter boat deck in Mallorca',
      title: 'Relax and Unwind'
    },
    {
      src: '/assets/img/premium/home_new/18.webp',
      alt: 'Private boat charter experience with stunning Mediterranean views Mallorca',
      title: 'Mediterranean Beauty'
    },
    {
      src: '/assets/img/premium/home_new/13.webp',
      alt: 'Group celebration on private charter boat in Alcudia Mallorca',
      title: 'Celebrate Together'
    },
    {
      src: '/assets/img/premium/home_new/interior.webp',
      alt: 'Spacious interior of private charter boat with capacity for 40 guests',
      title: 'Spacious Interior'
    },
    {
      src: '/assets/img/premium/home_new/12.webp',
      alt: 'Private charter boat for corporate events and celebrations Alcudia',
      title: 'Corporate Events'
    },
    {
      src: '/assets/img/premium/home_new/friends_group1.webp',
      alt: 'Friends enjoying private boat charter party in Mallorca',
      title: 'Friends & Fun'
    },
    {
      src: '/assets/img/premium/home_new/card_sunset.webp',
      alt: 'Sunset views from private charter boat in Alcudia Bay Mallorca',
      title: 'Magical Sunsets'
    },
    {
      src: '/assets/img/premium/home_new/sunset.webp',
      alt: 'Private boat charter during golden hour sunset in Mallorca',
      title: 'Golden Hour'
    },
    {
      src: '/assets/img/premium/home_new/sunset_port.webp',
      alt: 'Private charter boat arriving at Port Alcudia during sunset',
      title: 'Port Alcudia Sunset'
    },
    {
      src: '/assets/img/premium/home_new/4.webp',
      alt: 'Swimming and water activities on private charter boat Mallorca',
      title: 'Water Activities'
    },
    {
      src: '/assets/img/premium/home_new/7.webp',
      alt: 'Private boat charter for special celebrations and events Alcudia',
      title: 'Special Celebrations'
    },
    {
      src: '/assets/img/premium/home_new/9.webp',
      alt: 'Exclusive private boat rental experience in Alcudia Bay Mallorca',
      title: 'Exclusive Experience'
    },
    {
      src: '/assets/img/premium/home_new/10.webp',
      alt: 'Private charter boat exploring hidden coves of northern Mallorca',
      title: 'Hidden Coves'
    },
    {
      src: '/assets/img/premium/home_new/04portrait.webp',
      alt: 'Private charter boat for up to 40 people in Alcudia Mallorca',
      title: 'Capacity for 40'
    },
    {
      src: '/assets/img/premium/home_new/proa.webp',
      alt: 'Bow view of classic private charter boat in Mediterranean waters',
      title: 'Classic Bow'
    }
  ];

  return (
    <section className="premium-tour-gallery" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('privateCharter.gallery.label')}</span>
              <h2 className="premium-section-header__title">
                {t('privateCharter.gallery.title')}
              </h2>
              <p className="premium-section-header__description">
                {t('privateCharter.gallery.description')}
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

export default PrivateCharterGallery;
