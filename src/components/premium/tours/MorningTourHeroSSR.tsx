/**
 * MorningTourHeroSSR - Server Component for SEO
 *
 * This component renders the hero section with H1 and main content
 * server-side, ensuring it appears in "View Source" for Google indexing.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';
import BookingCTA from './BookingCTA'; // Client component - will hydrate on client

export interface MorningTourHeroTexts {
  badge: string;
  title: string;
  subtitle: string;
  durationLabel: string;
  durationValue: string;
  departureLabel: string;
  departureValue: string;
  groupSizeLabel: string;
  groupSizeValue: string;
  ctaBook: string;
  ctaLearnMore: string;
  adults: string;
  children: string;
  infants: string;
  free: string;
}

interface MorningTourHeroSSRProps {
  texts: MorningTourHeroTexts;
}

const MorningTourHeroSSR = ({ texts }: MorningTourHeroSSRProps) => {
  return (
    <section className="premium-tour-hero">
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/morning_new/09.webp"
          alt="Morning Adventure boat tour in Alcudia Bay Mallorca - Snorkeling and coastal exploration"
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
                <i className="fa-solid fa-sun"></i>
                <span>{texts.badge}</span>
              </div>

              {/* H1 - Critical for SEO - Server Rendered */}
              <h1 className="hero-title">
                {texts.title}
              </h1>

              {/* Subtitle - Important for SEO - Server Rendered */}
              <p className="hero-subtitle">
                {texts.subtitle}
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <i className="fa-regular fa-clock"></i>
                  <div>
                    <strong>{texts.durationLabel}</strong>
                    <span>{texts.durationValue}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-regular fa-calendar"></i>
                  <div>
                    <strong>{texts.departureLabel}</strong>
                    <span>{texts.departureValue}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-users"></i>
                  <div>
                    <strong>{texts.groupSizeLabel}</strong>
                    <span>{texts.groupSizeValue}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-euro-sign"></i>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                    <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>{texts.adults}:</div>
                    <div style={{
                      fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)',
                      fontWeight: '700',
                      color: '#f59e0b',
                      lineHeight: '1'
                    }}>
                      €68
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75, lineHeight: '1.4' }}>
                      {texts.children}: €48
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75, lineHeight: '1.4' }}>
                      {texts.infants}: {texts.free}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                {/* BookingCTA is a Client Component - it will hydrate on the client */}
                <BookingCTA
                  size="large"
                  text={texts.ctaBook}
                  tourName="Morning Boat Tour Alcudia"
                  tourPrice={68}
                />
                <Link href="#details" className="btn-secondary">
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

export default MorningTourHeroSSR;
