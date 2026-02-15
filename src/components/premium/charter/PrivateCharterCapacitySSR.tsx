/**
 * PrivateCharterCapacitySSR - Server Component for SEO
 *
 * Renders H2, paragraphs, advantages list server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface PrivateCharterCapacityTexts {
  sectionLabel: string;
  sectionTitle: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  galleryLink: string;
  advantagesTitle: string;
  advantage1: string;
  advantage2: string;
  advantage3: string;
  advantage4: string;
  advantage5: string;
  advantage6: string;
  capacityHighlightsTitle: string;
  capacity1Value: string;
  capacity1Label: string;
  capacity2Value: string;
  capacity2Label: string;
  capacity3Value: string;
  capacity3Label: string;
  infoBoxTitle: string;
  infoBoxText: string;
  ctaButton: string;
  pricingPath: string;
}

interface PrivateCharterCapacitySSRProps {
  texts: PrivateCharterCapacityTexts;
}

const PrivateCharterCapacitySSR = ({ texts }: PrivateCharterCapacitySSRProps) => {
  return (
    <section className="premium-tour-details">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="premium-section-header">
              <span className="premium-section-header__label">{texts.sectionLabel}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.sectionTitle}
              </h2>
            </div>

            <div className="tour-description">
              <p dangerouslySetInnerHTML={{ __html: texts.paragraph1 }} />
              <p dangerouslySetInnerHTML={{ __html: texts.paragraph2 }} />
              <p dangerouslySetInnerHTML={{ __html: texts.paragraph3 }} />
            </div>

            <div className="tour-gallery-jump">
              <a href="#gallery" className="gallery-jump-btn">
                <i className="fa-solid fa-images"></i>
                <span>{texts.galleryLink}</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>

            <div className="tour-highlights">
              {/* H3 - Server Rendered */}
              <h3 className="highlights-title">{texts.advantagesTitle}</h3>
              <ul className="highlights-list">
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{texts.advantage1}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{texts.advantage2}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{texts.advantage3}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{texts.advantage4}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{texts.advantage5}</span>
                </li>
                <li className="highlight-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{texts.advantage6}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tour-info-card">
              <div className="card-image">
                <Image
                  src="/assets/img/premium/home_new/large-group-private-charter-alcudia-bay.webp"
                  alt="Private charter boat for groups up to 40 people in Alcudia Mallorca"
                  width={600}
                  height={400}
                  className="info-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="card-content">
                {/* H3 - Server Rendered */}
                <h3 className="card-title">{texts.capacityHighlightsTitle}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.75rem', color: '#0891b2', minWidth: '50px', textAlign: 'center' }}>
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '3px' }}>
                        {texts.capacity1Value}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        {texts.capacity1Label}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.75rem', color: '#0891b2', minWidth: '50px', textAlign: 'center' }}>
                      <i className="fa-solid fa-certificate"></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '3px' }}>
                        {texts.capacity2Value}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        {texts.capacity2Label}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.75rem', color: '#0891b2', minWidth: '50px', textAlign: 'center' }}>
                      <i className="fa-solid fa-ship"></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '3px' }}>
                        {texts.capacity3Value}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        {texts.capacity3Label}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-info-box">
                  <div className="info-box-icon">
                    <i className="fa-solid fa-circle-info"></i>
                  </div>
                  <div className="info-box-content">
                    {/* H4 - Server Rendered */}
                    <h4>{texts.infoBoxTitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: texts.infoBoxText }} />
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
                href={texts.pricingPath}
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
              >
                <i className="fa-solid fa-tags"></i>
                <span>{texts.ctaButton}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterCapacitySSR;
