/**
 * Blog Details Page - SSR Optimized
 *
 * This page renders blog post content server-side for SEO.
 * All H1, H2, paragraphs appear in "View Source" without JS.
 */

import { Metadata } from 'next';
import { blogData, blogDataOne } from '@/data/blog-data';
import { DynamicPageProps } from '@/types/params';
import { getDictionary, createTranslator, getNestedValue } from '@/lib/dictionaries';
import { buildCanonical } from '@/lib/metadata-helpers';
import { Locale } from '@/config/locales';

// SSR Components
import MagazineLayoutSSR, {
  BlogPostTranslated,
  BlogSection,
  BlogSubsection,
} from '@/components/blog/blog-layouts/MagazineLayoutSSR';
import RelatedPostsSSR, {
  RelatedPostTranslated,
  RelatedPostsTexts,
} from '@/components/blog/RelatedPostsSSR';

// Layout components (SSR)
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';

interface BlogDetailsParams {
  slug: string;
}

type Props = DynamicPageProps<BlogDetailsParams>;

// Helper to translate a key or return the value if it's not a key
function translateKey(t: (key: string) => string, key: string | undefined): string {
  if (!key) return '';
  // If the key contains a dot, it's likely a translation key
  if (key.includes('.')) {
    const translated = t(key);
    // If translation returns the key itself, it wasn't found
    return translated !== key ? translated : key;
  }
  return key;
}

// Helper to build subsections from blog data
function buildSubsections(
  t: (key: string) => string,
  blog: typeof blogData[0],
  sectionNum: number
): BlogSubsection[] {
  const subsections: BlogSubsection[] = [];
  const maxSubs = sectionNum === 3 ? 12 : 4; // Section 3 can have up to 12 subsections

  for (let i = 1; i <= maxSubs; i++) {
    const subtitleKey = `section${sectionNum}sub${i}Subtitle` as keyof typeof blog;
    const bodyKey = `section${sectionNum}sub${i}Body` as keyof typeof blog;

    const subtitle = blog[subtitleKey] as string | undefined;
    const body = blog[bodyKey] as string | undefined;

    if (subtitle && body) {
      subsections.push({
        subtitle: translateKey(t, subtitle),
        body: translateKey(t, body),
      });
    }
  }

  return subsections;
}

// Helper to build a section from blog data
function buildSection(
  t: (key: string) => string,
  blog: typeof blogData[0],
  sectionNum: number
): BlogSection | undefined {
  const titleKey = `section${sectionNum}Title` as keyof typeof blog;
  const bodyKey = `section${sectionNum}Body` as keyof typeof blog;

  const title = blog[titleKey] as string | undefined;
  const body = blog[bodyKey] as string | undefined;

  if (!title) return undefined;

  return {
    title: translateKey(t, title),
    body: body ? translateKey(t, body) : undefined,
    subsections: buildSubsections(t, blog, sectionNum),
  };
}

// Transform blog with translation keys to blog with translated values
function translateBlogPost(
  t: (key: string) => string,
  blog: typeof blogData[0],
  locale: Locale
): BlogPostTranslated {
  // Build the CTA link with locale
  const ctaLink = locale === 'en'
    ? '/boat-tours-alcudia'
    : `/${locale}/boat-tours-alcudia`;

  // Translate sectionImages alt/caption keys
  const translatedSectionImages = (blog.sectionImages || []).map(group => ({
    ...group,
    images: group.images.map(img => ({
      src: img.src,
      alt: translateKey(t, img.alt),
      caption: translateKey(t, img.caption),
    })),
  }));

  return {
    // Basic info
    title: translateKey(t, blog.title),
    badgeTitle: translateKey(t, blog.badgeTitle),
    publishedDate: translateKey(t, blog.publishedDate),
    description: translateKey(t, blog.description),
    readTime: t('blogReadTime'),

    // Images
    mainImage: blog.detailsImg,
    mainImageAlt: blog.imageAlt ? translateKey(t, blog.imageAlt) : translateKey(t, blog.title),
    secondaryImage1: blog.secondaryImage1,
    secondaryImage1Alt: blog.secondaryImage1Alt
      ? translateKey(t, blog.secondaryImage1Alt)
      : undefined,
    secondaryImage2: blog.secondaryImage2,
    secondaryImage2Alt: blog.secondaryImage2Alt
      ? translateKey(t, blog.secondaryImage2Alt)
      : undefined,
    secondaryImage3: blog.secondaryImage3,
    secondaryImage3Alt: blog.secondaryImage3Alt
      ? translateKey(t, blog.secondaryImage3Alt)
      : undefined,
    secondaryImage4: blog.secondaryImage4,
    secondaryImage4Alt: blog.secondaryImage4Alt
      ? translateKey(t, blog.secondaryImage4Alt)
      : undefined,
    secondaryImage5: blog.secondaryImage5,
    secondaryImage5Alt: blog.secondaryImage5Alt
      ? translateKey(t, blog.secondaryImage5Alt)
      : undefined,
    secondaryImage6: blog.secondaryImage6,
    secondaryImage6Alt: blog.secondaryImage6Alt
      ? translateKey(t, blog.secondaryImage6Alt)
      : undefined,

    // Sections
    section1: buildSection(t, blog, 1),
    section2: buildSection(t, blog, 2),
    section3: buildSection(t, blog, 3),
    section4: buildSection(t, blog, 4),
    section5: buildSection(t, blog, 5),
    section6: buildSection(t, blog, 6),
    section7: buildSection(t, blog, 7),
    section8: buildSection(t, blog, 8),
    section9: buildSection(t, blog, 9),
    section10: buildSection(t, blog, 10),
    section11: buildSection(t, blog, 11),
    section12: buildSection(t, blog, 12),

    // CTA
    ctaTitle: t('blogCTA.title'),
    ctaDescription: t('blogCTA.description'),
    ctaButtonText: t('blogCTA.buttonText'),
    ctaLink,

    // Inline section images
    sectionImages: translatedSectionImages.length > 0 ? translatedSectionImages : undefined,
  };
}

// Transform related posts to translated format
function translateRelatedPosts(
  t: (key: string) => string,
  posts: typeof blogDataOne,
  currentPostId: number
): RelatedPostTranslated[] {
  return posts
    .filter(post => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(post => ({
      id: post.id,
      slug: post.slug,
      image: post.image,
      badgeTitle: translateKey(t, post.badgeTitle),
      title: translateKey(t, post.title),
      publishedDate: translateKey(t, post.publishedDate),
      description: translateKey(t, post.description),
    }));
}

// Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogData.find(blog => blog.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found – Coral Boats Mallorca',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const dict = await getDictionary(params.lang);
  const t = createTranslator(dict);

  const seoTitle = translateKey(t, blog.metaTitle) || translateKey(t, blog.title);
  const seoDescription =
    translateKey(t, blog.metaDescription) ||
    translateKey(t, blog.description) ||
    'Discover tips, guides, and inspiration for your boat trips in Mallorca.';
  const keywords = translateKey(t, blog.keyword);
  const canonicalUrl = buildCanonical(params.lang, `blog-details/${params.slug}`);

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: keywords || undefined,
    metadataBase: new URL('https://www.coralboatsmallorca.com'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `/en/blog-details/${params.slug}`,
        'es': `/es/blog-details/${params.slug}`,
        'de': `/de/blog-details/${params.slug}`,
        'fr': `/fr/blog-details/${params.slug}`,
        'it': `/it/blog-details/${params.slug}`,
        'ca': `/ca/blog-details/${params.slug}`,
        'x-default': `/en/blog-details/${params.slug}`,
      },
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: translateKey(t, blog.publishedDate),
      url: canonicalUrl,
      images: [
        {
          url: `https://www.coralboatsmallorca.com${blog.image.src}`,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [`https://www.coralboatsmallorca.com${blog.image.src}`],
    },
  };
}

// Main page component - Server Component
export default async function BlogDetailsPage({ params }: Props) {
  const blog = blogData.find(blog => blog.slug === params.slug);

  // Load translations first (needed for header/footer)
  const dict = await getDictionary(params.lang);
  const locale = params.lang as Locale;

  if (!blog) {
    return (
      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dict)} hasTopBar />
        <main>
          <div className="container text-center py-5">
            <h1>Blog Not Found</h1>
            <p>The blog post &quot;{params.slug}&quot; could not be found.</p>
          </div>
        </main>
        <FooterSSR locale={locale} translations={getFooterTranslations(dict)} />
      </Wrapper>
    );
  }

  // Create translator
  const t = createTranslator(dict);

  // Translate the blog post
  const translatedBlog = translateBlogPost(t, blog, params.lang);

  // Translate related posts
  const relatedPosts = translateRelatedPosts(t, blogDataOne, blog.id);

  // Related posts UI texts
  const relatedPostsTexts: RelatedPostsTexts = {
    title: t('relatedPosts.title') !== 'relatedPosts.title' ? t('relatedPosts.title') : 'Continue Reading',
    subtitle: t('relatedPosts.subtitle') !== 'relatedPosts.subtitle' ? t('relatedPosts.subtitle') : 'Discover more insights about boat tours in Mallorca',
    readArticle: t('relatedPosts.readArticle') !== 'relatedPosts.readArticle' ? t('relatedPosts.readArticle') : 'Read Article',
    viewAllArticles: t('relatedPosts.viewAllArticles') !== 'relatedPosts.viewAllArticles' ? t('relatedPosts.viewAllArticles') : 'View All Articles',
  };

  // Build SEO title and description for schemas
  const seoTitle = translateKey(t, blog.metaTitle) || translatedBlog.title;
  const seoDescription = translateKey(t, blog.metaDescription) || translatedBlog.description;
  const publishedDate = translatedBlog.publishedDate;

  // Convert Spanish date format to ISO 8601
  const parseSpanishDate = (dateStr: string): string => {
    const months: { [key: string]: string } = {
      enero: '01', febrero: '02', marzo: '03', abril: '04',
      mayo: '05', junio: '06', julio: '07', agosto: '08',
      septiembre: '09', octubre: '10', noviembre: '11', diciembre: '12',
      january: '01', february: '02', march: '03', april: '04',
      may: '05', june: '06', july: '07', august: '08',
      september: '09', october: '10', november: '11', december: '12',
      januar: '01', februar: '02', märz: '03', april_de: '04',
      mai: '05', juni: '06', juli: '07', august_de: '08',
      september_de: '09', oktober: '10', november_de: '11', dezember: '12',
    };

    // Spanish format: "24 de enero de 2026"
    const spanishMatch = dateStr.match(/(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})/i);
    if (spanishMatch) {
      const day = spanishMatch[1].padStart(2, '0');
      const month = months[spanishMatch[2].toLowerCase()] || '01';
      const year = spanishMatch[3];
      return `${year}-${month}-${day}T09:00:00+02:00`;
    }

    // English format: "January 24, 2026"
    const englishMatch = dateStr.match(/(\w+)\s+(\d{1,2}),?\s+(\d{4})/i);
    if (englishMatch) {
      const month = months[englishMatch[1].toLowerCase()] || '01';
      const day = englishMatch[2].padStart(2, '0');
      const year = englishMatch[3];
      return `${year}-${month}-${day}T09:00:00+02:00`;
    }

    return new Date().toISOString();
  };

  const isoPublishedDate = parseSpanishDate(publishedDate);
  const canonicalUrl = `https://www.coralboatsmallorca.com/${params.lang}/blog-details/${params.slug}`;
  const imageUrl = `https://www.coralboatsmallorca.com${blog.image.src}`;

  // Get article category from badge
  const articleCategory = translatedBlog.badgeTitle || 'Boat Tours';
  const publishedYear = isoPublishedDate.substring(0, 4);

  // Build images array for schema
  const schemaImages: object[] = [
    {
      '@type': 'ImageObject',
      url: imageUrl,
      contentUrl: imageUrl,
      width: blog.image.width || 1200,
      height: blog.image.height || 630,
      name: translatedBlog.mainImageAlt,
      description: seoDescription,
      caption: seoDescription,
      inLanguage: params.lang,
    },
  ];

  if (blog.secondaryImage1) {
    schemaImages.push({
      '@type': 'ImageObject',
      url: `https://www.coralboatsmallorca.com${blog.secondaryImage1.src}`,
      contentUrl: `https://www.coralboatsmallorca.com${blog.secondaryImage1.src}`,
      width: blog.secondaryImage1.width || 1200,
      height: blog.secondaryImage1.height || 630,
      name: translatedBlog.secondaryImage1Alt || seoTitle,
      inLanguage: params.lang,
    });
  }

  if (blog.secondaryImage2) {
    schemaImages.push({
      '@type': 'ImageObject',
      url: `https://www.coralboatsmallorca.com${blog.secondaryImage2.src}`,
      contentUrl: `https://www.coralboatsmallorca.com${blog.secondaryImage2.src}`,
      width: blog.secondaryImage2.width || 1200,
      height: blog.secondaryImage2.height || 630,
      name: translatedBlog.secondaryImage2Alt || seoTitle,
      inLanguage: params.lang,
    });
  }

  const extraImages = [
    { img: blog.secondaryImage3, alt: translatedBlog.secondaryImage3Alt },
    { img: blog.secondaryImage4, alt: translatedBlog.secondaryImage4Alt },
    { img: blog.secondaryImage5, alt: translatedBlog.secondaryImage5Alt },
    { img: blog.secondaryImage6, alt: translatedBlog.secondaryImage6Alt },
  ];
  for (const { img, alt } of extraImages) {
    if (img) {
      schemaImages.push({
        '@type': 'ImageObject',
        url: `https://www.coralboatsmallorca.com${img.src}`,
        contentUrl: `https://www.coralboatsmallorca.com${img.src}`,
        width: img.width || 1200,
        height: img.height || 630,
        name: alt || seoTitle,
        inLanguage: params.lang,
      });
    }
  }

  // BreadcrumbList Schema (translated)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('breadcrumb.home') !== 'breadcrumb.home' ? t('breadcrumb.home') : 'Home',
        item: 'https://www.coralboatsmallorca.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `https://www.coralboatsmallorca.com/${params.lang}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: seoTitle,
        item: canonicalUrl,
      },
    ],
  };

  // BlogPosting Schema
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#blogposting`,
    url: canonicalUrl,
    headline: seoTitle,
    alternativeHeadline: seoDescription.substring(0, 110),
    description: seoDescription,
    image: schemaImages.length === 1 ? schemaImages[0] : schemaImages,
    thumbnailUrl: imageUrl,
    datePublished: isoPublishedDate,
    dateModified: isoPublishedDate,
    dateCreated: isoPublishedDate,
    author: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
      url: 'https://www.coralboatsmallorca.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.coralboatsmallorca.com/assets/img/logo/logo.png',
      },
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.coralboatsmallorca.com/assets/img/logo/logo.png',
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    inLanguage: params.lang,
    keywords: translateKey(t, blog.keyword),
    articleSection: articleCategory,
    articleBody: seoDescription,
    wordCount: 1500,
    about: {
      '@type': 'Thing',
      name: articleCategory,
      description: `Guide about ${articleCategory.toLowerCase()} in Mallorca`,
    },
    mentions: [
      {
        '@type': 'Place',
        name: 'Alcudia',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Alcudia',
          addressRegion: 'Mallorca',
          addressCountry: 'ES',
        },
      },
      {
        '@type': 'Place',
        name: 'Mallorca',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Balearic Islands',
          addressCountry: 'ES',
        },
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.hero-title', '.hero-subtitle', 'h1', 'h2'],
    },
    copyrightYear: publishedYear,
    copyrightHolder: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': 'https://www.coralboatsmallorca.com/#blog',
      name: 'Coral Boats Mallorca Blog',
      url: `https://www.coralboatsmallorca.com/${params.lang}/blog`,
    },
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dict)} hasTopBar />
        <main>
          {/* SSR Blog Content - All H1, H2, paragraphs rendered server-side */}
          <MagazineLayoutSSR blog={translatedBlog} />

          {/* SSR Related Posts */}
          <RelatedPostsSSR
            posts={relatedPosts}
            texts={relatedPostsTexts}
            locale={params.lang}
          />
        </main>
        <FooterSSR locale={locale} translations={getFooterTranslations(dict)} />
      </Wrapper>
    </>
  );
}
