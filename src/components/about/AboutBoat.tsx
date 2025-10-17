'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutBoat = () => {
  const { t } = useTranslation('common');

  const features = [
    { icon: 'fa-calendar-days', labelKey: 'about.boat.feature1' },
    { icon: 'fa-users', labelKey: 'about.boat.feature2' },
    { icon: 'fa-ruler-combined', labelKey: 'about.boat.feature3' },
    { icon: 'fa-ship', labelKey: 'about.boat.feature4' }
  ];

  return (
    <section className="about-boat">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-boat__content">
              <h2 className="section-title">{t('about.boat.title')}</h2>
              <p className="section-subtitle">{t('about.boat.subtitle')}</p>

              <div className="boat-description">
                <p>{t('about.boat.description1')}</p>
                <p>{t('about.boat.description2')}</p>
              </div>

              <div className="boat-features">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <i className={`fa-solid ${feature.icon}`}></i>
                    </div>
                    <span className="feature-label">{t(feature.labelKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-boat__image">
              <Image
                src="/assets/img/galeria_tour/web/popa.webp"
                alt="Amayna II - Classic 1968 boat for Coral Boats tours in Alcudia"
                width={600}
                height={500}
                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 15px 50px rgba(0,0,0,0.2)' }}
              />
              <div className="boat-badge">
                <div className="badge-year">1968</div>
                <div className="badge-label">{t('about.boat.badge')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-boat {
          padding: 100px 0;
          background: white;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0a1929;
          margin-bottom: 15px;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #0891b2;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .boat-description p {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.9;
          margin-bottom: 20px;
        }

        .boat-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(8, 145, 178, 0.15);
        }

        .feature-icon {
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
          box-shadow: 0 5px 15px rgba(8, 145, 178, 0.3);
        }

        .feature-label {
          font-size: 1rem;
          color: #1e293b;
          font-weight: 600;
        }

        .about-boat__image {
          position: relative;
        }

        .boat-badge {
          position: absolute;
          top: 30px;
          left: 30px;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          padding: 20px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(8, 145, 178, 0.4);
          text-align: center;
        }

        .badge-year {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          line-height: 1;
          margin-bottom: 5px;
        }

        .badge-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .about-boat {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .boat-features {
            grid-template-columns: 1fr;
          }

          .boat-badge {
            left: 15px;
            top: 15px;
            padding: 15px 20px;
          }

          .badge-year {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutBoat;
