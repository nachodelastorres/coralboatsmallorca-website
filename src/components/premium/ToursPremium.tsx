'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { useState } from 'react';

const ToursPremium = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();
  const [showPriceBreakdown, setShowPriceBreakdown] = useState<string | null>(null);

  const tours = [
    {
      id: 'morning',
      nameKey: 'premium.tours.morning_name',
      timeKey: 'premium.tours.morning_time',
      durationKey: 'premium.tours.morning_duration',
      priceKey: 'premium.tours.morning_price',
      image: '/assets/img/premium/home_new/card_morning.webp',
      fareHarborId: '627668',
      link: getPath('/alcudia-morning-boat-tour'),
      highlightsKey: 'premium.tours.morning_highlights'
    },
    {
      id: 'sunset',
      nameKey: 'premium.tours.sunset_name',
      timeKey: 'premium.tours.sunset_time',
      durationKey: 'premium.tours.sunset_duration',
      priceKey: 'premium.tours.sunset_price',
      image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
      fareHarborId: '627686',
      link: getPath('/alcudia-sunset-boat-tour'),
      highlightsKey: 'premium.tours.sunset_highlights'
    }
  ];

  return (
    <section className="premium-tours" id="tours">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('premium.tours.label')}</span>
              <h2 className="premium-section-header__title">
                {t('premium.tours.title')}
              </h2>
              <p className="premium-section-header__description">
                {t('premium.tours.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="premium-tours__grid">
          <div className="row">
            {tours.map((tour) => (
              <div key={tour.id} className="col-lg-6 col-md-12">
                <Link href={tour.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="premium-tour-card" style={{ cursor: 'pointer' }}>
                    <div className="premium-tour-card__image-wrapper">
                      <Image
                        src={tour.image}
                        alt={`${tour.nameKey} boat tour in Mallorca Bay of Alcudia - ${tour.timeKey} departure with snorkeling and tapas`}
                        width={400}
                        height={500}
                        className="premium-tour-card__image"
                        sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 40vw"
                      />
                      <div className="premium-tour-card__badge">
                        <span>{t(tour.highlightsKey).split('•')[0].trim()}</span>
                      </div>
                    </div>

                    <div className="premium-tour-card__content">
                      <div className="premium-tour-card__header">
                        <h3 className="premium-tour-card__title">{t(tour.nameKey)}</h3>
                        <div className="premium-tour-card__meta">
                          <span className="meta-item">
                            <i className="fa-regular fa-clock"></i>
                            {t(tour.timeKey)}
                          </span>
                          <span className="meta-item">
                            <i className="fa-regular fa-hourglass"></i>
                            {t(tour.durationKey)}
                          </span>
                        </div>
                      </div>

                      <div className="premium-tour-card__included">
                        <h4 className="included-title">{t('premium.tours.whats_included')}</h4>
                        <ul className="included-list">
                          <li className="included-item">
                            <i className="fa-solid fa-water"></i>
                            <span>{t('premium.tours.snorkeling_equipment')}</span>
                          </li>
                          <li className="included-item">
                            <i className="fa-solid fa-person-swimming"></i>
                            <span>{t('premium.tours.paddle_boards')}</span>
                          </li>
                          <li className="included-item">
                            <i className="fa-solid fa-utensils"></i>
                            <span>{t('premium.tours.mallorcan_tapas')}</span>
                          </li>
                          <li className="included-item">
                            <i className="fa-solid fa-champagne-glasses"></i>
                            <span>{t('premium.tours.free_drink')}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="premium-tour-card__footer">
                        <div className="premium-tour-card__price">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
                            <div>
                              <span className="price-label">{t('premium.tours.from')}</span>
                              <span className="price-amount">{t(tour.priceKey)}</span>
                              <span className="price-unit">{t('premium.tours.per_person')}</span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowPriceBreakdown(showPriceBreakdown === tour.id ? null : tour.id);
                              }}
                              onMouseEnter={() => setShowPriceBreakdown(tour.id)}
                              onMouseLeave={() => setShowPriceBreakdown(null)}
                              style={{
                                background: 'rgba(8, 145, 178, 0.1)',
                                border: '1px solid rgba(8, 145, 178, 0.3)',
                                borderRadius: '50%',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                color: '#0891b2',
                                fontSize: '12px',
                                fontWeight: 'bold'
                              }}
                              aria-label="Show price breakdown"
                            >
                              <i className="fa-solid fa-info"></i>
                            </button>

                            {showPriceBreakdown === tour.id && (
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '100%',
                                  left: '0',
                                  marginBottom: '12px',
                                  background: 'white',
                                  border: '1px solid #e2e8f0',
                                  borderRadius: '12px',
                                  padding: '16px',
                                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                  zIndex: 1000,
                                  minWidth: '280px',
                                  animation: 'fadeInUp 0.2s ease'
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                              >
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <i className="fa-solid fa-ticket" style={{ color: '#0891b2' }}></i>
                                  Price Breakdown
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                  <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px 12px',
                                    background: '#f8fafc',
                                    borderRadius: '8px'
                                  }}>
                                    <div>
                                      <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#334155' }}>
                                        {t('premium.tours.adults')}
                                      </div>
                                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                        {t('premium.tours.adults_age')}
                                      </div>
                                    </div>
                                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0891b2' }}>
                                      {tour.id === 'morning' ? '€68' : '€65'}
                                    </div>
                                  </div>

                                  <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px 12px',
                                    background: '#f8fafc',
                                    borderRadius: '8px'
                                  }}>
                                    <div>
                                      <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#334155' }}>
                                        {t('premium.tours.children')}
                                      </div>
                                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                        {t('premium.tours.children_age')}
                                      </div>
                                    </div>
                                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0891b2' }}>
                                      {tour.id === 'morning' ? '€48' : '€45'}
                                    </div>
                                  </div>

                                  <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px 12px',
                                    background: '#f0fdf4',
                                    borderRadius: '8px',
                                    border: '1px solid #86efac'
                                  }}>
                                    <div>
                                      <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#334155' }}>
                                        {t('premium.tours.infants')}
                                      </div>
                                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                        {t('premium.tours.infants_age')}
                                      </div>
                                    </div>
                                    <div style={{
                                      fontSize: '0.875rem',
                                      fontWeight: '700',
                                      color: '#16a34a',
                                      background: '#dcfce7',
                                      padding: '4px 12px',
                                      borderRadius: '6px'
                                    }}>
                                      {t('premium.tours.free')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="premium-tour-card__cta">
                          <span>{t('premium.tours.book_now')}</span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* FareHarbor Calendar - Commented for later use */}
          {/* <div className="row">
            {tours.map((tour) => (
              <div key={tour.id} className="col-lg-6 col-md-12">
                <div className="premium-tour-calendar">
                  <iframe
                    src={`https://fareharbor.com/embeds/book/coralboatsmallorca/items/${tour.fareHarborId}/calendar/?fallback=simple&full-items=yes&flow=1382210&language=es`}
                    width="100%"
                    height="780"
                    frameBorder="0"
                    style={{ border: 'none' }}
                    title={`${tour.name} booking calendar`}
                  />
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="premium-tours__map-section">
              <div className="map-header text-center">
                <i className="fa-solid fa-location-dot map-icon"></i>
                <h3 className="map-title">
                  {t('premium.tours.departure_title')}
                </h3>
                <p className="map-description">
                  {t('premium.tours.departure_description')}
                </p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1534.8649024886943!2d3.1390642!3d39.8369722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUwJzEzLjEiTiAzwrAwOCcyMi43IkU!5e0!3m2!1sen!2ses!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Port d'Alcúdia - Coral Boats departure location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursPremium;
