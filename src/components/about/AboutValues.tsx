'use client';

import { useTranslation } from 'react-i18next';

const AboutValues = () => {
  const { t } = useTranslation('common');

  const values = [
    {
      icon: 'fa-heart',
      titleKey: 'about.values.value1_title',
      descKey: 'about.values.value1_desc',
      color: '#ef4444'
    },
    {
      icon: 'fa-leaf',
      titleKey: 'about.values.value2_title',
      descKey: 'about.values.value2_desc',
      color: '#10b981'
    },
    {
      icon: 'fa-shield-halved',
      titleKey: 'about.values.value3_title',
      descKey: 'about.values.value3_desc',
      color: '#f59e0b'
    },
    {
      icon: 'fa-star',
      titleKey: 'about.values.value4_title',
      descKey: 'about.values.value4_desc',
      color: '#8b5cf6'
    }
  ];

  return (
    <section className="about-values">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('about.values.title')}</h2>
            <p className="section-subtitle">{t('about.values.subtitle')}</p>
          </div>
        </div>

        <div className="row g-4">
          {values.map((value, index) => (
            <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="value-card">
                <div className="value-icon" style={{ background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)` }}>
                  <i className={`fa-solid ${value.icon}`}></i>
                </div>
                <h3 className="value-title">{t(value.titleKey)}</h3>
                <p className="value-description">{t(value.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-values {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
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

        .value-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          height: 100%;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #0891b2, #06b6d4);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .value-card:hover::before {
          transform: scaleX(1);
        }

        .value-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 2rem;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .value-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0a1929;
          margin-bottom: 15px;
        }

        .value-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-values {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutValues;
