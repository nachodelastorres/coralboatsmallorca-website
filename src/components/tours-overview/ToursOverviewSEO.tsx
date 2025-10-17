'use client';

import { useTranslation } from 'react-i18next';

const ToursOverviewSEO = () => {
  const { t } = useTranslation('common');

  return (
    <section style={{ background: '#ffffff', padding: '100px 0' }}>
      <div className="container">
        {/* Main SEO Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '25px', textAlign: 'center' }}>
                {t('toursPage.seo.mainTitle')}
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.intro1') }} />
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.intro2') }} />
            </div>

            {/* Why Choose Our Boat Tours */}
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '30px' }}>
                {t('toursPage.seo.whyBookTitle')}
              </h3>
              <div className="row">
                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-star" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {t('toursPage.seo.reason1Title')}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.reason1Text') }} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-users" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {t('toursPage.seo.reason2Title')}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.reason2Text') }} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-water" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {t('toursPage.seo.reason3Title')}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.reason3Text') }} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-shield-alt" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {t('toursPage.seo.reason4Title')}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.reason4Text') }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Tour Information */}
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '30px' }}>
                {t('toursPage.seo.toursTitle')}
              </h3>

              {/* Morning Tour SEO */}
              <div style={{ marginBottom: '40px', padding: '30px', background: '#f0f9ff', borderRadius: '15px', borderLeft: '5px solid #0891b2' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                  {t('toursPage.seo.morningTitle')}
                </h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.morningText1') }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.morningText2') }} />
              </div>

              {/* Sunset Tour SEO */}
              <div style={{ marginBottom: '40px', padding: '30px', background: '#fef3f2', borderRadius: '15px', borderLeft: '5px solid #ec4899' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ec4899', marginBottom: '15px' }}>
                  {t('toursPage.seo.sunsetTitle')}
                </h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.sunsetText1') }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.sunsetText2') }} />
              </div>

              {/* Private Charter SEO */}
              <div style={{ marginBottom: '40px', padding: '30px', background: '#faf5ff', borderRadius: '15px', borderLeft: '5px solid #8b5cf6' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#8b5cf6', marginBottom: '15px' }}>
                  {t('toursPage.seo.privateTitle')}
                </h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.privateText1') }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.privateText2') }} />
              </div>
            </div>

            {/* Location SEO */}
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '25px' }}>
                {t('toursPage.seo.locationTitle')}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.locationText1') }} />
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.locationText2') }} />
            </div>

            {/* Booking SEO */}
            <div style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                {t('toursPage.seo.bookingTitle')}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }} dangerouslySetInnerHTML={{ __html: t('toursPage.seo.bookingText') }} />
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#morning-tour" style={{
                  padding: '16px 35px',
                  background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <span>{t('toursPage.seo.ctaMorning')}</span>
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
                <a href="#sunset-tour" style={{
                  padding: '16px 35px',
                  background: 'linear-gradient(135deg, #ec4899, #db2777)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 20px rgba(236, 72, 153, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <span>{t('toursPage.seo.ctaSunset')}</span>
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
                <a href="#private-charter" style={{
                  padding: '16px 35px',
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <span>{t('toursPage.seo.ctaPrivate')}</span>
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursOverviewSEO;
