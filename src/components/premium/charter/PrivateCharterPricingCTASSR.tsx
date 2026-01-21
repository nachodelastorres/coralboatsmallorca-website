/**
 * PrivateCharterPricingCTASSR - Server Component for SEO
 *
 * Renders H2, description, and features server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Link from 'next/link';

export interface PrivateCharterPricingCTATexts {
  badge: string;
  title: string;
  description: string;
  button: string;
  feature1: string;
  feature2: string;
  feature3: string;
  pricingPath: string;
}

interface PrivateCharterPricingCTASSRProps {
  texts: PrivateCharterPricingCTATexts;
}

const PrivateCharterPricingCTASSR = ({ texts }: PrivateCharterPricingCTASSRProps) => {
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
                  {texts.badge}
                </span>
                {/* H2 - Important for SEO - Server Rendered */}
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}
                >
                  {texts.title}
                </h2>
                <p
                  style={{
                    fontSize: '1.15rem',
                    color: '#64748b',
                    lineHeight: '1.7',
                    marginBottom: '40px'
                  }}
                >
                  {texts.description}
                </p>
              </div>

              <Link
                href={texts.pricingPath}
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
              >
                <i className="fa-solid fa-tags"></i>
                <span>{texts.button}</span>
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
                  <span style={{ fontSize: '0.95rem' }}>{texts.feature1}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: '#0891b2', fontSize: '1.2rem' }}></i>
                  <span style={{ fontSize: '0.95rem' }}>{texts.feature2}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: '#0891b2', fontSize: '1.2rem' }}></i>
                  <span style={{ fontSize: '0.95rem' }}>{texts.feature3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterPricingCTASSR;
