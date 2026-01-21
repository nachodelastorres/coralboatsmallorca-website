/**
 * AboutBoatHistorySSR - Server Component for SEO
 *
 * Renders boat history section with H2, H3s, paragraphs server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface AboutBoatHistoryTexts {
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  section1Title: string;
  section1Text: string;
  section2Title: string;
  section2Text: string;
  section3Title: string;
  section3Text: string;
  section4Title: string;
  section4Text: string;
  quote: string;
  seoTitle: string;
  seoText: string;
  ctaButton: string;
  toursPath: string;
}

interface AboutBoatHistorySSRProps {
  texts: AboutBoatHistoryTexts;
}

const AboutBoatHistorySSR = ({ texts }: AboutBoatHistorySSRProps) => {
  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
      {/* Introduction Section */}
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 80px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #0891b2, #0e7490)',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <i className="fa-solid fa-anchor" style={{ fontSize: '1.1rem' }}></i>
            <span>{texts.badge}</span>
          </div>
          {/* H2 - Important for SEO - Server Rendered */}
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: '#0a1929',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            {texts.title}
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#475569',
            marginBottom: '30px',
            fontWeight: 500
          }}>
            {texts.subtitle}
          </p>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: '#64748b'
          }}>
            {texts.intro}
          </p>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {/* Section 1 - Crafted with Tradition */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: 'rgba(8, 145, 178, 0.1)',
                  lineHeight: 1,
                  marginBottom: '20px'
                }}>01</div>
                {/* H3 - Important for SEO - Server Rendered */}
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#0a1929',
                  marginBottom: '20px',
                  position: 'relative',
                  paddingBottom: '15px'
                }}>
                  {texts.section1Title}
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #0891b2, #0e7490)',
                    borderRadius: '2px'
                  }}></span>
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  marginTop: '30px'
                }}>
                  {texts.section1Text}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
              }}>
                <Image
                  src="/assets/img/premium/about/construccion_barco_madera.webp"
                  alt="Traditional wooden boat construction at Astilleros Cabanellas"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', borderRadius: '15px', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Section 2 - A Life on the Water (Reverse layout) */}
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: 'rgba(8, 145, 178, 0.1)',
                  lineHeight: 1,
                  marginBottom: '20px'
                }}>02</div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#0a1929',
                  marginBottom: '20px',
                  position: 'relative',
                  paddingBottom: '15px'
                }}>
                  {texts.section2Title}
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #0891b2, #0e7490)',
                    borderRadius: '2px'
                  }}></span>
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  marginTop: '30px'
                }}>
                  {texts.section2Text}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
              }}>
                <Image
                  src="/assets/img/premium/about/astilleros_cabanellas.webp"
                  alt="Historic Astilleros Cabanellas shipyard in Port de Pollença"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', borderRadius: '15px', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Section 3 - Restored & Renewed */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: 'rgba(8, 145, 178, 0.1)',
                  lineHeight: 1,
                  marginBottom: '20px'
                }}>03</div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#0a1929',
                  marginBottom: '20px',
                  position: 'relative',
                  paddingBottom: '15px'
                }}>
                  {texts.section3Title}
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #0891b2, #0e7490)',
                    borderRadius: '2px'
                  }}></span>
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  marginTop: '30px'
                }}>
                  {texts.section3Text}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
              }}>
                <Image
                  src="/assets/img/premium/about/astilleros_cabanellas_actualidad.webp"
                  alt="Modern Astilleros Cabanellas shipyard today"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', borderRadius: '15px', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Section 4 - The Mediterranean Way (Reverse layout) */}
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: 'rgba(8, 145, 178, 0.1)',
                  lineHeight: 1,
                  marginBottom: '20px'
                }}>04</div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#0a1929',
                  marginBottom: '20px',
                  position: 'relative',
                  paddingBottom: '15px'
                }}>
                  {texts.section4Title}
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #0891b2, #0e7490)',
                    borderRadius: '2px'
                  }}></span>
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  marginTop: '30px'
                }}>
                  {texts.section4Text}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
              }}>
                <Image
                  src="/assets/img/premium/about/partners.webp"
                  alt="Local crew maintaining Mediterranean hospitality traditions"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', borderRadius: '15px', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '100px auto',
          textAlign: 'center',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #0a1929, #1e293b)',
          borderRadius: '20px',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
        }}>
          <i className="fa-solid fa-quote-left" style={{
            fontSize: '3rem',
            color: '#0891b2',
            marginBottom: '30px',
            opacity: 0.8,
            display: 'block'
          }}></i>
          <p style={{
            fontSize: '1.4rem',
            lineHeight: 1.8,
            color: 'white',
            fontStyle: 'italic',
            margin: 0
          }}>
            {texts.quote}
          </p>
        </div>
      </div>

      {/* SEO & CTA Section */}
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '80px auto 0',
          padding: '50px',
          background: 'white',
          borderRadius: '15px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          {/* H3 - Important for SEO - Server Rendered */}
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#0a1929',
            marginBottom: '20px',
            lineHeight: 1.3
          }}>
            {texts.seoTitle}
          </h3>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#475569',
            marginBottom: '30px'
          }}>
            {texts.seoText}
          </p>
          <Link href={texts.toursPath} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #0891b2, #0e7490)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(8, 145, 178, 0.25)'
          }}>
            {texts.ctaButton}
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutBoatHistorySSR;
