/**
 * PrivateChartersPremiumSSR - Server Component for SEO
 *
 * Renders the private charters section with H2, H3, card content server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface PrivateChartersPremiumTexts {
  label: string;
  title: string;
  description: string;
  name: string;
  time: string;
  duration: string;
  highlight: string;
  whatsIncluded: string;
  customItinerary: string;
  cateringDrinks: string;
  professionalCrew: string;
  waterActivities: string;
  durationLabel: string;
  durationValue: string;
  flexibleOptions: string;
  bookNow: string;
  infoText: string;
  charterPath: string;
}

interface PrivateChartersPremiumSSRProps {
  texts: PrivateChartersPremiumTexts;
}

const PrivateChartersPremiumSSR = ({ texts }: PrivateChartersPremiumSSRProps) => {
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
                  {texts.label}
                </span>
                {/* H2 - Important for SEO - Server Rendered */}
                <h2 className="premium-section-header__title premium-section-header__title--light">
                  {texts.title}
                </h2>
                <p className="premium-section-header__description premium-section-header__description--light">
                  {texts.description}
                </p>
              </div>

              {/* Charter Card */}
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <Link href={texts.charterPath} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
                          <span>{texts.highlight}</span>
                        </div>
                      </div>

                      <div className="premium-tour-card__content">
                        <div className="premium-tour-card__header">
                          {/* H3 - Important for SEO - Server Rendered */}
                          <h3 className="premium-tour-card__title">{texts.name}</h3>
                          <div className="premium-tour-card__meta">
                            <span className="meta-item">
                              <i className="fa-regular fa-clock"></i>
                              {texts.time}
                            </span>
                            <span className="meta-item">
                              <i className="fa-regular fa-hourglass"></i>
                              {texts.duration}
                            </span>
                          </div>
                        </div>

                        <div className="premium-tour-card__included">
                          <h4 className="included-title">{texts.whatsIncluded}</h4>
                          <ul className="included-list">
                            <li className="included-item">
                              <i className="fa-solid fa-route"></i>
                              <span>{texts.customItinerary}</span>
                            </li>
                            <li className="included-item">
                              <i className="fa-solid fa-utensils"></i>
                              <span>{texts.cateringDrinks}</span>
                            </li>
                            <li className="included-item">
                              <i className="fa-solid fa-user-tie"></i>
                              <span>{texts.professionalCrew}</span>
                            </li>
                            <li className="included-item">
                              <i className="fa-solid fa-water"></i>
                              <span>{texts.waterActivities}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="premium-tour-card__footer">
                          <div className="premium-tour-card__price">
                            <span className="price-label">{texts.durationLabel}</span>
                            <span className="price-amount" style={{ fontSize: '1.5rem' }}>{texts.durationValue}</span>
                            <span className="price-unit">{texts.flexibleOptions}</span>
                          </div>
                          <div className="premium-tour-card__cta">
                            <span>{texts.bookNow}</span>
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
                  {texts.infoText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateChartersPremiumSSR;
