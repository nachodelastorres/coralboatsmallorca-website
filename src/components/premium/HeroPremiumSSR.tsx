/**
 * HeroPremiumSSR - Server Component for SEO
 *
 * Renders the hero section with H1, subtitle, and CTAs server-side.
 * Video background is pure HTML (no interactivity needed).
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface HeroPremiumTexts {
  title: string;
  subtitle: string;
  ctaBook: string;
  ctaViewAll: string;
  videoName: string;
  videoDescription: string;
  toursPath: string;
}

interface HeroPremiumSSRProps {
  texts: HeroPremiumTexts;
}

const HeroPremiumSSR = ({ texts }: HeroPremiumSSRProps) => {
  return (
    <section className="premium-hero">
      {/* Video Background */}
      <div className="premium-hero__background">
        <video
          className="premium-hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          itemScope
          itemType="https://schema.org/VideoObject"
        >
          <source src="/assets/img/premium/alcudia-boat-trips-mallorca.mp4" type="video/mp4" />
          <meta itemProp="name" content={texts.videoName} />
          <meta itemProp="description" content={texts.videoDescription} />
          <meta itemProp="thumbnailUrl" content="https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca-thumbnail.webp" />
          <meta itemProp="uploadDate" content="2024-04-01T09:00:00+02:00" />
          <meta itemProp="duration" content="PT33S" />
          <meta itemProp="contentUrl" content="https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca.mp4" />
          <meta itemProp="encodingFormat" content="video/mp4" />
        </video>
      </div>

      {/* White separator */}
      <div className="premium-hero__separator"></div>

      {/* Content */}
      <div className="premium-hero__content">
        <div className="container-fluid h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-5 col-md-6">
              <div className="premium-hero__logo-wrapper">
                <Image
                  src="/assets/img/logo/logo transparente sobre oscuro.png"
                  alt="Coral Boats Mallorca Logo"
                  width={500}
                  height={500}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="premium-hero__text-wrapper">
                {/* H1 - Critical for SEO - Server Rendered */}
                <h1 className="premium-hero__title">
                  {texts.title}
                </h1>
                <p className="premium-hero__subtitle">
                  {texts.subtitle}
                </p>

                <div className="premium-hero__cta-wrapper">
                  <Link href={texts.toursPath} className="premium-hero__cta premium-hero__cta--primary">
                    <i className="fa-regular fa-calendar-check"></i>
                    <span>{texts.ctaBook}</span>
                  </Link>
                  <Link href={texts.toursPath} className="premium-hero__cta premium-hero__cta--secondary">
                    <i className="fa-regular fa-compass"></i>
                    <span>{texts.ctaViewAll}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPremiumSSR;
