'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const ToursOverviewCards = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  const tours = [
    {
      id: 'morning-tour',
      name: t('toursPage.cards.morningTour.name'),
      subtitle: t('toursPage.cards.morningTour.subtitle'),
      time: t('toursPage.cards.morningTour.time'),
      duration: t('toursPage.cards.morningTour.duration'),
      price: t('toursPage.cards.morningTour.price'),
      image: '/assets/img/premium/home_new/card_morning.webp',
      link: '/alcudia-morning-boat-tour',
      features: [
        t('toursPage.cards.morningTour.feature1'),
        t('toursPage.cards.morningTour.feature2'),
        t('toursPage.cards.morningTour.feature3'),
        t('toursPage.cards.morningTour.feature4')
      ],
      included: [
        { icon: 'fa-water', text: t('toursPage.cards.morningTour.included1') },
        { icon: 'fa-person-swimming', text: t('toursPage.cards.morningTour.included2') },
        { icon: 'fa-utensils', text: t('toursPage.cards.morningTour.included3') },
        { icon: 'fa-champagne-glasses', text: t('toursPage.cards.morningTour.included4') },
      ],
      badge: t('toursPage.cards.morningTour.badge'),
      color: '#f59e0b',
      whyChoose: t('toursPage.cards.morningTour.whyChoose'),
      includedTitle: t('toursPage.cards.morningTour.includedTitle'),
      priceFrom: t('toursPage.cards.morningTour.priceFrom'),
      pricePerPerson: t('toursPage.cards.morningTour.pricePerPerson'),
      ctaButton: t('toursPage.cards.morningTour.ctaButton')
    },
    {
      id: 'sunset-tour',
      name: t('toursPage.cards.sunsetTour.name'),
      subtitle: t('toursPage.cards.sunsetTour.subtitle'),
      time: t('toursPage.cards.sunsetTour.time'),
      duration: t('toursPage.cards.sunsetTour.duration'),
      price: t('toursPage.cards.sunsetTour.price'),
      image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
      link: '/alcudia-sunset-boat-tour',
      features: [
        t('toursPage.cards.sunsetTour.feature1'),
        t('toursPage.cards.sunsetTour.feature2'),
        t('toursPage.cards.sunsetTour.feature3'),
        t('toursPage.cards.sunsetTour.feature4')
      ],
      included: [
        { icon: 'fa-water', text: t('toursPage.cards.sunsetTour.included1') },
        { icon: 'fa-person-swimming', text: t('toursPage.cards.sunsetTour.included2') },
        { icon: 'fa-utensils', text: t('toursPage.cards.sunsetTour.included3') },
        { icon: 'fa-champagne-glasses', text: t('toursPage.cards.sunsetTour.included4') },
      ],
      badge: t('toursPage.cards.sunsetTour.badge'),
      color: '#ec4899',
      whyChoose: t('toursPage.cards.sunsetTour.whyChoose'),
      includedTitle: t('toursPage.cards.sunsetTour.includedTitle'),
      priceFrom: t('toursPage.cards.sunsetTour.priceFrom'),
      pricePerPerson: t('toursPage.cards.sunsetTour.pricePerPerson'),
      ctaButton: t('toursPage.cards.sunsetTour.ctaButton')
    },
    {
      id: 'private-charter',
      name: t('toursPage.cards.privateCharter.name'),
      subtitle: t('toursPage.cards.privateCharter.subtitle'),
      time: t('toursPage.cards.privateCharter.time'),
      duration: t('toursPage.cards.privateCharter.duration'),
      price: t('toursPage.cards.privateCharter.price'),
      image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
      link: '/alcudia-private-boat-charter',
      features: [
        t('toursPage.cards.privateCharter.feature1'),
        t('toursPage.cards.privateCharter.feature2'),
        t('toursPage.cards.privateCharter.feature3'),
        t('toursPage.cards.privateCharter.feature4')
      ],
      included: [
        { icon: 'fa-route', text: t('toursPage.cards.privateCharter.included1') },
        { icon: 'fa-utensils', text: t('toursPage.cards.privateCharter.included2') },
        { icon: 'fa-champagne-glasses', text: t('toursPage.cards.privateCharter.included3') },
        { icon: 'fa-user-tie', text: t('toursPage.cards.privateCharter.included4') },
      ],
      badge: t('toursPage.cards.privateCharter.badge'),
      color: '#8b5cf6',
      whyChoose: t('toursPage.cards.privateCharter.whyChoose'),
      includedTitle: t('toursPage.cards.privateCharter.includedTitle'),
      pricingLabel: t('toursPage.cards.privateCharter.pricingLabel'),
      pricingValue: t('toursPage.cards.privateCharter.pricingValue'),
      pricingInfo: t('toursPage.cards.privateCharter.pricingInfo'),
      ctaButton: t('toursPage.cards.privateCharter.ctaButton')
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="premium-section-header__label">{t('toursPage.cards.sectionLabel')}</span>
              <h2 className="premium-section-header__title">
                {t('toursPage.cards.sectionTitle')}
              </h2>
              <p className="premium-section-header__description">
                {t('toursPage.cards.sectionDescription')}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {tours.map((tour, index) => (
            <div key={tour.id} className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
              <Link href={getPath(tour.link)} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div id={tour.id} style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  cursor: 'pointer'
                }} className="tour-overview-card">
                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: tour.color,
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    zIndex: 10,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}>
                    {tour.badge}
                  </div>

                  {/* Image */}
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                    <Image
                      src={tour.image}
                      alt={`${tour.name} - ${tour.subtitle} - Boat tour in Alcudia Mallorca`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '35px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                      {tour.name}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '20px', fontWeight: '500' }}>
                      {tour.subtitle}
                    </p>

                    {/* Meta Info */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fa-regular fa-clock" style={{ color: '#0891b2', fontSize: '1.1rem' }}></i>
                        <span style={{ fontSize: '0.9rem', color: '#475569' }}>{tour.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fa-regular fa-hourglass" style={{ color: '#0891b2', fontSize: '1.1rem' }}></i>
                        <span style={{ fontSize: '0.9rem', color: '#475569' }}>{tour.duration}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div style={{ marginBottom: '25px' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
                        {tour.whyChoose}
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {tour.features.map((feature, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <i className="fa-solid fa-circle-check" style={{ color: '#10b981', fontSize: '1rem' }}></i>
                            <span style={{ fontSize: '0.9rem', color: '#475569' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Included */}
                    <div style={{ marginBottom: '30px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
                        {tour.includedTitle}
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {tour.included.map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className={`fa-solid ${item.icon}`} style={{ color: '#0891b2', fontSize: '0.9rem' }}></i>
                            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div style={{ marginTop: 'auto' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px'
                      }}>
                        <div>
                          {tour.id !== 'private-charter' ? (
                            <>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>{tour.priceFrom}</div>
                              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0891b2', lineHeight: '1' }}>
                                {tour.price}
                              </div>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>{tour.pricePerPerson}</div>
                            </>
                          ) : (
                            <>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>{tour.pricingLabel}</div>
                              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', lineHeight: '1' }}>
                                {tour.pricingValue}
                              </div>
                              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>{tour.pricingInfo}</div>
                            </>
                          )}
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        padding: '16px',
                        background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                        color: '#ffffff',
                        borderRadius: '50px',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)'
                      }} className="tour-overview-cta">
                        <span>{tour.ctaButton}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tour-overview-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15) !important;
        }
        .tour-overview-cta:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 25px rgba(8, 145, 178, 0.4) !important;
        }
      `}</style>
    </section>
  );
};

export default ToursOverviewCards;
