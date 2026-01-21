/**
 * ContactHeroSSR - Server Component for SEO
 *
 * Renders hero section with H1, badge, subtitle server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';

export interface ContactHeroTexts {
  badge: string;
  title: string;
  subtitle: string;
}

interface ContactHeroSSRProps {
  texts: ContactHeroTexts;
}

const ContactHeroSSR = ({ texts }: ContactHeroSSRProps) => {
  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/gallery_new/coral-boats-navegando-isla-alcanada-alcudia.webp"
          alt="Contact Coral Boats Mallorca"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-envelope"></i>
                <span>{texts.badge}</span>
              </div>
              {/* H1 - Critical for SEO - Server Rendered */}
              <h1 className="hero-title">{texts.title}</h1>
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

export default ContactHeroSSR;
