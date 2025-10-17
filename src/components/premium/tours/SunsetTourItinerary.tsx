'use client';

import Image from 'next/image';
import BookingCTA from './BookingCTA';
import { useTranslation } from 'react-i18next';

const SunsetTourItinerary = () => {
  const { t } = useTranslation('common');

  const schedule = [
    {
      time: t('sunsetTour.itinerary.step1Time'),
      title: t('sunsetTour.itinerary.step1Title'),
      description: t('sunsetTour.itinerary.step1Description'),
      icon: 'fa-anchor',
      image: '/assets/img/premium/morning_new/embarque.webp'
    },
    {
      time: t('sunsetTour.itinerary.step2Time'),
      title: t('sunsetTour.itinerary.step2Title'),
      description: t('sunsetTour.itinerary.step2Description'),
      icon: 'fa-ship',
      image: '/assets/img/premium/morning_new/tour.webp'
    },
    {
      time: t('sunsetTour.itinerary.step3Time'),
      title: t('sunsetTour.itinerary.step3Title'),
      description: t('sunsetTour.itinerary.step3Description'),
      icon: 'fa-utensils',
      image: '/assets/img/premium/morning_new/matress.webp'
    },
    {
      time: t('sunsetTour.itinerary.step4Time'),
      title: t('sunsetTour.itinerary.step4Title'),
      description: t('sunsetTour.itinerary.step4Description'),
      icon: 'fa-sun',
      image: '/assets/img/premium/sunset_new/sunset_hero.webp'
    },
    {
      time: t('sunsetTour.itinerary.step5Time'),
      title: t('sunsetTour.itinerary.step5Title'),
      description: t('sunsetTour.itinerary.step5Description'),
      icon: 'fa-flag-checkered',
      image: '/assets/img/premium/sunset_new/sunset_port.webp'
    }
  ];

  return (
    <section className="premium-tour-itinerary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('sunsetTour.itinerary.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('sunsetTour.itinerary.sectionTitle')}
              </h2>
              <p className="premium-section-header__description">
                {t('sunsetTour.itinerary.sectionDescription')}
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="itinerary-timeline">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-marker">
                    <div className="marker-icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div className="marker-time">{item.time}</div>
                  </div>
                  <div className="timeline-content">
                    {item.image && (
                      <div className="timeline-image">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={120}
                          height={90}
                          className="timeline-img"
                        />
                      </div>
                    )}
                    <div className="timeline-text">
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <div className="itinerary-cta">
              <h3>{t('sunsetTour.itinerary.ctaTitle')}</h3>
              <p>{t('sunsetTour.itinerary.ctaDescription')}</p>
              <BookingCTA text={t('sunsetTour.itinerary.ctaButton')} size="large" itemId="674280"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunsetTourItinerary;
