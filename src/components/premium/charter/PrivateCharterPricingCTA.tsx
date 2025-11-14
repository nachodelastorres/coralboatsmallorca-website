'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const PrivateCharterPricingCTA = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ marginBottom: '30px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'rgba(8, 145, 178, 0.1)',
                    color: '#0891b2',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '20px',
                    marginBottom: '20px'
                  }}
                >
                  {t('privateCharter.pricingCTA.badge')}
                </span>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}
                >
                  {t('privateCharter.pricingCTA.title')}
                </h2>
                <p
                  style={{
                    fontSize: '1.15rem',
                    color: '#64748b',
                    lineHeight: '1.7',
                    marginBottom: '40px'
                  }}
                >
                  {t('privateCharter.pricingCTA.description')}
                </p>
              </div>

              <Link
                href={getPath('/charter-pricing')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 45px',
                  background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                  color: '#ffffff',
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(8, 145, 178, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                className="pricing-cta-main-button"
              >
                <i className="fa-solid fa-tags"></i>
                <span>{t('privateCharter.pricingCTA.button')}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <div
                style={{
                  marginTop: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '30px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: '#0891b2', fontSize: '1.2rem' }}></i>
                  <span style={{ fontSize: '0.95rem' }}>{t('privateCharter.pricingCTA.feature1')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: '#0891b2', fontSize: '1.2rem' }}></i>
                  <span style={{ fontSize: '0.95rem' }}>{t('privateCharter.pricingCTA.feature2')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: '#0891b2', fontSize: '1.2rem' }}></i>
                  <span style={{ fontSize: '0.95rem' }}>{t('privateCharter.pricingCTA.feature3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-cta-main-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(8, 145, 178, 0.4);
        }

        .pricing-cta-main-button:active {
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem !important;
          }

          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PrivateCharterPricingCTA;
