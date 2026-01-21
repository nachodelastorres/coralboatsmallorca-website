import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsMain from '@/components/page-layouts/BlogDetailsMain';
import { getTranslations } from '@/lib/get-translations';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogData.find((blog) => blog.slug === params.slug);
  const t = await getTranslations('en');

  if (!blog) {
    return {
      title: 'Blog Not Found – Coral Boats Mallorca',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  // Use metaTitle and metaDescription if available (literal strings for SEO)
  const seoTitle = blog.metaTitle && blog.metaTitle.includes('.')
    ? t(blog.metaTitle) || blog.metaTitle
    : blog.metaTitle || `${blog.title} – Coral Boats Mallorca`;

  const seoDescription = blog.metaDescription && blog.metaDescription.includes('.')
    ? t(blog.metaDescription) || blog.metaDescription
    : blog.metaDescription || blog.description || 'Discover tips, guides, and inspiration for your boat trips in Mallorca.';

  const canonicalUrl = `https://www.coralboatsmallorca.com/blog-details/${params.slug}`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: blog.keyword,
    metadataBase: new URL('https://www.coralboatsmallorca.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: blog.publishedDate,
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
  const t = await getTranslations('en');

  const seoTitle = blog.metaTitle && blog.metaTitle.includes('.')
    ? t(blog.metaTitle) || blog.metaTitle
    : blog.metaTitle || blog.title;

  const seoDescription = blog.metaDescription && blog.metaDescription.includes('.')
    ? t(blog.metaDescription) || blog.metaDescription
    : blog.metaDescription || blog.description || '';

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

    return new Date().toISOString();
  };

  const isoPublishedDate = parseSpanishDate(publishedDate);
  const canonicalUrl = `https://www.coralboatsmallorca.com/blog-details/${params.slug}`;
  const imageUrl = `https://www.coralboatsmallorca.com${blog.image.src}`;

  // Build images array for schema (support multiple images)
  const schemaImages: object[] = [
    {
      "@type": "ImageObject",
      "url": imageUrl,
      "contentUrl": imageUrl,
      "width": blog.image.width || 1200,
      "height": blog.image.height || 630,
      "name": blog.imageAlt ? (t(blog.imageAlt) || seoTitle) : seoTitle,
      "description": blog.imageCaption ? (t(blog.imageCaption) || seoDescription) : seoDescription,
      "caption": blog.imageCaption ? (t(blog.imageCaption) || seoDescription) : seoDescription,
      "inLanguage": "en"
    }
  ];

  // Add secondary images if available
  if (blog.secondaryImage1) {
    schemaImages.push({
      "@type": "ImageObject",
      "url": `https://www.coralboatsmallorca.com${blog.secondaryImage1.src}`,
      "contentUrl": `https://www.coralboatsmallorca.com${blog.secondaryImage1.src}`,
      "width": blog.secondaryImage1.width || 1200,
      "height": blog.secondaryImage1.height || 630,
      "name": blog.secondaryImage1Alt ? (t(blog.secondaryImage1Alt) || seoTitle) : seoTitle,
      "inLanguage": "en"
    });
  }

  if (blog.secondaryImage2) {
    schemaImages.push({
      "@type": "ImageObject",
      "url": `https://www.coralboatsmallorca.com${blog.secondaryImage2.src}`,
      "contentUrl": `https://www.coralboatsmallorca.com${blog.secondaryImage2.src}`,
      "width": blog.secondaryImage2.width || 1200,
      "height": blog.secondaryImage2.height || 630,
      "name": blog.secondaryImage2Alt ? (t(blog.secondaryImage2Alt) || seoTitle) : seoTitle,
      "inLanguage": "en"
    });
  }

  // Get article category/topic from badge
  const articleCategory = blog.badgeTitle && blog.badgeTitle.includes('.')
    ? t(blog.badgeTitle) || 'Boat Tours'
    : blog.badgeTitle || 'Boat Tours';

  // Extract year from published date for copyright
  const publishedYear = isoPublishedDate.substring(0, 4);

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
        "item": "https://www.coralboatsmallorca.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": seoTitle,
        "item": canonicalUrl
      }
    ]
  };

  // BlogPosting Schema - Complete with all recommended fields
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    "url": canonicalUrl,
    "headline": seoTitle,
    "alternativeHeadline": seoDescription.substring(0, 110),
    "description": seoDescription,
    "image": schemaImages.length === 1 ? schemaImages[0] : schemaImages,
    "thumbnailUrl": imageUrl,
    "datePublished": isoPublishedDate,
    "dateModified": isoPublishedDate,
    "dateCreated": isoPublishedDate,
    "author": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca",
      "url": "https://www.coralboatsmallorca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.coralboatsmallorca.com/assets/img/logo/logo.png"
      }
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
    "inLanguage": "en",
    "keywords": blog.keyword && blog.keyword.includes('.')
      ? t(blog.keyword) || blog.keyword
      : blog.keyword,
    "articleSection": articleCategory,
    "articleBody": seoDescription,
    "wordCount": 1500,
    "about": {
      "@type": "Thing",
      "name": articleCategory,
      "description": `Guide about ${articleCategory.toLowerCase()} in Mallorca`
    },
    "mentions": [
      {
        "@type": "Place",
        "name": "Alcudia",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Alcudia",
          "addressRegion": "Mallorca",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "Place",
        "name": "Mallorca",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Balearic Islands",
          "addressCountry": "ES"
        }
      }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-title", ".hero-subtitle", "h1", "h2"]
    },
    "copyrightYear": publishedYear,
    "copyrightHolder": {
      "@type": "Organization",
      "@id": "https://www.coralboatsmallorca.com/#organization",
      "name": "Coral Boats Mallorca"
    },
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://www.coralboatsmallorca.com/#blog",
      "name": "Coral Boats Mallorca Blog",
      "url": "https://www.coralboatsmallorca.com/blog"
    },
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
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

