'use client';

import { useEffect, useState } from 'react';
import { trackInitiateCheckout } from '@/lib/metaPixel';

interface BookingCTAProps {
  variant?: 'primary' | 'secondary' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  text?: string;
  itemId?: string;
  /** Tour name for tracking (required for InitiateCheckout) */
  tourName?: string;
  /** Price value for tracking (optional) */
  tourPrice?: number;
}

const BookingCTA = ({
  variant = 'primary',
  size = 'medium',
  text = 'Book Your Adventure Now',
  itemId = '674271',
  tourName,
  tourPrice,
}: BookingCTAProps) => {
  const [fhReady, setFhReady] = useState(false);

  useEffect(() => {
    const checkFH = () => {
      if (typeof window !== 'undefined' && (window as any).FH) {
        setFhReady(true);
      } else {
        setTimeout(checkFH, 300);
      }
    };

    checkFH();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Track InitiateCheckout event
    if (tourName) {
      trackInitiateCheckout({
        contentName: tourName,
        contentId: itemId,
        value: tourPrice,
        currency: 'EUR',
      });
    }

    if ((window as any).FH) {
      (window as any).FH.open({
        shortname: 'coralboatsmallorca',
        fallback: 'simple',
        fullItems: 'yes',
        flow: 1382210,
        view: { item: Number(itemId) },
      });
    } else {
      alert('Booking not available yet. Please try again in a few seconds.');
    }
  };

  return (
    <button
      className={`fh-button fh-book-now-btn cta-${variant} cta-${size}`}
      onClick={handleClick}
      style={{ cursor: fhReady ? 'pointer' : 'not-allowed', opacity: fhReady ? 1 : 0.7 }}
    >
      <span className="btn-icon">
        <i className="fa-solid fa-calendar-check"></i>
      </span>
      <span className="btn-text">{text}</span>
      <span className="btn-arrow">
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </button>
  );
};

export default BookingCTA;
