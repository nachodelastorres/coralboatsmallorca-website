'use client';

import { useTranslation } from 'react-i18next';

const CharterPricingTable = () => {
  const { t } = useTranslation('common');

  return (
    <section className="premium-tour-details" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('premium.charter_pricing.rates_label')}</span>
              <h2 className="premium-section-header__title">
                {t('premium.charter_pricing.rates_title')}
              </h2>
              <p className="premium-section-header__description">
                {t('premium.charter_pricing.rates_description')}
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '50px' }}>
          {/* High Season Pricing */}
          <div className="col-lg-6" style={{ marginBottom: '30px' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              height: '100%',
              border: '2px solid #0891b2'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '25px'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  color: '#0891b2',
                  background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fa-solid fa-sun"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#1e293b', marginBottom: '5px' }}>
                    {t('premium.charter_pricing.high_season')}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0, fontWeight: '400' }}>
                    {t('premium.charter_pricing.high_season_dates')}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1e293b' }}>{t('premium.charter_pricing.charter_3h')}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '400' }}>{t('premium.charter_pricing.charter_3h_desc')}</div>
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0891b2' }}>
                    €1,550
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1e293b' }}>{t('premium.charter_pricing.charter_4h')}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '400' }}>{t('premium.charter_pricing.charter_4h_desc')}</div>
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0891b2' }}>
                    €1,985
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                padding: '15px',
                background: '#f0f9ff',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fa-solid fa-info-circle" style={{ color: '#0891b2', fontSize: '1.2rem' }}></i>
                <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
                  {t('premium.charter_pricing.high_season_info')}
                </p>
              </div>
            </div>
          </div>

          {/* Low Season Pricing */}
          <div className="col-lg-6" style={{ marginBottom: '30px' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              height: '100%',
              border: '2px solid #10b981'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '25px'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  color: '#10b981',
                  background: 'linear-gradient(135deg, #d1fae5, #ecfdf5)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#1e293b', marginBottom: '5px' }}>
                    {t('premium.charter_pricing.low_season')}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0, fontWeight: '400' }}>
                    {t('premium.charter_pricing.low_season_dates')}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1e293b' }}>{t('premium.charter_pricing.charter_3h')}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '400' }}>{t('premium.charter_pricing.charter_3h_desc')}</div>
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#10b981' }}>
                    €1,250
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1e293b' }}>{t('premium.charter_pricing.charter_4h')}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '400' }}>{t('premium.charter_pricing.charter_4h_desc')}</div>
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#10b981' }}>
                    €1,685
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                padding: '15px',
                background: '#ecfdf5',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fa-solid fa-tag" style={{ color: '#10b981', fontSize: '1.2rem' }}></i>
                <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
                  {t('premium.charter_pricing.low_season_info')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-12">
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#1e293b', marginBottom: '30px', textAlign: 'center' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#10b981', marginRight: '10px' }}></i>
                {t('premium.charter_pricing.whats_included_title')}
              </h3>
              <div className="row">
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-users" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_capacity')}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-user-tie" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_crew')}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-gas-pump" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_fuel')}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-shield-alt" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_insurance')}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-water" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_activities')}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-music" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_sound')}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-route" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_route')}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-camera" style={{ fontSize: '2rem', color: '#0891b2', marginBottom: '10px' }}></i>
                    <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, fontWeight: '500' }}>
                      {t('premium.charter_pricing.included_photos')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharterPricingTable;
