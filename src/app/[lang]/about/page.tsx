import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateAboutMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';

// SSR Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';
import AboutHeroSSR from '@/components/about/AboutHeroSSR';
import AboutBoatHistorySSR from '@/components/about/AboutBoatHistorySSR';
import OurExperiencesTimelineSSR from '@/components/about/OurExperiencesTimelineSSR';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateAboutMetadata(params.lang);
}

export default async function AboutPage({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  const canonicalUrl = `https://www.coralboatsmallorca.com/${locale}/about`;
  const toursPath = `/${locale}/boat-tours-alcudia`;
  const morningTourPath = `/${locale}/alcudia-morning-boat-tour`;
  const sunsetTourPath = `/${locale}/alcudia-sunset-boat-tour`;
  const charterPath = `/${locale}/alcudia-private-boat-charter`;

  // ===== HERO TEXTS =====
  const heroTexts = {
    badge: t('about_page.hero.badge'),
    title: t('about_page.hero.title'),
    subtitle: t('about_page.hero.subtitle'),
    stat1: t('about_page.hero.stat1'),
    stat2: t('about_page.hero.stat2'),
    stat3: t('about_page.hero.stat3'),
  };

  // ===== BOAT HISTORY TEXTS =====
  const boatHistoryTexts = {
    badge: t('about_page.history.badge'),
    title: t('about_page.history.title'),
    subtitle: t('about_page.history.subtitle'),
    intro: t('about_page.history.intro'),
    section1Title: t('about_page.history.section1_title'),
    section1Text: t('about_page.history.section1_text'),
    section2Title: t('about_page.history.section2_title'),
    section2Text: t('about_page.history.section2_text'),
    section3Title: t('about_page.history.section3_title'),
    section3Text: t('about_page.history.section3_text'),
    section4Title: t('about_page.history.section4_title'),
    section4Text: t('about_page.history.section4_text'),
    quote: t('about_page.history.quote'),
    seoTitle: t('about_page.history.seo_title'),
    seoText: t('about_page.history.seo_text'),
    ctaButton: t('about_page.history.cta_button'),
    toursPath,
  };

  // ===== EXPERIENCES TIMELINE TEXTS =====
  const experiencesTexts = {
    label: t('experiences_timeline.label'),
    title: t('experiences_timeline.title'),
    description: t('experiences_timeline.description'),
    ctaInline: t('experiences_timeline.cta_inline'),
    experiences: [
      {
        id: 'morning',
        title: t('experiences_timeline.morning.title'),
        description: t('experiences_timeline.morning.description'),
        time: t('experiences_timeline.morning.time'),
        image: '/assets/img/premium/home_new/card_morning.webp',
        link: morningTourPath,
        number: '01',
      },
      {
        id: 'sunset',
        title: t('experiences_timeline.sunset.title'),
        description: t('experiences_timeline.sunset.description'),
        time: t('experiences_timeline.sunset.time'),
        image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
        link: sunsetTourPath,
        number: '02',
      },
      {
        id: 'charter',
        title: t('experiences_timeline.charter.title'),
        description: t('experiences_timeline.charter.description'),
        time: t('experiences_timeline.charter.time'),
        image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
        link: charterPath,
        number: '03',
      },
    ],
  };

  // ===== JSON-LD SCHEMAS =====

  // Organization Schema with LocalBusiness
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.coralboatsmallorca.com/#organization',
    name: 'Coral Boats Mallorca',
    description: heroTexts.subtitle,
    url: 'https://www.coralboatsmallorca.com',
    telephone: '+34 651 992 329',
    email: 'info@coralboatsmallorca.com',
    image: 'https://www.coralboatsmallorca.com/assets/img/premium/crew.jpg',
    priceRange: '€€',
    foundingDate: '1968',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Port d'Alcúdia Marina",
      addressLocality: 'Alcúdia',
      addressRegion: 'Mallorca',
      postalCode: '07400',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.8419,
      longitude: 3.1226,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    sameAs: [
      'https://www.instagram.com/coralboatsmallorca',
      'https://www.facebook.com/coralboatsmallorca',
      'https://www.tripadvisor.com/Attraction_Review-g580266-d27325188-Reviews-Coral_Boats-Port_d_Alcudia_Alcudia_Majorca_Balearic_Islands.html',
    ],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
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
        name: heroTexts.badge,
        item: canonicalUrl,
      },
    ],
  };

  // AboutPage Schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': canonicalUrl,
    name: heroTexts.title,
    description: heroTexts.subtitle,
    url: canonicalUrl,
    inLanguage: locale,
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    breadcrumb: {
      '@id': `${canonicalUrl}#breadcrumb`,
    },
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />

      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} />

        <main>
          <AboutHeroSSR texts={heroTexts} />
          <AboutBoatHistorySSR texts={boatHistoryTexts} />
          <OurExperiencesTimelineSSR texts={experiencesTexts} />
        </main>

        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
