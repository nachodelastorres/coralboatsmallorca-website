'use client';

import { useTranslation } from 'react-i18next';

const ToursOverviewFAQ = () => {
  const { t } = useTranslation('common');

  const faqs = [
    { question: t('toursPage.faq.q1'), answer: t('toursPage.faq.a1') },
    { question: t('toursPage.faq.q2'), answer: t('toursPage.faq.a2') },
    { question: t('toursPage.faq.q3'), answer: t('toursPage.faq.a3') },
    { question: t('toursPage.faq.q4'), answer: t('toursPage.faq.a4') },
    { question: t('toursPage.faq.q5'), answer: t('toursPage.faq.a5') },
    { question: t('toursPage.faq.q6'), answer: t('toursPage.faq.a6') },
    { question: t('toursPage.faq.q7'), answer: t('toursPage.faq.a7') },
    { question: t('toursPage.faq.q8'), answer: t('toursPage.faq.a8') },
    { question: t('toursPage.faq.q9'), answer: t('toursPage.faq.a9') },
    { question: t('toursPage.faq.q10'), answer: t('toursPage.faq.a10') },
  ];

  return (
    <section style={{ background: '#f8fafc', padding: '100px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="premium-section-header__label">{t('toursPage.faq.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('toursPage.faq.sectionTitle')}
              </h2>
              <p className="premium-section-header__description">
                {t('toursPage.faq.sectionDescription')}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  background: '#ffffff',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#0891b2',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <i className="fa-solid fa-circle-question" style={{ fontSize: '1.3rem', marginTop: '2px', minWidth: '24px' }}></i>
                    <span>{faq.question}</span>
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#475569',
                    lineHeight: '1.8',
                    margin: 0,
                    paddingLeft: '36px'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div style={{
              marginTop: '60px',
              textAlign: 'center',
              padding: '50px',
              background: 'linear-gradient(135deg, #0891b2, #0e7490)',
              borderRadius: '20px',
              color: '#ffffff'
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#ffffff' }}>
                {t('toursPage.faq.finalCtaTitle')}
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', lineHeight: '1.7', color: '#e0f2fe' }}>
                {t('toursPage.faq.finalCtaText')}
              </p>
              <a href="#morning-tour" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 40px',
                background: '#ffffff',
                color: '#0891b2',
                borderRadius: '50px',
                fontSize: '1.15rem',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <i className="fa-solid fa-ship"></i>
                <span>{t('toursPage.faq.finalCtaButton')}</span>
                <i className="fa-solid fa-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursOverviewFAQ;
