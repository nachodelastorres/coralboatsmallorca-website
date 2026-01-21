'use client';

import { useState } from 'react';

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  rating: number;
  iconColor: string;
  text: string;
  tour: string;
  date: string;
}

interface TestimonialsPremiumClientProps {
  testimonials: Testimonial[];
  averageRating: string;
  fiveStarReviews: string;
  happyTravelers: string;
  findUsOn: string;
}

const TestimonialsPremiumClient = ({
  testimonials,
  averageRating,
  fiveStarReviews,
  happyTravelers,
  findUsOn,
}: TestimonialsPremiumClientProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <>
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
                      &quot;{testimonial.text}&quot;
                    </p>

                    <div className="premium-testimonial-card__author">
                      <div className="author-icon-wrapper">
                        <div
                          className="author-icon"
                          style={{
                            background: `linear-gradient(135deg, ${testimonial.iconColor}, ${testimonial.iconColor}dd)`,
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            fontSize: '2rem',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
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
                <span className="stat-label">{averageRating}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">{fiveStarReviews}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">{happyTravelers}</span>
              </div>
            </div>

            <div className="review-platforms">
              <p className="platforms-text">{findUsOn}</p>
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
    </>
  );
};

export default TestimonialsPremiumClient;
