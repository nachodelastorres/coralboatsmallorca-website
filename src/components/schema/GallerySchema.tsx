import Script from 'next/script';

const baseUrl = 'https://www.coralboatsmallorca.com';
const imageBasePath = '/assets/img/premium/2026/gallery';

export interface GallerySchemaImage {
  file: string;
  description: string;
  width: number;
  height: number;
}

interface GallerySchemaProps {
  locale: string;
  images: GallerySchemaImage[];
  // File of the image considered the "hero" — gets representativeOfPage: true.
  heroFile?: string;
}

export default function GallerySchema({ locale, images, heroFile }: GallerySchemaProps) {
  const galleryUrl = `${baseUrl}/${locale}/gallery`;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${galleryUrl}#gallery`,
    name: 'Coral Boats Mallorca Photo Gallery',
    description: 'Photo gallery showcasing boat tours, sunset cruises, and water activities in Alcudia Bay, Mallorca. Experience Mediterranean adventures with Coral Boats.',
    url: galleryUrl,
    inLanguage: locale,
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
        addressLocality: "Port d'Alcudia",
        addressRegion: 'Mallorca',
        addressCountry: 'ES',
      },
    },
    image: images.map((img, index) => ({
      '@type': 'ImageObject',
      '@id': `${galleryUrl}#image-${index + 1}`,
      url: `${baseUrl}${imageBasePath}/${img.file}`,
      contentUrl: `${baseUrl}${imageBasePath}/${img.file}`,
      name: img.description,
      description: img.description,
      caption: img.description,
      inLanguage: locale,
      representativeOfPage: heroFile ? img.file === heroFile : index === 0,
      encodingFormat: 'image/webp',
      width: String(img.width),
      height: String(img.height),
      author: {
        '@type': 'Organization',
        name: 'Coral Boats Mallorca',
      },
      copyrightHolder: {
        '@type': 'Organization',
        name: 'Coral Boats Mallorca',
      },
    })),
    numberOfItems: images.length,
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

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': galleryUrl,
    name: 'Coral Boats Mallorca Photo Gallery',
    description: 'Browse our collection of photos from boat tours and excursions in Alcudia Bay, Mallorca.',
    url: galleryUrl,
    inLanguage: locale,
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
