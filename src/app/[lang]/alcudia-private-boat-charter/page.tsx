import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generatePrivateCharterMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';

// SSR Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';
import PrivateCharterHeroSSR from '@/components/premium/charter/PrivateCharterHeroSSR';
import PrivateCharterCapacitySSR from '@/components/premium/charter/PrivateCharterCapacitySSR';
import PrivateCharterPricingCTASSR from '@/components/premium/charter/PrivateCharterPricingCTASSR';
import PrivateCharterBookingSSR from '@/components/premium/charter/PrivateCharterBookingSSR';
import PrivateCharterFeaturesSSR from '@/components/premium/charter/PrivateCharterFeaturesSSR';

// Client Components (interactive)
import PrivateCharterEventsClient from '@/components/premium/charter/PrivateCharterEventsClient';
import PrivateCharterGalleryClient from '@/components/premium/charter/PrivateCharterGalleryClient';

// Other Components
import RelatedTours from '@/components/premium/tours/RelatedTours';
import BlogPreviewSection from '@/components/premium/BlogPreviewSection';
import DiscoverAlcudiaSEO from '@/components/premium/DiscoverAlcudiaSEO';
import ViewContentTracker from '@/components/tracking/ViewContentTracker';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generatePrivateCharterMetadata(params.lang);
}

export default async function PrivateCharter({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  const canonicalUrl = `https://www.coralboatsmallorca.com/${locale}/alcudia-private-boat-charter`;
  const pricingPath = `/${locale}/charter-pricing`;
  const galleryPath = `/${locale}/gallery`;

  // ===== HERO TEXTS =====
  const heroTexts = {
    badge: t('privateCharter.hero.badge'),
    title: t('privateCharter.hero.title'),
    subtitle: t('privateCharter.hero.subtitle'),
    capacityLabel: t('privateCharter.hero.capacityLabel'),
    capacityValue: t('privateCharter.hero.capacityValue'),
    durationLabel: t('privateCharter.hero.durationLabel'),
    durationValue: t('privateCharter.hero.durationValue'),
    itineraryLabel: t('privateCharter.hero.itineraryLabel'),
    itineraryValue: t('privateCharter.hero.itineraryValue'),
    cateringLabel: t('privateCharter.hero.cateringLabel'),
    cateringValue: t('privateCharter.hero.cateringValue'),
    ctaPricing: t('privateCharter.hero.ctaPricing'),
    ctaLearnMore: t('privateCharter.hero.ctaLearnMore'),
    pricingPath,
    imageAlt: t('premium.gallery.image_alcanada_lighthouse_trip'),
  };

  // ===== CAPACITY TEXTS =====
  const capacityTexts = {
    sectionLabel: t('privateCharter.capacity.sectionLabel'),
    sectionTitle: t('privateCharter.capacity.sectionTitle'),
    paragraph1: t('privateCharter.capacity.paragraph1'),
    paragraph2: t('privateCharter.capacity.paragraph2'),
    paragraph3: t('privateCharter.capacity.paragraph3'),
    galleryLink: t('privateCharter.capacity.galleryLink'),
    advantagesTitle: t('privateCharter.capacity.advantagesTitle'),
    advantage1: t('privateCharter.capacity.advantage1'),
    advantage2: t('privateCharter.capacity.advantage2'),
    advantage3: t('privateCharter.capacity.advantage3'),
    advantage4: t('privateCharter.capacity.advantage4'),
    advantage5: t('privateCharter.capacity.advantage5'),
    advantage6: t('privateCharter.capacity.advantage6'),
    capacityHighlightsTitle: t('privateCharter.capacity.capacityHighlightsTitle'),
    capacity1Value: t('privateCharter.capacity.capacity1Value'),
    capacity1Label: t('privateCharter.capacity.capacity1Label'),
    capacity2Value: t('privateCharter.capacity.capacity2Value'),
    capacity2Label: t('privateCharter.capacity.capacity2Label'),
    capacity3Value: t('privateCharter.capacity.capacity3Value'),
    capacity3Label: t('privateCharter.capacity.capacity3Label'),
    infoBoxTitle: t('privateCharter.capacity.infoBoxTitle'),
    infoBoxText: t('privateCharter.capacity.infoBoxText'),
    ctaButton: t('privateCharter.capacity.ctaButton'),
    pricingPath,
    cardImageAlt: t('premium.gallery.image_turquoise_trips'),
  };

  // ===== EVENTS TEXTS =====
  const eventsTexts = {
    sectionLabel: t('privateCharter.events.sectionLabel'),
    sectionTitle: t('privateCharter.events.sectionTitle'),
    sectionDescription: t('privateCharter.events.sectionDescription'),
    footerTitle: t('privateCharter.events.footerTitle'),
    footerText: t('privateCharter.events.footerText'),
    eventTypes: [
      {
        id: 'corporate',
        icon: 'fa-briefcase',
        title: t('privateCharter.events.corporate.title'),
        description: t('privateCharter.events.corporate.description'),
        image: '/assets/img/premium/home_new/corporate-partners-private-charter-mallorca.webp',
        features: [
          t('privateCharter.events.corporate.feature1'),
          t('privateCharter.events.corporate.feature2'),
          t('privateCharter.events.corporate.feature3'),
          t('privateCharter.events.corporate.feature4')
        ]
      },
      {
        id: 'birthday',
        icon: 'fa-cake-candles',
        title: t('privateCharter.events.birthday.title'),
        description: t('privateCharter.events.birthday.description'),
        image: '/assets/img/premium/home_new/friends-group-private-charter-mallorca.webp',
        features: [
          t('privateCharter.events.birthday.feature1'),
          t('privateCharter.events.birthday.feature2'),
          t('privateCharter.events.birthday.feature3'),
          t('privateCharter.events.birthday.feature4')
        ]
      },
      {
        id: 'bachelor',
        icon: 'fa-champagne-glasses',
        title: t('privateCharter.events.bachelor.title'),
        description: t('privateCharter.events.bachelor.description'),
        image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
        features: [
          t('privateCharter.events.bachelor.feature1'),
          t('privateCharter.events.bachelor.feature2'),
          t('privateCharter.events.bachelor.feature3'),
          t('privateCharter.events.bachelor.feature4')
        ]
      },
      {
        id: 'family',
        icon: 'fa-heart',
        title: t('privateCharter.events.family.title'),
        description: t('privateCharter.events.family.description'),
        image: '/assets/img/premium/home_new/water-activities-floats-private-charter.webp',
        features: [
          t('privateCharter.events.family.feature1'),
          t('privateCharter.events.family.feature2'),
          t('privateCharter.events.family.feature3'),
          t('privateCharter.events.family.feature4')
        ]
      },
      {
        id: 'friends',
        icon: 'fa-user-group',
        title: t('privateCharter.events.friends.title'),
        description: t('privateCharter.events.friends.description'),
        image: '/assets/img/premium/home_new/friends-enjoying-private-charter-mallorca.webp',
        features: [
          t('privateCharter.events.friends.feature1'),
          t('privateCharter.events.friends.feature2'),
          t('privateCharter.events.friends.feature3'),
          t('privateCharter.events.friends.feature4')
        ]
      },
      {
        id: 'special',
        icon: 'fa-star',
        title: t('privateCharter.events.special.title'),
        description: t('privateCharter.events.special.description'),
        image: '/assets/img/premium/2026/private/tapas-and-sangria-served-in-boat-trip-cruise-mallorca-alcudia.webp',
        features: [
          t('privateCharter.events.special.feature1'),
          t('privateCharter.events.special.feature2'),
          t('privateCharter.events.special.feature3'),
          t('privateCharter.events.special.feature4')
        ]
      }
    ],
  };

  // ===== PRICING CTA TEXTS =====
  const pricingCTATexts = {
    badge: t('privateCharter.pricingCTA.badge'),
    title: t('privateCharter.pricingCTA.title'),
    description: t('privateCharter.pricingCTA.description'),
    button: t('privateCharter.pricingCTA.button'),
    feature1: t('privateCharter.pricingCTA.feature1'),
    feature2: t('privateCharter.pricingCTA.feature2'),
    feature3: t('privateCharter.pricingCTA.feature3'),
    pricingPath,
  };

  // ===== GALLERY TEXTS =====
  // 28 images live in /assets/img/premium/2026/private/. Alt + caption reuse the
  // localized strings under premium.gallery.image_* (already in 6 languages).
  const privateBase = '/assets/img/premium/2026/private';
  const galleryTexts = {
    label: t('privateCharter.gallery.label'),
    title: t('privateCharter.gallery.title'),
    description: t('privateCharter.gallery.description'),
    ctaButton: t('tours.gallery.cta_button'),
    ctaSecondary: t('tours.gallery.cta_secondary'),
    galleryPath,
    images: [
      { src: `${privateBase}/alcanada-island-lighhouse-near-port-of-alcudia-during-boat-trip.webp`, alt: t('premium.gallery.image_alcanada_lighthouse_trip'), caption: t('premium.gallery.image_alcanada_lighthouse_trip') },
      { src: `${privateBase}/coral-boats-mallorca-boat-trips-in-turquoise-water.webp`, alt: t('premium.gallery.image_turquoise_trips'), caption: t('premium.gallery.image_turquoise_trips') },
      { src: `${privateBase}/aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island.webp`, alt: t('premium.gallery.image_aerial_alcanada_lighthouse'), caption: t('premium.gallery.image_aerial_alcanada_lighthouse') },
      { src: `${privateBase}/aereal-view-of-boat-trip-in-mallorca-north-water-classic-vessel.webp`, alt: t('premium.gallery.image_aerial_north_classic'), caption: t('premium.gallery.image_aerial_north_classic') },
      { src: `${privateBase}/scenic-view-of-coll-baix-from-the-sky-during-boat-tour.webp`, alt: t('premium.gallery.image_coll_baix_aerial'), caption: t('premium.gallery.image_coll_baix_aerial') },
      { src: `${privateBase}/crystal-clear-water-in-mallorca-beach-during-boat-tour-alcudia.webp`, alt: t('premium.gallery.image_crystal_clear'), caption: t('premium.gallery.image_crystal_clear') },
      { src: `${privateBase}/coral-boat-ride-in-best-beaches-mallorca-alcudia-views.webp`, alt: t('premium.gallery.image_best_beaches'), caption: t('premium.gallery.image_best_beaches') },
      { src: `${privateBase}/coral-boat-for-water-activities-and-boat-excursiones-mallorca-alcudia.webp`, alt: t('premium.gallery.image_water_activities_boat'), caption: t('premium.gallery.image_water_activities_boat') },
      { src: `${privateBase}/coral-boats-crew-cruise-mallorca-north.webp`, alt: t('premium.gallery.image_crew_cruise'), caption: t('premium.gallery.image_crew_cruise') },
      { src: `${privateBase}/cliffs-caves-and-coves-during-boat-trip-alcudia-mallorca.webp`, alt: t('premium.gallery.image_cliffs_caves_coves'), caption: t('premium.gallery.image_cliffs_caves_coves') },
      { src: `${privateBase}/north-coats-cliffs-coves-mallorca-views-from-boat-trip.webp`, alt: t('premium.gallery.image_north_cliffs'), caption: t('premium.gallery.image_north_cliffs') },
      { src: `${privateBase}/north-mallorca-sea-views-from-back-of-boat-during-water-excursion.webp`, alt: t('premium.gallery.image_sea_views_back'), caption: t('premium.gallery.image_sea_views_back') },
      { src: `${privateBase}/scenic-views-north-mallorca-cliffs-from-relaxed-boat-trip.webp`, alt: t('premium.gallery.image_scenic_relaxed'), caption: t('premium.gallery.image_scenic_relaxed') },
      { src: `${privateBase}/mountain-coastal-view-and-best-boat-ride-in-north-mallorca.webp`, alt: t('premium.gallery.image_mountain_coastal'), caption: t('premium.gallery.image_mountain_coastal') },
      { src: `${privateBase}/classic-boat-interior-with-spacious-seats-for-a-boat-trip.webp`, alt: t('premium.gallery.image_classic_interior_seats'), caption: t('premium.gallery.image_classic_interior_seats') },
      { src: `${privateBase}/wooden-classic-boat-trips-alcudia-with-confortable-interior.webp`, alt: t('premium.gallery.image_wooden_classic'), caption: t('premium.gallery.image_wooden_classic') },
      { src: `${privateBase}/side-of-classic-mediterranean-boat-during-excursion-north-mallorca.webp`, alt: t('premium.gallery.image_classic_mediterranean_side'), caption: t('premium.gallery.image_classic_mediterranean_side') },
      { src: `${privateBase}/boat-cruise-meal-with-local-products-experience-alcudia-mallorca.webp`, alt: t('premium.gallery.image_local_products_meal'), caption: t('premium.gallery.image_local_products_meal') },
      { src: `${privateBase}/fantastic-buffet-meal-served-during-boat-cruise-in-alcududia-mallorca.webp`, alt: t('premium.gallery.image_buffet_cruise'), caption: t('premium.gallery.image_buffet_cruise') },
      { src: `${privateBase}/tapas-and-sangria-served-in-boat-trip-cruise-mallorca-alcudia.webp`, alt: t('premium.gallery.image_tapas_sangria'), caption: t('premium.gallery.image_tapas_sangria') },
      { src: `${privateBase}/typical-local-mallorca-tapas-meal-during-boat-trip-alcudia.webp`, alt: t('premium.gallery.image_local_tapas'), caption: t('premium.gallery.image_local_tapas') },
      { src: `${privateBase}/boat-ride-from-port-of-alcudia-with-sunset-vibes-and-lights.webp`, alt: t('premium.gallery.image_sunset_vibes'), caption: t('premium.gallery.image_sunset_vibes') },
      { src: `${privateBase}/port-of-alcudia-sunset-view-from-a-boat-tours.webp`, alt: t('premium.gallery.image_port_sunset_view'), caption: t('premium.gallery.image_port_sunset_view') },
      { src: `${privateBase}/puesta-de-sol-puerto-alcuida-paseo-en-barco.webp`, alt: t('premium.gallery.image_sunset_port_trip'), caption: t('premium.gallery.image_sunset_port_trip') },
      { src: `${privateBase}/sunset-boat-trous-in-alcudia-beach-from-classic-vessel.webp`, alt: t('premium.gallery.image_sunset_classic_vessel'), caption: t('premium.gallery.image_sunset_classic_vessel') },
      { src: `${privateBase}/sunset-horizon-alcudia-mallorca-views-boat-trip.webp`, alt: t('premium.gallery.image_sunset_horizon'), caption: t('premium.gallery.image_sunset_horizon') },
      { src: `${privateBase}/sunset-lights-from-sea-excursion-experience-in-mallorca-alcudia.webp`, alt: t('premium.gallery.image_sunset_lights_sea'), caption: t('premium.gallery.image_sunset_lights_sea') },
      { src: `${privateBase}/sunset-view-in-alcudia-with-coral-boats-tour-mallorca.webp`, alt: t('premium.gallery.image_sunset_view_alcudia'), caption: t('premium.gallery.image_sunset_view_alcudia') },
    ],
  };

  // ===== BOOKING TEXTS =====
  const bookingTexts = {
    sectionLabel: t('privateCharter.booking.sectionLabel'),
    sectionTitle: t('privateCharter.booking.sectionTitle'),
    sectionDescription: t('privateCharter.booking.sectionDescription'),
    howItWorksTitle: t('privateCharter.booking.howItWorksTitle'),
    step1: t('privateCharter.booking.step1'),
    step2: t('privateCharter.booking.step2'),
    step3: t('privateCharter.booking.step3'),
    step4: t('privateCharter.booking.step4'),
    step5: t('privateCharter.booking.step5'),
    ctaCardTitle: t('privateCharter.booking.ctaCardTitle'),
    ctaCardDescription: t('privateCharter.booking.ctaCardDescription'),
    ctaButton: t('privateCharter.booking.ctaButton'),
    trustBadge1: t('privateCharter.booking.trustBadge1'),
    trustBadge2: t('privateCharter.booking.trustBadge2'),
    trustBadge3: t('privateCharter.booking.trustBadge3'),
    faqTitle: t('privateCharter.booking.faqTitle'),
    faq1Question: t('privateCharter.booking.faq1Question'),
    faq1Answer: t('privateCharter.booking.faq1Answer'),
    faq2Question: t('privateCharter.booking.faq2Question'),
    faq2Answer: t('privateCharter.booking.faq2Answer'),
    faq3Question: t('privateCharter.booking.faq3Question'),
    faq3Answer: t('privateCharter.booking.faq3Answer'),
    faq4Question: t('privateCharter.booking.faq4Question'),
    faq4Answer: t('privateCharter.booking.faq4Answer'),
    pricingPath,
  };

  // ===== FEATURES TEXTS =====
  const featuresTexts = {
    sectionLabel: t('privateCharter.features.sectionLabel'),
    sectionTitle: t('privateCharter.features.sectionTitle'),
    sectionDescription: t('privateCharter.features.sectionDescription'),
    introTitle: t('privateCharter.features.introTitle'),
    introText: t('privateCharter.features.introText'),
    capacityTitle: t('privateCharter.features.capacityTitle'),
    capacityText: t('privateCharter.features.capacityText'),
    locationTitle: t('privateCharter.features.locationTitle'),
    locationText: t('privateCharter.features.locationText'),
    highlightsTitle: t('privateCharter.features.highlightsTitle'),
    highlight1: t('privateCharter.features.highlight1'),
    highlight2: t('privateCharter.features.highlight2'),
    highlight3: t('privateCharter.features.highlight3'),
    closingText: t('privateCharter.features.closingText'),
    ctaButton: t('privateCharter.features.ctaButton'),
    pricingPath,
  };

  // ===== JSON-LD SCHEMAS =====

  // BreadcrumbList Schema with translated names
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('breadcrumb.home') || "Home",
        "item": `https://www.coralboatsmallorca.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t('breadcrumb.boatTours') || "Boat Tours Alcudia",
        "item": `https://www.coralboatsmallorca.com/${locale}/boat-tours-alcudia`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": heroTexts.badge,
        "item": canonicalUrl
      }
    ]
  };

  // FAQPage Schema with translated FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    "inLanguage": locale,
    "mainEntity": [
      {
        "@type": "Question",
        "name": bookingTexts.faq1Question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": bookingTexts.faq1Answer
        }
      },
      {
        "@type": "Question",
        "name": bookingTexts.faq2Question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": bookingTexts.faq2Answer
        }
      },
      {
        "@type": "Question",
        "name": bookingTexts.faq3Question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": bookingTexts.faq3Answer
        }
      },
      {
        "@type": "Question",
        "name": bookingTexts.faq4Question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": bookingTexts.faq4Answer
        }
      }
    ]
  };

  // TouristTrip Schema
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${canonicalUrl}#tour`,
    "name": heroTexts.title,
    "description": heroTexts.subtitle,
    "inLanguage": locale,
    "image": "https://www.coralboatsmallorca.com/assets/img/premium/2026/private/alcanada-island-lighhouse-near-port-of-alcudia-during-boat-trip.webp",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "touristType": ["Groups", "Corporate Events", "Wedding Parties", "Birthday Celebrations", "Special Occasions"],
    "itinerary": {
      "@type": "ItemList",
      "description": "Fully customizable itinerary based on your preferences.",
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
    "startDate": "2026-05-01",
    "endDate": "2026-10-31",
    "offers": [
      {
        "@type": "Offer",
        "name": "Private Charter - 3 Hours (Low Season)",
        "price": "1250.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "validThrough": "2026-06-14",
        "url": canonicalUrl
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4 Hours (Low Season)",
        "price": "1685.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "validThrough": "2026-06-14",
        "url": canonicalUrl
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 3 Hours (High Season)",
        "price": "1550.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-06-15",
        "validThrough": "2026-09-15",
        "url": canonicalUrl
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4 Hours (High Season)",
        "price": "1985.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-06-15",
        "validThrough": "2026-09-15",
        "url": canonicalUrl
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 3 Hours (Low Season)",
        "price": "1250.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-09-16",
        "validThrough": "2026-10-31",
        "url": canonicalUrl
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4 Hours (Low Season)",
        "price": "1685.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-09-16",
        "validThrough": "2026-10-31",
        "url": canonicalUrl
      }
    ],
    "location": {
      "@type": "Place",
      "name": "Muelle Comercial del Puerto de Alcudia",
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
    "maximumAttendeeCapacity": 50
  };

  // Shared policy objects for Product offers
  const charterReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "ES",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 1,
    "returnMethod": "https://schema.org/ReturnByMail",
    "returnFees": "https://schema.org/FreeReturn"
  };
  const charterShipping = {
    "@type": "OfferShippingDetails",
    "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "EUR" },
    "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "ES" },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" },
      "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" }
    }
  };

  // Product Schema — For Google Merchant Listings (seasonal pricing)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    "name": heroTexts.title,
    "description": heroTexts.subtitle,
    "image": [
      "https://www.coralboatsmallorca.com/assets/img/premium/2026/private/alcanada-island-lighhouse-near-port-of-alcudia-during-boat-trip.webp",
      "https://www.coralboatsmallorca.com/assets/img/premium/2026/private/coral-boats-mallorca-boat-trips-in-turquoise-water.webp",
      "https://www.coralboatsmallorca.com/assets/img/premium/2026/private/aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island.webp"
    ],
    "url": canonicalUrl,
    "brand": {
      "@type": "Brand",
      "name": "Coral Boats Mallorca"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Private Charter - 3h (Low Season)",
        "price": "1250.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "priceValidUntil": "2026-06-14",
        "url": canonicalUrl,
        "hasMerchantReturnPolicy": charterReturnPolicy,
        "shippingDetails": charterShipping
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4h (Low Season)",
        "price": "1685.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01",
        "priceValidUntil": "2026-06-14",
        "url": canonicalUrl,
        "hasMerchantReturnPolicy": charterReturnPolicy,
        "shippingDetails": charterShipping
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 3h (High Season)",
        "price": "1550.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-06-15",
        "priceValidUntil": "2026-09-15",
        "url": canonicalUrl,
        "hasMerchantReturnPolicy": charterReturnPolicy,
        "shippingDetails": charterShipping
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4h (High Season)",
        "price": "1985.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-06-15",
        "priceValidUntil": "2026-09-15",
        "url": canonicalUrl,
        "hasMerchantReturnPolicy": charterReturnPolicy,
        "shippingDetails": charterShipping
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 3h (Low Season)",
        "price": "1250.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-09-16",
        "priceValidUntil": "2026-10-31",
        "url": canonicalUrl,
        "hasMerchantReturnPolicy": charterReturnPolicy,
        "shippingDetails": charterShipping
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4h (Low Season)",
        "price": "1685.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-09-16",
        "priceValidUntil": "2026-10-31",
        "url": canonicalUrl,
        "hasMerchantReturnPolicy": charterReturnPolicy,
        "shippingDetails": charterShipping
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <Wrapper>
        <ViewContentTracker
          tourName="Private Boat Charter Alcudia"
          tourSlug="alcudia-private-boat-charter"
        />
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} hasTopBar />

        <main>
          <PrivateCharterHeroSSR texts={heroTexts} />
          <PrivateCharterCapacitySSR texts={capacityTexts} />
          <PrivateCharterEventsClient texts={eventsTexts} />
          <PrivateCharterPricingCTASSR texts={pricingCTATexts} />
          <PrivateCharterGalleryClient texts={galleryTexts} />
          <PrivateCharterBookingSSR texts={bookingTexts} />
          <PrivateCharterFeaturesSSR texts={featuresTexts} />
          <RelatedTours currentTour="charter" />
          <BlogPreviewSection />
          <DiscoverAlcudiaSEO />
        </main>

        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
