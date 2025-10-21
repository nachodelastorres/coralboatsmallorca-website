'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const AboutBoatHistory = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <section className="boat-history">
      {/* Introduction Section */}
      <div className="container">
        <div className="history-intro">
          <div className="section-badge">
            <i className="fa-solid fa-anchor"></i>
            <span>{t('about_page.history.badge')}</span>
          </div>
          <h2 className="history-title">{t('about_page.history.title')}</h2>
          <p className="history-subtitle">{t('about_page.history.subtitle')}</p>
          <p className="history-intro-text">{t('about_page.history.intro')}</p>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="container">
        <div className="timeline-grid">
          {/* Section 1 - Crafted with Tradition */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">01</div>
              <h3 className="timeline-title">{t('about_page.history.section1_title')}</h3>
              <p className="timeline-text">{t('about_page.history.section1_text')}</p>
            </div>
            <div className="timeline-image">
              <Image
                src="/assets/img/premium/about/construccion_barco_madera.webp"
                alt="Traditional wooden boat construction at Astilleros Cabanellas"
                width={600}
                height={400}
                style={{ objectFit: 'cover', borderRadius: '15px' }}
              />
            </div>
          </div>

          {/* Section 2 - A Life on the Water (Reverse layout) */}
          <div className="timeline-item timeline-item--reverse">
            <div className="timeline-image">
              <Image
                src="/assets/img/premium/about/astilleros_cabanellas.webp"
                alt="Historic Astilleros Cabanellas shipyard in Port de Pollença"
                width={600}
                height={400}
                style={{ objectFit: 'cover', borderRadius: '15px' }}
              />
            </div>
            <div className="timeline-content">
              <div className="timeline-number">02</div>
              <h3 className="timeline-title">{t('about_page.history.section2_title')}</h3>
              <p className="timeline-text">{t('about_page.history.section2_text')}</p>
            </div>
          </div>

          {/* Section 3 - Restored & Renewed */}
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-number">03</div>
              <h3 className="timeline-title">{t('about_page.history.section3_title')}</h3>
              <p className="timeline-text">{t('about_page.history.section3_text')}</p>
            </div>
            <div className="timeline-image">
              <Image
                src="/assets/img/premium/about/astilleros_cabanellas_actualidad.webp"
                alt="Modern Astilleros Cabanellas shipyard today"
                width={600}
                height={400}
                style={{ objectFit: 'cover', borderRadius: '15px' }}
              />
            </div>
          </div>

          {/* Section 4 - The Mediterranean Way (Reverse layout) */}
          <div className="timeline-item timeline-item--reverse">
            <div className="timeline-image">
              <Image
                src="/assets/img/premium/about/partners.webp"
                alt="Local crew maintaining Mediterranean hospitality traditions"
                width={600}
                height={400}
                style={{ objectFit: 'cover', borderRadius: '15px' }}
              />
            </div>
            <div className="timeline-content">
              <div className="timeline-number">04</div>
              <h3 className="timeline-title">{t('about_page.history.section4_title')}</h3>
              <p className="timeline-text">{t('about_page.history.section4_text')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container">
        <div className="history-quote">
          <i className="fa-solid fa-quote-left quote-icon"></i>
          <p className="quote-text">{t('about_page.history.quote')}</p>
        </div>
      </div>

      {/* SEO & CTA Section */}
      <div className="container">
        <div className="history-seo">
          <h3 className="seo-title">{t('about_page.history.seo_title')}</h3>
          <p className="seo-text">{t('about_page.history.seo_text')}</p>
          <Link href={getPath('/boat-tours-alcudia')} className="cta-button">
            {t('about_page.history.cta_button')}
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .boat-history {
          padding: 100px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .history-intro {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          color: white;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-badge i {
          font-size: 1.1rem;
        }

        .history-title {
          font-size: 3rem;
          font-weight: 800;
          color: #0a1929;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .history-subtitle {
          font-size: 1.3rem;
          color: #475569;
          margin-bottom: 30px;
          font-weight: 500;
        }

        .history-intro-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #64748b;
        }

        .timeline-grid {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .timeline-item--reverse {
          direction: rtl;
        }

        .timeline-item--reverse > * {
          direction: ltr;
        }

        .timeline-content {
          position: relative;
        }

        .timeline-number {
          font-size: 5rem;
          font-weight: 900;
          color: rgba(8, 145, 178, 0.1);
          line-height: 1;
          margin-bottom: 20px;
        }

        .timeline-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0a1929;
          margin-bottom: 20px;
          position: relative;
        }

        .timeline-title::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #0891b2, #0e7490);
          border-radius: 2px;
        }

        .timeline-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #475569;
          margin-top: 30px;
        }

        .timeline-image {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-image:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(8, 145, 178, 0.3);
        }

        .history-quote {
          max-width: 800px;
          margin: 100px auto;
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #0a1929, #1e293b);
          border-radius: 20px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .quote-icon {
          font-size: 3rem;
          color: #0891b2;
          margin-bottom: 30px;
          opacity: 0.8;
        }

        .quote-text {
          font-size: 1.4rem;
          line-height: 1.8;
          color: white;
          font-style: italic;
          margin: 0;
        }

        .history-seo {
          max-width: 800px;
          margin: 80px auto 0;
          padding: 50px;
          background: white;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .seo-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0a1929;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .seo-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(8, 145, 178, 0.25);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(8, 145, 178, 0.35);
          background: linear-gradient(135deg, #06b6d4, #0891b2);
        }

        .cta-button i {
          transition: transform 0.3s ease;
          font-size: 0.9rem;
        }

        .cta-button:hover i {
          transform: translateX(4px);
        }

        @media (max-width: 992px) {
          .boat-history {
            padding: 60px 0;
          }

          .history-intro {
            margin-bottom: 60px;
          }

          .history-title {
            font-size: 2.2rem;
          }

          .history-subtitle {
            font-size: 1.1rem;
          }

          .timeline-grid {
            gap: 60px;
          }

          .timeline-item {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .timeline-item--reverse {
            direction: ltr;
          }

          .timeline-number {
            font-size: 4rem;
          }

          .timeline-title {
            font-size: 1.6rem;
          }

          .history-quote {
            margin: 60px auto;
            padding: 40px 30px;
          }

          .quote-text {
            font-size: 1.2rem;
          }

          .history-seo {
            padding: 35px 25px;
          }

          .seo-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .history-title {
            font-size: 1.8rem;
          }

          .timeline-number {
            font-size: 3rem;
          }

          .timeline-title {
            font-size: 1.4rem;
          }

          .timeline-text {
            font-size: 1rem;
          }

          .quote-text {
            font-size: 1.1rem;
          }

          .history-seo {
            padding: 30px 20px;
            margin: 60px auto 0;
          }

          .seo-title {
            font-size: 1.3rem;
          }

          .seo-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutBoatHistory;
