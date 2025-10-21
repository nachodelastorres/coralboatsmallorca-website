'use client';

import { useTranslation } from 'react-i18next';

const BlogHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/gallery_new/sunset.webp"
          alt="Coral Boats Blog - Boat Tours in Mallorca"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-book-open"></i>
                <span>{t('blog_page.hero.badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('blog_page.hero.title')}
              </h1>

              <p className="hero-subtitle">
                {t('blog_page.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
