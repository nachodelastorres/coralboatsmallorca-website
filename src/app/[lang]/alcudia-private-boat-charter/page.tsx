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
        image: '/assets/img/premium/home_new/partners.webp',
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
        image: '/assets/img/premium/home_new/friends_group2.webp',
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
        image: '/assets/img/premium/home_new/card_private.webp',
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
        image: '/assets/img/premium/home_new/matress.webp',
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
        image: '/assets/img/premium/home_new/amigos2.webp',
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
        image: '/assets/img/premium/home_new/7.webp',
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
  const galleryTexts = {
    label: t('privateCharter.gallery.label'),
    title: t('privateCharter.gallery.title'),
    description: t('privateCharter.gallery.description'),
    ctaButton: t('tours.gallery.cta_button'),
    ctaSecondary: t('tours.gallery.cta_secondary'),
    galleryPath,
    images: [
      { src: '/assets/img/premium/home_new/boat.webp', alt: 'Classic Coral Boats charter vessel for private events in Alcudia Mallorca', title: 'Our Classic Vessel' },
      { src: '/assets/img/premium/home_new/14.webp', alt: 'Large group enjoying private boat charter in Bay of Alcudia Mallorca', title: 'Perfect for Groups' },
      { src: '/assets/img/premium/home_new/15.webp', alt: 'Private charter boat sailing crystal clear waters of Alcudia Bay', title: 'Crystal Clear Waters' },
      { src: '/assets/img/premium/home_new/19.webp', alt: 'Guests relaxing on private charter boat deck in Mallorca', title: 'Relax and Unwind' },
      { src: '/assets/img/premium/home_new/18.webp', alt: 'Private boat charter experience with stunning Mediterranean views Mallorca', title: 'Mediterranean Beauty' },
      { src: '/assets/img/premium/home_new/13.webp', alt: 'Group celebration on private charter boat in Alcudia Mallorca', title: 'Celebrate Together' },
      { src: '/assets/img/premium/home_new/interior.webp', alt: 'Spacious interior of private charter boat with capacity for 40 guests', title: 'Spacious Interior' },
      { src: '/assets/img/premium/home_new/12.webp', alt: 'Private charter boat for corporate events and celebrations Alcudia', title: 'Corporate Events' },
      { src: '/assets/img/premium/home_new/friends_group1.webp', alt: 'Friends enjoying private boat charter party in Mallorca', title: 'Friends & Fun' },
      { src: '/assets/img/premium/home_new/card_sunset.webp', alt: 'Sunset views from private charter boat in Alcudia Bay Mallorca', title: 'Magical Sunsets' },
      { src: '/assets/img/premium/home_new/sunset.webp', alt: 'Private boat charter during golden hour sunset in Mallorca', title: 'Golden Hour' },
      { src: '/assets/img/premium/home_new/sunset_port.webp', alt: 'Private charter boat arriving at Port Alcudia during sunset', title: 'Port Alcudia Sunset' },
      { src: '/assets/img/premium/home_new/4.webp', alt: 'Swimming and water activities on private charter boat Mallorca', title: 'Water Activities' },
      { src: '/assets/img/premium/home_new/7.webp', alt: 'Private boat charter for special celebrations and events Alcudia', title: 'Special Celebrations' },
      { src: '/assets/img/premium/home_new/9.webp', alt: 'Exclusive private boat rental experience in Alcudia Bay Mallorca', title: 'Exclusive Experience' },
      { src: '/assets/img/premium/home_new/10.webp', alt: 'Private charter boat exploring hidden coves of northern Mallorca', title: 'Hidden Coves' },
      { src: '/assets/img/premium/home_new/04portrait.webp', alt: 'Private charter boat for up to 40 people in Alcudia Mallorca', title: 'Capacity for 40' },
      { src: '/assets/img/premium/home_new/proa.webp', alt: 'Bow view of classic private charter boat in Mediterranean waters', title: 'Classic Bow' }
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
    "image": "https://www.coralboatsmallorca.com/assets/img/premium/home_new/04portrait.webp",
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
        </main>

        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
