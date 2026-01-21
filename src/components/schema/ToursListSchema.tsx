/**
 * ToursListSchema - Schema.org ItemList for boat tours
 *
 * This schema enables Google to display:
 * - Carousel of tours in search results
 * - "Things to do" / "Activities" rich results
 * - Price ranges and ratings for each tour
 */

interface ToursListSchemaProps {
  lang?: string;
}

export default function ToursListSchema({ lang = 'en' }: ToursListSchemaProps) {
  const baseUrl = 'https://www.coralboatsmallorca.com';
  const langPrefix = lang === 'en' ? '' : `/${lang}`;

  // Tour data with multilingual support
  const tours = [
    {
      id: 'morning-tour',
      position: 1,
      name: {
        en: 'Morning Boat Tour Alcudia',
        es: 'Excursión en Barco por la Mañana Alcudia',
        de: 'Morgen-Bootstour Alcudia',
        fr: 'Excursion en Bateau le Matin Alcudia',
        it: 'Tour in Barca Mattutino Alcudia',
      },
      description: {
        en: '4-hour morning boat tour exploring hidden coves, swimming at Coll Baix beach, snorkeling in crystal-clear waters, and enjoying Mediterranean tapas aboard a classic wooden boat.',
        es: 'Excursión de 4 horas por la mañana explorando calas escondidas, baño en la playa de Coll Baix, snorkel en aguas cristalinas y degustación de tapas mediterráneas a bordo de un barco clásico de madera.',
        de: '4-stündige Morgen-Bootstour zu versteckten Buchten, Schwimmen am Strand von Coll Baix, Schnorcheln in kristallklarem Wasser und mediterrane Tapas an Bord eines klassischen Holzbootes.',
        fr: 'Excursion en bateau de 4 heures le matin explorant des criques cachées, baignade à la plage de Coll Baix, snorkeling dans des eaux cristallines et dégustation de tapas méditerranéennes à bord d\'un bateau en bois classique.',
        it: 'Tour in barca di 4 ore al mattino esplorando calette nascoste, nuotata alla spiaggia di Coll Baix, snorkeling in acque cristalline e degustazione di tapas mediterranee a bordo di una barca classica in legno.',
      },
      url: `${baseUrl}${langPrefix}/alcudia-morning-boat-tour`,
      image: `${baseUrl}/assets/img/premium/gallery_new/excursion-matutina-snorkel-paddle-surf-alcudia.webp`,
      lowPrice: 0,
      highPrice: 68,
      duration: 'PT4H',
      startTime: '09:30',
      ratingValue: 4.9,
      reviewCount: 180,
    },
    {
      id: 'sunset-tour',
      position: 2,
      name: {
        en: 'Sunset Boat Tour Alcudia',
        es: 'Excursión en Barco al Atardecer Alcudia',
        de: 'Sonnenuntergangs-Bootstour Alcudia',
        fr: 'Excursion en Bateau au Coucher du Soleil Alcudia',
        it: 'Tour in Barca al Tramonto Alcudia',
      },
      description: {
        en: '3-hour sunset cruise with swimming stop, Mediterranean tapas, sangria, and spectacular views of the golden hour over Alcudia Bay aboard a classic wooden boat.',
        es: 'Crucero de 3 horas al atardecer con parada para baño, tapas mediterráneas, sangría y vistas espectaculares de la hora dorada sobre la Bahía de Alcudia a bordo de un barco clásico de madera.',
        de: '3-stündige Sonnenuntergangskreuzfahrt mit Badestopp, mediterranen Tapas, Sangria und spektakulärem Blick auf die goldene Stunde über der Bucht von Alcudia an Bord eines klassischen Holzbootes.',
        fr: 'Croisière de 3 heures au coucher du soleil avec arrêt baignade, tapas méditerranéennes, sangria et vue spectaculaire sur l\'heure dorée sur la baie d\'Alcudia à bord d\'un bateau en bois classique.',
        it: 'Crociera di 3 ore al tramonto con sosta per il bagno, tapas mediterranee, sangria e vista spettacolare sull\'ora dorata sulla baia di Alcudia a bordo di una barca classica in legno.',
      },
      url: `${baseUrl}${langPrefix}/alcudia-sunset-boat-tour`,
      image: `${baseUrl}/assets/img/premium/gallery_new/crucero-atardecer-sunset-magic-alcudia.webp`,
      lowPrice: 0,
      highPrice: 65,
      duration: 'PT3H',
      startTime: '18:00',
      ratingValue: 4.9,
      reviewCount: 165,
    },
    {
      id: 'private-charter',
      position: 3,
      name: {
        en: 'Private Boat Charter Alcudia',
        es: 'Alquiler de Barco Privado Alcudia',
        de: 'Privates Boot Charter Alcudia',
        fr: 'Location de Bateau Privé Alcudia',
        it: 'Noleggio Barca Privata Alcudia',
      },
      description: {
        en: 'Exclusive private boat charter for up to 11 guests. Customize your route, enjoy personalized service, Mediterranean catering, and create unforgettable memories in Alcudia Bay.',
        es: 'Alquiler de barco privado exclusivo para hasta 11 invitados. Personaliza tu ruta, disfruta de un servicio personalizado, catering mediterráneo y crea recuerdos inolvidables en la Bahía de Alcudia.',
        de: 'Exklusives privates Boot-Charter für bis zu 11 Gäste. Passen Sie Ihre Route an, genießen Sie persönlichen Service, mediterranes Catering und schaffen Sie unvergessliche Erinnerungen in der Bucht von Alcudia.',
        fr: 'Location de bateau privé exclusif pour jusqu\'à 11 invités. Personnalisez votre itinéraire, profitez d\'un service personnalisé, d\'un catering méditerranéen et créez des souvenirs inoubliables dans la baie d\'Alcudia.',
        it: 'Noleggio esclusivo di barca privata per un massimo di 11 ospiti. Personalizza il tuo percorso, goditi un servizio personalizzato, catering mediterraneo e crea ricordi indimenticabili nella baia di Alcudia.',
      },
      url: `${baseUrl}${langPrefix}/alcudia-private-boat-charter`,
      image: `${baseUrl}/assets/img/premium/gallery_new/charter-privado-lujo-grupos-alcudia-mallorca.webp`,
      lowPrice: 600,
      highPrice: 1400,
      duration: 'PT4H',
      startTime: '10:00',
      ratingValue: 5.0,
      reviewCount: 95,
    },
  ];

  const getName = (tour: typeof tours[0]) => tour.name[lang as keyof typeof tour.name] || tour.name.en;
  const getDescription = (tour: typeof tours[0]) => tour.description[lang as keyof typeof tour.description] || tour.description.en;

  // ItemList Schema - For carousel display
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": lang === 'es' ? "Excursiones en Barco en Alcudia, Mallorca" :
            lang === 'de' ? "Bootstouren in Alcudia, Mallorca" :
            lang === 'fr' ? "Excursions en Bateau à Alcudia, Majorque" :
            lang === 'it' ? "Tour in Barca ad Alcudia, Maiorca" :
            "Boat Tours in Alcudia, Mallorca",
    "description": lang === 'es' ? "Todas las excursiones en barco de Coral Boats desde Puerto de Alcudia" :
                   lang === 'de' ? "Alle Bootstouren von Coral Boats ab Hafen Alcudia" :
                   lang === 'fr' ? "Toutes les excursions en bateau de Coral Boats depuis le Port d'Alcudia" :
                   lang === 'it' ? "Tutti i tour in barca di Coral Boats dal Porto di Alcudia" :
                   "All boat tours offered by Coral Boats from Port d'Alcudia",
    "numberOfItems": tours.length,
    "itemListElement": tours.map(tour => ({
      "@type": "ListItem",
      "position": tour.position,
      "item": {
        "@type": ["Product", "TouristTrip"],
        "@id": `${tour.url}#tour`,
        "name": getName(tour),
        "description": getDescription(tour),
        "image": tour.image,
        "url": tour.url,
        "brand": {
          "@type": "Organization",
          "@id": "https://www.coralboatsmallorca.com/#organization",
          "name": "Coral Boats Mallorca"
        },
        "provider": {
          "@type": "Organization",
          "@id": "https://www.coralboatsmallorca.com/#organization"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": tour.lowPrice.toString(),
          "highPrice": tour.highPrice.toString(),
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-05-01",
          "validThrough": "2026-10-31",
          "url": tour.url,
          "offerCount": 3
        },
        "duration": tour.duration,
        "touristType": ["Families", "Couples", "Friends", "Solo Travelers"],
        "availableLanguage": ["English", "Spanish", "German"],
        "location": {
          "@type": "Place",
          "name": "Puerto de Alcudia",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Puerto de Alcudia",
            "addressRegion": "Balearic Islands",
            "addressCountry": "ES"
          }
        }
      }
    }))
  };

  // TouristTrip Collection Schema - For "Things to do" results
  const touristTripsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}${langPrefix}/boat-tours-alcudia#collection`,
    "name": lang === 'es' ? "Excursiones en Barco en Alcudia" :
            lang === 'de' ? "Bootstouren in Alcudia" :
            lang === 'fr' ? "Excursions en Bateau à Alcudia" :
            lang === 'it' ? "Tour in Barca ad Alcudia" :
            "Boat Tours in Alcudia",
    "description": lang === 'es' ? "Descubre las mejores excursiones en barco en la Bahía de Alcudia con Coral Boats Mallorca" :
                   "Discover the best boat tours in Alcudia Bay with Coral Boats Mallorca",
    "url": `${baseUrl}${langPrefix}/boat-tours-alcudia`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": tours.map(tour => ({
        "@type": "ListItem",
        "position": tour.position,
        "url": tour.url
      }))
    },
    "provider": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization"
    },
    "about": {
      "@type": "Thing",
      "name": "Boat Tours",
      "description": "Guided boat excursions in Alcudia Bay, Mallorca"
    },
    "spatialCoverage": {
      "@type": "Place",
      "name": "Alcudia Bay, Mallorca",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.8371,
        "longitude": 3.1219
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripsSchema) }}
      />
    </>
  );
}
