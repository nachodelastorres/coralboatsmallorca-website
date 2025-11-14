'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const PrivateCharterCapacity = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <section className="premium-tour-details">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="premium-section-header">
              <span className="premium-section-header__label">{t('privateCharter.capacity.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('privateCharter.capacity.sectionTitle')}
              </h2>
            </div>

            <div className="tour-description">
              <p dangerouslySetInnerHTML={{ __html: t('privateCharter.capacity.paragraph1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('privateCharter.capacity.paragraph2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('privateCharter.capacity.paragraph3') }} />
            </div>

            <div className="tour-gallery-jump">
              <a href="#gallery" className="gallery-jump-btn">
                <i className="fa-solid fa-images"></i>
                <span>{t('privateCharter.capacity.galleryLink')}</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>

            <div className="tour-highlights">
              <h3 className="highlights-title">{t('privateCharter.capacity.advantagesTitle')}</h3>
              <ul className="highlights-list">
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t('privateCharter.capacity.advantage1')}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t('privateCharter.capacity.advantage2')}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t('privateCharter.capacity.advantage3')}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t('privateCharter.capacity.advantage4')}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t('privateCharter.capacity.advantage5')}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t('privateCharter.capacity.advantage6')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tour-info-card">
              <div className="card-image">
                <Image
                  src="/assets/img/premium/home_new/14.webp"
                  alt="Private charter boat for groups up to 40 people in Alcudia Mallorca"
                  width={600}
                  height={400}
                  className="info-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="card-content">
                <h3 className="card-title">{t('privateCharter.capacity.capacityHighlightsTitle')}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.75rem', color: '#0891b2', minWidth: '50px', textAlign: 'center' }}>
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '3px' }}>
                        {t('privateCharter.capacity.capacity1Value')}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        {t('privateCharter.capacity.capacity1Label')}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.75rem', color: '#0891b2', minWidth: '50px', textAlign: 'center' }}>
                      <i className="fa-solid fa-certificate"></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '3px' }}>
                        {t('privateCharter.capacity.capacity2Value')}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        {t('privateCharter.capacity.capacity2Label')}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.75rem', color: '#0891b2', minWidth: '50px', textAlign: 'center' }}>
                      <i className="fa-solid fa-ship"></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '3px' }}>
                        {t('privateCharter.capacity.capacity3Value')}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        {t('privateCharter.capacity.capacity3Label')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-info-box">
                  <div className="info-box-icon">
                    <i className="fa-solid fa-circle-info"></i>
                  </div>
                  <div className="info-box-content">
                    <h4>{t('privateCharter.capacity.infoBoxTitle')}</h4>
                    <p dangerouslySetInnerHTML={{ __html: t('privateCharter.capacity.infoBoxText') }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button to Pricing */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-12">
            <div style={{ textAlign: 'center' }}>
              <Link
                href={getPath('/charter-pricing')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 40px',
                  background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                className="pricing-cta-button"
              >
                <i className="fa-solid fa-tags"></i>
                <span>{t('privateCharter.capacity.ctaButton')}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(8, 145, 178, 0.4);
        }

        .pricing-cta-button:active {
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};

export default PrivateCharterCapacity;
