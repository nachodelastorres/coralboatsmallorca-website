/**
 * ToursOverviewFAQSSR - Server Component for SEO
 *
 * Renders FAQs with H2, H3, questions/answers server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToursOverviewFAQTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  faqs: FAQItem[];
  finalCtaTitle: string;
  finalCtaText: string;
  finalCtaButton: string;
}

interface ToursOverviewFAQSSRProps {
  texts: ToursOverviewFAQTexts;
}

const ToursOverviewFAQSSR = ({ texts }: ToursOverviewFAQSSRProps) => {
  return (
    <section style={{ background: '#f8fafc', padding: '100px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="premium-section-header__label">{texts.sectionLabel}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.sectionTitle}
              </h2>
              <p className="premium-section-header__description">
                {texts.sectionDescription}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {texts.faqs.map((faq, index) => (
                <div key={index} style={{
                  background: '#ffffff',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e2e8f0'
                }}>
                  {/* H3 - Important for SEO - Server Rendered */}
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
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#ffffff' }}>
                {texts.finalCtaTitle}
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', lineHeight: '1.7', color: '#e0f2fe' }}>
                {texts.finalCtaText}
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
                <span>{texts.finalCtaButton}</span>
                <i className="fa-solid fa-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursOverviewFAQSSR;
