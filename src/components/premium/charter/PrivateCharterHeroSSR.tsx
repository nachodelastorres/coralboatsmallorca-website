/**
 * PrivateCharterHeroSSR - Server Component for SEO
 *
 * Renders H1, badge, subtitle, and highlights server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface PrivateCharterHeroTexts {
  badge: string;
  title: string;
  subtitle: string;
  capacityLabel: string;
  capacityValue: string;
  durationLabel: string;
  durationValue: string;
  itineraryLabel: string;
  itineraryValue: string;
  cateringLabel: string;
  cateringValue: string;
  ctaPricing: string;
  ctaLearnMore: string;
  pricingPath: string;
}

interface PrivateCharterHeroSSRProps {
  texts: PrivateCharterHeroTexts;
}

const PrivateCharterHeroSSR = ({ texts }: PrivateCharterHeroSSRProps) => {
  return (
    <section className="premium-tour-hero">
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/home_new/private-charter-capacity-40-people-alcudia.webp"
          alt="Private charter boat in Alcudia Bay Mallorca - Exclusive events for up to 40 people"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-crown"></i>
                <span>{texts.badge}</span>
              </div>

              {/* H1 - Critical for SEO - Server Rendered */}
              <h1 className="hero-title">
                {texts.title}
              </h1>

              <p className="hero-subtitle">
                {texts.subtitle}
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <i className="fa-solid fa-users"></i>
                  <div>
                    <strong>{texts.capacityLabel}</strong>
                    <span>{texts.capacityValue}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-regular fa-clock"></i>
                  <div>
                    <strong>{texts.durationLabel}</strong>
                    <span>{texts.durationValue}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-route"></i>
                  <div>
                    <strong>{texts.itineraryLabel}</strong>
                    <span>{texts.itineraryValue}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-champagne-glasses"></i>
                  <div>
                    <strong>{texts.cateringLabel}</strong>
                    <span>{texts.cateringValue}</span>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <Link href={texts.pricingPath} className="premium-hero__cta premium-hero__cta--primary">
                  <i className="fa-solid fa-euro-sign"></i>
                  <span>{texts.ctaPricing}</span>
                </Link>
                <Link href="#events" className="btn-secondary">
                  <i className="fa-solid fa-info-circle"></i>
                  <span>{texts.ctaLearnMore}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterHeroSSR;
