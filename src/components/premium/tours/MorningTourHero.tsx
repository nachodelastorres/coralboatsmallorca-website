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
                  <div>
                    <strong>{t('morningTour.hero.priceLabel')}</strong>
                    <span>{t('morningTour.hero.priceValue')}</span>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <BookingCTA size="large" text={t('morningTour.hero.ctaBook')} />
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
