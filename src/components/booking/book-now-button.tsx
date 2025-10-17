'use client';

import { useEffect, useState } from 'react';

interface BookNowButtonProps {
  itemId: string;
  label?: string;
}

const BookNowButton = ({ itemId, label = '¡Reservar ahora!' }: BookNowButtonProps) => {
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if ((window as any).FH) {
      (window as any).FH.open({
        shortname: 'coralboatsmallorca',
        fallback: 'simple',
        fullItems: 'yes',
        flow: 1382210,
        view: { item: Number(itemId) },
      });
    } else {
      alert('La reserva aún no está disponible. Inténtalo en unos segundos.');
    }
  };

  return (
    <a
      href={`https://fareharbor.com/embeds/book/coralboatsmallorca/items/${itemId}/?full-items=yes&flow=1382210`}
      onClick={handleClick}
      className= "book-now-main-button"
    //   className="fh-button"
    //   style={{
    //     backgroundColor: '#ED6A46',
    //     color: 'white',
    //     padding: '12px 24px',
    //     fontSize: '18px',
    //     borderRadius: '8px',
    //     textDecoration: 'none',
    //     display: 'inline-block',
    //     cursor: fhReady ? 'pointer' : 'not-allowed',
    //     opacity: fhReady ? 1 : 0.5,
    //   }}
    >
      {label}
    </a>
  );
};

export default BookNowButton;
