'use client';

import { useTranslation } from 'react-i18next';

const GalleryHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/2026/gallery/aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island.webp"
          alt="Aerial view of Coral Boats sailing past Alcanada Lighthouse Island in Alcudia, Mallorca"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-camera"></i>
                <span>{t('premium.gallery.hero_badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('premium.gallery.hero_title')}
              </h1>

              <p className="hero-subtitle">
                {t('premium.gallery.hero_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
