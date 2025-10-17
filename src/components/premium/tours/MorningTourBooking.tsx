'use client';

import BookingCTA from './BookingCTA';
import { useTranslation } from 'react-i18next';

const MorningTourBooking = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-booking" id="booking">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('morningTour.booking.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('morningTour.booking.sectionTitle')}
              </h2>
              <p className="premium-section-header__description">
                {t('morningTour.booking.sectionDescription')}
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
                <h4>{t('morningTour.booking.priceTitle')}</h4>
                <p className="price">{t('morningTour.booking.priceValue')}</p>
                <span className="price-note">{t('morningTour.booking.priceNote')}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="detail-content">
                <h4>{t('morningTour.booking.durationTitle')}</h4>
                <p>{t('morningTour.booking.durationValue')}</p>
                <span className="price-note">{t('morningTour.booking.durationNote')}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="detail-content">
                <h4>{t('morningTour.booking.meetingPointTitle')}</h4>
                <p>{t('morningTour.booking.meetingPointValue')}</p>
                <span className="price-note">{t('morningTour.booking.meetingPointCoords')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="booking-features-card">
              <h4>{t('morningTour.booking.whyBookTitle')}</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('morningTour.booking.whyBook1')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('morningTour.booking.whyBook2')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('morningTour.booking.whyBook3')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('morningTour.booking.whyBook4')}</span>
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{t('morningTour.booking.whyBook5')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="booking-cta-card">
              <div className="cta-icon-large">
                <i className="fa-solid fa-anchor"></i>
              </div>
              <h3>{t('morningTour.booking.ctaCardTitle')}</h3>
              <p>{t('morningTour.booking.ctaCardDescription')}</p>
              <BookingCTA text={t('morningTour.booking.ctaButton')} size="large" />

              <div className="trust-badges-inline">
                <div className="trust-badge">
                  <i className="fa-solid fa-shield-alt"></i>
                  <span>{t('morningTour.booking.trustBadge1')}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-bolt"></i>
                  <span>{t('morningTour.booking.trustBadge2')}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-rotate-left"></i>
                  <span>{t('morningTour.booking.trustBadge3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="booking-faq">
              <h3>{t('morningTour.booking.faqTitle')}</h3>
              <div className="faq-grid">
                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('morningTour.booking.faq1Question')}
                  </h4>
                  <p>{t('morningTour.booking.faq1Answer')}</p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('morningTour.booking.faq2Question')}
                  </h4>
                  <p>{t('morningTour.booking.faq2Answer')}</p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('morningTour.booking.faq3Question')}
                  </h4>
                  <p>{t('morningTour.booking.faq3Answer')}</p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('morningTour.booking.faq4Question')}
                  </h4>
                  <p>{t('morningTour.booking.faq4Answer')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningTourBooking;
