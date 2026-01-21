'use client';

import Image from 'next/image';
import Link from 'next/link';
import BookingCTA from './BookingCTA';
import { useTranslation } from 'react-i18next';

const MorningTourHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero">
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/morning_new/09.webp"
          alt="Morning Adventure boat tour in Alcudia Bay Mallorca - Snorkeling and coastal exploration"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-sun"></i>
                <span>{t('morningTour.hero.badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('morningTour.hero.title')}
              </h1>

              <p className="hero-subtitle">
                {t('morningTour.hero.subtitle')}
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <i className="fa-regular fa-clock"></i>
                  <div>
                    <strong>{t('morningTour.hero.durationLabel')}</strong>
                    <span>{t('morningTour.hero.durationValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-regular fa-calendar"></i>
                  <div>
                    <strong>{t('morningTour.hero.departureLabel')}</strong>
                    <span>{t('morningTour.hero.departureValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-users"></i>
                  <div>
                    <strong>{t('morningTour.hero.groupSizeLabel')}</strong>
                    <span>{t('morningTour.hero.groupSizeValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-euro-sign"></i>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                    <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>{t('premium.tours.adults')}:</div>
                    <div style={{
                      fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)',
                      fontWeight: '700',
                      color: '#f59e0b',
                      lineHeight: '1'
                    }}>
                      €68
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75, lineHeight: '1.4' }}>
                      {t('premium.tours.children')}: €48
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75, lineHeight: '1.4' }}>
                      {t('premium.tours.infants')}: {t('premium.tours.free')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <BookingCTA size="large" text={t('morningTour.hero.ctaBook')} tourName="Morning Boat Tour Alcudia" tourPrice={68} />
                <Link href="#details" className="btn-secondary">
                  <i className="fa-solid fa-info-circle"></i>
                  <span>{t('morningTour.hero.ctaLearnMore')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningTourHero;
