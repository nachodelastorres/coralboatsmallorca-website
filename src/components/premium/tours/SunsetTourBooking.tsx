'use client';

import BookingCTA from './BookingCTA';
import { useTranslation } from 'react-i18next';

const SunsetTourBooking = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-booking" id="booking">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('sunsetTour.booking.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('sunsetTour.booking.sectionTitle')}
              </h2>
              <p className="premium-section-header__description">
                {t('sunsetTour.booking.sectionDescription')}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-euro-sign"></i>
              </div>
              <div className="detail-content">
                <h4>{t('sunsetTour.booking.priceTitle')}</h4>
                <p className="price">{t('sunsetTour.booking.priceValue')}</p>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '8px', lineHeight: '1.6' }}>
                  <div>{t('premium.tours.adults')} {t('premium.tours.adults_age')}: €65</div>
                  <div>{t('premium.tours.children')} {t('premium.tours.children_age')}: €45</div>
                  <div>{t('premium.tours.infants')} {t('premium.tours.infants_age')}: {t('premium.tours.free')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="detail-content">
                <h4>{t('sunsetTour.booking.durationTitle')}</h4>
                <p>{t('sunsetTour.booking.durationValue')}</p>
                <span className="price-note">{t('sunsetTour.booking.durationNote')}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="detail-content">
                <h4>{t('sunsetTour.booking.meetingPointTitle')}</h4>
                <p>{t('sunsetTour.booking.meetingPointValue')}</p>
                <span className="price-note">{t('sunsetTour.booking.meetingPointCoords')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="booking-features-card">
              <h4>{t('sunsetTour.booking.whyBookTitle')}</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('sunsetTour.booking.whyBook1')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('sunsetTour.booking.whyBook2')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('sunsetTour.booking.whyBook3')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('sunsetTour.booking.whyBook4')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('sunsetTour.booking.whyBook5')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="booking-cta-card">
              <div className="cta-icon-large">
                <i className="fa-solid fa-anchor"></i>
              </div>
              <h3>{t('sunsetTour.booking.ctaCardTitle')}</h3>
              <p>{t('sunsetTour.booking.ctaCardDescription')}</p>
              <BookingCTA text={t('sunsetTour.booking.ctaButton')} size="large" itemId="674280" tourName="Sunset Boat Tour Alcudia" tourPrice={65} />

              <div className="trust-badges-inline">
                <div className="trust-badge">
                  <i className="fa-solid fa-shield-alt"></i>
                  <span>{t('sunsetTour.booking.trustBadge1')}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-bolt"></i>
                  <span>{t('sunsetTour.booking.trustBadge2')}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-rotate-left"></i>
                  <span>{t('sunsetTour.booking.trustBadge3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="booking-faq">
              <h3>{t('sunsetTour.booking.faqTitle')}</h3>
              <div className="faq-grid">
                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('sunsetTour.booking.faq1Question')}
                  </h4>
                  <p>{t('sunsetTour.booking.faq1Answer')}</p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('sunsetTour.booking.faq2Question')}
                  </h4>
                  <p>{t('sunsetTour.booking.faq2Answer')}</p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('sunsetTour.booking.faq3Question')}
                  </h4>
                  <p>{t('sunsetTour.booking.faq3Answer')}</p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('sunsetTour.booking.faq4Question')}
                  </h4>
                  <p>{t('sunsetTour.booking.faq4Answer')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunsetTourBooking;
