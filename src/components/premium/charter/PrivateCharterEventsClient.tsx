'use client';

/**
 * PrivateCharterEventsClient - Client Component for interactivity
 *
 * Receives all text props from Server Component.
 * Handles expandable card state.
 */

import Image from 'next/image';
import { useState } from 'react';

export interface EventType {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface PrivateCharterEventsTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  footerTitle: string;
  footerText: string;
  eventTypes: EventType[];
}

interface PrivateCharterEventsClientProps {
  texts: PrivateCharterEventsTexts;
}

const PrivateCharterEventsClient = ({ texts }: PrivateCharterEventsClientProps) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="premium-experience" id="events">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{texts.sectionLabel}</span>
              {/* H2 - Server Rendered via props */}
              <h2 className="premium-section-header__title">
                {texts.sectionTitle}
              </h2>
              <p className="premium-section-header__description">
                {texts.sectionDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="row premium-experience__grid">
          {texts.eventTypes.map((event) => {
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
                    {/* H3 - Server Rendered via props */}
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
                  {/* H4 - Server Rendered via props */}
                  <h4>{texts.footerTitle}</h4>
                  <p>
                    {texts.footerText}
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

export default PrivateCharterEventsClient;
