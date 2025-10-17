import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsMain from '@/pages/blog-details/blog-details';
import { DynamicPageProps } from '@/types/params';

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

  // Use metaTitle and metaDescription if available (literal strings for SEO)
  // Otherwise fallback to translation keys
  const seoTitle = blog.metaTitle || `${blog.title} – Coral Boats Mallorca`;
  const seoDescription = blog.metaDescription || blog.description || 'Discover tips, guides, and inspiration for your boat trips in Mallorca.';

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: blog.keyword,
    alternates: {
      canonical: `/${params.lang}/blog-details/${params.slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: blog.publishedDate,
      url: `https://coralboatsmallorca.com/${params.lang}/blog-details/${params.slug}`,
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
