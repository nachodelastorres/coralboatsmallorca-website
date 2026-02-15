/**
 * ToursCtaBannerSSR - Compact CTA Banner for Blog Category Pages
 *
 * A subtle, compact banner with contextual headline + 3 micro-cards
 * linking to the main tours. Placed before the blog posts grid.
 *
 * Server Component for SEO - NO 'use client' directive
 */

import Image from 'next/image';
import Link from 'next/link';

export interface TourMicroCard {
  id: string;
  name: string;
  tagline: string;
  image: string;
  link: string;
}

export interface ToursCtaBannerTexts {
  headline: string;
  subheadline: string;
  cta: string;
  bookCta: string;
  tours: TourMicroCard[];
}

interface ToursCtaBannerSSRProps {
  texts: ToursCtaBannerTexts;
}

const ToursCtaBannerSSR = ({ texts }: ToursCtaBannerSSRProps) => {
  return (
    <section
      className="tours-cta-banner"
      style={{
        padding: '40px 0',
        background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.03) 0%, rgba(6, 182, 212, 0.06) 100%)',
        borderTop: '1px solid rgba(8, 145, 178, 0.08)',
        borderBottom: '1px solid rgba(8, 145, 178, 0.08)',
      }}
    >
      <div className="container">
        {/* Header - Compact */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <p
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#0891b2',
                marginBottom: '6px',
                letterSpacing: '0.02em',
              }}
            >
              {texts.headline}
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#64748b',
                marginBottom: '0',
              }}
            >
              {texts.subheadline}
            </p>
          </div>
        </div>

        {/* Micro Cards Row */}
        <div className="row g-3 justify-content-center">
          {texts.tours.map((tour) => (
            <div key={tour.id} className="col-lg-4 col-md-4 col-sm-12">
              <Link
                href={tour.link}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div
                  className="tour-micro-card"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    height: '180px',
                  }}
                >
                  {/* Background Image */}
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
                      transition: 'all 0.3s ease',
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '4px',
                        lineHeight: '1.3',
                        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                      }}
                    >
                      {tour.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '12px',
                        lineHeight: '1.4',
                      }}
                    >
                      {tour.tagline}
                    </p>

                    {/* CTA Button */}
                    <div
                      className="tour-micro-card__cta"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.95)',
                        color: '#0891b2',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                      }}
                    >
                      <span>{texts.bookCta}</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Optional: View All CTA */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <span
              style={{
                fontSize: '0.85rem',
                color: '#94a3b8',
              }}
            >
              {texts.cta}
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ToursCtaBannerSSR;
