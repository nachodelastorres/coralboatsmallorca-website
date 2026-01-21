import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateMorningTourMetadata } from '@/lib/metadata-helpers';
import { getDictionary } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';

// SSR Components (Server-rendered for SEO)
import MorningTourHeroSSR from '@/components/premium/tours/MorningTourHeroSSR';
import MorningTourDetailsSSR from '@/components/premium/tours/MorningTourDetailsSSR';
import MorningTourItinerarySSR from '@/components/premium/tours/MorningTourItinerarySSR';
import MorningTourBookingSSR from '@/components/premium/tours/MorningTourBookingSSR';
import MorningTourGallerySSR from '@/components/premium/tours/MorningTourGallerySSR';
import RelatedToursSSR from '@/components/premium/tours/RelatedToursSSR';
import BlogPreviewSectionSSR from '@/components/premium/BlogPreviewSectionSSR';

// Blog data for SSR
import { blogDataOne } from '@/data/blog-data';

import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';
import ViewContentTracker from '@/components/tracking/ViewContentTracker';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateMorningTourMetadata(params.lang);
}

// Make this an async Server Component to load translations server-side
export default async function MorningTour({ params }: PageProps) {
  // Load dictionary on the server
  const dict = await getDictionary(params.lang);

  // Access morningTour translations
  const t = (dict.morningTour || {}) as Record<string, Record<string, string>>;
  const hero = (t.hero || {}) as Record<string, string>;
  const details = (t.details || {}) as Record<string, string>;
  const itinerary = (t.itinerary || {}) as Record<string, string>;
  const booking = (t.booking || {}) as Record<string, string>;

  // Access premium.tours for price labels
  const premium = (dict.premium || {}) as Record<string, Record<string, string>>;
  const tours = (premium.tours || {}) as Record<string, string>;

  const canonicalUrl = `https://www.coralboatsmallorca.com/${params.lang}/alcudia-morning-boat-tour`;

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
        "name": menu.morningTour || "Morning Boat Tour",
        "item": canonicalUrl
      }
    ]
  };

  // FAQPage Schema - Uses same FAQs as visible on page (translated)
  // This ensures consistency between visible content and structured data
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
          "text": booking.faq2Answer || "Yes! Our morning tour is perfect for families. Children of all ages are welcome, and we provide life jackets and flotation devices."
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
        "name": booking.faq4Question || "Can non-swimmers participate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": booking.faq4Answer || "Absolutely! You can enjoy the boat ride, scenery, and food without swimming. We provide life jackets for those who want to try."
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
    "name": hero.title || "Morning Boat Tour in Alcudia Bay",
    "description": hero.subtitle || "Discover the Bay of Alcudia on our 4-hour morning boat tour. Explore hidden coves, swim in crystal-clear waters, and enjoy authentic Mallorcan tapas.",
    "image": "https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/excursion-barco-isla-alcanada-puerto-alcudia.webp",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "touristType": ["Families", "Couples", "Friends", "Solo Travelers"],
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": 6,
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
            "name": "Coll Baix",
            "description": itinerary.step2Description || "Hidden pristine beach with crystal-clear turquoise waters for snorkeling."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step3Title || "Coastal Cruise",
            "description": itinerary.step3Description || "Sail along Mallorca's beautiful northern coastline."
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "TouristDestination",
            "name": "Alcanada",
            "description": itinerary.step4Description || "Island and lighthouse for swimming with tapas and sangria."
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step5Title || "Scenic Return",
            "description": itinerary.step5Description || "Relax on deck cruising back to port."
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "TouristDestination",
            "name": itinerary.step6Title || "Arrival",
            "description": itinerary.step6Description || "Return to the marina with unforgettable memories."
          }
        }
      ]
    },
    "duration": "PT4H",
    "startDate": "2026-05-01",
    "endDate": "2026-10-31",
    "schedule": {
      "@type": "Schedule",
      "repeatFrequency": "Daily",
      "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "startTime": "9:30",
      "scheduleTimezone": "Europe/Madrid"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": `${tours.adults || "Adults"} ${tours.adults_age || "(13+ years)"}`,
        "price": "68.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "validThrough": "2026-10-31",
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
        "name": `${tours.children || "Children"} ${tours.children_age || "(4-12 years)"}`,
        "price": "48.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "validThrough": "2026-10-31",
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
    badge: hero.badge || 'Morning Adventure',
    title: hero.title || 'Morning Boat Tour in Alcudia Bay',
    subtitle: hero.subtitle || 'Start your day with crystal-clear waters, snorkeling in hidden coves, and authentic Mallorcan tapas',
    durationLabel: hero.durationLabel || 'Duration',
    durationValue: hero.durationValue || '4 Hours',
    departureLabel: hero.departureLabel || 'Departure',
    departureValue: hero.departureValue || '9:30 AM',
    groupSizeLabel: hero.groupSizeLabel || 'Group Size',
    groupSizeValue: hero.groupSizeValue || 'Small Groups',
    ctaBook: hero.ctaBook || 'Book Your Morning Tour',
    ctaLearnMore: hero.ctaLearnMore || 'Learn More',
    adults: tours.adults || 'Adults',
    children: tours.children || 'Children',
    infants: tours.infants || 'Infants',
    free: tours.free || 'Free',
  };

  // Details texts
  const detailsTexts = {
    sectionLabel: details.sectionLabel || 'Tour Overview',
    sectionTitle: details.sectionTitle || 'The Perfect Morning in Mallorca',
    paragraph1: details.paragraph1 || 'Our Morning Adventure boat tour is the perfect way to experience the natural beauty of Alcudia Bay in Mallorca.',
    paragraph2: details.paragraph2 || "You'll sail aboard our classic 1968 boat, exploring hidden coves, pristine beaches, and spectacular snorkeling spots.",
    paragraph3: details.paragraph3 || 'The morning light creates perfect conditions for underwater photography, and you can see colorful fish and Mediterranean marine life.',
    galleryLink: details.galleryLink || 'Explore Photo Gallery',
    highlightsTitle: details.highlightsTitle || 'Why Choose the Morning Tour?',
    highlights: [
      details.highlight1 || 'Best time for snorkeling with calm, crystal-clear waters',
      details.highlight2 || 'Visit hidden coves and secret beaches only accessible by boat',
      details.highlight3 || 'Spot colorful Mediterranean fish and marine life',
      details.highlight4 || 'Swim in turquoise waters of the Bay of Alcudia',
      details.highlight5 || 'Enjoy fresh Mallorcan tapas and refreshing drinks on board',
      details.highlight6 || 'Small group experience with personalized attention',
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
    sectionTitle: itinerary.sectionTitle || 'Your Morning Adventure Timeline',
    sectionDescription: itinerary.sectionDescription || 'A detailed breakdown of your 4-hour boat tour experience in the Bay of Alcudia.',
    steps: [
      {
        time: itinerary.step1Time || '9:30 AM',
        title: itinerary.step1Title || "Departure from Port d'Alcúdia",
        description: itinerary.step1Description || "Meet at Port d'Alcúdia marina. Board our classic boat and receive a safety briefing.",
        icon: 'fa-anchor',
        image: '/assets/img/premium/morning_new/embarque.webp'
      },
      {
        time: itinerary.step2Time || '10:00 AM',
        title: itinerary.step2Title || 'First Swimming & Snorkeling Stop',
        description: itinerary.step2Description || 'Arrive at Coll Baix beach with crystal-clear turquoise waters. Enjoy snorkeling with provided equipment.',
        icon: 'fa-water',
        image: '/assets/img/premium/morning_new/coll baix 2.webp'
      },
      {
        time: itinerary.step3Time || '11:00 AM',
        title: itinerary.step3Title || 'Coastal Cruise & Sightseeing',
        description: itinerary.step3Description || "Sail along Mallorca's beautiful northern coastline, exploring dramatic cliffs and sea caves.",
        icon: 'fa-ship',
        image: '/assets/img/premium/morning_new/tour.webp'
      },
      {
        time: itinerary.step4Time || '11:45 AM',
        title: itinerary.step4Title || 'Second Swimming Stop & Tapas',
        description: itinerary.step4Description || 'Stop at Alcanada island and lighthouse for swimming. Enjoy authentic Mallorcan tapas and sangria.',
        icon: 'fa-utensils',
        image: '/assets/img/premium/morning_new/matress.webp'
      },
      {
        time: itinerary.step5Time || '1:00 PM',
        title: itinerary.step5Title || 'Scenic Return Journey',
        description: itinerary.step5Description || "Relax on deck as we cruise back to Port d'Alcúdia, taking in the stunning coastal views.",
        icon: 'fa-sun',
        image: '/assets/img/premium/morning_new/aina.webp'
      },
      {
        time: itinerary.step6Time || '1:30 PM',
        title: itinerary.step6Title || "Arrival at Port d'Alcúdia",
        description: itinerary.step6Description || 'Return to the marina with unforgettable memories of your morning adventure.',
        icon: 'fa-flag-checkered',
        image: '/assets/img/premium/morning_new/babor.webp'
      }
    ],
    ctaTitle: itinerary.ctaTitle || 'Ready to Experience the Best Morning Boat Tour in Alcudia?',
    ctaDescription: itinerary.ctaDescription || "Join our premium morning boat excursion in Mallorca's Bay of Alcudia.",
    ctaButton: itinerary.ctaButton || 'Secure Your Spot Today',
  };

  // Booking texts
  const bookingTexts = {
    sectionLabel: booking.sectionLabel || 'Book Your Adventure',
    sectionTitle: booking.sectionTitle || 'Reserve Your Morning Tour',
    sectionDescription: booking.sectionDescription || 'Join us for an unforgettable morning exploring the Bay of Alcudia',
    priceTitle: booking.priceTitle || 'Price per Person',
    priceValue: booking.priceValue || '€68',
    adults: tours.adults || 'Adults',
    adultsAge: tours.adults_age || '(13+ years)',
    children: tours.children || 'Children',
    childrenAge: tours.children_age || '(4-12 years)',
    infants: tours.infants || 'Infants',
    infantsAge: tours.infants_age || '(0-3 years)',
    free: tours.free || 'Free',
    durationTitle: booking.durationTitle || 'Duration & Departure',
    durationValue: booking.durationValue || '4 hours | 9:30 AM',
    durationNote: booking.durationNote || 'Returns at 1:30 PM',
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
    ctaButton: booking.ctaButton || 'Book Your Morning Tour Now',
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
        answer: booking.faq2Answer || 'Yes! Our morning tour is perfect for families. Children of all ages are welcome, and we provide life jackets.',
      },
      {
        question: booking.faq3Question || 'What if the weather is bad?',
        answer: booking.faq3Answer || "Safety is our priority. If weather conditions are unsafe, we'll contact you to reschedule or provide a full refund.",
      },
      {
        question: booking.faq4Question || 'Can non-swimmers participate?',
        answer: booking.faq4Answer || 'Absolutely! You can enjoy the boat ride, scenery, and food without swimming. We provide life jackets for those who want to try.',
      },
    ],
  };

  // Access gallery translations (inside morningTour)
  const gallery = (t.gallery || {}) as Record<string, string>;

  // Access tours.gallery for CTA translations
  const toursSection = (dict.tours || {}) as Record<string, Record<string, string>>;
  const toursGallery = (toursSection.gallery || {}) as Record<string, string>;

  // Gallery texts
  const galleryTexts = {
    label: gallery.label || 'Gallery',
    title: gallery.title || 'Experience the Morning Magic',
    description: gallery.description || 'Discover what awaits you on our morning excursion in Alcudia Bay',
    ctaButton: toursGallery.cta_button || 'View Full Gallery',
    ctaSecondary: toursGallery.cta_secondary || 'Discover more unforgettable moments',
    galleryPath: `/${params.lang}/gallery`,
  };

  // Access relatedTours translations
  const relatedToursT = (dict.relatedTours || {}) as Record<string, unknown>;
  const morningTourT = (relatedToursT.morning || {}) as Record<string, string>;
  const sunsetTourT = (relatedToursT.sunset || {}) as Record<string, string>;
  const charterTourT = (relatedToursT.charter || {}) as Record<string, string>;

  // RelatedTours texts - only show sunset and charter (not morning since we're on morning page)
  const relatedToursTexts = {
    label: (relatedToursT.label as string) || 'Discover More Experiences',
    title: (relatedToursT.title as string) || 'Other Boat Excursions in Alcudia',
    description: (relatedToursT.description as string) || 'Explore our other unique experiences in Alcudia Bay.',
    from: (relatedToursT.from as string) || 'From',
    perPerson: (relatedToursT.per_person as string) || 'per person',
    viewDetails: (relatedToursT.view_details as string) || 'View details',
    tours: [
      {
        id: 'sunset',
        name: sunsetTourT.name || 'Sunset Boat Excursion',
        description: sunsetTourT.description || 'Experience the magic of a Mediterranean sunset.',
        time: sunsetTourT.time || '18:00 - 21:00',
        duration: sunsetTourT.duration || '3 hours',
        price: sunsetTourT.price || '€65',
        highlights: sunsetTourT.highlights || 'Spectacular sunset • Romantic atmosphere',
        image: '/assets/img/premium/home_new/card_sunset.webp',
        link: `/${params.lang}/alcudia-sunset-boat-tour`,
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
          tourName="Morning Boat Tour Alcudia"
          tourSlug="alcudia-morning-boat-tour"
        />
        <HeaderSSR locale={params.lang as Locale} translations={getHeaderTranslations(dict)} hasTopBar />

        <main>
          {/* ============================================ */}
          {/* SSR Components - Server-rendered for SEO    */}
          {/* ============================================ */}
          <MorningTourHeroSSR texts={heroTexts} />
          <MorningTourDetailsSSR texts={detailsTexts} />
          <MorningTourItinerarySSR texts={itineraryTexts} />

          {/* Gallery - SSR header + Client interactivity */}
          <MorningTourGallerySSR texts={galleryTexts} />

          {/* Booking with FAQs - SSR for SEO */}
          <MorningTourBookingSSR texts={bookingTexts} />

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
