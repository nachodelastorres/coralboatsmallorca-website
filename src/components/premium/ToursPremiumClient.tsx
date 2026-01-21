'use client';

import { useState } from 'react';

export interface TourPriceBreakdown {
  adults: string;
  adultsAge: string;
  children: string;
  childrenAge: string;
  infants: string;
  infantsAge: string;
  free: string;
}

interface ToursPremiumClientProps {
  tourId: string;
  priceLabel: string;
  priceAmount: string;
  priceUnit: string;
  bookNow: string;
  adultPrice: string;
  childPrice: string;
  breakdown: TourPriceBreakdown;
}

const ToursPremiumClient = ({
  tourId,
  priceLabel,
  priceAmount,
  priceUnit,
  bookNow,
  adultPrice,
  childPrice,
  breakdown,
}: ToursPremiumClientProps) => {
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);

  return (
    <div className="premium-tour-card__footer">
      <div className="premium-tour-card__price">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
          <div>
            <span className="price-label">{priceLabel}</span>
            <span className="price-amount">{priceAmount}</span>
            <span className="price-unit">{priceUnit}</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowPriceBreakdown(!showPriceBreakdown);
            }}
            onMouseEnter={() => setShowPriceBreakdown(true)}
            onMouseLeave={() => setShowPriceBreakdown(false)}
            style={{
              background: 'rgba(8, 145, 178, 0.1)',
              border: '1px solid rgba(8, 145, 178, 0.3)',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: '#0891b2',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
            aria-label="Show price breakdown"
          >
            <i className="fa-solid fa-info"></i>
          </button>

          {showPriceBreakdown && (
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '0',
                marginBottom: '12px',
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                zIndex: 1000,
                minWidth: '280px',
                animation: 'fadeInUp 0.2s ease'
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <i className="fa-solid fa-ticket" style={{ color: '#0891b2' }}></i>
                Price Breakdown
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 12px',
                  background: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#334155' }}>
                      {breakdown.adults}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {breakdown.adultsAge}
                    </div>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0891b2' }}>
                    {adultPrice}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 12px',
                  background: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#334155' }}>
                      {breakdown.children}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {breakdown.childrenAge}
                    </div>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0891b2' }}>
                    {childPrice}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 12px',
                  background: '#f0fdf4',
                  borderRadius: '8px',
                  border: '1px solid #86efac'
                }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#334155' }}>
                      {breakdown.infants}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {breakdown.infantsAge}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    color: '#16a34a',
                    background: '#dcfce7',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    {breakdown.free}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="premium-tour-card__cta">
        <span>{bookNow}</span>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default ToursPremiumClient;
