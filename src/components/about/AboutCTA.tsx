'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const AboutCTA = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  const tours = [
    {
      icon: 'fa-sun',
      titleKey: 'about.cta.tour1_title',
      descKey: 'about.cta.tour1_desc',
      link: getPath('/morning-tour'),
      color: '#f59e0b'
    },
    {
      icon: 'fa-water',
      titleKey: 'about.cta.tour2_title',
      descKey: 'about.cta.tour2_desc',
      link: getPath('/sunset-tour'),
      color: '#ec4899'
    },
    {
      icon: 'fa-crown',
      titleKey: 'about.cta.tour3_title',
      descKey: 'about.cta.tour3_desc',
      link: getPath('/private-charter'),
      color: '#8b5cf6'
    }
  ];

  return (
    <section className="about-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up">
              <h2 className="cta-title">{t('about.cta.title')}</h2>
              <p className="cta-subtitle">{t('about.cta.subtitle')}</p>
            </div>
          </div>

          <div className="row g-4">
            {tours.map((tour, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <Link href={tour.link} className="tour-cta-card">
                  <div className="tour-icon" style={{ background: `linear-gradient(135deg, ${tour.color}, ${tour.color}dd)` }}>
                    <i className={`fa-solid ${tour.icon}`}></i>
                  </div>
                  <h3 className="tour-title">{t(tour.titleKey)}</h3>
                  <p className="tour-description">{t(tour.descKey)}</p>
                  <div className="tour-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-12 text-center">
              <div className="cta-contact">
                <p className="contact-text">{t('about.cta.contact_text')}</p>
                <div className="contact-buttons">
                  <Link href={getPath('/contact')} className="btn-primary">
                    <i className="fa-solid fa-envelope"></i>
                    {t('about.cta.contact_button')}
                  </Link>
                  <a href="tel:+34660221736" className="btn-secondary">
                    <i className="fa-solid fa-phone"></i>
                    +34 660 221 736
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-cta {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a1929 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }

        .about-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(8, 145, 178, 0.15) 0%, transparent 70%);
          border-radius: 50%;
        }

        .about-cta::after {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-wrapper {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: white;
          margin-bottom: 15px;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .tour-cta-card {
          display: block;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          height: 100%;
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .tour-cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tour-cta-card:hover {
          transform: translateY(-10px);
          border-color: #0891b2;
          box-shadow: 0 15px 40px rgba(8, 145, 178, 0.3);
        }

        .tour-cta-card:hover::before {
          opacity: 1;
        }

        .tour-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 2rem;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .tour-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .tour-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .tour-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(8, 145, 178, 0.2);
          border-radius: 50%;
          color: #0891b2;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .tour-cta-card:hover .tour-arrow {
          background: #0891b2;
          color: white;
          transform: translateX(5px);
        }

        .cta-contact {
          margin-top: 80px;
          padding: 50px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .contact-text {
          font-size: 1.3rem;
          color: white;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .contact-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 35px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-primary {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          color: white;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #0e7490, #0891b2);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(8, 145, 178, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: white;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .about-cta {
            padding: 60px 0;
          }

          .cta-title {
            font-size: 2rem;
          }

          .tour-cta-card {
            padding: 30px 20px;
          }

          .cta-contact {
            margin-top: 40px;
            padding: 30px 20px;
          }

          .contact-buttons {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutCTA;
