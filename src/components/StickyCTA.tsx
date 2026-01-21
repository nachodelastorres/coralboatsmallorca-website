'use client';

import { useEffect } from 'react';
import BookNowButton from '@/components/booking/book-now-button';

interface StickyCTAProps {
  itemId: string;
  label: string;
  tourName?: string;
  tourPrice?: number;
}

const StickyCTA = ({ itemId, label, tourName, tourPrice }: StickyCTAProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        borderTop: '1px solid #eee',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
        padding: '0.75rem 1rem 1rem 1rem', // más espacio inferior
      }}
    >
      <div className="container">
        {/* Línea 1: badge y otros elementos */}
        <div
          className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-2"
        >
          <div
            className="elfsight-app-de227867-cfcd-4253-b4ac-b4e5ae116f7f"
            data-elfsight-app-lazy
          ></div>

          {/* Aquí puedes añadir más elementos, como badges, texto, iconos, etc. */}
        </div>

        {/* Línea 2: botón de reserva centrado */}
        <div className="d-flex justify-content-center">
          <BookNowButton itemId={itemId} label={label} tourName={tourName} tourPrice={tourPrice} />
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
