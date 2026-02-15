import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateBlogMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';
import { blogDataOne } from '@/data/blog-data';

// Layout Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';

// SSR Components
import BlogIndexHeroSSR from '@/components/blog/BlogIndexHeroSSR';
import BlogIndexGridSSR from '@/components/blog/BlogIndexGridSSR';
import BlogIndexSEOSectionSSR from '@/components/blog/BlogIndexSEOSectionSSR';
import RelatedToursSSR, { RelatedToursTexts } from '@/components/premium/tours/RelatedToursSSR';
import ToursCtaBannerSSR, { ToursCtaBannerTexts } from '@/components/blog/category/ToursCtaBannerSSR';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateBlogMetadata(params.lang);
}

export default async function BlogPage({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  // Sort blogs for schema (newest first)
  const sortedBlogs = [...blogDataOne].sort((a, b) => b.id - a.id);

  // ===== JSON-LD BREADCRUMB SCHEMA =====
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: locale,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('menu.home') || 'Home',
        item: `https://www.coralboatsmallorca.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('menu.blog') || 'Blog',
        item: `https://www.coralboatsmallorca.com/${locale}/blog`,
      },
    ],
  };

  // ===== JSON-LD BLOG SCHEMA =====
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `https://www.coralboatsmallorca.com/${locale}/blog#blog`,
    name: t('blog_page.hero.title'),
    description: t('blog_page.hero.subtitle'),
    url: `https://www.coralboatsmallorca.com/${locale}/blog`,
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
      url: 'https://www.coralboatsmallorca.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.coralboatsmallorca.com/assets/img/logo/logo.png',
        width: 512,
        height: 512,
      },
    },
    blogPost: sortedBlogs.slice(0, 10).map((blog) => ({
      '@type': 'BlogPosting',
      headline: t(blog.title),
      description: t(blog.description!),
      url: `https://www.coralboatsmallorca.com/${locale}/blog-details/${blog.slug}`,
      image: typeof blog.image === 'string' ? blog.image : `https://www.coralboatsmallorca.com${blog.image.src}`,
      datePublished: t(blog.publishedDate),
      author: {
        '@type': 'Organization',
        name: 'Coral Boats Mallorca',
      },
    })),
  };

  // ===== TOURS CTA BANNER =====
  const toursCtaBannerTexts: ToursCtaBannerTexts = {
    headline: t('tours_cta_banner.blog_index.headline') || 'Explore our boat tours',
    subheadline: t('tours_cta_banner.blog_index.subheadline') || 'Discover the best experiences in Alcudia Bay',
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

  // ===== RELATED TOURS TRANSLATIONS =====
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

  // ===== JSON-LD COLLECTION PAGE SCHEMA =====
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('blog_page.hero.title'),
    description: t('blog_page.hero.subtitle'),
    url: `https://www.coralboatsmallorca.com/${locale}/blog`,
    inLanguage: locale,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: sortedBlogs.length,
      itemListElement: sortedBlogs.slice(0, 10).map((blog, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.coralboatsmallorca.com/${locale}/blog-details/${blog.slug}`,
        name: t(blog.title),
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} hasTopBar />
        <main>
          <BlogIndexHeroSSR dict={dictionary} />
          <ToursCtaBannerSSR texts={toursCtaBannerTexts} />
          <BlogIndexGridSSR dict={dictionary} lang={locale} />
          <BlogIndexSEOSectionSSR dict={dictionary} />
          <RelatedToursSSR texts={relatedToursTexts} />
        </main>
        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
