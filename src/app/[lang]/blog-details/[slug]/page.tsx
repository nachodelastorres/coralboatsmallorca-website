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

export default function BlogDetailsPage({ params }: Props) {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with slug: {params.slug}
    </div>
  );
}
