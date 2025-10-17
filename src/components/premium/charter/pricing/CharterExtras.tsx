'use client';

import { useTranslation } from 'react-i18next';

const CharterExtras = () => {
  const { t } = useTranslation('common');

  const extras = [
    {
      icon: 'fa-cookie-bite',
      titleKey: 'premium.charter_pricing.extra_snack_title',
      descriptionKey: 'premium.charter_pricing.extra_snack_desc',
      price: '€4',
      unitKey: 'premium.charter_pricing.per_person'
    },
    {
      icon: 'fa-utensils',
      titleKey: 'premium.charter_pricing.extra_tapas_title',
      descriptionKey: 'premium.charter_pricing.extra_tapas_desc',
      price: '€10',
      unitKey: 'premium.charter_pricing.per_person',
      popular: true
    },
    {
      icon: 'fa-champagne-glasses',
      titleKey: 'premium.charter_pricing.extra_bar_title',
      descriptionKey: 'premium.charter_pricing.extra_bar_desc',
      price: '€12',
      unitKey: 'premium.charter_pricing.per_person',
      popular: true
    }
  ];

  return (
    <section className="premium-tour-details" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{t('premium.charter_pricing.extras_label')}</span>
              <h2 className="premium-section-header__title">
                {t('premium.charter_pricing.extras_title')}
              </h2>
              <p className="premium-section-header__description">
                {t('premium.charter_pricing.extras_description')}
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '50px' }}>
          {extras.map((extra, index) => (
            <div key={index} className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{
                background: extra.popular ? 'linear-gradient(135deg, #f0f9ff, #ffffff)' : '#f8fafc',
                borderRadius: '20px',
                padding: '35px',
                height: '100%',
                border: extra.popular ? '3px solid #0891b2' : '2px solid #e2e8f0',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: extra.popular ? '0 8px 30px rgba(8, 145, 178, 0.15)' : '0 4px 15px rgba(0, 0, 0, 0.05)'
              }}>
                {extra.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                    color: '#ffffff',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 10px rgba(8, 145, 178, 0.3)'
                  }}>
                    {t('premium.charter_pricing.extra_popular')}
                  </div>
                )}

                <div style={{
                  fontSize: '3rem',
                  color: '#0891b2',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  <i className={`fa-solid ${extra.icon}`}></i>
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  {t(extra.titleKey)}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: '1.7',
                  marginBottom: '25px',
                  textAlign: 'center',
                  minHeight: '60px'
                }}>
                  {t(extra.descriptionKey)}
                </p>

                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  background: '#ffffff',
                  borderRadius: '15px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    fontSize: '2.2rem',
                    fontWeight: '700',
                    color: '#0891b2',
                    lineHeight: '1'
                  }}>
                    {extra.price}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#64748b',
                    marginTop: '5px',
                    fontWeight: '400'
                  }}>
                    {t(extra.unitKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col-12">
            <div style={{
              background: 'linear-gradient(135deg, #fef3c7, #fef9e7)',
              borderRadius: '15px',
              padding: '25px 30px',
              border: '2px solid #fbbf24',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              <i className="fa-solid fa-lightbulb" style={{
                fontSize: '2rem',
                color: '#f59e0b',
                minWidth: '40px'
              }}></i>
              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#78350f',
                  marginBottom: '10px'
                }}>
                  {t('premium.charter_pricing.byo_title')}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#92400e',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  {t('premium.charter_pricing.byo_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharterExtras;
