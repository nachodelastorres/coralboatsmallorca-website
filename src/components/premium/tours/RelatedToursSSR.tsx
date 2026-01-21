/**
 * RelatedToursSSR - Server Component for SEO
 *
 * Renders related tours section with H2, H3 titles, descriptions server-side.
 * All text content is passed as props for proper i18n SSR.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface RelatedTour {
  id: string;
  name: string;
  description: string;
  time: string;
  duration: string;
  price: string;
  highlights: string;
  image: string;
  link: string;
}

export interface RelatedToursTexts {
  label: string;
  title: string;
  description: string;
  from: string;
  perPerson: string;
  viewDetails: string;
  tours: RelatedTour[];
}

interface RelatedToursSSRProps {
  texts: RelatedToursTexts;
}

const RelatedToursSSR = ({ texts }: RelatedToursSSRProps) => {
  const colClass = texts.tours.length === 3 ? 'col-lg-4 col-md-6' : 'col-lg-6 col-md-12';

  return (
    <section className="related-tours" style={{ padding: '80px 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="premium-section-header__label">{texts.label}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.title}
              </h2>
              <p className="premium-section-header__description">
                {texts.description}
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {texts.tours.map((tour) => (
            <div key={tour.id} className={colClass}>
              <Link href={tour.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div
                  className="related-tour-card"
                  style={{
                    cursor: 'pointer',
                    background: '#ffffff',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}
                >
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'rgba(8, 145, 178, 0.95)',
                        color: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {tour.highlights.split('•')[0].trim()}
                    </div>
                  </div>

                  <div style={{ padding: '30px' }}>
                    <div style={{ marginBottom: '15px' }}>
                      {/* H3 - Important for SEO - Server Rendered */}
                      <h3
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: '700',
                          color: '#1e293b',
                          marginBottom: '8px',
                          lineHeight: '1.3'
                        }}
                      >
                        {tour.name}
                      </h3>
                      <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                        <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <i className="fa-regular fa-clock" style={{ color: '#0891b2' }}></i>
                          {tour.time}
                        </span>
                        <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <i className="fa-regular fa-hourglass" style={{ color: '#0891b2' }}></i>
                          {tour.duration}
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#64748b',
                        lineHeight: '1.7',
                        marginBottom: '20px'
                      }}
                    >
                      {tour.description}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '20px',
                        borderTop: '1px solid #e2e8f0'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                          {texts.from}
                        </span>
                        <span style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0891b2' }}>
                          {tour.price}
                        </span>
                        <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '6px' }}>
                          {texts.perPerson}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#0891b2',
                          fontWeight: '600',
                          fontSize: '1rem'
                        }}
                      >
                        <span>{texts.viewDetails}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedToursSSR;
