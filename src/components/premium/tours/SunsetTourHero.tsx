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
                  <div>
                    <strong>{t('sunsetTour.hero.priceLabel')}</strong>
                    <span>{t('sunsetTour.hero.priceValue')}</span>
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
