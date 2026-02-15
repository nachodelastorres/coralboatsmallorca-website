'use client';

import { useTranslation } from 'react-i18next';

const CharterPricingHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/home_new/private-charter-capacity-40-people-alcudia.webp"
          alt="Private boat charter pricing in Alcudia Mallorca"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-euro-sign"></i>
                <span>{t('premium.charter_pricing.hero_badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('premium.charter_pricing.hero_title')}
              </h1>

              <p className="hero-subtitle">
                {t('premium.charter_pricing.hero_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharterPricingHero;
