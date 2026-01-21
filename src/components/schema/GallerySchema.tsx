import Script from 'next/script';

const baseUrl = 'https://www.coralboatsmallorca.com';
const imageBasePath = '/assets/img/premium/gallery_new';

const galleryImages = [
  { file: 'faro-alcanada-excursion-barco-alcudia-mallorca.webp', name: 'Alcanada Lighthouse Boat Trip', description: 'View of Alcanada Lighthouse from boat excursion in Alcudia Bay, Mallorca' },
  { file: 'coral-boats-navegando-isla-alcanada-alcudia.webp', name: 'Coral Boats Sailing to Alcanada', description: 'Coral Boats sailing towards Alcanada Island in Alcudia Bay' },
  { file: 'turistas-paseo-barco-aguas-cristalinas-mallorca.webp', name: 'Tourists Enjoying Boat Trip', description: 'Tourists enjoying boat trip through crystal-clear waters of Mallorca' },
  { file: 'interior-barco-coral-boats-puerto-alcudia.webp', name: 'Coral Boats Interior', description: 'Spacious interior of Coral Boats excursion vessel in Port Alcudia' },
  { file: 'excursion-matutina-snorkel-paddle-surf-alcudia.webp', name: 'Morning Boat Excursion', description: 'Morning boat excursion with snorkeling and paddle surf in Alcudia, Mallorca' },
  { file: 'charter-privado-lujo-grupos-alcudia-mallorca.webp', name: 'Private Luxury Charter', description: 'Luxury private charter for groups in Alcudia Bay, Mallorca' },
  { file: 'crucero-atardecer-sunset-magic-alcudia.webp', name: 'Sunset Magic Cruise', description: 'Sunset Magic cruise in Alcudia waters with Mediterranean views' },
  { file: 'barco-clasico-madera-coral-boats-mallorca.webp', name: 'Classic Wooden Boat', description: 'Classic wooden boat by Coral Boats for excursions in Mallorca' },
  { file: 'vistas-costa-norte-mallorca-excursion-barco.webp', name: 'North Coast Views', description: 'Panoramic views of Mallorca north coast from boat excursion' },
  { file: 'cala-secreta-accesible-barco-alcudia-mallorca.webp', name: 'Secret Cove Alcudia', description: 'Secret cove accessible only by boat near Alcudia, Mallorca' },
  { file: 'tripulacion-profesional-sirviendo-paseo-barco-alcudia.webp', name: 'Professional Crew Service', description: 'Professional crew serving guests during boat trip in Alcudia' },
  { file: 'amigos-excursion-barco-bahia-alcudia.webp', name: 'Friends Boat Excursion', description: 'Group of friends enjoying boat excursion in Alcudia Bay' },
  { file: 'amigos-recuerdos-paseo-barco-calas-mallorca.webp', name: 'Friends Creating Memories', description: 'Friends creating memories on boat trip through Mallorca coves' },
  { file: 'celebracion-grupo-charter-privado-alcudia-mallorca.webp', name: 'Group Celebration', description: 'Group celebration aboard private charter in Alcudia, Mallorca' },
  { file: 'hora-dorada-mediterraneo-crucero-mallorca.webp', name: 'Golden Hour Mediterranean', description: 'Golden hour over Mediterranean Sea during Mallorca cruise' },
  { file: 'calas-escondidas-norte-mallorca-excursion-barco.webp', name: 'Hidden Coves North Mallorca', description: 'Hidden coves of northern Mallorca explored by boat excursion' },
  { file: 'excursion-barco-isla-alcanada-puerto-alcudia.webp', name: 'Alcanada Island Excursion', description: 'Boat excursion to Alcanada Island from Port Alcudia' },
  { file: 'ninos-actividades-acuaticas-excursion-familiar-mallorca.webp', name: 'Kids Water Activities', description: 'Children enjoying water activities on family boat trip in Mallorca' },
  { file: 'paisaje-costero-mallorca-barco-excursiones-alcudia.webp', name: 'Mallorca Coastal Landscape', description: 'Mallorca coastal landscape from excursion boat in Alcudia' },
  { file: 'tapas-mallorquinas-tradicionales-bordo-paseo-barco.webp', name: 'Traditional Mallorcan Tapas', description: 'Traditional Mallorcan tapas served aboard boat trip' },
  { file: 'relax-colchoneta-flotante-aguas-alcudia.webp', name: 'Relaxing on Floating Mattress', description: 'Relaxing on floating mattress during boat excursion in Alcudia waters' },
  { file: 'comida-mediterranea-excursion-barco-mallorca.webp', name: 'Mediterranean Food on Board', description: 'Fresh Mediterranean food included in Mallorca boat excursion' },
  { file: 'paddle-surf-aguas-turquesas-excursion-alcudia.webp', name: 'Paddle Surf Turquoise Waters', description: 'Paddle surfing in turquoise waters during Alcudia boat trip' },
  { file: 'vista-panoramica-playa-muro-bahia-alcudia.webp', name: 'Panoramic View Playa de Muro', description: 'Panoramic view of Playa de Muro from boat in Alcudia Bay' },
  { file: 'pareja-crucero-romantico-atardecer-mallorca.webp', name: 'Romantic Sunset Cruise', description: 'Couple enjoying romantic sunset cruise in Mallorca' },
  { file: 'tripulacion-experta-coral-boats-alcudia.webp', name: 'Expert Coral Boats Crew', description: 'Expert Coral Boats crew preparing activities in Alcudia' },
  { file: 'sangria-espanola-tapas-excursion-barco-mallorca.webp', name: 'Sangria and Tapas', description: 'Spanish sangria and tapas served during Mallorca boat excursion' },
  { file: 'atardecer-espectacular-mar-bahia-alcudia.webp', name: 'Spectacular Sunset Alcudia Bay', description: 'Spectacular sunset over the sea from boat in Alcudia Bay' },
  { file: 'puesta-sol-mediterranea-crucero-sunset-magic-mallorca.webp', name: 'Mediterranean Sunset Cruise', description: 'Mediterranean sunset during Sunset Magic cruise in Mallorca' },
  { file: 'luz-dorada-atardecer-aguas-alcudia-mallorca.webp', name: 'Golden Sunset Light Alcudia', description: 'Golden sunset light reflected on Alcudia waters, Mallorca' },
  { file: 'puerto-alcudia-atardecer-barcos-excursiones.webp', name: 'Port Alcudia at Sunset', description: 'Port Alcudia at sunset with excursion boats moored' },
  { file: 'pasajeros-excursion-barco-coral-boats-mallorca.webp', name: 'Passengers Boat Excursion', description: 'Passengers enjoying boat excursion with Coral Boats in Mallorca' },
  { file: 'actividades-acuaticas-snorkel-paddle-surf-alcudia.webp', name: 'Water Activities Alcudia', description: 'Water activities included in Alcudia boat trip: snorkeling and paddle surf' },
];

interface GallerySchemaProps {
  locale?: string;
}

export default function GallerySchema({ locale = 'en' }: GallerySchemaProps) {
  const galleryUrl = `${baseUrl}/${locale}/gallery`;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${galleryUrl}#gallery`,
    name: 'Coral Boats Mallorca Photo Gallery',
    description: 'Photo gallery showcasing boat tours, sunset cruises, and water activities in Alcudia Bay, Mallorca. Experience Mediterranean adventures with Coral Boats.',
    url: galleryUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': galleryUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Coral Boats Mallorca',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/img/logo/coral-boats-mallorca-logo.png`,
      },
    },
    about: {
      '@type': 'TouristAttraction',
      name: 'Boat Tours in Alcudia Bay',
      description: 'Premium boat excursions in the Bay of Alcudia, Mallorca',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Port d\'Alcudia',
        addressRegion: 'Mallorca',
        addressCountry: 'ES',
      },
    },
    image: galleryImages.map((img, index) => ({
      '@type': 'ImageObject',
      '@id': `${galleryUrl}#image-${index + 1}`,
      url: `${baseUrl}${imageBasePath}/${img.file}`,
      contentUrl: `${baseUrl}${imageBasePath}/${img.file}`,
      name: img.name,
      description: img.description,
      caption: img.description,
      representativeOfPage: index === 0,
      encodingFormat: 'image/webp',
      width: '1200',
      height: '800',
      author: {
        '@type': 'Organization',
        name: 'Coral Boats Mallorca',
      },
      copyrightHolder: {
        '@type': 'Organization',
        name: 'Coral Boats Mallorca',
      },
    })),
    numberOfItems: galleryImages.length,
    keywords: [
      'boat tours Mallorca',
      'Alcudia boat excursions',
      'sunset cruise Mallorca',
      'private charter Alcudia',
      'snorkeling Mallorca',
      'paddle surf Alcudia Bay',
      'Mediterranean boat trip',
      'Coral Boats gallery',
    ],
  };

  // Schema adicional para CollectionPage
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': galleryUrl,
    name: 'Coral Boats Mallorca Photo Gallery',
    description: 'Browse our collection of photos from boat tours and excursions in Alcudia Bay, Mallorca.',
    url: galleryUrl,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: 'Coral Boats Mallorca',
      url: baseUrl,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${baseUrl}/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Gallery',
          item: galleryUrl,
        },
      ],
    },
    mainEntity: {
      '@id': `${galleryUrl}#gallery`,
    },
  };

  return (
    <>
      <Script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />
      <Script
        id="collection-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
