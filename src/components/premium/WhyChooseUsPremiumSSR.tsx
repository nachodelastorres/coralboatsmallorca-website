/**
 * WhyChooseUsPremiumSSR - Server Component for SEO
 *
 * Renders the why choose us section with H2, H3 cards, CTA server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';

export interface ReasonItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface WhyChooseUsPremiumTexts {
  label: string;
  title: string;
  description: string;
  ctaTitle: string;
  ctaDescription: string;
  instantConfirmation: string;
  freeCancellation: string;
  bestPrice: string;
  ctaButton: string;
  rating: string;
  seoSubtitle1: string;
  seoText1: string;
  seoSubtitle2: string;
  seoText2: string;
  toursPath: string;
  reasons: ReasonItem[];
}

interface WhyChooseUsPremiumSSRProps {
  texts: WhyChooseUsPremiumTexts;
}

const WhyChooseUsPremiumSSR = ({ texts }: WhyChooseUsPremiumSSRProps) => {
  return (
    <section className="premium-why-choose">
      <div className="premium-why-choose__background">
        <div className="background-overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label premium-section-header__label--light">
                {texts.label}
              </span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title premium-section-header__title--light">
                {texts.title}
              </h2>
              <p className="premium-section-header__description premium-section-header__description--light">
                {texts.description}
              </p>
            </div>
          </div>
        </div>

        <div className="premium-why-choose__grid">
          {texts.reasons.map((reason, index) => (
            <div
              key={index}
              className="premium-why-choose__card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-image-wrapper">
                <Image
                  src={reason.image}
                  alt={`${reason.title} - Coral Boats Mallorca boat tours in Bay of Alcudia`}
                  width={400}
                  height={300}
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                />
                <div className="card-icon-overlay">
                  <i className={`fa-solid ${reason.icon}`}></i>
                </div>
              </div>
              <div className="card-content">
                {/* H3 - Important for SEO - Server Rendered */}
                <h3 className="card-title">{reason.title}</h3>
                <p className="card-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="premium-why-choose__cta-section">
          <div className="row align-items-center">
            <div className="col-lg-8">
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 className="cta-title">
                {texts.ctaTitle}
              </h3>
              <p className="cta-description">
                {texts.ctaDescription}
              </p>
              <div className="cta-features">
                <span className="cta-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  {texts.instantConfirmation}
                </span>
                <span className="cta-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  {texts.freeCancellation}
                </span>
                <span className="cta-feature">
                  <i className="fa-solid fa-check-circle"></i>
                  {texts.bestPrice}
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <Link href={texts.toursPath} className="premium-cta-button">
                <span>{texts.ctaButton}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <p className="cta-reviews">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>{texts.rating}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="premium-why-choose__seo-content">
          <div className="row">
            <div className="col-lg-6">
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 className="seo-subtitle">{texts.seoSubtitle1}</h3>
              <p className="seo-text">
                {texts.seoText1}
              </p>
            </div>
            <div className="col-lg-6">
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 className="seo-subtitle">{texts.seoSubtitle2}</h3>
              <p className="seo-text">
                {texts.seoText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsPremiumSSR;
