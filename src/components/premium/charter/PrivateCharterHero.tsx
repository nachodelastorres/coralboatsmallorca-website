'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const PrivateCharterHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero">
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/home_new/04portrait.webp"
          alt="Private charter boat in Alcudia Bay Mallorca - Exclusive events for up to 40 people"
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
                <i className="fa-solid fa-crown"></i>
                <span>{t('privateCharter.hero.badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('privateCharter.hero.title')}
              </h1>

              <p className="hero-subtitle">
                {t('privateCharter.hero.subtitle')}
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <i className="fa-solid fa-users"></i>
                  <div>
                    <strong>{t('privateCharter.hero.capacityLabel')}</strong>
                    <span>{t('privateCharter.hero.capacityValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-regular fa-clock"></i>
                  <div>
                    <strong>{t('privateCharter.hero.durationLabel')}</strong>
                    <span>{t('privateCharter.hero.durationValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-route"></i>
                  <div>
                    <strong>{t('privateCharter.hero.itineraryLabel')}</strong>
                    <span>{t('privateCharter.hero.itineraryValue')}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-champagne-glasses"></i>
                  <div>
                    <strong>{t('privateCharter.hero.cateringLabel')}</strong>
                    <span>{t('privateCharter.hero.cateringValue')}</span>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <Link href="/charter-pricing" className="premium-hero__cta premium-hero__cta--primary">
                  <i className="fa-solid fa-euro-sign"></i>
                  <span>{t('privateCharter.hero.ctaPricing')}</span>
                </Link>
                <Link href="#events" className="btn-secondary">
                  <i className="fa-solid fa-info-circle"></i>
                  <span>{t('privateCharter.hero.ctaLearnMore')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterHero;
