'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

interface RelatedToursProps {
  currentTour?: 'morning' | 'sunset' | 'charter';
}

const RelatedTours = ({ currentTour }: RelatedToursProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  const allTours = [
    {
      id: 'morning',
      nameKey: 'relatedTours.morning.name',
      descriptionKey: 'relatedTours.morning.description',
      timeKey: 'relatedTours.morning.time',
      durationKey: 'relatedTours.morning.duration',
      priceKey: 'relatedTours.morning.price',
      image: '/assets/img/premium/home_new/card_morning.webp',
      link: getPath('/alcudia-morning-boat-tour'),
      highlightsKey: 'relatedTours.morning.highlights'
    },
    {
      id: 'sunset',
      nameKey: 'relatedTours.sunset.name',
      descriptionKey: 'relatedTours.sunset.description',
      timeKey: 'relatedTours.sunset.time',
      durationKey: 'relatedTours.sunset.duration',
      priceKey: 'relatedTours.sunset.price',
      image: '/assets/img/premium/home_new/card_sunset.webp',
      link: getPath('/alcudia-sunset-boat-tour'),
      highlightsKey: 'relatedTours.sunset.highlights'
    },
    {
      id: 'charter',
      nameKey: 'relatedTours.charter.name',
      descriptionKey: 'relatedTours.charter.description',
      timeKey: 'relatedTours.charter.time',
      durationKey: 'relatedTours.charter.duration',
      priceKey: 'relatedTours.charter.price',
      image: '/assets/img/premium/home_new/card_private.webp',
      link: getPath('/alcudia-private-boat-charter'),
      highlightsKey: 'relatedTours.charter.highlights'
    }
  ];

  // Filter out current tour if specified, otherwise show all tours
  const relatedTours = currentTour
    ? allTours.filter(tour => tour.id !== currentTour)
    : allTours;

  // Determine column class based on number of tours
  const colClass = relatedTours.length === 3 ? 'col-lg-4 col-md-6' : 'col-lg-6 col-md-12';

  return (
    <section className="related-tours" style={{ padding: '80px 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="premium-section-header__label">{t('relatedTours.label')}</span>
              <h2 className="premium-section-header__title">
                {t('relatedTours.title')}
              </h2>
              <p className="premium-section-header__description">
                {t('relatedTours.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {relatedTours.map((tour) => (
            <div key={tour.id} className={colClass}>
              <Link href={tour.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div
                  className="related-tour-card"
                  style={{
                    cursor: 'pointer',
                    background: '#ffffff',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}
                >
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                    <Image
                      src={tour.image}
                      alt={t(tour.nameKey)}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'rgba(8, 145, 178, 0.95)',
                        color: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {t(tour.highlightsKey).split('•')[0].trim()}
                    </div>
                  </div>

                  <div style={{ padding: '30px' }}>
                    <div style={{ marginBottom: '15px' }}>
                      <h3
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: '700',
                          color: '#1e293b',
                          marginBottom: '8px',
                          lineHeight: '1.3'
                        }}
                      >
                        {t(tour.nameKey)}
                      </h3>
                      <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                        <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <i className="fa-regular fa-clock" style={{ color: '#0891b2' }}></i>
                          {t(tour.timeKey)}
                        </span>
                        <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <i className="fa-regular fa-hourglass" style={{ color: '#0891b2' }}></i>
                          {t(tour.durationKey)}
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#64748b',
                        lineHeight: '1.7',
                        marginBottom: '20px'
                      }}
                    >
                      {t(tour.descriptionKey)}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '20px',
                        borderTop: '1px solid #e2e8f0'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                          {t('relatedTours.from')}
                        </span>
                        <span style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0891b2' }}>
                          {t(tour.priceKey)}
                        </span>
                        <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '6px' }}>
                          {t('relatedTours.per_person')}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#0891b2',
                          fontWeight: '600',
                          fontSize: '1rem'
                        }}
                      >
                        <span>{t('relatedTours.view_details')}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .related-tour-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15) !important;
        }
        .related-tour-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default RelatedTours;
