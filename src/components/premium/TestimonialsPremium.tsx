'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TestimonialsPremium = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & James Mitchell',
      country: 'United Kingdom',
      rating: 5,
      iconColor: '#0891b2',
      text: 'Our sunset tour with Coral Boats was the highlight of our Mallorca vacation! The captain was incredibly knowledgeable about the area and took us to the most stunning hidden coves. The homemade sangria was delicious, and the tapas were authentic and fresh. We celebrated our anniversary on board, and the crew made it truly special. Highly recommend for couples!',
      tour: 'Sunset Magic Tour',
      date: 'August 2024'
    },
    {
      id: 2,
      name: 'Familie Schmidt',
      country: 'Germany',
      rating: 5,
      iconColor: '#06b6d4',
      text: 'Wunderbare Erfahrung! We took the morning tour with our two children (ages 8 and 12) and they absolutely loved it. The snorkeling was fantastic—we saw so many fish! The crew was patient and helpful with the kids, making sure everyone felt safe and comfortable. The boat itself is beautiful and well-maintained. Ein perfekter Familientag!',
      tour: 'Morning Adventure',
      date: 'July 2024'
    },
    {
      id: 3,
      name: 'Marco Rossi',
      country: 'Italy',
      rating: 5,
      iconColor: '#0e7490',
      text: 'Esperienza fantastica! I organized a private charter for my company\'s team building event, and it exceeded all expectations. The crew was professional, the boat was perfect for our group of 20, and the entire experience was seamlessly organized. Great food, beautiful locations, and excellent service. Already planning our return next year!',
      tour: 'Private Charter',
      date: 'September 2024'
    },
    {
      id: 4,
      name: 'Sophie Dubois',
      country: 'France',
      rating: 5,
      iconColor: '#0284c7',
      text: 'Magnifique! The afternoon tour was absolutely perfect. We visited places we would never have found on our own. The water was crystal clear, and the paddle boarding was so much fun. The crew shared interesting stories about Mallorca and made us feel like friends, not just customers. The value for money is excellent—everything is included!',
      tour: 'Afternoon Discovery',
      date: 'August 2024'
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fa-solid fa-star ${i < rating ? 'star-filled' : 'star-empty'}`}
      ></i>
    ));
  };

  // Schema.org JSON-LD for reviews
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Coral Boats Mallorca",
    "image": "https://www.coralboatsmallorca.com/assets/img/logo/logo.png",
    "url": "https://www.coralboatsmallorca.com",
    "telephone": "+34626681867",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alcudia",
      "addressRegion": "Mallorca",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.8371,
      "longitude": 3.1219
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "datePublished": testimonial.date === "August 2024" ? "2024-08-15" :
                       testimonial.date === "July 2024" ? "2024-07-15" :
                       testimonial.date === "September 2024" ? "2024-09-15" : "2024-08-01",
      "reviewBody": testimonial.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <section className="premium-testimonials">
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('premium.testimonials.label')}</span>
              <h2 className="premium-section-header__title">
                {t('premium.testimonials.title')}
              </h2>
              <p className="premium-section-header__description">
                {t('premium.testimonials.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="premium-testimonials__slider">
              <div className="testimonials-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-slide ${
                      index === activeIndex ? 'testimonial-slide--active' : ''
                    } ${
                      index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)
                        ? 'testimonial-slide--prev'
                        : ''
                    } ${
                      index === activeIndex + 1 || (activeIndex === testimonials.length - 1 && index === 0)
                        ? 'testimonial-slide--next'
                        : ''
                    }`}
                  >
                    <div className="premium-testimonial-card">
                      <div className="premium-testimonial-card__quote-icon">
                        <i className="fa-solid fa-quote-left"></i>
                      </div>

                      <div className="premium-testimonial-card__rating">
                        {renderStars(testimonial.rating)}
                      </div>

                      <p className="premium-testimonial-card__text">
                        "{testimonial.text}"
                      </p>

                      <div className="premium-testimonial-card__author">
                        <div className="author-icon-wrapper">
                          <div
                            className="author-icon"
                            style={{
                              background: `linear-gradient(135deg, ${testimonial.iconColor}, ${testimonial.iconColor}dd)`,
                            }}
                          >
                            <i className="fa-solid fa-user"></i>
                          </div>
                        </div>
                        <div className="author-info">
                          <h4 className="author-name">{testimonial.name}</h4>
                          <p className="author-country">
                            <i className="fa-solid fa-location-dot"></i>
                            {testimonial.country}
                          </p>
                        </div>
                      </div>

                      <div className="premium-testimonial-card__meta">
                        <span className="meta-tour">
                          <i className="fa-solid fa-ship"></i>
                          {testimonial.tour}
                        </span>
                        <span className="meta-date">
                          <i className="fa-regular fa-calendar"></i>
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="testimonials-controls">
                <button
                  className="testimonials-control testimonials-control--prev"
                  onClick={handlePrevious}
                  aria-label="Previous testimonial"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className="testimonials-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === activeIndex ? 'indicator--active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  className="testimonials-control testimonials-control--next"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="premium-testimonials__footer text-center">
              <div className="footer-stats">
                <div className="stat">
                  <span className="stat-number">4.9</span>
                  <div className="stat-stars">
                    {renderStars(5)}
                  </div>
                  <span className="stat-label">{t('premium.testimonials.average_rating')}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">{t('premium.testimonials.five_star_reviews')}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">{t('premium.testimonials.happy_travelers')}</span>
                </div>
              </div>

              <div className="review-platforms">
                <p className="platforms-text">{t('premium.testimonials.find_us_on')}</p>
                <div className="platforms-logos">
                  <a
                    href="https://share.google/8mK0qmqnoVmc2Mrkw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-badge"
                  >
                    <i className="fa-brands fa-google"></i>
                    Google
                  </a>
                  <a
                    href="https://www.tripadvisor.es/Attraction_Review-g1233772-d33060513-Reviews-Coral_Boats_Mallorca-Alcudia_Majorca_Balearic_Islands.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-badge"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: '#00af87' }}
                    >
                      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 4.039-10.429L24 6.647h-4.361a15.908 15.908 0 0 0-7.633-2.352zm-6.005 7.7a3.497 3.497 0 1 1 0 6.993 3.497 3.497 0 0 1 0-6.992zm2.008 3.496c0 1.107-.9 2.007-2.008 2.007a2.008 2.008 0 1 1 0-4.015 2.008 2.008 0 0 1 2.008 2.008zm9.996-3.496c1.931 0 3.497 1.566 3.497 3.496a3.497 3.497 0 1 1-6.994 0c0-1.93 1.566-3.496 3.497-3.496zm.007 5.503a2.008 2.008 0 1 1-.001-4.015 2.008 2.008 0 0 1 .001 4.015zM12 8.007a4.466 4.466 0 0 1 2.235.6.623.623 0 0 0 .763-.092l.835-.835A12.958 12.958 0 0 0 12 6.752c-1.389 0-2.726.231-3.982.686l.836.836a.623.623 0 0 0 .763.092A4.466 4.466 0 0 1 12 8.007z"/>
                    </svg>
                    TripAdvisor
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576256470622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-badge"
                  >
                    <i className="fa-brands fa-facebook"></i>
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/coralboatsmallorca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-badge"
                  >
                    <i className="fa-brands fa-instagram"></i>
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@coralboatsmallorca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-badge"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .author-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .author-icon:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
    </>
  );
};

export default TestimonialsPremium;
