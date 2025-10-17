'use client';

import { useTranslation } from 'react-i18next';

const AboutTestimonials = () => {
  const { t } = useTranslation('common');

  const testimonials = [
    {
      nameKey: 'about.testimonials.testimonial1_name',
      countryKey: 'about.testimonials.testimonial1_country',
      textKey: 'about.testimonials.testimonial1_text',
      rating: 5
    },
    {
      nameKey: 'about.testimonials.testimonial2_name',
      countryKey: 'about.testimonials.testimonial2_country',
      textKey: 'about.testimonials.testimonial2_text',
      rating: 5
    },
    {
      nameKey: 'about.testimonials.testimonial3_name',
      countryKey: 'about.testimonials.testimonial3_country',
      textKey: 'about.testimonials.testimonial3_text',
      rating: 5
    }
  ];

  return (
    <section className="about-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('about.testimonials.title')}</h2>
            <p className="section-subtitle">{t('about.testimonials.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">{t(testimonial.textKey)}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{t(testimonial.nameKey)}</h4>
                    <p className="author-country">{t(testimonial.countryKey)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-12 text-center">
            <div className="review-platforms">
              <p className="platforms-text">{t('about.testimonials.platforms_text')}</p>
              <div className="platform-badges">
                <div className="platform-badge">
                  <i className="fa-brands fa-google"></i>
                  <div className="badge-info">
                    <div className="badge-rating">
                      <span className="rating-number">4.9</span>
                      <div className="rating-stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                    </div>
                    <p className="badge-reviews">500+ {t('about.testimonials.reviews')}</p>
                  </div>
                </div>
                <div className="platform-badge">
                  <i className="fa-brands fa-tripadvisor"></i>
                  <div className="badge-info">
                    <div className="badge-rating">
                      <span className="rating-number">5.0</span>
                      <div className="rating-stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <p className="badge-reviews">300+ {t('about.testimonials.reviews')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-testimonials {
          padding: 100px 0;
          background: white;
          position: relative;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0a1929;
          margin-bottom: 15px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .testimonial-card {
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          padding: 40px 30px;
          border-radius: 20px;
          height: 100%;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          border: 2px solid transparent;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #0891b2;
        }

        .testimonial-rating {
          display: flex;
          gap: 5px;
          margin-bottom: 20px;
        }

        .testimonial-rating i {
          color: #fbbf24;
          font-size: 1.2rem;
        }

        .testimonial-text {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 25px;
          font-style: italic;
          position: relative;
        }

        .testimonial-text::before {
          content: '"';
          font-size: 4rem;
          color: #0891b2;
          opacity: 0.2;
          position: absolute;
          top: -20px;
          left: -10px;
          font-family: Georgia, serif;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid rgba(8, 145, 178, 0.2);
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0a1929;
          margin: 0;
        }

        .author-country {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
        }

        .review-platforms {
          margin-top: 80px;
          padding: 50px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .platforms-text {
          font-size: 1.2rem;
          color: #1e293b;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .platform-badges {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .platform-badge {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px 35px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .platform-badge:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .platform-badge > i {
          font-size: 3rem;
        }

        .platform-badge > i.fa-google {
          color: #4285f4;
        }

        .platform-badge > i.fa-tripadvisor {
          color: #00af87;
        }

        .badge-rating {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 5px;
        }

        .rating-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0a1929;
        }

        .rating-stars {
          display: flex;
          gap: 3px;
        }

        .rating-stars i {
          color: #fbbf24;
          font-size: 1rem;
        }

        .badge-reviews {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-testimonials {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .testimonial-card {
            padding: 30px 20px;
          }

          .review-platforms {
            margin-top: 40px;
            padding: 30px 20px;
          }

          .platform-badges {
            flex-direction: column;
            gap: 20px;
          }

          .platform-badge {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutTestimonials;
