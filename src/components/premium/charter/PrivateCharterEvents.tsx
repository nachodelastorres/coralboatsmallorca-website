'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PrivateCharterEvents = () => {
  const { t } = useTranslation('common');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };
  const eventTypes = [
    {
      id: 'corporate',
      icon: 'fa-briefcase',
      title: t('privateCharter.events.corporate.title'),
      description: t('privateCharter.events.corporate.description'),
      image: '/assets/img/premium/home_new/corporate-partners-private-charter-mallorca.webp',
      features: [
        t('privateCharter.events.corporate.feature1'),
        t('privateCharter.events.corporate.feature2'),
        t('privateCharter.events.corporate.feature3'),
        t('privateCharter.events.corporate.feature4')
      ]
    },
    {
      id: 'birthday',
      icon: 'fa-cake-candles',
      title: t('privateCharter.events.birthday.title'),
      description: t('privateCharter.events.birthday.description'),
      image: '/assets/img/premium/home_new/friends-group-private-charter-mallorca.webp',
      features: [
        t('privateCharter.events.birthday.feature1'),
        t('privateCharter.events.birthday.feature2'),
        t('privateCharter.events.birthday.feature3'),
        t('privateCharter.events.birthday.feature4')
      ]
    },
    {
      id: 'bachelor',
      icon: 'fa-champagne-glasses',
      title: t('privateCharter.events.bachelor.title'),
      description: t('privateCharter.events.bachelor.description'),
      image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
      features: [
        t('privateCharter.events.bachelor.feature1'),
        t('privateCharter.events.bachelor.feature2'),
        t('privateCharter.events.bachelor.feature3'),
        t('privateCharter.events.bachelor.feature4')
      ]
    },
    {
      id: 'family',
      icon: 'fa-heart',
      title: t('privateCharter.events.family.title'),
      description: t('privateCharter.events.family.description'),
      image: '/assets/img/premium/home_new/water-activities-floats-private-charter.webp',
      features: [
        t('privateCharter.events.family.feature1'),
        t('privateCharter.events.family.feature2'),
        t('privateCharter.events.family.feature3'),
        t('privateCharter.events.family.feature4')
      ]
    },
    {
      id: 'friends',
      icon: 'fa-user-group',
      title: t('privateCharter.events.friends.title'),
      description: t('privateCharter.events.friends.description'),
      image: '/assets/img/premium/home_new/friends-enjoying-private-charter-mallorca.webp',
      features: [
        t('privateCharter.events.friends.feature1'),
        t('privateCharter.events.friends.feature2'),
        t('privateCharter.events.friends.feature3'),
        t('privateCharter.events.friends.feature4')
      ]
    },
    {
      id: 'special',
      icon: 'fa-star',
      title: t('privateCharter.events.special.title'),
      description: t('privateCharter.events.special.description'),
      image: '/assets/img/premium/home_new/special-celebrations-private-charter-alcudia.webp',
      features: [
        t('privateCharter.events.special.feature1'),
        t('privateCharter.events.special.feature2'),
        t('privateCharter.events.special.feature3'),
        t('privateCharter.events.special.feature4')
      ]
    }
  ];

  return (
    <section className="premium-experience" id="events">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('privateCharter.events.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('privateCharter.events.sectionTitle')}
              </h2>
              <p className="premium-section-header__description">
                {t('privateCharter.events.sectionDescription')}
              </p>
            </div>
          </div>
        </div>

        <div className="row premium-experience__grid">
          {eventTypes.map((event, index) => {
            const isExpanded = expandedCard === event.id;
            return (
              <div key={event.id} className="col-lg-4 col-md-6">
                <div
                  className={`premium-experience-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleCard(event.id)}
                >
                  <div className="premium-experience-card__image-wrapper">
                    <Image
                      src={event.image}
                      alt={`${event.title} on private charter boat in Mallorca`}
                      width={400}
                      height={300}
                      className="premium-experience-card__image"
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                    />
                    <div className="premium-experience-card__icon-wrapper">
                      <div className="icon-circle">
                        <i className={`fa-solid ${event.icon}`}></i>
                      </div>
                    </div>
                  </div>

                  <div className="premium-experience-card__header">
                    <h3 className="premium-experience-card__title">
                      {event.title}
                    </h3>
                    <div className="premium-experience-card__toggle">
                      <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                  </div>

                  <div className={`premium-experience-card__expandable ${isExpanded ? 'show' : ''}`}>
                    <p className="premium-experience-card__description">
                      {event.description}
                    </p>

                    <ul className="premium-experience-card__highlights">
                      {event.features.map((feature, idx) => (
                        <li key={idx} className="highlight-item">
                          <i className="fa-solid fa-check-circle"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="premium-experience__footer">
              <div className="experience-footer-content">
                <div className="footer-icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div className="footer-text">
                  <h4>{t('privateCharter.events.footerTitle')}</h4>
                  <p>
                    {t('privateCharter.events.footerText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterEvents;
