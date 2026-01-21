/**
 * PrivateCharterBookingSSR - Server Component for SEO
 *
 * Renders booking info, FAQs server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Link from 'next/link';

export interface PrivateCharterBookingTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  howItWorksTitle: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  ctaCardTitle: string;
  ctaCardDescription: string;
  ctaButton: string;
  trustBadge1: string;
  trustBadge2: string;
  trustBadge3: string;
  faqTitle: string;
  faq1Question: string;
  faq1Answer: string;
  faq2Question: string;
  faq2Answer: string;
  faq3Question: string;
  faq3Answer: string;
  faq4Question: string;
  faq4Answer: string;
  pricingPath: string;
}

interface PrivateCharterBookingSSRProps {
  texts: PrivateCharterBookingTexts;
}

const PrivateCharterBookingSSR = ({ texts }: PrivateCharterBookingSSRProps) => {
  return (
    <section className="premium-tour-booking" id="booking">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{texts.sectionLabel}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.sectionTitle}
              </h2>
              <p className="premium-section-header__description">
                {texts.sectionDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="booking-features-card">
              {/* H4 - Server Rendered */}
              <h4>{texts.howItWorksTitle}</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: texts.step1 }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: texts.step2 }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: texts.step3 }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: texts.step4 }} />
                </li>
                <li>
                  <i className="fa-solid fa-check-circle"></i>
                  <span dangerouslySetInnerHTML={{ __html: texts.step5 }} />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="booking-cta-card">
              <div className="cta-icon-large">
                <i className="fa-solid fa-envelope"></i>
              </div>
              {/* H3 - Server Rendered */}
              <h3>{texts.ctaCardTitle}</h3>
              <p>{texts.ctaCardDescription}</p>

              <Link href={texts.pricingPath} className="premium-tour-card__cta" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>
                <span>{texts.ctaButton}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <div className="trust-badges-inline" style={{ marginTop: '30px' }}>
                <div className="trust-badge">
                  <i className="fa-solid fa-shield-alt"></i>
                  <span>{texts.trustBadge1}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-certificate"></i>
                  <span>{texts.trustBadge2}</span>
                </div>
                <div className="trust-badge">
                  <i className="fa-solid fa-star"></i>
                  <span>{texts.trustBadge3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="booking-faq">
              {/* H3 - Server Rendered */}
              <h3>{texts.faqTitle}</h3>
              <div className="faq-grid">
                <div className="faq-item">
                  {/* H4 - Server Rendered */}
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {texts.faq1Question}
                  </h4>
                  <p>
                    {texts.faq1Answer}
                  </p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {texts.faq2Question}
                  </h4>
                  <p>
                    {texts.faq2Answer}
                  </p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {texts.faq3Question}
                  </h4>
                  <p>
                    {texts.faq3Answer}
                  </p>
                </div>

                <div className="faq-item">
                  <h4>
                    <i className="fa-solid fa-question-circle"></i>
                    {texts.faq4Question}
                  </h4>
                  <p>
                    {texts.faq4Answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterBookingSSR;
