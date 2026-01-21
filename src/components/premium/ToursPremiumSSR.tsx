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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursPremiumSSR;
