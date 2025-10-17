'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useTranslation } from 'next-i18next';


import galleryImg1 from '@/assets/img/inner-page/gallery/g1.webp';
import galleryImg2 from '@/assets/img/inner-page/gallery/g2.webp';
import galleryImg3 from '@/assets/img/inner-page/gallery/g3.webp';
import galleryImg4 from '@/assets/img/inner-page/gallery/g4.webp';
import galleryImg5 from '@/assets/img/inner-page/gallery/g5.webp';
import galleryImg6 from '@/assets/img/inner-page/gallery/g6.webp';
import galleryImg7 from '@/assets/img/inner-page/gallery/g7.webp';
import galleryImg8 from '@/assets/img/inner-page/gallery/g8.webp';
import galleryImg9 from '@/assets/img/inner-page/gallery/g9.webp';
import galleryImg10 from '@/assets/img/inner-page/gallery/g10.webp';
import galleryImg11 from '@/assets/img/inner-page/gallery/g11.webp';
import galleryImg12 from '@/assets/img/inner-page/gallery/g12.webp';
import galleryImg13 from '@/assets/img/inner-page/gallery/g13.webp';
import galleryImg14 from '@/assets/img/inner-page/gallery/g14.webp';
import galleryImg15 from '@/assets/img/inner-page/gallery/g15.webp';
import galleryImg16 from '@/assets/img/inner-page/gallery/g16.webp';
import galleryImg17 from '@/assets/img/inner-page/gallery/g17.webp';
import galleryImg18 from '@/assets/img/inner-page/gallery/g18.webp';
import galleryImg19 from '@/assets/img/inner-page/gallery/g19.webp';
import galleryImg20 from '@/assets/img/inner-page/gallery/g20.webp';

const imageData = [
  { src: galleryImg20.src, alt: 'Aerial view of boat tours in Alcudia Bay over crystal-clear waters in Mallorca' },
  { src: galleryImg1.src, alt: 'Boat trip departing through Alcudia Bay with paddle boarders nearby' },
  { src: galleryImg19.src, alt: 'Coral Boats excursion anchored near a hidden beach in northern Mallorca' },
  { src: galleryImg15.src, alt: 'Front deck of a tour boat heading towards the sea in Alcudia Bay' },
  { src: galleryImg8.src, alt: 'Drone shot of a Coral Boats excursion floating over turquoise water' },
  { src: galleryImg14.src, alt: 'Boat cruise along the coast of Mallorca on a sunny day' },
  { src: galleryImg10.src, alt: 'Boat tour sailing close to the shore with mountains in the background' },
  { src: galleryImg2.src, alt: 'Sunset cruise in Alcudia with beautiful sky reflections on the sea' },
  { src: galleryImg6.src, alt: 'Captain steering the boat during a Coral Boats tour in Mallorca' },
  { src: galleryImg18.src, alt: 'Drinks being served during a boat trip along the Mallorca coastline' },
  { src: galleryImg5.src, alt: 'Mediterranean breakfast setup onboard a boat tour in Mallorca' },
  { src: galleryImg11.src, alt: 'Spacious seating area inside the Coral Boats excursion vessel' },
  { src: galleryImg12.src, alt: 'Sightseeing boat tour cruising through Alcudia Bay' },
  { src: galleryImg17.src, alt: 'Sunset reflecting on the sea during a relaxing boat trip' },
  { src: galleryImg16.src, alt: 'Sangria and cava served onboard during a boat excursion in Mallorca' },
  { src: galleryImg3.src, alt: 'Group of friends enjoying a boat tour in Mallorca with Coral Boats' },
  { src: galleryImg13.src, alt: 'Sea view from inside the boat during a coastal tour in Alcudia' },
  { src: galleryImg9.src, alt: 'Overhead view of a boat anchored in shallow turquoise waters' },
  { src: galleryImg4.src, alt: 'Cheers moment with guests during a Coral Boats experience' },
  { src: galleryImg7.src, alt: 'View of a lighthouse from the sea during a scenic boat trip in Mallorca' },
];


const GalleryArea = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Handler for image gallery
  const handleImageClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex(index);
    setOpen(true);
  };

const { t } = useTranslation('common');

return (
  <>
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={imageData}
      index={currentIndex}
      styles={{
        container: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    />

    {/* Redes sociales en tarjeta visual */}
    <div className="it-gallery-intro">
      <div className="social-card">
    <h2>{t('socialTitle')}</h2>
    <p>{t('socialDescription')}</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/coralboatsmallorca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Coral Boats"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@coralboatsmallorca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok Coral Boats"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="it-gallery-area pt-30 pb-150">
      <div className="container">
        <div className="row">
          {imageData.map((image, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="it-gallery-item">
                <div className="it-gallery-thumb">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={370}
                    height={370}
                    style={{ height: 'auto' }}
                  />
                  <div className="it-gallery-thumb-icon">
                    <Link
                      className="popup-image"
                      href="#"
                      onClick={(e) => handleImageClick(index, e)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Estilos en línea con JSX */}
    <style jsx>{`
      .it-gallery-intro {
        text-align: center;
        padding-top: 30px;
        margin-bottom: 30px;
      }

      .social-card {
        background-color: #ffffff;
        border-radius: 16px;
        padding: 30px 0px;
        margin: 0 auto;
        max-width: 700px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .social-card h2 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 12px;
        color: #045454;
      }

      .social-card p {
        font-size: 16px;
        color: #555;
        margin-bottom: 20px;
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 24px;
      }

      .social-links a {
        color: #ed6a46;
        font-size: 32px;
        transition: color 0.3s ease;
      }

      .social-links a:hover {
        color: #00a8cc;
      }
    `}</style>
  </>
);


};
export default GalleryArea;
