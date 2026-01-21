/**
 * TestimonialsPremiumSSR - Server Component for SEO
 *
 * Renders the testimonials section header (H2, description) server-side.
 * The interactive slider is handled by TestimonialsPremiumClient.
 *
 * NO 'use client' directive - this is a Server Component
 */

import TestimonialsPremiumClient, { Testimonial } from './TestimonialsPremiumClient';

export interface TestimonialsPremiumTexts {
  label: string;
  title: string;
  description: string;
  averageRating: string;
  fiveStarReviews: string;
  happyTravelers: string;
  findUsOn: string;
  testimonials: Testimonial[];
}

interface TestimonialsPremiumSSRProps {
  texts: TestimonialsPremiumTexts;
}

const TestimonialsPremiumSSR = ({ texts }: TestimonialsPremiumSSRProps) => {
  return (
    <section className="premium-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">{texts.label}</span>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 className="premium-section-header__title">
                {texts.title}
              </h2>
              <p className="premium-section-header__description">
                {texts.description}
              </p>
            </div>
          </div>
        </div>

        {/* Client component for interactive slider */}
        <TestimonialsPremiumClient
          testimonials={texts.testimonials}
          averageRating={texts.averageRating}
          fiveStarReviews={texts.fiveStarReviews}
          happyTravelers={texts.happyTravelers}
          findUsOn={texts.findUsOn}
        />
      </div>
    </section>
  );
};

export default TestimonialsPremiumSSR;
