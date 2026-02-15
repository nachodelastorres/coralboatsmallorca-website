'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const PrivateChartersPremium = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <section className="premium-charters">
      <div className="premium-charters__background">
        <Image
          src="/assets/img/premium/home_new/private-charter-capacity-40-people-alcudia.webp"
          alt="Luxury private boat charter in Mallorca for weddings corporate events and special celebrations"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={85}
        />
        <div className="premium-charters__overlay"></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <div className="premium-charters__content">
              <div className="premium-charters__header text-center">
                <span className="premium-section-header__label premium-section-header__label--light">
                  {t('premium.private_charters.label')}
                </span>
                <h2 className="premium-section-header__title premium-section-header__title--light">
                  {t('premium.private_charters.title')}
                </h2>
                <p className="premium-section-header__description premium-section-header__description--light">
                  {t('premium.private_charters.description')}
                </p>
              </div>

              {/* Charter Card */}
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <Link href={getPath('/alcudia-private-boat-charter')} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="premium-tour-card" style={{ cursor: 'pointer' }}>
                      <div className="premium-tour-card__image-wrapper">
                        <Image
                          src="/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp"
                          alt="Private boat charter in Mallorca - Custom itinerary with professional crew and catering"
                          width={400}
                          height={500}
                          className="premium-tour-card__image"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="premium-tour-card__badge">
                          <span>{t('premium.private_charters.highlights').split('•')[0].trim()}</span>
                        </div>
                      </div>

                      <div className="premium-tour-card__content">
                        <div className="premium-tour-card__header">
                          <h3 className="premium-tour-card__title">{t('premium.private_charters.name')}</h3>
                          <div className="premium-tour-card__meta">
                            <span className="meta-item">
                              <i className="fa-regular fa-clock"></i>
                              {t('premium.private_charters.time')}
                            </span>
                            <span className="meta-item">
                              <i className="fa-regular fa-hourglass"></i>
                              {t('premium.private_charters.duration')}
                            </span>
                          </div>
                        </div>

                        <div className="premium-tour-card__included">
                          <h4 className="included-title">{t('premium.tours.whats_included')}</h4>
                          <ul className="included-list">
                            <li className="included-item">
                              <i className="fa-solid fa-route"></i>
                              <span>{t('premium.private_charters.custom_itinerary')}</span>
                            </li>
                            <li className="included-item">
                              <i className="fa-solid fa-utensils"></i>
                              <span>{t('premium.private_charters.catering_drinks')}</span>
                            </li>
                            <li className="included-item">
                              <i className="fa-solid fa-user-tie"></i>
                              <span>{t('premium.private_charters.professional_crew')}</span>
                            </li>
                            <li className="included-item">
                              <i className="fa-solid fa-water"></i>
                              <span>{t('premium.private_charters.water_activities')}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="premium-tour-card__footer">
                          <div className="premium-tour-card__price">
                            <span className="price-label">{t('premium.private_charters.duration_label')}</span>
                            <span className="price-amount" style={{ fontSize: '1.5rem' }}>{t('premium.private_charters.duration_value')}</span>
                            <span className="price-unit">{t('premium.private_charters.flexible_options')}</span>
                          </div>
                          <div className="premium-tour-card__cta">
                            <span>{t('premium.tours.book_now')}</span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="premium-charters__info text-center">
                <i className="fa-solid fa-circle-info info-icon"></i>
                <p className="info-text">
                  {t('premium.private_charters.info_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateChartersPremium;
