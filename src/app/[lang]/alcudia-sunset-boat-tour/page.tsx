import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateSunsetTourMetadata } from '@/lib/metadata-helpers';
import { getDictionary } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';

// SSR Components (Server-rendered for SEO)
import SunsetTourHeroSSR from '@/components/premium/tours/SunsetTourHeroSSR';
import SunsetTourDetailsSSR from '@/components/premium/tours/SunsetTourDetailsSSR';
import SunsetTourItinerarySSR from '@/components/premium/tours/SunsetTourItinerarySSR';
import SunsetTourBookingSSR from '@/components/premium/tours/SunsetTourBookingSSR';
import SunsetTourGallerySSR from '@/components/premium/tours/SunsetTourGallerySSR';
import RelatedToursSSR from '@/components/premium/tours/RelatedToursSSR';
import BlogPreviewSectionSSR from '@/components/premium/BlogPreviewSectionSSR';

// Blog data for SSR
import { blogDataOne } from '@/data/blog-data';

import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';
import ViewContentTracker from '@/components/tracking/ViewContentTracker';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateSunsetTourMetadata(params.lang);
}

// Make this an async Server Component to load translations server-side
export default async function SunsetTour({ params }: PageProps) {
  // Load dictionary on the server
  const dict = await getDictionary(params.lang);

  // Access sunsetTour translations
  const t = (dict.sunsetTour || {}) as Record<string, Record<string, string>>;
  const hero = (t.hero || {}) as Record<string, string>;
  const details = (t.details || {}) as Record<string, string>;
  const itinerary = (t.itinerary || {}) as Record<string, string>;
  const booking = (t.booking || {}) as Record<string, string>;

  // Access premium.tours for price labels
  const premium = (dict.premium || {}) as Record<string, Record<string, string>>;
  const tours = (premium.tours || {}) as Record<string, string>;

  const canonicalUrl = `https://www.coralboatsmallorca.com/${params.lang}/alcudia-sunset-boat-tour`;

  // Access menu translations for breadcrumbs
  const menu = (dict.menu || {}) as Record<string, string>;

  // ============================================
  // STRUCTURED DATA SCHEMAS (Translated)
  // ============================================

  // BreadcrumbList Schema - Translated
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": menu.home || "Home",
        "item": `https://www.coralboatsmallorca.com/${params.lang}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": menu.allTours || "Boat Tours",
        "item": `https://www.coralboatsmallorca.com/${params.lang}/boat-tours-alcudia`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": menu.sunsetTour || "Sunset Boat Tour",
        "item": canonicalUrl
      }
    ]
  };

  // FAQPage Schema - Uses same FAQs as visible on page (translated)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": params.lang,
    "mainEntity": [
      {
        "@type": "Question",
        "name": booking.faq1Question || "What should I bring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": booking.faq1Answer || "Bring swimwear, towel, sunscreen, sunglasses, and a camera. We provide all snorkeling equipment, paddle boards, food, and drinks."
        }
      },
      {
        "@type": "Question",
        "name": booking.faq2Question || "Is it suitable for children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": booking.faq2Answer || "Yes! Our sunset tour is perfect for families. Children of all ages are welcome, and we provide life jackets and flotation devices."
        }
      },
      {
        "@type": "Question",
        "name": booking.faq3Question || "What if the weather is bad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": booking.faq3Answer || "Safety is our priority. If weather conditions are unsafe, we'll contact you to reschedule or provide a full refund."
        }
      },
      {
        "@type": "Question",
        "name": booking.faq4Question || "What is the atmosphere like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": booking.faq4Answer || "Pure Mediterranean magic! The sunset tour offers a relaxed and fun atmosphere, perfect for couples, friends, families and anyone who wants to enjoy a beautiful Mallorcan evening."
        }
      }
    ]
  };

  // TouristTrip Schema - Translated
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${canonicalUrl}#tour`,
    "inLanguage": params.lang,
    "name": hero.title || "Sunset Boat Tour in Alcudia Bay",
    "description": hero.subtitle || "Experience the magic of a Mediterranean sunset on our 3-hour evening boat tour.",
    "image": "https://www.coralboatsmallorca.com/assets/img/premium/sunset_new/sunset_hero.webp",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "touristType": ["Couples", "Families", "Friends", "Photographers", "Romantic Travelers"],
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step1Title || "Departure from Port d'Alcúdia",
            "description": itinerary.step1Description || "Board our classic boat and receive a safety briefing."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step2Title || "Coastal Cruise & Sightseeing",
            "description": itinerary.step2Description || "Sail along Mallorca's beautiful northern coastline."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step3Title || "Swimming Stop & Sunset Tapas",
            "description": itinerary.step3Description || "Enjoy swimming and tapas while watching the sunset."
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step4Title || "Return Journey",
            "description": itinerary.step4Description || "Relax on deck cruising back to port under twilight skies."
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step5Title || "Arrival at Port d'Alcúdia",
            "description": itinerary.step5Description || "Return to the marina with unforgettable memories."
          }
        }
      ]
    },
    "duration": "PT3H",
    "startDate": "2026-05-01",
    "endDate": "2026-10-31",
    "schedule": {
      "@type": "Schedule",
      "repeatFrequency": "Daily",
      "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "startTime": "18:00",
      "scheduleTimezone": "Europe/Madrid"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": `${tours.adults || "Adults"} ${tours.adults_age || "(13+ years)"}`,
        "price": "65.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "validThrough": "2026-10-31",
        "url": canonicalUrl,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "65.00",
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
        "name": `${tours.children || "Children"} ${tours.children_age || "(4-12 years)"}`,
        "price": "45.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "validThrough": "2026-10-31",
        "url": canonicalUrl,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "45.00",
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
        "name": `${tours.infants || "Infants"} ${tours.infants_age || "(0-3 years)"} - ${tours.free || "Free"}`,
        "price": "0.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "validThrough": "2026-10-31",
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
      "name": booking.meetingPointValue || "Port d'Alcúdia Marina",
      "description": details.info5 || "Departure from Port d'Alcúdia",
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
      "name": booking.meetingPointValue || "Port d'Alcúdia Marina"
    },
    "arrivalLocation": {
      "@type": "Place",
      "@id": "https://www.coralboatsmallorca.com/#meeting-point",
      "name": booking.meetingPointValue || "Port d'Alcúdia Marina"
    },
    "includedInDataCatalog": {
      "@type": "DataCatalog",
      "name": "Coral Boats Tours",
      "url": `https://www.coralboatsmallorca.com/${params.lang}/boat-tours-alcudia`
    }
  };

  // ============================================
  // PREPARE TEXTS FOR SSR COMPONENTS
  // ============================================

  // Hero texts
  const heroTexts = {
    badge: hero.badge || 'Sunset Magic',
    title: hero.title || 'Sunset Boat Tour in Alcudia Bay',
    subtitle: hero.subtitle || 'Experience the magic of a Mediterranean sunset',
    durationLabel: hero.durationLabel || 'Duration',
    durationValue: hero.durationValue || '3 Hours',
    departureLabel: hero.departureLabel || 'Departure',
    departureValue: hero.departureValue || '6:00 PM',
    groupSizeLabel: hero.groupSizeLabel || 'Group Size',
    groupSizeValue: hero.groupSizeValue || 'Small Groups',
    ctaBook: hero.ctaBook || 'Book Your Sunset Tour',
    ctaLearnMore: hero.ctaLearnMore || 'Learn More',
    adults: tours.adults || 'Adults',
    children: tours.children || 'Children',
    infants: tours.infants || 'Infants',
    free: tours.free || 'Free',
  };

  // Details texts
  const detailsTexts = {
    sectionLabel: details.sectionLabel || 'Tour Overview',
    sectionTitle: details.sectionTitle || 'The Perfect Evening in Mallorca',
    paragraph1: details.paragraph1 || 'Our Sunset Magic boat tour is the perfect way to experience the magical beauty of sunset in Alcudia Bay, Mallorca.',
    paragraph2: details.paragraph2 || "You'll sail aboard our classic 1968 boat, exploring hidden coves, pristine beaches, and spectacular sunset viewpoints.",
    paragraph3: details.paragraph3 || 'The evening light creates perfect conditions for stunning photography, and you can swim in warm waters as the sun sets on the horizon.',
    galleryLink: details.galleryLink || 'Explore Photo Gallery',
    highlightsTitle: details.highlightsTitle || 'Why Choose the Sunset Tour?',
    highlights: [
      details.highlight1 || 'Watch a spectacular Mediterranean sunset from the sea',
      details.highlight2 || 'Perfect golden light for stunning photography',
      details.highlight3 || 'Explore pristine beaches and unique coastal landscapes',
      details.highlight4 || 'Swim in warm waters of Alcudia Bay at sunset',
      details.highlight5 || 'Enjoy Mallorcan tapas and refreshing drinks on board',
      details.highlight6 || 'Relaxed Mediterranean atmosphere, perfect for unwinding',
    ],
    includedTitle: details.includedTitle || "What's Included",
    included: [
      { icon: 'fa-utensils', text: details.included1 || 'Authentic Mallorcan Tapas' },
      { icon: 'fa-champagne-glasses', text: details.included2 || 'One Free Drink or Sangria' },
      { icon: 'fa-water', text: details.included3 || 'Snorkeling Equipment' },
      { icon: 'fa-person-swimming', text: details.included4 || 'Paddle Boards (SUP)' },
      { icon: 'fa-life-ring', text: details.included5 || 'Safety Equipment & Insurance' },
      { icon: 'fa-user-tie', text: details.included6 || 'Professional Crew & Captain' },
    ],
    importantInfoTitle: details.importantInfoTitle || 'Important Information',
    infoItems: [
      details.info1 || 'Arrive 30 minutes before departure time',
      details.info2 || 'Suitable for all ages and swimming levels',
      details.info3 || 'Bring sunscreen, towel, and swimwear',
      details.info4 || 'Free cancellation up to 24 hours before',
      details.info5 || "Departure from Port d'Alcúdia",
    ],
    ctaBook: details.ctaBook || 'Click Here to Book Your Spot',
  };

  // Itinerary texts
  const itineraryTexts = {
    sectionLabel: itinerary.sectionLabel || 'Itinerary',
    sectionTitle: itinerary.sectionTitle || 'Your Sunset Adventure Timeline',
    sectionDescription: itinerary.sectionDescription || 'A detailed breakdown of your 3-hour boat tour experience in the Bay of Alcudia.',
    steps: [
      {
        time: itinerary.step1Time || '6:00 PM',
        title: itinerary.step1Title || "Departure from Port d'Alcúdia",
        description: itinerary.step1Description || "Meet at Port d'Alcúdia marina. Board our classic boat and receive a safety briefing.",
        icon: 'fa-anchor',
        image: '/assets/img/premium/morning_new/embarque.webp'
      },
      {
        time: itinerary.step2Time || '6:30 PM',
        title: itinerary.step2Title || 'Coastal Cruise & Sightseeing',
        description: itinerary.step2Description || "Sail along Mallorca's beautiful northern coastline, exploring cliffs, coves and sea caves.",
        icon: 'fa-ship',
        image: '/assets/img/premium/morning_new/tour.webp'
      },
      {
        time: itinerary.step3Time || '7:15 PM',
        title: itinerary.step3Title || 'Swimming Stop, Tapas & Sunset',
        description: itinerary.step3Description || 'Arrive at Alcanada island and lighthouse. Enjoy swimming, tapas and sangria while watching the sunset.',
        icon: 'fa-utensils',
        image: '/assets/img/premium/morning_new/matress.webp'
      },
      {
        time: itinerary.step4Time || '8:30 PM',
        title: itinerary.step4Title || 'Return to Port',
        description: itinerary.step4Description || "Relax on deck as we cruise back to Port d'Alcúdia under the beautiful twilight sky.",
        icon: 'fa-sun',
        image: '/assets/img/premium/sunset_new/sunset_hero.webp'
      },
      {
        time: itinerary.step5Time || '9:00 PM',
        title: itinerary.step5Title || "Arrival at Port d'Alcúdia",
        description: itinerary.step5Description || 'Return to the marina with unforgettable memories of your magical sunset adventure.',
        icon: 'fa-flag-checkered',
        image: '/assets/img/premium/sunset_new/sunset_port.webp'
      }
    ],
    ctaTitle: itinerary.ctaTitle || 'Ready to Experience the Magic of Sunset in Alcudia?',
    ctaDescription: itinerary.ctaDescription || "Join our premium Sunset Magic boat tour in Mallorca's Bay of Alcudia.",
    ctaButton: itinerary.ctaButton || 'Secure Your Spot Today',
  };

  // Booking texts
  const bookingTexts = {
    sectionLabel: booking.sectionLabel || 'Book Your Adventure',
    sectionTitle: booking.sectionTitle || 'Reserve Your Sunset Tour',
    sectionDescription: booking.sectionDescription || 'Join us for an unforgettable evening exploring the Bay of Alcudia',
    priceTitle: booking.priceTitle || 'Price per Person',
    priceValue: booking.priceValue || '€65',
    adults: tours.adults || 'Adults',
    adultsAge: tours.adults_age || '(13+ years)',
    children: tours.children || 'Children',
    childrenAge: tours.children_age || '(4-12 years)',
    infants: tours.infants || 'Infants',
    infantsAge: tours.infants_age || '(0-3 years)',
    free: tours.free || 'Free',
    durationTitle: booking.durationTitle || 'Duration & Departure',
    durationValue: booking.durationValue || '3 hours | 6:00 PM',
    durationNote: booking.durationNote || 'Returns at 9:00 PM',
    meetingPointTitle: booking.meetingPointTitle || 'Meeting Point',
    meetingPointValue: booking.meetingPointValue || "Port d'Alcúdia Marina",
    meetingPointCoords: booking.meetingPointCoords || '39°50\'13.1"N 3°08\'22.7"E',
    whyBookTitle: booking.whyBookTitle || 'Why Book with Us?',
    whyBookItems: [
      booking.whyBook1 || 'Instant confirmation',
      booking.whyBook2 || 'Free cancellation up to 24h',
      booking.whyBook3 || 'Small group experience',
      booking.whyBook4 || 'Authentic Mallorcan food included',
      booking.whyBook5 || 'Professional crew & equipment',
    ],
    ctaCardTitle: booking.ctaCardTitle || 'Start Your Booking Journey',
    ctaCardDescription: booking.ctaCardDescription || 'Choose your date and reserve your experience in just a few clicks',
    ctaButton: booking.ctaButton || 'Book Your Sunset Tour Now',
    trustBadge1: booking.trustBadge1 || 'Secure',
    trustBadge2: booking.trustBadge2 || 'Instant',
    trustBadge3: booking.trustBadge3 || 'Flexible',
    faqTitle: booking.faqTitle || 'Frequently Asked Questions',
    faqs: [
      {
        question: booking.faq1Question || 'What should I bring?',
        answer: booking.faq1Answer || 'Bring swimwear, towel, sunscreen, sunglasses, and a camera. We provide all snorkeling equipment, paddle boards, food, and drinks.',
      },
      {
        question: booking.faq2Question || 'Is it suitable for children?',
        answer: booking.faq2Answer || 'Yes! Our sunset tour is perfect for families. Children of all ages are welcome, and we provide life jackets.',
      },
      {
        question: booking.faq3Question || 'What if the weather is bad?',
        answer: booking.faq3Answer || "Safety is our priority. If weather conditions are unsafe, we'll contact you to reschedule or provide a full refund.",
      },
      {
        question: booking.faq4Question || 'What is the atmosphere like?',
        answer: booking.faq4Answer || 'Pure Mediterranean magic! The sunset tour offers a relaxed and fun atmosphere, perfect for couples, friends, families and anyone who wants to enjoy a beautiful Mallorcan evening.',
      },
    ],
  };

  // Access gallery translations (inside sunsetTour)
  const gallery = (t.gallery || {}) as Record<string, string>;

  // Access tours.gallery for CTA translations
  const toursSection = (dict.tours || {}) as Record<string, Record<string, string>>;
  const toursGallery = (toursSection.gallery || {}) as Record<string, string>;

  // Gallery texts
  const galleryTexts = {
    label: gallery.label || 'Gallery',
    title: gallery.title || 'Magical Sunset Moments',
    description: gallery.description || 'Discover the beauty of our sunset tour in Alcudia Bay',
    ctaButton: toursGallery.cta_button || 'View Full Gallery',
    ctaSecondary: toursGallery.cta_secondary || 'Discover more unforgettable moments',
    galleryPath: `/${params.lang}/gallery`,
  };

  // Access relatedTours translations
  const relatedToursT = (dict.relatedTours || {}) as Record<string, unknown>;
  const morningTourT = (relatedToursT.morning || {}) as Record<string, string>;
  const charterTourT = (relatedToursT.charter || {}) as Record<string, string>;

  // RelatedTours texts - only show morning and charter (not sunset since we're on sunset page)
  const relatedToursTexts = {
    label: (relatedToursT.label as string) || 'Discover More Experiences',
    title: (relatedToursT.title as string) || 'Other Boat Excursions in Alcudia',
    description: (relatedToursT.description as string) || 'Explore our other unique experiences in Alcudia Bay.',
    from: (relatedToursT.from as string) || 'From',
    perPerson: (relatedToursT.per_person as string) || 'per person',
    viewDetails: (relatedToursT.view_details as string) || 'View details',
    tours: [
      {
        id: 'morning',
        name: morningTourT.name || 'Morning Boat Excursion',
        description: morningTourT.description || 'Start your day sailing through crystal-clear waters.',
        time: morningTourT.time || '9:30 - 13:30',
        duration: morningTourT.duration || '4 hours',
        price: morningTourT.price || '€68',
        highlights: morningTourT.highlights || 'Ideal for snorkeling • Calm waters',
        image: '/assets/img/premium/home_new/card_morning.webp',
        link: `/${params.lang}/alcudia-morning-boat-tour`,
      },
      {
        id: 'charter',
        name: charterTourT.name || 'Private Charter',
        description: charterTourT.description || 'Celebrate your special event aboard our classic boat.',
        time: charterTourT.time || 'Flexible',
        duration: charterTourT.duration || '3-4 hours',
        price: charterTourT.price || 'Inquire',
        highlights: charterTourT.highlights || 'Exclusive experience • Fully customizable',
        image: '/assets/img/premium/home_new/card_private.webp',
        link: `/${params.lang}/alcudia-private-boat-charter`,
      },
    ],
  };

  // Access blog section translations
  const blogSection = (dict.blog_section || {}) as Record<string, string>;

  // Helper function to safely get translated string from dictionary
  const getTranslation = (key: string, fallback: string): string => {
    const parts = key.split('.');
    let value: unknown = dict;
    for (const part of parts) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[part];
      } else {
        return fallback;
      }
    }
    return typeof value === 'string' ? value : fallback;
  };

  // Blog Preview texts - translate all blog items
  const translatedBlogs = [...blogDataOne].reverse().slice(0, 8).map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    image: typeof blog.image === 'string' ? blog.image : blog.image.src,
    badgeTitle: getTranslation(blog.badgeTitle!, blog.badgeTitle!),
    title: getTranslation(blog.title, blog.title),
    description: getTranslation(blog.description!, blog.description!),
    publishedDate: getTranslation(blog.publishedDate, blog.publishedDate),
    imageAlt: blog.imageAlt ? getTranslation(blog.imageAlt, blog.imageAlt) : undefined,
    link: `/${params.lang}/blog-details/${blog.slug}`,
  }));

  const blogPreviewTexts = {
    label: blogSection.label || 'Blog',
    title: blogSection.title || 'Discover Mallorca with our tips',
    description: blogSection.description || 'Guides, recommendations and experiences to make the most of your adventure.',
    readTime: blogSection.read_time || '5 min',
    readMore: blogSection.read_more || 'Read more',
    ctaButton: blogSection.cta_button || 'View all articles',
    ctaSecondary: blogSection.cta_secondary || 'Tips, guides and experiences',
    blogPath: `/${params.lang}/blog`,
    blogs: translatedBlogs,
  };

  return (
    <>
      {/* JSON-LD Schemas */}
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

      <Wrapper>
        <ViewContentTracker
          tourName="Sunset Boat Tour Alcudia"
          tourSlug="alcudia-sunset-boat-tour"
        />
        <HeaderSSR locale={params.lang as Locale} translations={getHeaderTranslations(dict)} hasTopBar />

        <main>
          {/* ============================================ */}
          {/* SSR Components - Server-rendered for SEO    */}
          {/* ============================================ */}
          <SunsetTourHeroSSR texts={heroTexts} />
          <SunsetTourDetailsSSR texts={detailsTexts} />
          <SunsetTourItinerarySSR texts={itineraryTexts} />

          {/* Gallery - SSR header + Client interactivity */}
          <SunsetTourGallerySSR texts={galleryTexts} />

          {/* Booking with FAQs - SSR for SEO */}
          <SunsetTourBookingSSR texts={bookingTexts} />

          {/* Related Tours - SSR for SEO */}
          <RelatedToursSSR texts={relatedToursTexts} />

          {/* Blog Preview - SSR for SEO */}
          <BlogPreviewSectionSSR texts={blogPreviewTexts} />
        </main>

        <FooterSSR locale={params.lang as Locale} translations={getFooterTranslations(dict)} />
      </Wrapper>
    </>
  );
}
