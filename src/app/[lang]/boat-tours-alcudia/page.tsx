import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateBoatToursAlcudiaMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';

// SSR Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';
import ToursOverviewHeroSSR from '@/components/tours-overview/ToursOverviewHeroSSR';
import ToursOverviewCardsSSR from '@/components/tours-overview/ToursOverviewCardsSSR';
import ToursOverviewSEOSSR from '@/components/tours-overview/ToursOverviewSEOSSR';
import ToursOverviewFAQSSR from '@/components/tours-overview/ToursOverviewFAQSSR';
import ToursListSchema from '@/components/schema/ToursListSchema';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateBoatToursAlcudiaMetadata(params.lang);
}

export default async function BoatToursAlcudia({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  const canonicalUrl = `https://www.coralboatsmallorca.com/${locale}/boat-tours-alcudia`;
  const morningTourPath = `/${locale}/alcudia-morning-boat-tour`;
  const sunsetTourPath = `/${locale}/alcudia-sunset-boat-tour`;
  const charterPath = `/${locale}/alcudia-private-boat-charter`;

  // ===== HERO TEXTS =====
  const heroTexts = {
    badge: t('toursPage.hero.badge'),
    title: t('toursPage.hero.title'),
    subtitle: t('toursPage.hero.subtitle'),
  };

  // ===== TOUR CARDS TEXTS =====
  const cardsTexts = {
    sectionLabel: t('toursPage.cards.sectionLabel'),
    sectionTitle: t('toursPage.cards.sectionTitle'),
    sectionDescription: t('toursPage.cards.sectionDescription'),
    tours: [
      {
        id: 'morning-tour',
        name: t('toursPage.cards.morningTour.name'),
        subtitle: t('toursPage.cards.morningTour.subtitle'),
        time: t('toursPage.cards.morningTour.time'),
        duration: t('toursPage.cards.morningTour.duration'),
        price: t('toursPage.cards.morningTour.price'),
        image: '/assets/img/premium/gallery_new/excursion-matutina-snorkel-paddle-surf-alcudia.webp',
        link: morningTourPath,
        features: [
          t('toursPage.cards.morningTour.feature1'),
          t('toursPage.cards.morningTour.feature2'),
          t('toursPage.cards.morningTour.feature3'),
          t('toursPage.cards.morningTour.feature4'),
        ],
        included: [
          { icon: 'fa-mask-snorkel', text: t('toursPage.cards.morningTour.included1') },
          { icon: 'fa-person-swimming', text: t('toursPage.cards.morningTour.included2') },
          { icon: 'fa-utensils', text: t('toursPage.cards.morningTour.included3') },
          { icon: 'fa-wine-glass', text: t('toursPage.cards.morningTour.included4') },
        ],
        badge: t('toursPage.cards.morningTour.badge'),
        color: '#0891b2',
        whyChoose: t('toursPage.cards.morningTour.whyChoose'),
        includedTitle: t('toursPage.cards.morningTour.includedTitle'),
        priceFrom: t('toursPage.cards.morningTour.priceFrom'),
        pricePerPerson: t('toursPage.cards.morningTour.pricePerPerson'),
        ctaButton: t('toursPage.cards.morningTour.ctaButton'),
      },
      {
        id: 'sunset-tour',
        name: t('toursPage.cards.sunsetTour.name'),
        subtitle: t('toursPage.cards.sunsetTour.subtitle'),
        time: t('toursPage.cards.sunsetTour.time'),
        duration: t('toursPage.cards.sunsetTour.duration'),
        price: t('toursPage.cards.sunsetTour.price'),
        image: '/assets/img/premium/gallery_new/crucero-atardecer-sunset-magic-alcudia.webp',
        link: sunsetTourPath,
        features: [
          t('toursPage.cards.sunsetTour.feature1'),
          t('toursPage.cards.sunsetTour.feature2'),
          t('toursPage.cards.sunsetTour.feature3'),
          t('toursPage.cards.sunsetTour.feature4'),
        ],
        included: [
          { icon: 'fa-mask-snorkel', text: t('toursPage.cards.sunsetTour.included1') },
          { icon: 'fa-person-swimming', text: t('toursPage.cards.sunsetTour.included2') },
          { icon: 'fa-utensils', text: t('toursPage.cards.sunsetTour.included3') },
          { icon: 'fa-wine-glass', text: t('toursPage.cards.sunsetTour.included4') },
        ],
        badge: t('toursPage.cards.sunsetTour.badge'),
        color: '#ec4899',
        whyChoose: t('toursPage.cards.sunsetTour.whyChoose'),
        includedTitle: t('toursPage.cards.sunsetTour.includedTitle'),
        priceFrom: t('toursPage.cards.sunsetTour.priceFrom'),
        pricePerPerson: t('toursPage.cards.sunsetTour.pricePerPerson'),
        ctaButton: t('toursPage.cards.sunsetTour.ctaButton'),
      },
      {
        id: 'private-charter',
        name: t('toursPage.cards.privateCharter.name'),
        subtitle: t('toursPage.cards.privateCharter.subtitle'),
        time: t('toursPage.cards.privateCharter.time'),
        duration: t('toursPage.cards.privateCharter.duration'),
        price: t('toursPage.cards.privateCharter.price'),
        image: '/assets/img/premium/gallery_new/charter-privado-lujo-grupos-alcudia-mallorca.webp',
        link: charterPath,
        features: [
          t('toursPage.cards.privateCharter.feature1'),
          t('toursPage.cards.privateCharter.feature2'),
          t('toursPage.cards.privateCharter.feature3'),
          t('toursPage.cards.privateCharter.feature4'),
        ],
        included: [
          { icon: 'fa-route', text: t('toursPage.cards.privateCharter.included1') },
          { icon: 'fa-utensils', text: t('toursPage.cards.privateCharter.included2') },
          { icon: 'fa-champagne-glasses', text: t('toursPage.cards.privateCharter.included3') },
          { icon: 'fa-users', text: t('toursPage.cards.privateCharter.included4') },
        ],
        badge: t('toursPage.cards.privateCharter.badge'),
        color: '#8b5cf6',
        whyChoose: t('toursPage.cards.privateCharter.whyChoose'),
        includedTitle: t('toursPage.cards.privateCharter.includedTitle'),
        pricingLabel: t('toursPage.cards.privateCharter.pricingLabel'),
        pricingValue: t('toursPage.cards.privateCharter.pricingValue'),
        pricingInfo: t('toursPage.cards.privateCharter.pricingInfo'),
        ctaButton: t('toursPage.cards.privateCharter.ctaButton'),
      },
    ],
  };

  // ===== SEO CONTENT TEXTS =====
  const seoTexts = {
    mainTitle: t('toursPage.seo.mainTitle'),
    intro1: t('toursPage.seo.intro1'),
    intro2: t('toursPage.seo.intro2'),
    whyBookTitle: t('toursPage.seo.whyBookTitle'),
    reason1Title: t('toursPage.seo.reason1Title'),
    reason1Text: t('toursPage.seo.reason1Text'),
    reason2Title: t('toursPage.seo.reason2Title'),
    reason2Text: t('toursPage.seo.reason2Text'),
    reason3Title: t('toursPage.seo.reason3Title'),
    reason3Text: t('toursPage.seo.reason3Text'),
    reason4Title: t('toursPage.seo.reason4Title'),
    reason4Text: t('toursPage.seo.reason4Text'),
    toursTitle: t('toursPage.seo.toursTitle'),
    morningTitle: t('toursPage.seo.morningTitle'),
    morningText1: t('toursPage.seo.morningText1'),
    morningText2: t('toursPage.seo.morningText2'),
    sunsetTitle: t('toursPage.seo.sunsetTitle'),
    sunsetText1: t('toursPage.seo.sunsetText1'),
    sunsetText2: t('toursPage.seo.sunsetText2'),
    privateTitle: t('toursPage.seo.privateTitle'),
    privateText1: t('toursPage.seo.privateText1'),
    privateText2: t('toursPage.seo.privateText2'),
    locationTitle: t('toursPage.seo.locationTitle'),
    locationText1: t('toursPage.seo.locationText1'),
    locationText2: t('toursPage.seo.locationText2'),
    bookingTitle: t('toursPage.seo.bookingTitle'),
    bookingText: t('toursPage.seo.bookingText'),
    ctaMorning: t('toursPage.seo.ctaMorning'),
    ctaSunset: t('toursPage.seo.ctaSunset'),
    ctaPrivate: t('toursPage.seo.ctaPrivate'),
  };

  // ===== FAQ TEXTS =====
  const faqTexts = {
    sectionLabel: t('toursPage.faq.sectionLabel'),
    sectionTitle: t('toursPage.faq.sectionTitle'),
    sectionDescription: t('toursPage.faq.sectionDescription'),
    faqs: [
      { question: t('toursPage.faq.q1'), answer: t('toursPage.faq.a1') },
      { question: t('toursPage.faq.q2'), answer: t('toursPage.faq.a2') },
      { question: t('toursPage.faq.q3'), answer: t('toursPage.faq.a3') },
      { question: t('toursPage.faq.q4'), answer: t('toursPage.faq.a4') },
      { question: t('toursPage.faq.q5'), answer: t('toursPage.faq.a5') },
      { question: t('toursPage.faq.q6'), answer: t('toursPage.faq.a6') },
      { question: t('toursPage.faq.q7'), answer: t('toursPage.faq.a7') },
      { question: t('toursPage.faq.q8'), answer: t('toursPage.faq.a8') },
      { question: t('toursPage.faq.q9'), answer: t('toursPage.faq.a9') },
      { question: t('toursPage.faq.q10'), answer: t('toursPage.faq.a10') },
    ],
    finalCtaTitle: t('toursPage.faq.finalCtaTitle'),
    finalCtaText: t('toursPage.faq.finalCtaText'),
    finalCtaButton: t('toursPage.faq.finalCtaButton'),
  };

  // ===== JSON-LD SCHEMAS =====

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: faqTexts.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    inLanguage: locale,
  };

  // CollectionPage Schema
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': canonicalUrl,
    name: heroTexts.title,
    description: heroTexts.subtitle,
    url: canonicalUrl,
    inLanguage: locale,
    mainEntity: {
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#tours-list`,
      name: cardsTexts.sectionTitle,
      description: cardsTexts.sectionDescription,
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'TouristTrip',
            '@id': `https://www.coralboatsmallorca.com${morningTourPath}#tour`,
            name: t('toursPage.cards.morningTour.name'),
            description: t('toursPage.cards.morningTour.subtitle'),
            image: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/excursion-matutina-snorkel-paddle-surf-alcudia.webp',
            url: `https://www.coralboatsmallorca.com${morningTourPath}`,
            duration: 'PT4H',
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '0.00',
              highPrice: '68.00',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'TouristTrip',
            '@id': `https://www.coralboatsmallorca.com${sunsetTourPath}#tour`,
            name: t('toursPage.cards.sunsetTour.name'),
            description: t('toursPage.cards.sunsetTour.subtitle'),
            image: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/crucero-atardecer-sunset-magic-alcudia.webp',
            url: `https://www.coralboatsmallorca.com${sunsetTourPath}`,
            duration: 'PT3H',
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '0.00',
              highPrice: '65.00',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'TouristTrip',
            '@id': `https://www.coralboatsmallorca.com${charterPath}#tour`,
            name: t('toursPage.cards.privateCharter.name'),
            description: t('toursPage.cards.privateCharter.subtitle'),
            image: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/charter-privado-lujo-grupos-alcudia-mallorca.webp',
            url: `https://www.coralboatsmallorca.com${charterPath}`,
            duration: 'PT4H',
            offers: {
              '@type': 'Offer',
              price: '1250.00',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
            },
          },
        },
      ],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://www.coralboatsmallorca.com/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: heroTexts.title,
          item: canonicalUrl,
        },
      ],
    },
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <ToursListSchema lang={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />

      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} hasTopBar />

        <main>
          <ToursOverviewHeroSSR texts={heroTexts} />
          <ToursOverviewCardsSSR texts={cardsTexts} />
          <ToursOverviewSEOSSR texts={seoTexts} />
          <ToursOverviewFAQSSR texts={faqTexts} />
        </main>

        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
