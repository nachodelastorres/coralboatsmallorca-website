'use client';

import Image from 'next/image';
import BookingCTA from './BookingCTA';
import { useTranslation } from 'react-i18next';

const MorningTourDetails = () => {
  const { t } = useTranslation('common');

  const included = [
    { icon: 'fa-utensils', text: t('morningTour.details.included1') },
    { icon: 'fa-champagne-glasses', text: t('morningTour.details.included2') },
    { icon: 'fa-water', text: t('morningTour.details.included3') },
    { icon: 'fa-person-swimming', text: t('morningTour.details.included4') },
    { icon: 'fa-life-ring', text: t('morningTour.details.included5') },
    { icon: 'fa-user-tie', text: t('morningTour.details.included6') },
  ];

  const highlights = [
    t('morningTour.details.highlight1'),
    t('morningTour.details.highlight2'),
    t('morningTour.details.highlight3'),
    t('morningTour.details.highlight4'),
    t('morningTour.details.highlight5'),
    t('morningTour.details.highlight6'),
  ];

  return (
    <section className="premium-tour-details" id="details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="premium-section-header">
              <span className="premium-section-header__label">{t('morningTour.details.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('morningTour.details.sectionTitle')}
              </h2>
            </div>

            <div className="tour-description">
              <p dangerouslySetInnerHTML={{ __html: t('morningTour.details.paragraph1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('morningTour.details.paragraph2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('morningTour.details.paragraph3') }} />
            </div>

            <div className="tour-gallery-jump">
              <a href="#gallery" className="gallery-jump-btn">
                <i className="fa-solid fa-images"></i>
                <span>{t('morningTour.details.galleryLink')}</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>

            <div className="tour-highlights">
              <h3 className="highlights-title">{t('morningTour.details.highlightsTitle')}</h3>
              <ul className="highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tour-cta-section d-lg-none">
              <BookingCTA text={t('morningTour.details.ctaBook')} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tour-info-card">
              <div className="card-image">
                <Image
                  src="/assets/img/premium/morning_new/snork.webp"
                  alt="Snorkeling equipment and activities on morning boat tour Alcudia Mallorca"
                  width={600}
                  height={400}
                  className="info-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="card-content">
                <h3 className="card-title">{t('morningTour.details.includedTitle')}</h3>
                <ul className="included-list">
                  {included.map((item, index) => (
                    <li key={index} className="included-item">
                      <i className={`fa-solid ${item.icon}`}></i>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-info-box">
                  <div className="info-box-icon">
                    <i className="fa-solid fa-info-circle"></i>
                  </div>
                  <div className="info-box-content">
                    <h4>{t('morningTour.details.importantInfoTitle')}</h4>
                    <ul>
                      <li>{t('morningTour.details.info1')}</li>
                      <li>{t('morningTour.details.info2')}</li>
                      <li>{t('morningTour.details.info3')}</li>
                      <li>{t('morningTour.details.info4')}</li>
                      <li>{t('morningTour.details.info5')}</li>
                    </ul>
                  </div>
                </div>

                <div className="tour-cta-section d-none d-lg-block">
                  <BookingCTA text={t('morningTour.details.ctaBook')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningTourDetails;
