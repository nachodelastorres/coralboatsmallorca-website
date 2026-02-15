import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DynamicPageProps } from '@/types/params';
import { generateBlogCategoryMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';
import { getCategoryBySlug, generateCategoryStaticParams, getPostsByCategory } from '@/config/blog-categories';

// Layout Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';

// Category Components
import CategoryHeroSSR from '@/components/blog/category/CategoryHeroSSR';
import CategoryGridSSR from '@/components/blog/category/CategoryGridSSR';
import CategoryFAQSSR from '@/components/blog/category/CategoryFAQSSR';
import CategorySEOSectionSSR from '@/components/blog/category/CategorySEOSectionSSR';
import RelatedToursSSR, { RelatedToursTexts } from '@/components/premium/tours/RelatedToursSSR';
import ToursCtaBannerSSR, { ToursCtaBannerTexts } from '@/components/blog/category/ToursCtaBannerSSR';

interface CategoryParams {
  categorySlug: string;
}

type Props = DynamicPageProps<CategoryParams>;

export async function generateStaticParams() {
  return generateCategoryStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.lang as Locale;
  const category = getCategoryBySlug(params.categorySlug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return generateBlogCategoryMetadata(category.id, locale);
}

export default async function BlogCategoryPage({ params }: Props) {
  const locale = params.lang as Locale;
  const category = getCategoryBySlug(params.categorySlug);

  if (!category) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  const catKey = category.categoryTranslationKey;
  const categoryPosts = getPostsByCategory(category.id).sort((a, b) => b.id - a.id);
  const baseUrl = 'https://www.coralboatsmallorca.com';
  const canonicalUrl = `${baseUrl}/${locale}/blog/${params.categorySlug}`;

  // ===== HERO TEXTS =====
  const heroTexts = {
    badge: t(`blog_category.${catKey}.hero.badge`),
    title: t(`blog_category.${catKey}.hero.title`),
    subtitle: t(`blog_category.${catKey}.hero.subtitle`),
  };

  const breadcrumbs = {
    home: t('menu.home') || 'Home',
    blog: t('menu.blog') || 'Blog',
    category: heroTexts.badge,
    homeHref: `/${locale}`,
    blogHref: locale === 'en' ? '/blog' : `/${locale}/blog`,
  };

  // ===== SEO SECTION TEXTS =====
  const seoTexts = {
    title: t(`blog_category.${catKey}.seo.title`),
    intro: t(`blog_category.${catKey}.seo.intro`),
    card1Title: t(`blog_category.${catKey}.seo.card1_title`),
    card1Text: t(`blog_category.${catKey}.seo.card1_text`),
    card2Title: t(`blog_category.${catKey}.seo.card2_title`),
    card2Text: t(`blog_category.${catKey}.seo.card2_text`),
    ctaTitle: t(`blog_category.${catKey}.seo.cta_title`),
    ctaText: t(`blog_category.${catKey}.seo.cta_text`),
  };

  // ===== FAQ DATA =====
  const faqs = [
    { question: t(`blog_category.${catKey}.faq.q1`), answer: t(`blog_category.${catKey}.faq.a1`) },
    { question: t(`blog_category.${catKey}.faq.q2`), answer: t(`blog_category.${catKey}.faq.a2`) },
    { question: t(`blog_category.${catKey}.faq.q3`), answer: t(`blog_category.${catKey}.faq.a3`) },
    { question: t(`blog_category.${catKey}.faq.q4`), answer: t(`blog_category.${catKey}.faq.a4`) },
  ];

  // ===== JSON-LD BREADCRUMB =====
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: locale,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('menu.home') || 'Home',
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('menu.blog') || 'Blog',
        item: `${baseUrl}/${locale}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: heroTexts.badge,
        item: canonicalUrl,
      },
    ],
  };

  // ===== JSON-LD COLLECTION PAGE =====
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: heroTexts.title,
    description: heroTexts.subtitle,
    url: canonicalUrl,
    inLanguage: locale,
    isPartOf: {
      '@type': 'Blog',
      '@id': `${baseUrl}/${locale}/blog#blog`,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryPosts.length,
      itemListElement: categoryPosts.slice(0, 10).map((blog, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${baseUrl}/${locale}/blog-details/${blog.slug}`,
        name: t(blog.title),
      })),
    },
  };

  // ===== JSON-LD FAQ PAGE =====
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // ===== TOURS CTA BANNER (contextual by category) =====
  const ctaBannerHeadlines: Record<string, { headline: string; subheadline: string }> = {
    tours: {
      headline: t('tours_cta_banner.tours.headline') || 'Ready to set sail?',
      subheadline: t('tours_cta_banner.tours.subheadline') || 'Explore our most popular boat experiences in Alcudia Bay',
    },
    destinations: {
      headline: t('tours_cta_banner.destinations.headline') || 'Visit these destinations with us',
      subheadline: t('tours_cta_banner.destinations.subheadline') || 'Turn inspiration into your next adventure on the water',
    },
    guides: {
      headline: t('tours_cta_banner.guides.headline') || 'Put this guide into action',
      subheadline: t('tours_cta_banner.guides.subheadline') || 'Book the experience and live it yourself',
    },
    tips: {
      headline: t('tours_cta_banner.tips.headline') || 'Apply these tips on your next trip',
      subheadline: t('tours_cta_banner.tips.subheadline') || 'Our tours are designed with these insights in mind',
    },
  };

  const currentCtaHeadlines = ctaBannerHeadlines[catKey] || ctaBannerHeadlines.tours;

  const toursCtaBannerTexts: ToursCtaBannerTexts = {
    headline: currentCtaHeadlines.headline,
    subheadline: currentCtaHeadlines.subheadline,
    cta: t('tours_cta_banner.cta') || 'All tours depart from Puerto de Alcudia',
    bookCta: t('tours_cta_banner.book_cta') || 'Reserve your spot',
    tours: [
      {
        id: 'morning',
        name: t('tours_cta_banner.morning.name') || 'Morning Tour',
        tagline: t('tours_cta_banner.morning.tagline') || 'Crystal waters & snorkeling',
        image: '/assets/img/premium/home_new/card_morning.webp',
        link: `/${locale}/alcudia-morning-boat-tour`,
      },
      {
        id: 'sunset',
        name: t('tours_cta_banner.sunset.name') || 'Sunset Tour',
        tagline: t('tours_cta_banner.sunset.tagline') || 'Golden hour & cava toast',
        image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
        link: `/${locale}/alcudia-sunset-boat-tour`,
      },
      {
        id: 'charter',
        name: t('tours_cta_banner.charter.name') || 'Private Charter',
        tagline: t('tours_cta_banner.charter.tagline') || 'Your boat, your schedule',
        image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
        link: `/${locale}/alcudia-private-boat-charter`,
      },
    ],
  };

  // ===== RELATED TOURS =====
  const relatedToursTexts: RelatedToursTexts = {
    label: t('relatedTours.label') || 'Discover More Experiences',
    title: t('relatedTours.title') || 'Other Boat Tours in Alcudia',
    description: t('relatedTours.description') || '',
    from: t('relatedTours.from') || 'From',
    perPerson: t('relatedTours.per_person') || '/person',
    viewDetails: t('relatedTours.view_details') || 'View Details',
    tours: [
      {
        id: 'morning',
        name: t('relatedTours.morning.name') || 'Morning Tour',
        description: t('relatedTours.morning.description') || '',
        time: t('relatedTours.morning.time') || '',
        duration: t('relatedTours.morning.duration') || '',
        price: t('relatedTours.morning.price') || '',
        highlights: t('relatedTours.morning.highlights') || '',
        image: '/assets/img/premium/home_new/card_morning.webp',
        link: `/${locale}/alcudia-morning-boat-tour`,
      },
      {
        id: 'sunset',
        name: t('relatedTours.sunset.name') || 'Sunset Tour',
        description: t('relatedTours.sunset.description') || '',
        time: t('relatedTours.sunset.time') || '',
        duration: t('relatedTours.sunset.duration') || '',
        price: t('relatedTours.sunset.price') || '',
        highlights: t('relatedTours.sunset.highlights') || '',
        image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
        link: `/${locale}/alcudia-sunset-boat-tour`,
      },
      {
        id: 'charter',
        name: t('relatedTours.charter.name') || 'Private Charter',
        description: t('relatedTours.charter.description') || '',
        time: t('relatedTours.charter.time') || '',
        duration: t('relatedTours.charter.duration') || '',
        price: t('relatedTours.charter.price') || '',
        highlights: t('relatedTours.charter.highlights') || '',
        image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
        link: `/${locale}/alcudia-private-boat-charter`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} hasTopBar />
        <main>
          <CategoryHeroSSR texts={heroTexts} breadcrumbs={breadcrumbs} icon={category.icon} />
          <ToursCtaBannerSSR texts={toursCtaBannerTexts} />
          <CategoryGridSSR dict={dictionary} lang={locale} category={category} />
          <CategoryFAQSSR faqs={faqs} sectionTitle={heroTexts.title} />
          <CategorySEOSectionSSR texts={seoTexts} icon={category.icon} />
          <RelatedToursSSR texts={relatedToursTexts} />
        </main>
        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
