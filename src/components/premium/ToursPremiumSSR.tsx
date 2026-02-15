/**
 * ToursPremiumSSR - Server Component for SEO
 *
 * Renders the tours section with H2, H3, tour cards server-side.
 * Price breakdown popup is handled by ToursPremiumClient.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';
import ToursPremiumClient, { TourPriceBreakdown } from './ToursPremiumClient';

export interface TourItem {
  id: string;
  name: string;
  time: string;
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  link: string;
  highlight: string;
  adultPrice: string;
  childPrice: string;
}

export interface TransferInfo {
  title: string;
  description: string;
  locations: string;
  contactNote: string;
  cta: string;
  ctaLink?: string;
}

export interface ToursPremiumTexts {
  label: string;
  title: string;
  description: string;
  whatsIncluded: string;
  snorkelingEquipment: string;
  paddleBoards: string;
  mallorcanTapas: string;
  freeDrink: string;
  from: string;
  perPerson: string;
  bookNow: string;
  departureTitle: string;
  departureDescription: string;
  transferInfo?: TransferInfo;
  priceBreakdown: TourPriceBreakdown;
  tours: TourItem[];
}

interface ToursPremiumSSRProps {
  texts: ToursPremiumTexts;
}

const ToursPremiumSSR = ({ texts }: ToursPremiumSSRProps) => {
  return (
    <section className="premium-tours" id="tours">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{texts.label}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.title}
              </h2>
              <p className="premium-section-header__description">
                {texts.description}
              </p>
            </div>
          </div>
        </div>

        <div className="premium-tours__grid">
          <div className="row">
            {texts.tours.map((tour) => (
              <div key={tour.id} className="col-lg-6 col-md-12">
                <Link href={tour.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="premium-tour-card" style={{ cursor: 'pointer' }}>
                    <div className="premium-tour-card__image-wrapper">
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt}
                        width={400}
                        height={500}
                        className="premium-tour-card__image"
                        sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 40vw"
                      />
                      <div className="premium-tour-card__badge">
                        <span>{tour.highlight}</span>
                      </div>
                    </div>

                    <div className="premium-tour-card__content">
                      <div className="premium-tour-card__header">
                        {/* H3 - Important for SEO - Server Rendered */}
                        <h3 className="premium-tour-card__title">{tour.name}</h3>
                        <div className="premium-tour-card__meta">
                          <span className="meta-item">
                            <i className="fa-regular fa-clock"></i>
                            {tour.time}
                          </span>
                          <span className="meta-item">
                            <i className="fa-regular fa-hourglass"></i>
                            {tour.duration}
                          </span>
                        </div>
                      </div>

                      <div className="premium-tour-card__included">
                        <h4 className="included-title">{texts.whatsIncluded}</h4>
                        <ul className="included-list">
                          <li className="included-item">
                            <i className="fa-solid fa-water"></i>
                            <span>{texts.snorkelingEquipment}</span>
                          </li>
                          <li className="included-item">
                            <i className="fa-solid fa-person-swimming"></i>
                            <span>{texts.paddleBoards}</span>
                          </li>
                          <li className="included-item">
                            <i className="fa-solid fa-utensils"></i>
                            <span>{texts.mallorcanTapas}</span>
                          </li>
                          <li className="included-item">
                            <i className="fa-solid fa-champagne-glasses"></i>
                            <span>{texts.freeDrink}</span>
                          </li>
                        </ul>
                      </div>

                      {/* Client component for price breakdown interactivity */}
                      <ToursPremiumClient
                        tourId={tour.id}
                        priceLabel={texts.from}
                        priceAmount={tour.price}
                        priceUnit={texts.perPerson}
                        bookNow={texts.bookNow}
                        adultPrice={tour.adultPrice}
                        childPrice={tour.childPrice}
                        breakdown={texts.priceBreakdown}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="premium-tours__map-section">
              <div className="map-header text-center">
                <i className="fa-solid fa-location-dot map-icon"></i>
                {/* H3 - Important for SEO - Server Rendered */}
                <h3 className="map-title">
                  {texts.departureTitle}
                </h3>
                <p className="map-description">
                  {texts.departureDescription}
                </p>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1534.8649024886943!2d3.1390642!3d39.8369722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUwJzEzLjEiTiAzwrAwOCcyMi43IkU!5e0!3m2!1sen!2ses!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Port d'Alcudia - Coral Boats departure location"
                ></iframe>
              </div>

              {/* Transfer Service Info */}
              {texts.transferInfo && (
                <div
                  className="transfer-service-box"
                  style={{
                    background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.06) 0%, rgba(6, 182, 212, 0.1) 100%)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    marginTop: '24px',
                    border: '1px solid rgba(8, 145, 178, 0.12)',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-van-shuttle" style={{ color: '#ffffff', fontSize: '1rem' }}></i>
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <h4
                        style={{
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: '#0891b2',
                          marginBottom: '6px',
                        }}
                      >
                        {texts.transferInfo.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#334155',
                          marginBottom: '8px',
                          lineHeight: '1.5',
                        }}
                      >
                        {texts.transferInfo.description} <strong style={{ color: '#0891b2' }}>{texts.transferInfo.locations}</strong>
                      </p>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: '#64748b',
                          marginBottom: '0',
                          fontStyle: 'italic',
                          lineHeight: '1.3',
                        }}
                      >
                        <i className="fa-solid fa-phone" style={{ color: '#0891b2', fontSize: '0.75rem', marginRight: '6px' }}></i>
                        {texts.transferInfo.contactNote}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '14px',
                      textAlign: 'center',
                    }}
                  >
                    {texts.transferInfo.ctaLink ? (
                      <Link
                        href={texts.transferInfo.ctaLink}
                        style={{
                          display: 'inline-block',
                          fontSize: '0.85rem',
                          color: '#ffffff',
                          fontWeight: '700',
                          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                        }}
                      >
                        {texts.transferInfo.cta}
                      </Link>
                    ) : (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.85rem',
                          color: '#ffffff',
                          fontWeight: '700',
                          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                          padding: '8px 16px',
                          borderRadius: '8px',
                        }}
                      >
                        {texts.transferInfo.cta}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursPremiumSSR;
