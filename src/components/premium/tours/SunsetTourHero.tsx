'use client';

import Image from 'next/image';
import Link from 'next/link';
import BookingCTA from './BookingCTA';
import { useTranslation } from 'react-i18next';

const SunsetTourHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero">
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/sunset_new/sunset_hero.webp"
          alt="Sunset boat tour in Alcudia Bay Mallorca - Romantic evening cruise"
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
                <span>{t('sunsetTour.hero.badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('sunsetTour.hero.title')}
              </h1>

              <p className="hero-subtitle">
                {t('sunsetTour.hero.subtitle')}
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <i className="fa-regular fa-clock"></i>
                  <div>
                    <strong>{t('sunsetTour.hero.durationLabel')}</strong>
                    <span>{t('sunsetTour.hero.durationValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-regular fa-calendar"></i>
                  <div>
                    <strong>{t('sunsetTour.hero.departureLabel')}</strong>
                    <span>{t('sunsetTour.hero.departureValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-users"></i>
                  <div>
                    <strong>{t('sunsetTour.hero.groupSizeLabel')}</strong>
                    <span>{t('sunsetTour.hero.groupSizeValue')}</span>
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
                      €65
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75, lineHeight: '1.4' }}>
                      {t('premium.tours.children')}: €45
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75, lineHeight: '1.4' }}>
                      {t('premium.tours.infants')}: {t('premium.tours.free')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <BookingCTA size="large" text={t('sunsetTour.hero.ctaBook')} itemId="674280"/>
                <Link href="#details" className="btn-secondary">
                  <i className="fa-solid fa-info-circle"></i>
                  <span>{t('sunsetTour.hero.ctaLearnMore')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunsetTourHero;
