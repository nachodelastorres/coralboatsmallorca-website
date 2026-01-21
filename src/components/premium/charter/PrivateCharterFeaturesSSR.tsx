/**
 * PrivateCharterFeaturesSSR - Server Component for SEO
 *
 * Renders H2, H3, H4, paragraphs, and highlights server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Link from 'next/link';

export interface PrivateCharterFeaturesTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  introTitle: string;
  introText: string;
  capacityTitle: string;
  capacityText: string;
  locationTitle: string;
  locationText: string;
  highlightsTitle: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  closingText: string;
  ctaButton: string;
  pricingPath: string;
}

interface PrivateCharterFeaturesSSRProps {
  texts: PrivateCharterFeaturesTexts;
}

const PrivateCharterFeaturesSSR = ({ texts }: PrivateCharterFeaturesSSRProps) => {
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
                {texts.sectionLabel}
              </span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title" style={{ color: '#ffffff' }}>
                {texts.sectionTitle}
              </h2>
              <p className="premium-section-header__description" style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.85)' }}>
                {texts.sectionDescription}
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
            }}>

              {/* Intro paragraph with icon */}
              <div style={{ display: 'flex', gap: '30px', marginBottom: '40px', alignItems: 'flex-start' }}>
                <div style={{
                  fontSize: '3rem',
                  color: '#0891b2',
                  minWidth: '80px',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)',
                  padding: '20px',
                  borderRadius: '20px'
                }}>
                  <i className="fa-solid fa-ship"></i>
                </div>
                <div>
                  {/* H3 - Server Rendered */}
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '15px'
                  }}>
                    {texts.introTitle}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#475569',
                    margin: 0
                  }} dangerouslySetInnerHTML={{ __html: texts.introText }} />
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
                  <div style={{
                    padding: '30px',
                    background: '#f8fafc',
                    borderRadius: '20px',
                    height: '100%',
                    borderLeft: '4px solid #0891b2'
                  }}>
                    {/* H4 - Server Rendered */}
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <i className="fa-solid fa-users" style={{ color: '#0891b2', fontSize: '1.3rem' }}></i>
                      <span>{texts.capacityTitle}</span>
                    </h4>
                    <p style={{
                      fontSize: '1.05rem',
                      lineHeight: '1.8',
                      color: '#475569',
                      margin: 0
                    }} dangerouslySetInnerHTML={{ __html: texts.capacityText }} />
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '30px' }}>
                  <div style={{
                    padding: '30px',
                    background: '#f8fafc',
                    borderRadius: '20px',
                    height: '100%',
                    borderLeft: '4px solid #0891b2'
                  }}>
                    {/* H4 - Server Rendered */}
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#0891b2', fontSize: '1.3rem' }}></i>
                      <span>{texts.locationTitle}</span>
                    </h4>
                    <p style={{
                      fontSize: '1.05rem',
                      lineHeight: '1.8',
                      color: '#475569',
                      margin: 0
                    }} dangerouslySetInnerHTML={{ __html: texts.locationText }} />
                  </div>
                </div>
              </div>

              {/* Key features highlight */}
              <div style={{
                background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                padding: '40px',
                borderRadius: '20px',
                marginBottom: '40px'
              }}>
                {/* H4 - Server Rendered */}
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  {texts.highlightsTitle}
                </h4>
                <div className="row">
                  <div className="col-md-4 col-6" style={{ marginBottom: '25px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '12px' }}>
                        <i className="fa-solid fa-certificate"></i>
                      </div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: '600', margin: 0, fontSize: '1rem' }}>
                        {texts.highlight1}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" style={{ marginBottom: '25px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '12px' }}>
                        <i className="fa-solid fa-clock-rotate-left"></i>
                      </div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: '600', margin: 0, fontSize: '1rem' }}>
                        {texts.highlight2}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-12" style={{ marginBottom: '25px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '12px' }}>
                        <i className="fa-solid fa-heart"></i>
                      </div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: '600', margin: 0, fontSize: '1rem' }}>
                        {texts.highlight3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing paragraph */}
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.8',
                  color: '#475569',
                  marginBottom: '30px',
                  maxWidth: '800px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }} dangerouslySetInnerHTML={{ __html: texts.closingText }} />
                <Link href={texts.pricingPath} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                  color: '#ffffff',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(8, 145, 178, 0.4)',
                  transition: 'all 0.3s ease'
                }}>
                  <span>{texts.ctaButton}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterFeaturesSSR;
