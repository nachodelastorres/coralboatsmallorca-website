'use client';

import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutOne = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

const images = [
  {
    src: '/assets/img/galeria_tour/web/comida_rec.webp',
    alt: 'Mediterranean lunch served during a Coral Boats tour in Alcudia Bay'
  },
  {
    src: '/assets/img/galeria_tour/web/marcha.webp',
    alt: 'The Coral Boat during a scenic boat trip in Mallorca'
  },
  {
    src: '/assets/img/galeria_tour/web/02afternoon - copia.webp',
    alt: 'Morinung boat excursion with paddle surfing in crystal-clear waters'
  },
  {
    src: '/assets/img/galeria_tour/web/proa.webp',
    alt: 'Front deck view of the boat sailing across the bay of Alcudia'
  },
  {
    src: '/assets/img/galeria_tour/web/tres.webp',
    alt: 'Three guests enjoying the sun during a Coral Boats trip'
  },
  {
    src: '/assets/img/galeria_tour/web/popa.webp',
    alt: 'Rear view of the boat during a tour along the Mallorca coast'
  },
  {
    src: '/assets/img/galeria_tour/web/vino.webp',
    alt: 'Sangria served onboard during a relaxing boat cruise'
  },
  {
    src: '/assets/img/galeria_tour/web/sunset2.webp',
    alt: 'Sunset seen from Coral Boats tour in Alcudia Bay'
  },
  {
    src: '/assets/img/galeria_tour/web/interior.webp',
    alt: 'Interior of the boat showing comfortable seating and panoramic views'
  },
  {
    src: '/assets/img/galeria_tour/web/paseo_rec.webp',
    alt: 'Cruise along the coastline during a Coral Boat Afternoon Tour'
  },
  {
    src: '/assets/img/galeria_tour/web/sangría_rec.webp',
    alt: 'Traditional sangria being enjoyed during a Coral Boats tour'
  },
  {
    src: '/assets/img/galeria_tour/web/brindis_rec.webp',
    alt: 'Cheers moment with drinks onboard Coral Boats in Mallorca'
  },
  {
    src: '/assets/img/galeria_tour/web/amigos_rec.webp',
    alt: 'Group of friends smiling during a boat trip with Coral Boats'
  }
];


  return (
    <div
      className="it-about-area it-about-bg pt-120 pb-175 p-relative grey-bg"
      style={{
        backgroundImage: `url(/assets/img/home-1/slider/generada-7-opaca-0.5.webp)`
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* ✅ Texto */}
          <div className="col-xl-6 col-lg-6 order-1 order-lg-1 it-about-content" data-aos="fade-right" data-aos-duration="1200">
            <div className="it-about-title-box text-align-center mb-40">
              <h2 className="it-section-title2 mt-40 mb-20">
                {t('about.title')}
              </h2>
              <p className="it-section-subtitle text-white">
                {t('about.subtitle')}
              </p>
              <p className="it-about-text">
                {t('about.body')}
              </p>
              <div className="it-featured-action">
                <Link href={getPath('/boat-tours-alcudia')} legacyBehavior>
                  <a className="it-btn-primary">{t('book_now')}</a>
                </Link>
              </div>
            </div>
          </div>

          {/* ✅ Slider de imágenes */}
          <div className="col-xl-6 col-lg-6 order-2 order-lg-2">
            <Slider {...sliderSettings}>
              {images.map((img, index) => (
                <div key={index} className="slider-image-container">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={576}
                    height={300}
                    loading="lazy"
                    placeholder="empty"
                    style={{
                      objectFit: 'cover',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;

