import { Metadata } from 'next';
import PrivateCharterPage from '@/pages/tours/private-charter';
import { PageProps } from '@/types/params';
import { generatePrivateCharterMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generatePrivateCharterMetadata(params.lang);
}

export default function PrivateCharter({ params }: PageProps) {
  const canonicalUrl = `https://www.coralboatsmallorca.com/${params.lang}/alcudia-private-boat-charter`;

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
        "name": "Private Boat Charter",
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
    "name": "Private Boat Charter Alcudia",
    "description": "Create your perfect day at sea with our fully customizable private boat charter in Alcudia. Choose your own itinerary, duration (3-4 hours), and explore the Bay of Alcudia with exclusive use of our classic wooden boat. Perfect for special celebrations, corporate events, or intimate gatherings up to 50 guests.",
    "image": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/private-boat-charter-alcudia.webp",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "touristType": ["Groups", "Corporate Events", "Wedding Parties", "Birthday Celebrations", "Special Occasions"],
    "itinerary": {
      "@type": "ItemList",
      "description": "Fully customizable itinerary based on your preferences. Popular destinations include Coll Baix, Alcanada, Cabo Menorca, and other hidden coves in the Bay of Alcudia.",
      "numberOfItems": 1,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristDestination",
            "name": "Custom Route",
            "description": "Personalized itinerary through the Bay of Alcudia tailored to your group's interests"
          }
        }
      ]
    },
    "duration": ["PT3H", "PT4H"],
    "startDate": "2025-05-01",
    "endDate": "2025-10-31",
    "offers": [
      {
        "@type": "Offer",
        "name": "Private Charter - 3 Hours",
        "price": "1250.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/PreOrder",
        "validFrom": "2025-05-01",
        "validThrough": "2025-10-31",
        "url": canonicalUrl,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "1250.00",
          "maxPrice": "1632.50",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 50,
            "unitText": "Group"
          }
        },
        "description": "Exclusive 3-hour private boat charter with customizable itinerary. Capacity up to 50 guests.",
        "category": "Private Charter"
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4 Hours",
        "price": "1632.50",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/PreOrder",
        "validFrom": "2025-05-01",
        "validThrough": "2025-10-31",
        "url": canonicalUrl,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "1632.50",
          "maxPrice": "2015.00",
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 50,
            "unitText": "Group"
          }
        },
        "description": "Exclusive 4-hour private boat charter with customizable itinerary. Capacity up to 50 guests.",
        "category": "Private Charter"
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
    "maximumAttendeeCapacity": 50,
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
      <PrivateCharterPage />
    </>
  );
}
