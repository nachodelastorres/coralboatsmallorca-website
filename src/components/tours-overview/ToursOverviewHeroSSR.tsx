/**
 * ToursOverviewHeroSSR - Server Component for SEO
 *
 * Renders the hero section with H1, badge, subtitle server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';

export interface ToursOverviewHeroTexts {
  badge: string;
  title: string;
  subtitle: string;
}

interface ToursOverviewHeroSSRProps {
  texts: ToursOverviewHeroTexts;
}

const ToursOverviewHeroSSR = ({ texts }: ToursOverviewHeroSSRProps) => {
  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/home_new/classic-coral-boats-charter-vessel-alcudia.webp"
          alt="Best boat tours in Alcudia Mallorca"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-ship"></i>
                <span>{texts.badge}</span>
              </div>

              {/* H1 - Critical for SEO - Server Rendered */}
              <h1 className="hero-title">
                {texts.title}
              </h1>

              <p className="hero-subtitle">
                {texts.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursOverviewHeroSSR;
