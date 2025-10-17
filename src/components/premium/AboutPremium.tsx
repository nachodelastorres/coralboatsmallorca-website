'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutPremium = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="premium-about__gallery">
              <div className="gallery-grid">
                <div className="gallery-item gallery-item--large">
                  <Image
                    src="/assets/img/premium/home_new/boat.webp"
                    alt="Classic Amayna II boat from 1968 sailing in Bay of Alcudia Mallorca waters"
                    width={600}
                    height={700}
                    className="gallery-image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="gallery-item gallery-item--small gallery-item--top">
                  <Image
                    src="/assets/img/premium/home_new/interior.webp"
                    alt="Comfortable and classic interior of Amayna II 1968 boat with authentic maritime charm"
                    width={280}
                    height={330}
                    className="gallery-image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="gallery-item gallery-item--small gallery-item--bottom">
                  <Image
                    src="/assets/img/premium/home_new/partners.webp"
                    alt="Partners and crew of Coral Boats Mallorca providing exceptional boat tour experiences"
                    width={280}
                    height={330}
                    className="gallery-image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="premium-about__badge">
                <div className="badge-content">
                  <span className="badge-number">{t('about.badge_since')}</span>
                  <span className="badge-text">{t('about.badge_year')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="premium-about__content">
              <span className="premium-section-header__label">{t('about.label')}</span>
              <h2 className="premium-section-header__title">
                {t('about.title')}
              </h2>

              <div className="premium-about__story">
                <p className="story-paragraph">
                  {t('about.paragraph_1')}
                </p>

                <p className="story-paragraph">
                  {t('about.paragraph_2')}
                </p>

                <p className="story-paragraph">
                  {t('about.paragraph_3')}
                </p>
              </div>

              <div className="premium-about__stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa-solid fa-ship"></i>
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{t('about.stat_1_number')}</span>
                    <span className="stat-label">{t('about.stat_1_label')}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{t('about.stat_2_number')}</span>
                    <span className="stat-label">{t('about.stat_2_label')}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{t('about.stat_3_number')}</span>
                    <span className="stat-label">{t('about.stat_3_label')}</span>
                  </div>
                </div>
              </div>

              <div className="premium-about__quote">
                <blockquote>
                  <i className="fa-solid fa-quote-left"></i>
                  <p>
                    {t('about.quote_text')}
                  </p>
                  <cite>{t('about.quote_author')}</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPremium;
