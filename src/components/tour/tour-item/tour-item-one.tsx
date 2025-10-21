'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ITourDT } from '@/types/tour-packages-d-t';
import { updatePrice } from '@/utils/helper';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TourItemProps {
  tour: ITourDT;
}

// Helper function to get the correct route for each tour
const getTourRoute = (slug: string): string => {
  const routeMap: { [key: string]: string } = {
    'morning-tour': '/alcudia-morning-boat-tour',
    'day-tour': '/alcudia-morning-boat-tour',
    'sunset-tour': '/alcudia-sunset-boat-tour',
  };
  return routeMap[slug] || `/alcudia-morning-boat-tour`;
};

const TourItemOne = ({ tour }: TourItemProps) => {
  const [isInLove, setIsInLove] = useState<boolean>(false);
  const { t, i18n } = useTranslation('common'); // añade i18n aquí
  const lang = i18n.language; // idioma actual, ej: 'en', 'es', etc.

  const tourRoute = getTourRoute(tour.slug);

  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-thumb p-relative" style={{ zIndex: 1 }}>
        <Link href={tourRoute} style={{ display: 'block' }}>
          <Image
            src={tour.image}
            alt={tour.title}
            width={370}
            height={247}
            style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="it-featured-top d-flex align-items-center">
        {tour.badgeTitle && (
          <div className="it-featured-offer">
            <span>{tour.badgeTitle} off</span>
          </div>
        )}
        {tour.isFeature && (
          <div className="it-featured-categories">
            <span>featured</span>
          </div>
        )}
      </div>
      <div className="it-featured-content">
        <div className="it-featured-react-box d-flex align-items-center">
        </div>
        <div className="it-featured-meta mb-5">
          <a 
          // href="https://maps.app.goo.gl/MiNNUGT1BwszSnsm9"
          >
            <i className="fa-solid fa-location-dot"></i> {tour.address}
          </a>
        </div>
        <h3 className="it-featured-title">
          <Link href={tourRoute}>{tour.title}</Link>
        </h3>
        <div className="it-featured-review-box pb-25 mb-25 d-flex align-items-center justify-content-between">
          <div className="it-featured-price d-flex align-items-center">
            <i className="fa-regular fa-info-circle"></i>
            <p>
              {t('fds1')} · {t('fds2')} · {t('fds3')}
              {/* <span>${Math.round(updatePrice(tour)).toFixed(2)}</span>{' '} */}
              {/* {tour.badgeTitle && <del>€{tour.price.toFixed(2)}</del>} */}
            </p>
          </div>
          <div className="it-featured-review d-flex align-items-center">
            {/* <i className="fa-solid fa-star"></i> */}
            <p>
              {/* <span>{tour.rating}</span> */}
                {/* </span> ({tour.review}k review) */}
            </p>
          </div>
        </div>
        <div className="it-featured-bottom">
  {/* Iconos duración y precio */}
  <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
    <div className="it-featured-time">
      <span>
        <i className="fa-regular fa-clock"></i> {tour.duration} {t('hours')}
      </span>
    </div>
    <div className="it-featured-user">
      <span>
        <i className="fa fa-coins"></i> {t('premium.tours.from')} {tour.price} €
      </span>
      <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px' }}>
        {t('premium.tours.children')}: {tour.price2}€ · {t('premium.tours.infants')}: {t('premium.tours.free')}
      </div>
    </div>
  </div>

  {/* Botones: uno a la izquierda y otro a la derecha */}
  <div className="d-flex justify-content-between align-items-center">
    {/* Botón "Más info" a la izquierda */}
    <Link
      href={tourRoute}
      className="it-btn-testtour"
    >
      {t('more_info')}
    </Link>

    {/* Botón "Reservar ahora" a la derecha, con misma clase */}

<a
  href={`https://fareharbor.com/embeds/book/coralboatsmallorca/items/${tour.fhId}/?full-items=yes&flow=1382210&language=${lang}`}
  onClick={(e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).FH) {
      (window as any).FH.open({
        shortname: 'coralboatsmallorca',
        fallback: 'simple',
        fullItems: 'yes',
        flow: 1382210,
        view: { item: Number(tour.fhId) },
        language: lang, // 👈 importante aquí también
      });
    } else {
      alert('El sistema de reservas aún se está cargando.');
    }
  }}
  className="it-btn-testtour btn-orange"
>
  {t('book_now')}
</a>

  {/* </div> */}
{/* </div> */}


          </div>
        </div>
      </div>
    </div>
  );
};
export default TourItemOne;
