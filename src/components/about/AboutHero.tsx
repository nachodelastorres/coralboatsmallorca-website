'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero">
      <div className="premium-tour-hero__background">
        <Image
          src="/assets/img/premium/crew.jpg"
          alt="Coral Boats Mallorca crew team with boat in Alcudia Bay"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-anchor"></i>
                <span>{t('about_page.hero.badge')}</span>
              </div>

              <h1 className="hero-title">
                {t('about_page.hero.title')}
              </h1>

              <p className="hero-subtitle">
                {t('about_page.hero.subtitle')}
              </p>

              <div className="hero-stats">
                <div className="stat-card">
                  <div className="stat-number">1968</div>
                  <div className="stat-label">{t('about_page.hero.stat1')}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">{t('about_page.hero.stat2')}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">{t('about_page.hero.stat3')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .premium-tour-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 150px 0 100px;
          overflow: hidden;
        }

        .premium-tour-hero__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .premium-tour-hero__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 25, 41, 0.85) 0%, rgba(14, 116, 144, 0.75) 100%);
          z-index: 2;
        }

        .premium-tour-hero__content {
          position: relative;
          z-index: 3;
          color: white;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 25px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-badge i {
          font-size: 1.2rem;
          color: #06b6d4;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 25px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.8;
          margin-bottom: 50px;
          opacity: 0.95;
          max-width: 800px;
        }

        .hero-stats {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 25px 35px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
          border-color: #06b6d4;
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #fff, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.95rem;
          opacity: 0.9;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .premium-tour-hero {
            min-height: 70vh;
            padding: 120px 0 80px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-stats {
            gap: 15px;
          }

          .stat-card {
            padding: 20px 25px;
            flex: 1;
            min-width: calc(33.333% - 10px);
          }

          .stat-number {
            font-size: 2.2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .premium-tour-hero {
            min-height: 60vh;
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 40px;
          }

          .hero-stats {
            gap: 12px;
          }

          .stat-card {
            padding: 18px 20px;
            min-width: calc(50% - 6px);
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .stat-card {
            min-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
