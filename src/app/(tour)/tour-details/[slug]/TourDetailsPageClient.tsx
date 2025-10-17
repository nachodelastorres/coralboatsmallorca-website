// 'use client';

// import { useTranslation } from 'react-i18next';
// import TourDetailsMain from '@/pages/tour-details/tour-details';
// import { ITourDT } from '@/types/tour-packages-d-t';
// import Script from 'next/script'; // ✅ Importar Script

// interface Props {
//   tour: ITourDT;
// }

// export default function TourDetailsPageClient({ tour }: Props) {
//   const { t } = useTranslation('common');

//   const translatedTour = {
//     ...tour,
//     title: t(tour.title ?? ''),
//     title2: t(tour.title2 ?? ''),
//     address: t(tour.address ?? ''),
//     description: t(tour.description ?? 'Descripción no disponible'),
//     btnText: t(tour.btnText ?? ''),
//   };

//   return (
//     <>
//       {/* ✅ Inyección del script para el calendario de FareHarbor */}
//       <div id="fareharbor-calendar" />
//         <Script
//           src={`https://fareharbor.com/embeds/script/calendar/coralboatsmallorca/items/${tour.fhId}/?fallback=simple&full-items=yes&flow=1382210&language=es`}
//           strategy="afterInteractive"
//         />
//       {/* Componente visual con los datos del tour traducidos */}
//       <TourDetailsMain tour={translatedTour} />
//     </>
//   );
// }
'use client';

import { useTranslation } from 'react-i18next';
import TourDetailsMain from '@/pages/tour-details/tour-details';
import { ITourDT } from '@/types/tour-packages-d-t';
import Script from 'next/script';

interface Props {
  tour: ITourDT;
}

export default function TourDetailsPageClient({ tour }: Props) {
  const { t } = useTranslation('common');

  const translatedTour = {
    ...tour,
    title: t(tour.title ?? ''),
    title2: t(tour.title2 ?? ''),
    address: t(tour.address ?? ''),
    description: t(tour.description ?? 'Descripción no disponible'),
    btnText: t(tour.btnText ?? ''),
  };

  return (
    <>
      {/* Script de FareHarbor que activa los popups */}
      {/* <Script
        src="https://fareharbor.com/embeds/api/v1/embed.js"
        strategy="afterInteractive"
      /> */}

      {/* Contenido de la página */}
      <TourDetailsMain tour={translatedTour} />

      {/* Botón de reserva al final de la página */}
      {/* <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          className="fh-button"
          href={`https://fareharbor.com/embeds/book/coralboatsmallorca/items/${tour.fhId}/?full-items=yes&flow=1382210`}
          data-fh-book-button
        >
          {translatedTour.btnText || 'Reservar ahora'}
        </a>
      </div> */}
    </>
  );
}
