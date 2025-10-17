'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const PrivateCharterBooking = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <section className="premium-tour-booking" id="booking">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('privateCharter.booking.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('privateCharter.booking.sectionTitle')}
              </h2>
              <p className="premium-section-header__description">
                {t('privateCharter.booking.sectionDescription')}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="booking-features-card">
              <h4>{t('privateCharter.booking.howItWorksTitle')}</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: t('privateCharter.booking.step1') }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: t('privateCharter.booking.step2') }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: t('privateCharter.booking.step3') }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: t('privateCharter.booking.step4') }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: t('privateCharter.booking.step5') }} />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="booking-cta-card">
              <div className="cta-icon-large">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3>{t('privateCharter.booking.ctaCardTitle')}</h3>
              <p>{t('privateCharter.booking.ctaCardDescription')}</p>

              <Link href={getPath('/charter-pricing')} className="premium-tour-card__cta" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>
                <span>{t('privateCharter.booking.ctaButton')}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <div className="trust-badges-inline" style={{ marginTop: '30px' }}>
                <div className="trust-badge">
                  <i className="fa-solid fa-shield-alt"></i>
                  <span>{t('privateCharter.booking.trustBadge1')}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-certificate"></i>
                  <span>{t('privateCharter.booking.trustBadge2')}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-star"></i>
                  <span>{t('privateCharter.booking.trustBadge3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="booking-faq">
              <h3>{t('privateCharter.booking.faqTitle')}</h3>
              <div className="faq-grid">
                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('privateCharter.booking.faq1Question')}
                  </h4>
                  <p>
                    {t('privateCharter.booking.faq1Answer')}
                  </p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('privateCharter.booking.faq2Question')}
                  </h4>
                  <p>
                    {t('privateCharter.booking.faq2Answer')}
                  </p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('privateCharter.booking.faq3Question')}
                  </h4>
                  <p>
                    {t('privateCharter.booking.faq3Answer')}
                  </p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {t('privateCharter.booking.faq4Question')}
                  </h4>
                  <p>
                    {t('privateCharter.booking.faq4Answer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterBooking;
