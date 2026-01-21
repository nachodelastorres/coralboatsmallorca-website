/**
 * OurExperiencesTimelineSSR - Server Component for SEO
 *
 * Renders experiences timeline with H2, H3s, descriptions server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  time: string;
  image: string;
  link: string;
  number: string;
}

export interface OurExperiencesTimelineTexts {
  label: string;
  title: string;
  description: string;
  ctaInline: string;
  experiences: ExperienceItem[];
}

interface OurExperiencesTimelineSSRProps {
  texts: OurExperiencesTimelineTexts;
}

const OurExperiencesTimelineSSR = ({ texts }: OurExperiencesTimelineSSRProps) => {
  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="container">
        {/* Section Header */}
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
            <i className="fa-solid fa-ship" style={{ fontSize: '1.1rem' }}></i>
            <span>{texts.label}</span>
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
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            {texts.description}
          </p>
        </div>

        {/* Experiences Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginTop: '80px' }}>
          {texts.experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`row align-items-center ${index === 1 ? 'flex-lg-row-reverse' : ''}`}
            >
              <div className="col-lg-6" style={{ marginBottom: '30px' }}>
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '15px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                }}>
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '15px', width: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ position: 'relative' }}>
                  <div style={{
                    fontSize: '5rem',
                    fontWeight: 900,
                    color: 'rgba(8, 145, 178, 0.1)',
                    lineHeight: 1,
                    marginBottom: '20px'
                  }}>{exp.number}</div>
                  {/* H3 - Important for SEO - Server Rendered */}
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#0a1929',
                    marginBottom: '20px',
                    position: 'relative',
                    paddingBottom: '15px'
                  }}>
                    {exp.title}
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
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#64748b',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    marginBottom: '25px',
                    padding: '8px 16px',
                    background: 'rgba(8, 145, 178, 0.08)',
                    borderRadius: '20px'
                  }}>
                    <i className="fa-regular fa-clock" style={{ color: '#0891b2', fontSize: '0.9rem' }}></i>
                    <span>{exp.time}</span>
                  </div>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    color: '#475569',
                    marginTop: '30px'
                  }}>
                    {exp.description}{' '}
                    <Link href={exp.link} style={{
                      color: '#0891b2',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      {texts.ctaInline}
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExperiencesTimelineSSR;
