'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const OurExperiencesTimeline = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  const experiences = [
    {
      id: 'morning',
      titleKey: 'experiences_timeline.morning.title',
      descriptionKey: 'experiences_timeline.morning.description',
      timeKey: 'experiences_timeline.morning.time',
      image: '/assets/img/premium/home_new/card_morning.webp',
      link: getPath('/alcudia-morning-boat-tour'),
      number: '01'
    },
    {
      id: 'sunset',
      titleKey: 'experiences_timeline.sunset.title',
      descriptionKey: 'experiences_timeline.sunset.description',
      timeKey: 'experiences_timeline.sunset.time',
      image: '/assets/img/premium/home_new/card_sunset.webp',
      link: getPath('/alcudia-sunset-boat-tour'),
      number: '02'
    },
    {
      id: 'charter',
      titleKey: 'experiences_timeline.charter.title',
      descriptionKey: 'experiences_timeline.charter.description',
      timeKey: 'experiences_timeline.charter.time',
      image: '/assets/img/premium/home_new/card_private.webp',
      link: getPath('/alcudia-private-boat-charter'),
      number: '03'
    }
  ];

  return (
    <section className="our-experiences">
      <div className="container">
        {/* Section Header */}
        <div className="experiences-intro">
          <div className="section-badge">
            <i className="fa-solid fa-ship"></i>
            <span>{t('experiences_timeline.label')}</span>
          </div>
          <h2 className="experiences-title">{t('experiences_timeline.title')}</h2>
          <p className="experiences-subtitle">{t('experiences_timeline.description')}</p>
        </div>

        {/* Experiences Grid */}
        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-item ${index === 1 ? 'experience-item--reverse' : ''}`}
            >
              <div className="experience-image-container">
                <div className="experience-image">
                  <Image
                    src={exp.image}
                    alt={t(exp.titleKey)}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
              </div>

              <div className="experience-content">
                <div className="experience-number">{exp.number}</div>
                <h3 className="experience-title">{t(exp.titleKey)}</h3>
                <div className="experience-time">
                  <i className="fa-regular fa-clock"></i>
                  <span>{t(exp.timeKey)}</span>
                </div>
                <p className="experience-text">
                  {t(exp.descriptionKey)}{' '}
                  <Link href={exp.link} className="experience-link">
                    {t('experiences_timeline.cta_inline')}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .our-experiences {
          padding: 100px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        .experiences-intro {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          color: white;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-badge i {
          font-size: 1.1rem;
        }

        .experiences-title {
          font-size: 3rem;
          font-weight: 800;
          color: #0a1929;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .experiences-subtitle {
          font-size: 1.3rem;
          color: #475569;
          font-weight: 500;
          line-height: 1.6;
        }

        .experiences-grid {
          display: flex;
          flex-direction: column;
          gap: 80px;
          margin-top: 80px;
        }

        .experience-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .experience-item--reverse {
          direction: rtl;
        }

        .experience-item--reverse > * {
          direction: ltr;
        }

        .experience-image-container {
          position: relative;
        }

        .experience-image {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .experience-image:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(8, 145, 178, 0.3);
        }

        .experience-content {
          position: relative;
        }

        .experience-number {
          font-size: 5rem;
          font-weight: 900;
          color: rgba(8, 145, 178, 0.1);
          line-height: 1;
          margin-bottom: 20px;
        }

        .experience-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0a1929;
          margin-bottom: 20px;
          position: relative;
        }

        .experience-title::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #0891b2, #0e7490);
          border-radius: 2px;
        }

        .experience-time {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 25px;
          padding: 8px 16px;
          background: rgba(8, 145, 178, 0.08);
          border-radius: 20px;
        }

        .experience-time i {
          color: #0891b2;
          font-size: 0.9rem;
        }

        .experience-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #475569;
          margin-top: 30px;
        }

        .experience-link {
          color: #0891b2;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
        }

        .experience-link:hover {
          color: #0e7490;
          border-bottom-color: #0e7490;
        }

        .experience-link i {
          font-size: 0.85rem;
          transition: transform 0.3s ease;
        }

        .experience-link:hover i {
          transform: translateX(4px);
        }

        @media (max-width: 992px) {
          .our-experiences {
            padding: 60px 0;
          }

          .experiences-intro {
            margin-bottom: 60px;
          }

          .experiences-title {
            font-size: 2.2rem;
          }

          .experiences-subtitle {
            font-size: 1.1rem;
          }

          .experiences-grid {
            gap: 60px;
          }

          .experience-item {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .experience-item--reverse {
            direction: ltr;
          }

          .experience-number {
            font-size: 4rem;
          }

          .experience-title {
            font-size: 1.6rem;
          }

          .experience-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .experiences-title {
            font-size: 1.8rem;
          }

          .experience-number {
            font-size: 3rem;
          }

          .experience-title {
            font-size: 1.4rem;
          }

          .experience-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default OurExperiencesTimeline;
