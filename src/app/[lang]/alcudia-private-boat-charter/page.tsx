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
        image: '/assets/img/premium/home_new/special-celebrations-private-charter-alcudia.webp',
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
  const galleryImagesT = t('privateCharter.gallery.images') as unknown as Record<string, string> || {};
  const galleryTexts = {
    label: t('privateCharter.gallery.label'),
    title: t('privateCharter.gallery.title'),
    description: t('privateCharter.gallery.description'),
    ctaButton: t('tours.gallery.cta_button'),
    ctaSecondary: t('tours.gallery.cta_secondary'),
    galleryPath,
    images: [
      { src: '/assets/img/premium/home_new/classic-coral-boats-charter-vessel-alcudia.webp', alt: 'Classic Coral Boats charter vessel for private events in Alcudia Mallorca', caption: galleryImagesT.img1 || 'Our classic boat: the perfect setting for your private event' },
      { src: '/assets/img/premium/home_new/large-group-private-charter-alcudia-bay.webp', alt: 'Large group enjoying private boat charter in Bay of Alcudia Mallorca', caption: galleryImagesT.img2 || 'Large groups enjoying an exclusive charter' },
      { src: '/assets/img/premium/home_new/private-charter-sailing-crystal-waters-alcudia.webp', alt: 'Private charter boat sailing crystal clear waters of Alcudia Bay', caption: galleryImagesT.img3 || 'Sailing through crystal-clear waters' },
      { src: '/assets/img/premium/home_new/guests-relaxing-private-charter-deck-mallorca.webp', alt: 'Guests relaxing on private charter boat deck in Mallorca', caption: galleryImagesT.img4 || 'Relaxing moments on deck' },
      { src: '/assets/img/premium/home_new/private-charter-mediterranean-views-mallorca.webp', alt: 'Private boat charter experience with stunning Mediterranean views Mallorca', caption: galleryImagesT.img5 || 'Spectacular views from your private charter' },
      { src: '/assets/img/premium/home_new/group-celebration-private-charter-alcudia.webp', alt: 'Group celebration on private charter boat in Alcudia Mallorca', caption: galleryImagesT.img6 || 'Memorable celebrations with Coral Boats crew' },
      { src: '/assets/img/premium/home_new/spacious-interior-private-charter-40-guests.webp', alt: 'Spacious interior of private charter boat with capacity for 40 guests', caption: galleryImagesT.img7 || 'Spacious interior for up to 40 guests' },
      { src: '/assets/img/premium/home_new/corporate-events-private-charter-alcudia.webp', alt: 'Private charter boat for corporate events and celebrations Alcudia', caption: galleryImagesT.img8 || 'Perfect for corporate events and teambuilding' },
      { src: '/assets/img/premium/home_new/friends-private-boat-party-mallorca.webp', alt: 'Friends enjoying private boat charter party in Mallorca', caption: galleryImagesT.img9 || 'Friends creating unique memories at sea' },
      { src: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp', alt: 'Sunset views from private charter boat in Alcudia Bay Mallorca', caption: galleryImagesT.img10 || 'Magical sunsets from your private boat' },
      { src: '/assets/img/premium/home_new/golden-hour-sunset-private-charter-mallorca.webp', alt: 'Private boat charter during golden hour sunset in Mallorca', caption: galleryImagesT.img11 || 'Golden hour over the Mediterranean' },
      { src: '/assets/img/premium/home_new/private-charter-arriving-port-alcudia-sunset.webp', alt: 'Private charter boat arriving at Port Alcudia during sunset', caption: galleryImagesT.img12 || 'Arriving at Alcudia port at sunset' },
      { src: '/assets/img/premium/home_new/swimming-water-activities-private-charter.webp', alt: 'Swimming and water activities on private charter boat Mallorca', caption: galleryImagesT.img13 || 'Exclusive water activities for your group' },
      { src: '/assets/img/premium/home_new/special-celebrations-private-charter-alcudia.webp', alt: 'Private boat charter for special celebrations and events Alcudia', caption: galleryImagesT.img14 || 'Special celebrations in a unique setting' },
      { src: '/assets/img/premium/home_new/exclusive-boat-rental-alcudia-bay.webp', alt: 'Exclusive private boat rental experience in Alcudia Bay Mallorca', caption: galleryImagesT.img15 || 'Exclusive boat rental experience' },
      { src: '/assets/img/premium/home_new/private-charter-hidden-coves-mallorca.webp', alt: 'Private charter boat exploring hidden coves of northern Mallorca', caption: galleryImagesT.img16 || 'Exploring hidden coves on your private charter' },
      { src: '/assets/img/premium/home_new/private-charter-capacity-40-people-alcudia.webp', alt: 'Private charter boat for up to 40 people in Alcudia Mallorca', caption: galleryImagesT.img17 || 'Capacity for up to 40 people' },
      { src: '/assets/img/premium/home_new/classic-boat-bow-mediterranean-mallorca.webp', alt: 'Bow view of classic private charter boat in Mediterranean waters', caption: galleryImagesT.img18 || 'Classic bow: Mallorcan maritime elegance' }
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
    "image": "https://www.coralboatsmallorca.com/assets/img/premium/home_new/private-charter-capacity-40-people-alcudia.webp",
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
        "url": canonicalUrl
      },
      {
        "@type": "Offer",
        "name": "Private Charter - 4 Hours",
        "price": "1632.50",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/PreOrder",
        "validFrom": "2025-05-01",
        "validThrough": "2025-10-31",
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

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />

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
