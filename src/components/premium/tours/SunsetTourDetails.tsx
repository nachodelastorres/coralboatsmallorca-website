'use client';

import Image from 'next/image';
import BookingCTA from './BookingCTA';
import { useTranslation } from 'react-i18next';

const SunsetTourDetails = () => {
  const { t } = useTranslation('common');

  const included = [
    { icon: 'fa-utensils', text: t('sunsetTour.details.included1') },
    { icon: 'fa-champagne-glasses', text: t('sunsetTour.details.included2') },
    { icon: 'fa-water', text: t('sunsetTour.details.included3') },
    { icon: 'fa-person-swimming', text: t('sunsetTour.details.included4') },
    { icon: 'fa-life-ring', text: t('sunsetTour.details.included5') },
    { icon: 'fa-user-tie', text: t('sunsetTour.details.included6') },
  ];

  const highlights = [
    t('sunsetTour.details.highlight1'),
    t('sunsetTour.details.highlight2'),
    t('sunsetTour.details.highlight3'),
    t('sunsetTour.details.highlight4'),
    t('sunsetTour.details.highlight5'),
    t('sunsetTour.details.highlight6'),
  ];

  return (
    <section className="premium-tour-details" id="details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="premium-section-header">
              <span className="premium-section-header__label">{t('sunsetTour.details.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('sunsetTour.details.sectionTitle')}
              </h2>
            </div>

            <div className="tour-description">
              <p dangerouslySetInnerHTML={{ __html: t('sunsetTour.details.paragraph1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sunsetTour.details.paragraph2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sunsetTour.details.paragraph3') }} />
            </div>

            <div className="tour-gallery-jump">
              <a href="#gallery" className="gallery-jump-btn">
                <i className="fa-solid fa-images"></i>
                <span>{t('sunsetTour.details.galleryLink')}</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>

            <div className="tour-highlights">
              <h3 className="highlights-title">{t('sunsetTour.details.highlightsTitle')}</h3>
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
              <BookingCTA text={t('sunsetTour.details.ctaBook')} itemId="674280" tourName="Sunset Boat Tour Alcudia" tourPrice={65} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tour-info-card">
              <div className="card-image">
                <Image
                  src="/assets/img/premium/morning_new/snork.webp"
                  alt="Sunset boat tour activities in Alcudia Bay Mallorca"
                  width={600}
                  height={400}
                  className="info-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="card-content">
                <h3 className="card-title">{t('sunsetTour.details.includedTitle')}</h3>
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
                    <h4>{t('sunsetTour.details.importantInfoTitle')}</h4>
                    <ul>
                      <li>{t('sunsetTour.details.info1')}</li>
                      <li>{t('sunsetTour.details.info2')}</li>
                      <li>{t('sunsetTour.details.info3')}</li>
                      <li>{t('sunsetTour.details.info4')}</li>
                      <li>{t('sunsetTour.details.info5')}</li>
                    </ul>
                  </div>
                </div>

                <div className="tour-cta-section d-none d-lg-block">
                  <BookingCTA text={t('sunsetTour.details.ctaBook')} itemId="674280" tourName="Sunset Boat Tour Alcudia" tourPrice={65} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunsetTourDetails;
