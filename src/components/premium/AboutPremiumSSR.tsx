/**
 * AboutPremiumSSR - Server Component for SEO
 *
 * Renders the about section with H2, paragraphs, stats, quote server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';
import AboutPremiumClient from './AboutPremiumClient';

export interface AboutPremiumTexts {
  label: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  badgeSince: string;
  badgeYear: string;
  stat1Number: string;
  stat1Label: string;
  stat2Number: string;
  stat2Label: string;
  stat3Number: string;
  stat3Label: string;
  quoteText: string;
  quoteAuthor: string;
  ctaButton: string;
  aboutPath: string;
}

interface AboutPremiumSSRProps {
  texts: AboutPremiumTexts;
}

const AboutPremiumSSR = ({ texts }: AboutPremiumSSRProps) => {
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
                  <span className="badge-number">{texts.badgeSince}</span>
                  <span className="badge-text">{texts.badgeYear}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="premium-about__content">
              <span className="premium-section-header__label">{texts.label}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.title}
              </h2>

              <div className="premium-about__story">
                <p className="story-paragraph">
                  {texts.paragraph1}
                </p>

                <p className="story-paragraph">
                  {texts.paragraph2}
                </p>

                <p className="story-paragraph">
                  {texts.paragraph3}
                </p>
              </div>

              <div className="premium-about__stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa-solid fa-ship"></i>
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{texts.stat1Number}</span>
                    <span className="stat-label">{texts.stat1Label}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{texts.stat2Number}</span>
                    <span className="stat-label">{texts.stat2Label}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{texts.stat3Number}</span>
                    <span className="stat-label">{texts.stat3Label}</span>
                  </div>
                </div>
              </div>

              <div className="premium-about__quote">
                <blockquote>
                  <i className="fa-solid fa-quote-left"></i>
                  <p>
                    {texts.quoteText}
                  </p>
                  <cite>{texts.quoteAuthor}</cite>
                </blockquote>
              </div>

              {/* Client component for button hover effects */}
              <AboutPremiumClient
                ctaButton={texts.ctaButton}
                aboutPath={texts.aboutPath}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPremiumSSR;
