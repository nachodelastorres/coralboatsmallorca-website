'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutStory = () => {
  const { t } = useTranslation('common');

  return (
    <section className="about-story">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2" data-aos="fade-left">
            <div className="about-story__content">
              <h2 className="section-title">{t('about.story.title')}</h2>
              <p className="section-subtitle">{t('about.story.subtitle')}</p>

              <div className="story-text">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>

              <div className="story-highlight">
                <i className="fa-solid fa-quote-left"></i>
                <p>{t('about.story.quote')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right">
            <div className="about-story__images">
              <div className="image-grid">
                <div className="image-item image-large">
                  <Image
                    src="/assets/img/galeria_tour/web/marcha.webp"
                    alt="Coral Boats boat sailing in Alcudia Bay Mallorca"
                    width={400}
                    height={500}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
                <div className="image-item image-small-top">
                  <Image
                    src="/assets/img/galeria_tour/web/proa.webp"
                    alt="Front view of Coral Boats in crystal-clear Mediterranean waters"
                    width={250}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
                <div className="image-item image-small-bottom">
                  <Image
                    src="/assets/img/galeria_tour/web/sunset2.webp"
                    alt="Beautiful sunset view from Coral Boats tour in Alcudia"
                    width={250}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-story {
          padding: 100px 0;
          background: white;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0a1929;
          margin-bottom: 15px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #0891b2;
          font-weight: 600;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .story-text p {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.9;
          margin-bottom: 20px;
        }

        .story-highlight {
          margin-top: 40px;
          padding: 30px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-left: 4px solid #0891b2;
          border-radius: 10px;
          position: relative;
        }

        .story-highlight i {
          font-size: 2rem;
          color: #0891b2;
          opacity: 0.3;
          margin-bottom: 10px;
        }

        .story-highlight p {
          font-size: 1.2rem;
          color: #1e293b;
          font-style: italic;
          font-weight: 500;
          margin: 0;
        }

        .about-story__images {
          position: relative;
        }

        .image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 20px;
          height: 600px;
        }

        .image-item {
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .image-item:hover {
          transform: translateY(-5px);
        }

        .image-large {
          grid-row: 1 / 3;
        }

        .image-small-top {
          grid-row: 1;
        }

        .image-small-bottom {
          grid-row: 2;
        }

        @media (max-width: 768px) {
          .about-story {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .image-grid {
            height: auto;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
          }

          .image-large,
          .image-small-top,
          .image-small-bottom {
            grid-row: auto;
          }

          .image-large {
            height: 300px;
          }

          .image-small-top,
          .image-small-bottom {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutStory;
