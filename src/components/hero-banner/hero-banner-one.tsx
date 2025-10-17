'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const HeroBannerOne = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <div className="it-slider-area fix" style={{ position: 'relative' }}>
      <div className="it-slider-item it-slider-overlay it-slider-height p-relative d-flex align-items-flex-start">
        {/* ✅ Imagen optimizada con next/image */}
        <div className="it-slider-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/assets/img/home-1/slider/hero2.webp"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="it-slider-title-box text-center mb-85 z-index">
                <h1 className="it-slider-title" style={{ whiteSpace: 'pre-line', marginBottom: '20px' }}>
                  {t('hero.title')}
                </h1>
                <p className="it-slider-description text-white" style={{ whiteSpace: 'pre-line' }}>
                  <span>{t('hero.description').split('\n')[0]}</span>
                  <span className="d-none-mobile">
                    {' '}{t('hero.description').split('\n')[1]}
                  </span>
                </p>
                <Image
                  src="/assets/img/logo/logo transparente sobre oscuro.png"
                  alt="Logo Coral Boats"
                  width={150}
                  height={80}
                  style={{ marginTop: '5px', height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div
            className="it-tour-package-main"
            style={{
              position: 'relative',
              bottom: '20px',
              left: 0,
              width: '100%',
              zIndex: 100,
            }}
          >
            <div className="container text-center">
              <Link href={getPath('/boat-tours-alcudia')} className="it-btn-primary">
                {t('book_now')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;
