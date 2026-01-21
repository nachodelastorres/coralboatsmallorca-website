/**
 * SunsetTourBookingSSR - Server Component for SEO
 *
 * Renders the booking section with FAQs server-side for SEO.
 * BookingCTA remains as client component for FareHarbor widget.
 *
 * NO 'use client' directive - this is a Server Component
 */

import BookingCTA from './BookingCTA';

export interface FAQ {
  question: string;
  answer: string;
}

export interface SunsetTourBookingTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  priceTitle: string;
  priceValue: string;
  adults: string;
  adultsAge: string;
  children: string;
  childrenAge: string;
  infants: string;
  infantsAge: string;
  free: string;
  durationTitle: string;
  durationValue: string;
  durationNote: string;
  meetingPointTitle: string;
  meetingPointValue: string;
  meetingPointCoords: string;
  whyBookTitle: string;
  whyBookItems: string[];
  ctaCardTitle: string;
  ctaCardDescription: string;
  ctaButton: string;
  trustBadge1: string;
  trustBadge2: string;
  trustBadge3: string;
  faqTitle: string;
  faqs: FAQ[];
}

interface SunsetTourBookingSSRProps {
  texts: SunsetTourBookingTexts;
}

const SunsetTourBookingSSR = ({ texts }: SunsetTourBookingSSRProps) => {
  return (
    <section className="premium-tour-booking" id="booking">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
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

        {/* Booking Detail Cards - Server Rendered */}
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-euro-sign"></i>
              </div>
              <div className="detail-content">
                <h4>{texts.priceTitle}</h4>
                <p className="price">{texts.priceValue}</p>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '8px', lineHeight: '1.6' }}>
                  <div>{texts.adults} {texts.adultsAge}: €65</div>
                  <div>{texts.children} {texts.childrenAge}: €45</div>
                  <div>{texts.infants} {texts.infantsAge}: {texts.free}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="detail-content">
                <h4>{texts.durationTitle}</h4>
                <p>{texts.durationValue}</p>
                <span className="price-note">{texts.durationNote}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div className="booking-detail-card">
              <div className="detail-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="detail-content">
                <h4>{texts.meetingPointTitle}</h4>
                <p>{texts.meetingPointValue}</p>
                <span className="price-note">{texts.meetingPointCoords}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {/* Why Book Section - Server Rendered */}
          <div className="col-lg-6">
            <div className="booking-features-card">
              <h4>{texts.whyBookTitle}</h4>
              <ul>
                {texts.whyBookItems.map((item, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Card with Client Component */}
          <div className="col-lg-6">
            <div className="booking-cta-card">
              <div className="cta-icon-large">
                <i className="fa-solid fa-anchor"></i>
              </div>
              <h3>{texts.ctaCardTitle}</h3>
              <p>{texts.ctaCardDescription}</p>
              {/* BookingCTA is Client Component - hydrates on client */}
              <BookingCTA
                text={texts.ctaButton}
                size="large"
                itemId="674280"
                tourName="Sunset Boat Tour Alcudia"
                tourPrice={65}
              />

              <div className="trust-badges-inline">
                <div className="trust-badge">
                  <i className="fa-solid fa-shield-alt"></i>
                  <span>{texts.trustBadge1}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-bolt"></i>
                  <span>{texts.trustBadge2}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-rotate-left"></i>
                  <span>{texts.trustBadge3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section - Critical for SEO - Server Rendered */}
        <div className="row">
          <div className="col-12">
            <div className="booking-faq">
              <h3>{texts.faqTitle}</h3>
              <div className="faq-grid">
                {texts.faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h4>
                      <i className="fa-solid fa-question-circle"></i>
                      {faq.question}
                    </h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunsetTourBookingSSR;
