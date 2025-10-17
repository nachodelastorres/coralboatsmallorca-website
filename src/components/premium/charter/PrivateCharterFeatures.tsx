'use client';

import { useTranslation } from 'react-i18next';

const PrivateCharterFeatures = () => {
  const { t } = useTranslation('common');

  return (
    <section style={{
      background: '#22293a',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '300px',
        background: 'linear-gradient(180deg, rgba(8, 145, 178, 0.08) 0%, transparent 100%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="premium-section-header__label" style={{ background: 'rgba(8, 145, 178, 0.2)', color: '#06b6d4' }}>
                {t('privateCharter.features.sectionLabel')}
              </span>
              <h2 className="premium-section-header__title" style={{ color: '#ffffff' }}>
                {t('privateCharter.features.sectionTitle')}
              </h2>
              <p className="premium-section-header__description" style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.85)' }}>
                {t('privateCharter.features.sectionDescription')}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div style={{
              background: '#ffffff',
              padding: '60px 40px',
              borderRadius: '30px',
              boxShadow: '0 10px 40px rgba(8, 145, 178, 0.1)',
              border: '1px solid #e2e8f0'
            }}
            className="charter-seo-content">

              {/* Intro paragraph with icon */}
              <div className="charter-intro">
                <div className="charter-intro-icon">
                  <i className="fa-solid fa-ship"></i>
                </div>
                <div className="charter-intro-content">
                  <h3 className="charter-intro-title">
                    {t('privateCharter.features.introTitle')}
                  </h3>
                  <p className="charter-intro-text" dangerouslySetInnerHTML={{ __html: t('privateCharter.features.introText') }} />
                </div>
              </div>

              {/* Divider */}
              <div style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #0891b2, transparent)',
                margin: '40px 0'
              }}></div>

              {/* Main content in two columns */}
              <div className="row" style={{ marginBottom: '40px' }}>
                <div className="col-md-6" style={{ marginBottom: '30px' }}>
                  <div className="charter-info-card">
                    <h4 className="charter-info-title">
                      <i className="fa-solid fa-users"></i>
                      <span>{t('privateCharter.features.capacityTitle')}</span>
                    </h4>
                    <p className="charter-info-text" dangerouslySetInnerHTML={{ __html: t('privateCharter.features.capacityText') }} />
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '30px' }}>
                  <div className="charter-info-card">
                    <h4 className="charter-info-title">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{t('privateCharter.features.locationTitle')}</span>
                    </h4>
                    <p className="charter-info-text" dangerouslySetInnerHTML={{ __html: t('privateCharter.features.locationText') }} />
                  </div>
                </div>
              </div>

              {/* Key features highlight */}
              <div className="charter-highlights">
                <h4 className="charter-highlights-title">
                  {t('privateCharter.features.highlightsTitle')}
                </h4>
                <div className="row">
                  <div className="col-md-4 col-6" style={{ marginBottom: '25px' }}>
                    <div className="charter-highlight-item">
                      <div className="charter-highlight-icon">
                        <i className="fa-solid fa-certificate"></i>
                      </div>
                      <p className="charter-highlight-text">
                        {t('privateCharter.features.highlight1')}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" style={{ marginBottom: '25px' }}>
                    <div className="charter-highlight-item">
                      <div className="charter-highlight-icon">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                      </div>
                      <p className="charter-highlight-text">
                        {t('privateCharter.features.highlight2')}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-12" style={{ marginBottom: '25px' }}>
                    <div className="charter-highlight-item">
                      <div className="charter-highlight-icon">
                        <i className="fa-solid fa-heart"></i>
                      </div>
                      <p className="charter-highlight-text">
                        {t('privateCharter.features.highlight3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing paragraph */}
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <p className="charter-closing-text" dangerouslySetInnerHTML={{ __html: t('privateCharter.features.closingText') }} />
                <a href="/charter-pricing" className="charter-cta-button">
                  <span>{t('privateCharter.features.ctaButton')}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .charter-seo-content {
          @media (max-width: 767px) {
            padding: 40px 24px !important;
            border-radius: 20px !important;
          }
        }

        .charter-intro {
          display: flex;
          gap: 30px;
          margin-bottom: 40px;
          align-items: flex-start;
        }

        @media (max-width: 767px) {
          .charter-intro {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            align-items: center;
          }
        }

        .charter-intro-icon {
          font-size: 3rem;
          color: #0891b2;
          min-width: 80px;
          text-align: center;
          background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
          padding: 20px;
          border-radius: 20px;
        }

        @media (max-width: 767px) {
          .charter-intro-icon {
            font-size: 2.5rem;
            min-width: 70px;
            padding: 18px;
          }
        }

        .charter-intro-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 15px;
        }

        @media (max-width: 767px) {
          .charter-intro-title {
            font-size: 1.4rem;
          }
        }

        .charter-intro-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #475569;
          margin: 0;
        }

        @media (max-width: 767px) {
          .charter-intro-text {
            font-size: 1rem;
            line-height: 1.7;
          }
        }

        .charter-info-card {
          padding: 30px;
          background: #f8fafc;
          border-radius: 20px;
          height: 100%;
          border-left: 4px solid #0891b2;
        }

        @media (max-width: 767px) {
          .charter-info-card {
            padding: 24px;
            border-left: 3px solid #0891b2;
          }
        }

        .charter-info-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .charter-info-title i {
          color: #0891b2;
          font-size: 1.3rem;
        }

        @media (max-width: 767px) {
          .charter-info-title {
            font-size: 1.15rem;
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .charter-info-title i {
            font-size: 1.8rem;
          }

          .charter-info-title span {
            display: block;
          }
        }

        .charter-info-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #475569;
          margin: 0;
        }

        @media (max-width: 767px) {
          .charter-info-text {
            font-size: 0.95rem;
            line-height: 1.7;
            text-align: left;
          }
        }

        .charter-highlights {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 40px;
        }

        @media (max-width: 767px) {
          .charter-highlights {
            padding: 30px 20px;
          }
        }

        .charter-highlights-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 30px;
          text-align: center;
        }

        @media (max-width: 767px) {
          .charter-highlights-title {
            font-size: 1.3rem;
            margin-bottom: 25px;
          }
        }

        .charter-highlight-item {
          text-align: center;
        }

        .charter-highlight-icon {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 12px;
        }

        @media (max-width: 767px) {
          .charter-highlight-icon {
            font-size: 2rem;
            margin-bottom: 10px;
          }
        }

        .charter-highlight-text {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
          margin: 0;
          font-size: 1rem;
        }

        @media (max-width: 767px) {
          .charter-highlight-text {
            font-size: 0.9rem;
          }
        }

        .charter-closing-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 30px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 767px) {
          .charter-closing-text {
            font-size: 1rem;
            line-height: 1.7;
            text-align: left;
          }
        }

        .charter-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          color: #ffffff;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(8, 145, 178, 0.4);
          transition: all 0.3s ease;
        }

        .charter-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(8, 145, 178, 0.5);
          color: #ffffff;
        }

        @media (max-width: 767px) {
          .charter-cta-button {
            padding: 16px 32px;
            font-size: 1rem;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default PrivateCharterFeatures;
