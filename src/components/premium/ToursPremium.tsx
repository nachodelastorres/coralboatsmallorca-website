'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const ToursPremium = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

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
      image: '/assets/img/premium/home_new/card_sunset.webp',
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
                          <span className="price-label">{t('premium.tours.from')}</span>
                          <span className="price-amount">{t(tour.priceKey)}</span>
                          <span className="price-unit">{t('premium.tours.per_person')}</span>
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
