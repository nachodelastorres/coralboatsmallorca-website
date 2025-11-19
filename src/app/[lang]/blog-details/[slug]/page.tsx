import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsMain from '@/pages/blog-details/blog-details';
import { DynamicPageProps } from '@/types/params';
import { getTranslations } from '@/lib/get-translations';
import { buildCanonical } from '@/lib/metadata-helpers';

interface BlogDetailsParams {
  slug: string;
}

type Props = DynamicPageProps<BlogDetailsParams>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found – Coral Boats Mallorca',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  // Get translations for the current locale
  const t = await getTranslations(params.lang);

  // Translate metaTitle and metaDescription if they are translation keys
  const seoTitle = blog.metaTitle && blog.metaTitle.includes('.')
    ? t(blog.metaTitle) || blog.metaTitle
    : blog.metaTitle || t(blog.title) || `${blog.title} – Coral Boats Mallorca`;

  const seoDescription = blog.metaDescription && blog.metaDescription.includes('.')
    ? t(blog.metaDescription) || blog.metaDescription
    : blog.metaDescription || (blog.description ? t(blog.description) : null) || 'Discover tips, guides, and inspiration for your boat trips in Mallorca.';

  const keywords = blog.keyword && blog.keyword.includes('.')
    ? t(blog.keyword) || blog.keyword
    : blog.keyword;

  const canonicalUrl = buildCanonical(params.lang, `blog-details/${params.slug}`);

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: keywords,
    metadataBase: new URL('https://www.coralboatsmallorca.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: t(blog.publishedDate) || blog.publishedDate,
      url: canonicalUrl,
      images: [
        {
          url: blog.image.src,
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
      images: [blog.image.src],
    },
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return (
      <div className="text-center pt-100">
        Blog not found with slug: {params.slug}
      </div>
    );
  }

  // Get translations for schema
  const t = await getTranslations(params.lang);

  const seoTitle = blog.metaTitle && blog.metaTitle.includes('.')
    ? t(blog.metaTitle) || blog.metaTitle
    : blog.metaTitle || t(blog.title) || blog.title;

  const seoDescription = blog.metaDescription && blog.metaDescription.includes('.')
    ? t(blog.metaDescription) || blog.metaDescription
    : blog.metaDescription || (blog.description ? t(blog.description) : null) || '';

  const publishedDate = blog.publishedDate && blog.publishedDate.includes('.')
    ? t(blog.publishedDate) || blog.publishedDate
    : blog.publishedDate || new Date().toISOString();

  // Convert Spanish date format to ISO 8601
  const parseSpanishDate = (dateStr: string): string => {
    const months: { [key: string]: string } = {
      'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
      'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
      'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
    };

    const match = dateStr.match(/(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})/);
    if (match) {
      const day = match[1].padStart(2, '0');
      const month = months[match[2].toLowerCase()] || '01';
      const year = match[3];
      return `${year}-${month}-${day}T09:00:00+02:00`;
    }

    // Fallback to current date if parsing fails
    return new Date().toISOString();
  };

  const isoPublishedDate = parseSpanishDate(publishedDate);
  const canonicalUrl = `https://www.coralboatsmallorca.com/${params.lang}/blog-details/${params.slug}`;
  const imageUrl = `https://www.coralboatsmallorca.com${blog.image.src}`;

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.coralboatsmallorca.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `https://www.coralboatsmallorca.com/${params.lang}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": seoTitle,
        "item": canonicalUrl
      }
    ]
  };

  // BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    "headline": seoTitle,
    "description": seoDescription,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": blog.image.width || 1200,
      "height": blog.image.height || 630,
    },
    "datePublished": isoPublishedDate,
    "dateModified": isoPublishedDate,
    "author": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca",
      "url": "https://www.coralboatsmallorca.com"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.coralboatsmallorca.com/assets/img/logo/logo.png",
        "width": 512,
        "height": 512
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "inLanguage": params.lang,
    "keywords": blog.keyword && blog.keyword.includes('.')
      ? t(blog.keyword) || blog.keyword
      : blog.keyword,
    "articleSection": "Boat Tours & Travel Guides",
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://www.coralboatsmallorca.com/#blog",
      "name": "Coral Boats Mallorca Blog"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <BlogDetailsMain blog={blog} />
    </>
  );
}
