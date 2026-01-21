'use client';

import { useTranslation } from 'react-i18next';

const ContactHero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/gallery_new/coral-boats-navegando-isla-alcanada-alcudia.webp"
          alt="Contact Coral Boats Mallorca"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-envelope"></i>
                <span>{t('premium.contact_page.hero_badge')}</span>
              </div>
              <h1 className="hero-title">{t('premium.contact.title')}</h1>
              <p className="hero-subtitle">
                {t('premium.contact.body')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .premium-tour-hero {
          position: relative;
          display: flex;
          align-items: center;
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
          background: linear-gradient(135deg, rgba(8, 145, 178, 0.85), rgba(14, 116, 144, 0.75));
          z-index: 2;
        }

        .container {
          position: relative;
          z-index: 3;
        }

        .premium-tour-hero__content {
          padding: 60px 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 30px;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 25px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-badge i {
          font-size: 1.1rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #e0f2fe;
          line-height: 1.7;
          max-width: 600px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .premium-tour-hero__content {
            padding: 40px 0;
          }

          .hero-subtitle {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactHero;
