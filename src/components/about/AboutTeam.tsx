'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutTeam = () => {
  const { t } = useTranslation('common');

  return (
    <section className="about-team">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('about.team.title')}</h2>
            <p className="section-subtitle">{t('about.team.subtitle')}</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="team-card" data-aos="fade-up">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="team-image">
                    <Image
                      src="/assets/img/premium/crew.jpg"
                      alt="Professional and friendly crew of Coral Boats Mallorca in Alcudia"
                      width={400}
                      height={500}
                      style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="team-content">
                    <h3 className="team-headline">{t('about.team.headline')}</h3>
                    <p className="team-description">{t('about.team.description')}</p>

                    <div className="team-qualities">
                      <div className="quality-item">
                        <i className="fa-solid fa-user-tie"></i>
                        <div>
                          <h4>{t('about.team.quality1_title')}</h4>
                          <p>{t('about.team.quality1_desc')}</p>
                        </div>
                      </div>
                      <div className="quality-item">
                        <i className="fa-solid fa-language"></i>
                        <div>
                          <h4>{t('about.team.quality2_title')}</h4>
                          <p>{t('about.team.quality2_desc')}</p>
                        </div>
                      </div>
                      <div className="quality-item">
                        <i className="fa-solid fa-heart-pulse"></i>
                        <div>
                          <h4>{t('about.team.quality3_title')}</h4>
                          <p>{t('about.team.quality3_desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-team {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0a1929;
          margin-bottom: 15px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .team-card {
          background: white;
          padding: 50px;
          border-radius: 25px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }

        .team-headline {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0a1929;
          margin-bottom: 20px;
        }

        .team-description {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .team-qualities {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .quality-item {
          display: flex;
          gap: 20px;
          padding: 20px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .quality-item:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(8, 145, 178, 0.15);
        }

        .quality-item > i {
          font-size: 2rem;
          color: #0891b2;
          flex-shrink: 0;
          margin-top: 5px;
        }

        .quality-item h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0a1929;
          margin-bottom: 8px;
        }

        .quality-item p {
          font-size: 1rem;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-team {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .team-card {
            padding: 30px 20px;
          }

          .team-headline {
            font-size: 1.5rem;
          }

          .quality-item {
            flex-direction: column;
            text-align: center;
          }

          .quality-item > i {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutTeam;
