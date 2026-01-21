/**
 * AboutHeroSSR - Server Component for SEO
 *
 * Renders hero section with H1, badge, subtitle, stats server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';

export interface AboutHeroTexts {
  badge: string;
  title: string;
  subtitle: string;
  stat1: string;
  stat2: string;
  stat3: string;
}

interface AboutHeroSSRProps {
  texts: AboutHeroTexts;
}

const AboutHeroSSR = ({ texts }: AboutHeroSSRProps) => {
  return (
    <section className="premium-tour-hero" style={{ minHeight: '85vh' }}>
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
                <span>{texts.badge}</span>
              </div>

              {/* H1 - Critical for SEO - Server Rendered */}
              <h1 className="hero-title">
                {texts.title}
              </h1>

              <p className="hero-subtitle">
                {texts.subtitle}
              </p>

              <div style={{
                display: 'flex',
                gap: '30px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '25px 35px',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #fff, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>1968</div>
                  <div style={{ fontSize: '0.95rem', opacity: 0.9, fontWeight: 600, color: '#fff' }}>{texts.stat1}</div>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '25px 35px',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #fff, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>100%</div>
                  <div style={{ fontSize: '0.95rem', opacity: 0.9, fontWeight: 600, color: '#fff' }}>{texts.stat2}</div>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '25px 35px',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #fff, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>5★</div>
                  <div style={{ fontSize: '0.95rem', opacity: 0.9, fontWeight: 600, color: '#fff' }}>{texts.stat3}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSSR;
