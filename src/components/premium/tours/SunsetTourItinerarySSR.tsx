/**
 * SunsetTourItinerarySSR - Server Component for SEO
 *
 * Renders the itinerary timeline server-side with correct language.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import BookingCTA from './BookingCTA';

export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface SunsetTourItineraryTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  steps: ItineraryStep[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

interface SunsetTourItinerarySSRProps {
  texts: SunsetTourItineraryTexts;
}

const SunsetTourItinerarySSR = ({ texts }: SunsetTourItinerarySSRProps) => {
  return (
    <section className="premium-tour-itinerary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{texts.sectionLabel}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.sectionTitle}
              </h2>
              <p className="premium-section-header__description">
                {texts.sectionDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Timeline - All text server-rendered for SEO */}
            <div className="itinerary-timeline">
              {texts.steps.map((item, index) => (
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
                      {/* H3 titles - Server Rendered */}
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
              <h3>{texts.ctaTitle}</h3>
              <p>{texts.ctaDescription}</p>
              {/* BookingCTA is Client Component - hydrates on client */}
              <BookingCTA
                text={texts.ctaButton}
                size="large"
                itemId="674280"
                tourName="Sunset Boat Tour Alcudia"
                tourPrice={65}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunsetTourItinerarySSR;
