'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const HeroPremium = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

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
        >
          <source src="/assets/img/premium/test/copy4.mp4" type="video/mp4" />
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
