import { Metadata } from 'next';
import MorningTourPage from '@/pages/tours/morning-tour';
import { PageProps } from '@/types/params';
import { generateMorningTourMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateMorningTourMetadata(params.lang);
}

export default function MorningTour({ params }: PageProps) {
  const canonicalUrl = `https://www.coralboatsmallorca.com/${params.lang}/alcudia-morning-boat-tour`;

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.coralboatsmallorca.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Boat Tours Alcudia",
        "item": `https://www.coralboatsmallorca.com/${params.lang}/boat-tours-alcudia`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Morning Boat Tour",
        "item": canonicalUrl
      }
    ]
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo llego a la zona de embarque?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El punto de encuentro es el muelle comercial del Puerto de Alcudia (Estación Marítima del Puerto de Alcudia). Puedes llegar andando, en coche, taxi o bus. Si vienes en coche, hay un parking gratuito en la zona. La ubicación exacta está en Google Maps en las coordenadas 39.8371, 3.1219."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde puedo dejar mis pertenencias cuando entro en el barco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contamos con estanterías en el barco donde puedes dejar tus pertenencias. Si bien la tripulación se queda vigilante en el barco mientras los pasajeros disfrutan de la parada en la cala, no nos hacemos responsables de la pérdida o daño de tus pertenencias."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es necesario saber nadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, no es necesario saber nadar para disfrutar de la excursión, pues el trayecto, las vistas y la gastronomía ya hacen de la excursión una actividad memorable. Si quieres disfrutar de la experiencia completa, se recomienda saber nadar. Contamos con múltiples chalecos salvavidas y objetos de flotación a bordo que podrás utilizar si lo necesitas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si tengo alergias o intolerancias alimenticias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por favor, ponte en contacto con nosotros si tienes alergias o intolerancias alimenticias para que podamos adaptar el menú a tus necesidades. Puedes contactarnos por email en info@coralboatsmallorca.com o por teléfono en +34626681867."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo pagar en efectivo el ticket de la excursión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, podrás pagar en efectivo tanto el ticket de la excursión como cualquier otro producto que compres a bordo. Aunque recomendamos comprar el ticket online para reservar tu plaza, si decides pagar en efectivo, ponte en contacto con nosotros para reservar tu plaza."
        }
      }
    ]
  };

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${canonicalUrl}#tour`,
    "name": "Morning Boat Tour Alcudia",
    "description": "Discover the Bay of Alcudia on our 4-hour morning boat tour. Explore hidden coves like Coll Baix, swim in crystal-clear waters, and enjoy the beauty of Alcanada aboard a classic wooden boat.",
    "image": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/morning-boat-tour-alcudia.webp",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "touristType": ["Families", "Couples", "Friends", "Solo Travelers"],
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristDestination",
            "name": "Coll Baix",
            "description": "Hidden pristine beach accessible only by boat"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "TouristDestination",
            "name": "Alcanada",
            "description": "Beautiful coastal area with lighthouse and crystal-clear waters"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "TouristDestination",
            "name": "Puerto de Alcudia",
            "description": "Return to the commercial pier"
          }
        }
      ]
    },
    "duration": "PT4H",
    "startDate": "2025-05-01",
    "endDate": "2025-10-31",
    "schedule": {
      "@type": "Schedule",
      "repeatFrequency": "Daily",
      "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "startTime": "10:00",
      "scheduleTimezone": "Europe/Madrid"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Adult Ticket (13+ years)",
        "price": "68.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-05-01",
        "validThrough": "2025-10-31",
        "url": canonicalUrl,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "68.00",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "unitText": "Person"
          }
        },
        "category": "Adult"
      },
      {
        "@type": "Offer",
        "name": "Child Ticket (4-12 years)",
        "price": "48.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-05-01",
        "validThrough": "2025-10-31",
        "url": canonicalUrl,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "48.00",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "unitText": "Person"
          }
        },
        "category": "Child"
      },
      {
        "@type": "Offer",
        "name": "Infant Ticket (0-3 years)",
        "price": "0.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-05-01",
        "validThrough": "2025-10-31",
        "url": canonicalUrl,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0.00",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "unitText": "Person"
          }
        },
        "category": "Infant"
      }
    ],
    "location": {
      "@type": "Place",
      "name": "Muelle Comercial del Puerto de Alcudia",
      "description": "Commercial Pier at Port d'Alcudia, in front of the Maritime Station",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "c/ del Moll Comercial s/n",
        "addressLocality": "Puerto de Alcudia",
        "addressRegion": "Balearic Islands",
        "postalCode": "07400",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.8371,
        "longitude": 3.1219
      }
    },
    "departureLocation": {
      "@type": "Place",
      "@id": "https://www.coralboatsmallorca.com/#meeting-point",
      "name": "Puerto de Alcudia - Muelle Comercial"
    },
    "arrivalLocation": {
      "@type": "Place",
      "@id": "https://www.coralboatsmallorca.com/#meeting-point",
      "name": "Puerto de Alcudia - Muelle Comercial"
    },
    "includedInDataCatalog": {
      "@type": "DataCatalog",
      "name": "Coral Boats Tours",
      "url": "https://www.coralboatsmallorca.com/boat-tours-alcudia"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <MorningTourPage />
    </>
  );
}
