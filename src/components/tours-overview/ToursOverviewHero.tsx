'use client';

import { useTranslation } from 'react-i18next';

const ToursOverviewHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/home_new/classic-coral-boats-charter-vessel-alcudia.webp"
          alt="Best boat tours in Alcudia Mallorca"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-ship"></i>
                <span>{t('toursPage.hero.badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('toursPage.hero.title')}
              </h1>

              <p className="hero-subtitle">
                {t('toursPage.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursOverviewHero;
