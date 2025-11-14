'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tourPackagesData } from '@/data/tour-packages-data';
import Image from 'next/image';
import TourDetailsFaq from '@/components/tour/details/tour-details-faq';
import TourItemFour from '../tour-item/tour-item-four';
import DetailsSidebar from './details-sidebar';
import { ITourDT } from '@/types/tour-packages-d-t';
import { updatePrice } from '@/utils/helper';
import { ClockSvg, DollarSvg, LocationSvgTwo } from '@/components/svg';
import StickyCTA from '@/components/StickyCTA';

// import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// import { SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import useIsMobile from '@/hooks/useIsMobile';

import galeria13 from '@/assets/img/galeria_tour/tourGallery/02afternoon - copia.webp';//
import galeria14 from '@/assets/img/galeria_tour/tourGallery/marcha.webp';//
import galeria15 from '@/assets/img/galeria_tour/tourGallery/proa.webp';//
import galeria16 from '@/assets/img/galeria_tour/tourGallery/tres.webp';//
import galeria17 from '@/assets/img/galeria_tour/tourGallery/popa.webp';//
import galeria18 from '@/assets/img/galeria_tour/tourGallery/vino.webp';//
import galeria19 from '@/assets/img/galeria_tour/tourGallery/interior.webp';//
import galeria4 from '@/assets/img/galeria_tour/tourGallery/paseo_rec.webp';//
import galeria5 from '@/assets/img/galeria_tour/tourGallery/amigos_rec.webp';//
import galeria6 from '@/assets/img/galeria_tour/tourGallery/comida_rec.webp';//
import galeria7 from '@/assets/img/galeria_tour/tourGallery/sangría_rec.webp';//
import galeria8 from '@/assets/img/galeria_tour/tourGallery/brindis_rec.webp';//
import galeria9 from '@/assets/img/galeria_tour/tourGallery/faro_rec.webp';//
import galeria23 from '@/assets/img/galeria_tour/tourGallery/03sunset.webp';//
import galeria22 from '@/assets/img/galeria_tour/tourGallery/cunill2_rec.webp';//
import galeria24 from '@/assets/img/galeria_tour/tourGallery/frontal.webp';//
import galeria10 from '@/assets/img/galeria_tour/tourGallery/fotograma2editado.webp';//
import galeria11 from '@/assets/img/galeria_tour/tourGallery/fotograma4.webp';//

import GoogleReviews from '@/components/GoogleReviews';
import InstagramFeed from '@/components/InstagramFeed';
import SalePopup from '@/components/SalePopup';

import TourPolicy from './tour-policy';
import Script from 'next/script'; 
import BookNowButton from '@/components/booking/book-now-button';
import shapeImg2 from '@/assets/img/home-1/featured/shape/logo transparente sobre claro - copia.png';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });


const Swiper = dynamic(() =>
  import('swiper/react').then((mod) => mod.Swiper),
  { ssr: false }
);

const SwiperSlide = dynamic(() =>
  import('swiper/react').then((mod) => mod.SwiperSlide),
  { ssr: false }
);




const TourDetailsArea = ({ tour: selectedTour }: { tour: ITourDT }) => {
  const { t } = useTranslation('common');
  const [showSidebar, setShowSidebar] = useState(false);

  const translatedTours = tourPackagesData().map((tour) => ({
    ...tour,
    title: t(tour.title), 
    title2: t(tour.title2),
    address: t(tour.address),
    description: t(tour.description ?? 'Descripción no disponible'),
    btnText: t(tour.btnText),
  }));

  const tour: ITourDT | undefined = translatedTours.find((t) => t.slug === selectedTour.slug);
  
  const [index, setIndex] = useState(-1); // -1 indica que el lightbox está cerrado
  const isMobile = useIsMobile();

  if (!tour) return <div>{t('tour_not_found')}</div>;


  const galleryImages = [
    { src: galeria10.src, alt: 'Aerial view of boat tours in Alcudia Bay over crystal-clear waters in Mallorca' },
    { src: galeria24.src, alt: 'Boat tour sailing close to the shore with mountains in the background' },
    { src: galeria22.src, alt: 'Captain steering the boat during a Coral Boats tour in Mallorca' },
    { src: galeria13.src, alt: 'Boat trip departing through Alcudia Bay with paddle board and snorkel included' },
    { src: galeria23.src, alt: 'Sunset cruise in Alcudia with beautiful sky reflections on the sea' },
    { src: galeria14.src, alt: 'Sightseeing boat tour cruising through Alcudia Bay with meal and tapas included' },
    { src: galeria15.src, alt: 'Front deck of a tour boat heading towards the sea in Alcudia Bay Mallorca' },
    { src: galeria16.src, alt: 'Three guests enjoying the sun during a Coral Boats trip in Alcudia Mallorca' },
    { src: galeria17.src, alt: 'Rear view of the boat during a tour with Coral Boats along the Mallorca coast' },
    { src: galeria18.src, alt: 'Sangria served onboard during a relaxing boat cruise with Coral Boats Mallorca' },
    { src: galeria19.src, alt: 'Tapas Included Mediterranean food setup onboard a boat tour in Mallorca' },
    { src: galeria6.src, alt: 'Traditional sangria being enjoyed during a Coral Boats tour' },
    { src: galeria7.src, alt: 'Traditional sangria being enjoyed during a Coral Boats tour' },
    { src: galeria5.src, alt: 'Three guests enjoying the sun during a Coral Boats trip in Alcudia Mallorca' },
    { src: galeria4.src, alt: 'Sightseeing boat tour cruising through Alcudia Bay' },
    { src: galeria8.src, alt: 'Friends in a boat tour in Alcudia Mallorca enjoying Coral Boats' },
    { src: galeria11.src, alt: 'Spacious seating area inside the Coral Boats excursion vessel' },
    { src: galeria9.src, alt: 'View of a lighthouse from the sea during a scenic boat trip in Mallorca' },
  ];


  return (
    <div className="it-discover-area pt-60 pb-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
  
            {/* 🆕 Diseño en dos columnas */}
            <div className="row align-items-center mb-20">
              {/* Columna izquierda */}
              <div className="col-lg-6">
                <div className="it-discover-meta-box d-flex align-items-center mb-3">
                  <span className="it-discover-meta-icon me-2">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span>{tour.address}</span>
                </div>
  
                <h3 className="it-section-title3 mb-3" style={{ whiteSpace: 'pre-line' }}>
                  {tour.title2}
                </h3>
  
                {/* <p className="lead" style={{ fontWeight: 400 }}>
                  {t('sunset_claim') ?? 'Navega hacia el atardecer entre calas escondidas y buena compañía.'}
                </p> */}
  
                <div className="d-flex flex-wrap mt-4 gap-4">
                  {/* Precio */}
                  <div className="d-flex align-items-center">
                    <span className="me-2"><DollarSvg /></span>
                    <div>
                      <small>{t('price')}</small><br />
                      <strong>{Math.round(updatePrice(tour)).toFixed(0)}€</strong>
                    </div>
                  </div>
  
                  {/* Duración */}
                  <div className="d-flex align-items-center">
                    <span className="me-2"><ClockSvg /></span>
                    <div>
                      <small>{t('duration')}</small><br />
                      <strong>{tour.duration} {t('hours')}</strong>
                    </div>
                  </div>
  
                  {/* Tipo */}
                  <div className="d-flex align-items-center">
                    <span className="me-2"><LocationSvgTwo /></span>
                    <div>
                      <small>{t('type_of_excursion')}</small><br />
                      <strong>{t('coastal')}</strong>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Columna derecha: imagen o vídeo */}
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="it-discover-thumb mb-15">
                  <Image
                    src={tour.image ?? ''}
                    alt={`${tour.title} - Boat tour in Alcudia Mallorca`}
                    width={770}
                    height={451}
                    style={{ width: '100%', height: 'auto', borderRadius: '0px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            

            {/* Logos en movimiento */}
            <div style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                padding: '0px 0',
                // borderTop: '1px solid #eee',
                // borderBottom: '1px solid #eee',
                marginBottom: '40px',
              }}>
                <div style={{
                  display: 'inline-block',
                  animation: 'scroll-logos 25s linear infinite',
                }}>
                  {[...Array(20)].map((_, i) => (
                    <Image
                      key={i}
                      src={shapeImg2}
                      alt=""
                      width={40}
                      height={40}
                      style={{ margin: '0 15px', opacity: 1 }}
                    />
                  ))}
                </div>

                <style jsx>{`
                  @keyframes scroll-logos {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}</style>
              </div>


            {/* ✅ Descripción */}
            <div className="it-discover-dsc mb-45">
              <h3 className="it-discover-sm-title">{t('description_lit')}</h3>
              <p>{tour.description}</p>
            </div>
            
             {/* ✅ Servicios incluidos y bajo demanda en dos columnas */}
             <div className="row">
               {/* ✅ Servicios incluidos */}
               <div className="col-xl-6">
                 <h3 className="it-discover-sm-title mb-25">{t('included_services.title')}</h3>
                 <div className="it-discover-included-content mb-40">
                   <ul>
                     <li>
                       <i className="fa-solid fa-utensils"></i>
                       {t('included_services.meal')}
                     </li>
                     <li>
                       <i className="fa-solid fa-cocktail"></i>
                       {t('included_services.drink')}
                     </li>
                     <li>
                       <i className="fa-solid fa-swimmer"></i>
                       {t('included_services.snorkel')}
                     </li>
                     <li>
                       <i className="fa-solid fa-life-ring"></i>
                       {t('included_services.life_jacket')}
                     </li>
                     <li>
                       <i className="fa-solid fa-water"></i>
                       {t('included_services.paddle_surf')}
                     </li>
                     <li>
                       <i className="fa-solid fa-shield-alt"></i>
                       {t('included_services.insurance')}
                     </li>
                   </ul>
                 </div>
               </div>
               {/* ✅ Servicios bajo demanda */}
               <div className="col-xl-6">
                 <h3 className="it-discover-sm-title mb-25">{t('on_demand_services.title')}</h3>
                 <div className="it-discover-included-content mb-40">
                   <ul>
                     <li className="it-discover-exclude">
                       <i className="fa-regular fa-bus"></i>
                       {t('on_demand_services.transport')}
                     </li>
                     <li className="it-discover-exclude">
                       <i className="fa-regular fa-utensils"></i>
                       {t('on_demand_services.allergies')}
                     </li>
                     <li className="it-discover-exclude">
                       <i className="fa-regular fa-bath"></i>
                       {t('on_demand_services.towels')}
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
              <InstagramFeed />
              <GoogleReviews />
              <SalePopup />
             <h3 className="it-discover-sm-title mb-25">{t('gallery.title')}</h3>
              {isMobile ? (
  <>

  
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{ paddingBottom: '30px' }}
    >
      {galleryImages.map((img, i) => (
        <SwiperSlide key={i}>
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              // borderRadius: '12px',
              cursor: 'pointer',
              padding: '10px 10px',
            }}
            onClick={() => setIndex(i)}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <Lightbox
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      slides={galleryImages.map((img) => ({
        src: img.src,
        alt: img.alt,
      }))}
      plugins={[Thumbnails, Captions]}
    />
  </>
) : (
                <>
                  <div className="row">
                    {galleryImages.map((img, i) => (
                      <div className="col-md-4 mb-4" key={i}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={370}
                          height={250}
                          loading="lazy"
                          style={{ height: 'auto', cursor: 'pointer' }}
                          onClick={() => setIndex(i)}
                        />
                      </div>
                    ))}
                  </div>
                  
                  <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={galleryImages.map((img) => ({
                      src: img.src,
                      alt: img.alt,
                      // description: img.alt,
                    }))}
                    plugins={[Thumbnails, Captions]}
                  />
                </>
              )}
        
             {/* ✅ Preguntas Frecuentes */}
             <h3 className="it-discover-sm-title mt-40 mb-25">{t('faq_title')}</h3>
             <TourDetailsFaq />
             {/* ✅ Política de Cancelación */}
             <h3 className="it-discover-sm-title mt-40 mb-25">{t('policy_terms_title')}</h3>
             <TourPolicy />
           </div>

          {/* ✅ Barra Lateral */}
          {/* <div className="col-xl-4 col-lg-4 d-none d-lg-block">
            <DetailsSidebar tour={tour} />
          </div> */}

          {/* ✅ FAB para móviles */}
          {/* <button
            className="fab-button"
            onClick={() => setShowSidebar(true)}
          >
            {t('book_now')}
          </button> */}

          


          {/* ✅ Pop-Up lateral */}
          {showSidebar && (
            <div className="mobile-sidebar">
              <button
                className="close-button"
                onClick={() => setShowSidebar(false)}
              >
                ✕
              </button>
              <DetailsSidebar tour={tour} />
            </div>
          )}
        </div>
      </div>
      <div className="fixed-book-button bounce">
            <BookNowButton itemId={tour.fhId} label={t('book_now')} />
          </div>
          {/* <StickyCTA itemId={tour.fhId} label={t('book_now')} /> */}

    </div>
  );
};

export default TourDetailsArea;

