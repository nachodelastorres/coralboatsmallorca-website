/**
 * MorningTourDetailsSSR - Server Component for SEO
 *
 * This component renders the details section with H2, paragraphs,
 * and highlights server-side for Google indexing.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import BookingCTA from './BookingCTA'; // Client component - will hydrate on client

export interface IncludedItem {
  icon: string;
  text: string;
}

export interface MorningTourDetailsTexts {
  sectionLabel: string;
  sectionTitle: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  galleryLink: string;
  highlightsTitle: string;
  highlights: string[];
  includedTitle: string;
  included: IncludedItem[];
  importantInfoTitle: string;
  infoItems: string[];
  ctaBook: string;
}

interface MorningTourDetailsSSRProps {
  texts: MorningTourDetailsTexts;
}

const MorningTourDetailsSSR = ({ texts }: MorningTourDetailsSSRProps) => {
  return (
    <section className="premium-tour-details" id="details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="premium-section-header">
              <span className="premium-section-header__label">{texts.sectionLabel}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.sectionTitle}
              </h2>
            </div>

            {/* Main content paragraphs - Critical for SEO - Server Rendered */}
            <div className="tour-description">
              <p dangerouslySetInnerHTML={{ __html: texts.paragraph1 }} />
              <p dangerouslySetInnerHTML={{ __html: texts.paragraph2 }} />
              <p dangerouslySetInnerHTML={{ __html: texts.paragraph3 }} />
            </div>

            <div className="tour-gallery-jump">
              <a href="#gallery" className="gallery-jump-btn">
                <i className="fa-solid fa-images"></i>
                <span>{texts.galleryLink}</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>

            {/* Highlights list - Good for SEO - Server Rendered */}
            <div className="tour-highlights">
              <h3 className="highlights-title">{texts.highlightsTitle}</h3>
              <ul className="highlights-list">
                {texts.highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tour-cta-section d-lg-none">
              <BookingCTA
                text={texts.ctaBook}
                tourName="Morning Boat Tour Alcudia"
                tourPrice={68}
              />
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
                <h3 className="card-title">{texts.includedTitle}</h3>
                <ul className="included-list">
                  {texts.included.map((item, index) => (
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
                    <h4>{texts.importantInfoTitle}</h4>
                    <ul>
                      {texts.infoItems.map((info, index) => (
                        <li key={index}>{info}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="tour-cta-section d-none d-lg-block">
                  <BookingCTA
                    text={texts.ctaBook}
                    tourName="Morning Boat Tour Alcudia"
                    tourPrice={68}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningTourDetailsSSR;
