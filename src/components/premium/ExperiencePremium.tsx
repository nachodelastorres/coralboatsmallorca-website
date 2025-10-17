'use client';

import Image from 'next/image';

const ExperiencePremium = () => {
  const experiences = [
    {
      id: 'snorkeling',
      icon: 'fa-mask-snorkel',
      title: 'Premium Snorkeling',
      description: 'Dive into crystal-clear Mediterranean waters with professional-grade snorkeling equipment included. Explore vibrant underwater ecosystems, discover colorful marine life, and witness the stunning clarity of the Bay of Alcudia beneath the surface.',
      image: '/assets/img/premium/home_new/snorkel.webp',
      highlights: ['Professional equipment', 'Multiple snorkel spots', 'Guidance provided']
    },
    {
      id: 'paddleboard',
      icon: 'fa-person-swimming',
      title: 'Stand-Up Paddleboarding',
      description: 'Glide across serene waters on our top-quality SUP boards, perfect for all skill levels from beginners to experienced paddlers. Enjoy a peaceful workout while taking in panoramic views of Mallorca\'s coastline and discover hidden coves at your own pace.',
      image: '/assets/img/premium/home_new/paddle.webp',
      highlights: ['Quality SUP boards', 'All skill levels', 'Scenic routes']
    },
    {
      id: 'tapas',
      icon: 'fa-utensils',
      title: 'Authentic Mallorcan Tapas',
      description: 'Savor the flavors of Mallorca with carefully selected local tapas prepared with authentic recipes and fresh ingredients. Our culinary selection showcases the island\'s rich gastronomic heritage, featuring traditional dishes that complement your maritime adventure perfectly.',
      image: '/assets/img/premium/home_new/comida23.webp',
      highlights: ['Locally sourced', 'Traditional recipes', 'Fresh daily']
    },
    {
      id: 'drinks',
      icon: 'fa-champagne-glasses',
      title: 'Premium Drinks & Sangria',
      description: 'Quench your thirst with an unlimited selection of refreshing beverages including our signature homemade sangria, local wines, soft drinks, and water. All drinks are included in your tour, ensuring you stay refreshed throughout your journey on the Mediterranean.',
      image: '/assets/img/premium/home_new/brindis_de3.webp',
      highlights: ['Unlimited drinks', 'Homemade sangria', 'Local wines']
    },
    {
      id: 'coves',
      icon: 'fa-island-tropical',
      title: 'Hidden Coves Access',
      description: 'Discover secluded beaches and secret coves accessible only by boat, far from the tourist crowds. Our captain knows every hidden gem along the coastline, taking you to pristine locations where you can swim in turquoise waters and enjoy the untouched beauty of Mallorca.',
      image: '/assets/img/premium/home_new/cunill2_rec.webp',
      highlights: ['Exclusive locations', 'Pristine beaches', 'Private experience']
    },
    {
      id: 'crew',
      icon: 'fa-users-gear',
      title: 'Expert Crew & Captain',
      description: 'Benefit from our experienced captain and professional crew who ensure your safety, comfort, and enjoyment throughout the tour. With over 15 years of local knowledge, they share fascinating stories about Mallorca and provide personalized attention to every guest.',
      image: '/assets/img/premium/home_new/crew.webp',
      highlights: ['15+ years experience', 'Licensed & certified', 'Local experts']
    }
  ];

  return (
    <section className="premium-experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center">
              <span className="premium-section-header__label">What's Included</span>
              <h2 className="premium-section-header__title">
                Your Complete Experience
              </h2>
              <p className="premium-section-header__description">
                Every tour includes everything you need for an unforgettable day at sea.
                No hidden costs, no surprises—just pure Mediterranean magic.
              </p>
            </div>
          </div>
        </div>

        <div className="row premium-experience__grid">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="col-lg-4 col-md-6">
              <div className="premium-experience-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="premium-experience-card__image-wrapper">
                  <Image
                    src={experience.image}
                    alt={`${experience.title} included in Coral Boats Mallorca boat tour experience`}
                    width={400}
                    height={300}
                    className="premium-experience-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                  <div className="premium-experience-card__icon-wrapper">
                    <div className="icon-circle">
                      <i className={`fa-solid ${experience.icon}`}></i>
                    </div>
                  </div>
                </div>

                <div className="premium-experience-card__content">
                  <h3 className="premium-experience-card__title">
                    {experience.title}
                  </h3>

                  <p className="premium-experience-card__description">
                    {experience.description}
                  </p>

                  <ul className="premium-experience-card__highlights">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <i className="fa-solid fa-check-circle"></i>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="premium-experience__footer">
              <div className="experience-footer-content">
                <div className="footer-icon">
                  <i className="fa-solid fa-shield-check"></i>
                </div>
                <div className="footer-text">
                  <h4>All-Inclusive Experience</h4>
                  <p>
                    Your ticket includes all equipment, food, unlimited drinks, professional crew, insurance,
                    and access to exclusive locations. Just bring your sunscreen, swimsuit, and sense of adventure!
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

export default ExperiencePremium;
