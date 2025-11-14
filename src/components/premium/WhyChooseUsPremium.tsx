'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const WhyChooseUsPremium = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  const reasons = [
    {
      icon: 'fa-water',
      titleKey: 'premium.why_choose.reason_1_title',
      descKey: 'premium.why_choose.reason_1_desc',
      image: '/assets/img/premium/whychoose/mallorca.png'
    },
    {
      icon: 'fa-ship',
      titleKey: 'premium.why_choose.reason_2_title',
      descKey: 'premium.why_choose.reason_2_desc',
      image: '/assets/img/premium/whychoose/classic.png'
    },
    {
      icon: 'fa-utensils',
      titleKey: 'premium.why_choose.reason_3_title',
      descKey: 'premium.why_choose.reason_3_desc',
      image: '/assets/img/premium/whychoose/tapas.png'
    },
    {
      icon: 'fa-user-group',
      titleKey: 'premium.why_choose.reason_4_title',
      descKey: 'premium.why_choose.reason_4_desc',
      image: '/assets/img/premium/whychoose/friends.jpg'
    },
    {
      icon: 'fa-certificate',
      titleKey: 'premium.why_choose.reason_5_title',
      descKey: 'premium.why_choose.reason_5_desc',
      image: '/assets/img/premium/whychoose/lisenced.png'
    },
    {
      icon: 'fa-heart',
      titleKey: 'premium.why_choose.reason_6_title',
      descKey: 'premium.why_choose.reason_6_desc',
      image: '/assets/img/premium/whychoose/sunset.jpg'
    }
  ];

  return (
    <section className="premium-why-choose">
      <div className="premium-why-choose__background">
        <div className="background-overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label premium-section-header__label--light">
                {t('premium.why_choose.label')}
              </span>
              <h2 className="premium-section-header__title premium-section-header__title--light">
                {t('premium.why_choose.title')}
              </h2>
              <p className="premium-section-header__description premium-section-header__description--light">
                {t('premium.why_choose.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="premium-why-choose__grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="premium-why-choose__card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-image-wrapper">
                <Image
                  src={reason.image}
                  alt={`${reason.titleKey} - Coral Boats Mallorca boat tours in Bay of Alcudia`}
                  width={400}
                  height={300}
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                />
                <div className="card-icon-overlay">
                  <i className={`fa-solid ${reason.icon}`}></i>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{t(reason.titleKey)}</h3>
                <p className="card-description">{t(reason.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="premium-why-choose__cta-section">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="cta-title">
                {t('premium.why_choose.cta_title')}
              </h3>
              <p className="cta-description">
                {t('premium.why_choose.cta_description')}
              </p>
              <div className="cta-features">
                <span className="cta-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  {t('premium.why_choose.instant_confirmation')}
                </span>
                <span className="cta-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  {t('premium.why_choose.free_cancellation')}
                </span>
                <span className="cta-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  {t('premium.why_choose.best_price')}
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <Link href={getPath('/boat-tours-alcudia')} className="premium-cta-button">
                <span>{t('premium.why_choose.cta_button')}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <p className="cta-reviews">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>{t('premium.why_choose.rating')}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="premium-why-choose__seo-content">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="seo-subtitle">{t('premium.why_choose.seo_subtitle_1')}</h3>
              <p className="seo-text">
                {t('premium.why_choose.seo_text_1')}
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="seo-subtitle">{t('premium.why_choose.seo_subtitle_2')}</h3>
              <p className="seo-text">
                {t('premium.why_choose.seo_text_2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsPremium;
