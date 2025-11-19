'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import Script from 'next/script';

const HeroPremium = () => {
  const { t } = useTranslation('common');
  const { getPath, locale } = useLocale();

  // Video Schema Markup for SEO
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": "https://www.coralboatsmallorca.com/#hero-video",
    "name": t('premium.hero.video.name'),
    "description": t('premium.hero.video.description'),
    "thumbnailUrl": "https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca-thumbnail.webp",
    "uploadDate": "2024-04-01T09:00:00+02:00",
    "duration": "PT33S",
    "contentUrl": "https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca.mp4",
    "embedUrl": `https://www.coralboatsmallorca.com/${locale}`,
    "encodingFormat": "video/mp4",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "inLanguage": locale,
    "isFamilyFriendly": true,
    "regionsAllowed": "ES,EU",
    "potentialAction": {
      "@type": "WatchAction",
      "target": `https://www.coralboatsmallorca.com/${locale}`
    }
  };

  return (
    <section className="premium-hero">
      {/* Video Schema Markup */}
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        strategy="afterInteractive"
      />

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
          <meta itemProp="name" content={t('premium.hero.video.name')} />
          <meta itemProp="description" content={t('premium.hero.video.description')} />
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
                <h1 className="premium-hero__title">
                  {t('premium.hero.title')}
                </h1>
                <p className="premium-hero__subtitle">
                  {t('premium.hero.subtitle')}
                </p>

                <div className="premium-hero__cta-wrapper">
                  <Link href={getPath('/boat-tours-alcudia')} className="premium-hero__cta premium-hero__cta--primary">
                    <i className="fa-regular fa-calendar-check"></i>
                    <span>{t('premium.hero.cta_book')}</span>
                  </Link>
                  <Link href={getPath('/boat-tours-alcudia')} className="premium-hero__cta premium-hero__cta--secondary">
                    <i className="fa-regular fa-compass"></i>
                    <span>{t('premium.hero.cta_view_all')}</span>
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

export default HeroPremium;
