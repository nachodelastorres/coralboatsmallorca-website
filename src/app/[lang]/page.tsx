import { Metadata } from 'next';
import HomePremium from '@/pages/homes/home-premium';
import { PageProps } from '@/types/params';
import { generateHomeMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateHomeMetadata(params.lang);
}

export default function Home({ params }: PageProps) {
  const canonicalUrl = `https://www.coralboatsmallorca.com/${params.lang}`;

  // VideoObject Schema (moved from client-side for better SEO detection)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": "https://www.coralboatsmallorca.com/#hero-video",
    "name": "Coral Boats Mallorca - Boat Tours in Alcudia Bay",
    "description": "Experience the beauty of Alcudia Bay aboard our classic wooden boat. Discover hidden coves, crystal-clear waters, and unforgettable Mediterranean moments.",
    "thumbnailUrl": "https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca-thumbnail.webp",
    "uploadDate": "2024-04-01T09:00:00+02:00",
    "duration": "PT33S",
    "contentUrl": "https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca.mp4",
    "embedUrl": canonicalUrl,
    "encodingFormat": "video/mp4",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "inLanguage": params.lang,
    "isFamilyFriendly": true,
    "regionsAllowed": "ES,EU",
    "potentialAction": {
      "@type": "WatchAction",
      "target": canonicalUrl
    }
  };

  // ItemList Schema for Featured Tours
  const toursItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonicalUrl}#tours-list`,
    "name": "Boat Tours in Alcudia Bay",
    "description": "Discover our boat tour experiences in the Bay of Alcudia, Mallorca",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "TouristTrip",
          "@id": `https://www.coralboatsmallorca.com/${params.lang}/alcudia-morning-boat-tour#tour`,
          "name": "Morning Boat Tour Alcudia",
          "description": "4-hour morning boat tour exploring Coll Baix and Alcanada",
          "image": "https://www.coralboatsmallorca.com/assets/img/premium/home_new/card_morning.webp",
          "url": `https://www.coralboatsmallorca.com/${params.lang}/alcudia-morning-boat-tour`,
          "duration": "PT4H",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0.00",
            "highPrice": "68.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "TouristTrip",
          "@id": `https://www.coralboatsmallorca.com/${params.lang}/alcudia-sunset-boat-tour#tour`,
          "name": "Sunset Boat Tour Alcudia",
          "description": "3-hour sunset tour to Cabo Menorca and Alcanada",
          "image": "https://www.coralboatsmallorca.com/assets/img/premium/home_new/card_sunset.webp",
          "url": `https://www.coralboatsmallorca.com/${params.lang}/alcudia-sunset-boat-tour`,
          "duration": "PT3H",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0.00",
            "highPrice": "65.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  };

  // ItemList Schema for Featured Blog Posts (5 most recent)
  const blogItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonicalUrl}#blog-list`,
    "name": "Latest Blog Posts - Coral Boats Mallorca",
    "description": "Discover tips, guides, and inspiration for your boat trips in Mallorca",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "BlogPosting",
          "@id": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/guia-puerto-alcudia-mallorca#blogposting`,
          "headline": "Complete Guide to Puerto de Alcudia",
          "url": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/guia-puerto-alcudia-mallorca`
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "BlogPosting",
          "@id": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/vida-marina-bahia-alcudia-especies-mediterraneo#blogposting`,
          "headline": "Marine Life in Alcudia Bay",
          "url": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/vida-marina-bahia-alcudia-especies-mediterraneo`
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "BlogPosting",
          "@id": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/costa-norte-mallorca-acantilados-calas-secretas#blogposting`,
          "headline": "North Coast of Mallorca - Cliffs and Secret Coves",
          "url": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/costa-norte-mallorca-acantilados-calas-secretas`
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "BlogPosting",
          "@id": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/mallorca-september-best-things-to-do#blogposting`,
          "headline": "Mallorca in September - Best Things to Do",
          "url": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/mallorca-september-best-things-to-do`
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "BlogPosting",
          "@id": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/descubre-alcanada-playa-faro-isla-alcudia#blogposting`,
          "headline": "Discover Alcanada - Beach, Lighthouse and Island",
          "url": `https://www.coralboatsmallorca.com/${params.lang}/blog-details/descubre-alcanada-playa-faro-isla-alcudia`
        }
      }
    ]
  };

  // Review Schemas for Testimonials
  const review1Schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${canonicalUrl}#review-1`,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Sarah & James Mitchell"
    },
    "reviewBody": "Our sunset tour with Coral Boats was the highlight of our Mallorca vacation! The captain was incredibly knowledgeable about the area and took us to the most stunning hidden coves. The homemade sangria was delicious, and the tapas were authentic and fresh. We celebrated our anniversary on board, and the crew made it truly special. Highly recommend for couples!",
    "itemReviewed": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "datePublished": "2024-08-15"
  };

  const review2Schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${canonicalUrl}#review-2`,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Familie Schmidt"
    },
    "reviewBody": "Wunderbare Erfahrung! We took the morning tour with our two children (ages 8 and 12) and they absolutely loved it. The snorkeling was fantastic—we saw so many fish! The crew was patient and helpful with the kids, making sure everyone felt safe and comfortable. The boat itself is beautiful and well-maintained. Ein perfekter Familientag!",
    "itemReviewed": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "datePublished": "2024-07-22"
  };

  const review3Schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${canonicalUrl}#review-3`,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Marco Rossi"
    },
    "reviewBody": "Esperienza fantastica! I organized a private charter for my company's team building event, and it exceeded all expectations. The crew was professional, the boat was perfect for our group of 20, and the entire experience was seamlessly organized. Great food, beautiful locations, and excellent service. Already planning our return next year!",
    "itemReviewed": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "datePublished": "2024-09-10"
  };

  const review4Schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${canonicalUrl}#review-4`,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Sophie Dubois"
    },
    "reviewBody": "Magnifique! The afternoon tour was absolutely perfect. We visited places we would never have found on our own. The water was crystal clear, and the paddle boarding was so much fun. The crew shared interesting stories about Mallorca and made us feel like friends, not just customers. The value for money is excellent—everything is included!",
    "itemReviewed": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "datePublished": "2024-08-28"
  };

  // ImageGallery Schema for Featured Images
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${canonicalUrl}#image-gallery`,
    "name": "Coral Boats Mallorca - Photo Gallery",
    "description": "Discover the beauty of our boat tours through our curated photo gallery",
    "about": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "image": [
      {
        "@type": "ImageObject",
        "@id": `${canonicalUrl}#gallery-image-1`,
        "url": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/classic_boat.webp",
        "contentUrl": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/classic_boat.webp",
        "name": "Classic Wooden Boat",
        "description": "Our beautiful classic wooden boat - traditional Mediterranean charm",
        "encodingFormat": "image/webp"
      },
      {
        "@type": "ImageObject",
        "@id": `${canonicalUrl}#gallery-image-2`,
        "url": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/mallorca_views.webp",
        "contentUrl": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/mallorca_views.webp",
        "name": "Stunning Mallorca Coastal Views",
        "description": "Breathtaking views of Mallorca's coastline from the sea",
        "encodingFormat": "image/webp"
      },
      {
        "@type": "ImageObject",
        "@id": `${canonicalUrl}#gallery-image-3`,
        "url": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/sangria_tapas.webp",
        "contentUrl": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/sangria_tapas.webp",
        "name": "Authentic Sangria and Mallorcan Tapas",
        "description": "Enjoy homemade sangria and traditional Mallorcan tapas on board",
        "encodingFormat": "image/webp"
      },
      {
        "@type": "ImageObject",
        "@id": `${canonicalUrl}#gallery-image-4`,
        "url": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/friends_fun.webp",
        "contentUrl": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/friends_fun.webp",
        "name": "Friends Having Fun",
        "description": "Create unforgettable memories with friends and family on our boat tours",
        "encodingFormat": "image/webp"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toursItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(review1Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(review2Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(review3Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(review4Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <HomePremium />
    </>
  );
}
