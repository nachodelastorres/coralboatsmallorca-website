import { Dictionary, getNestedValue } from '@/lib/dictionaries';
import { blogDataOne } from '@/data/blog-data';
import BlogGridClient from './BlogGridClient';

interface BlogIndexGridSSRProps {
  dict: Dictionary;
  lang: string;
}

const BlogIndexGridSSR = ({ dict, lang }: BlogIndexGridSSRProps) => {
  const t = (key: string) => getNestedValue(dict as Record<string, unknown>, key);

  // Sort blogs by ID (newest first)
  const sortedBlogs = [...blogDataOne].sort((a, b) => b.id - a.id);

  // Serialize blogs for client component (convert image objects to strings)
  const serializedBlogs = sortedBlogs.map(blog => ({
    id: blog.id,
    slug: blog.slug,
    image: typeof blog.image === 'string' ? blog.image : blog.image.src,
    title: t(blog.title),
    description: t(blog.description || ''),
    badgeTitle: t(blog.badgeTitle || ''),
    publishedDate: t(blog.publishedDate),
    category: blog.category || 'all',
    imageAlt: blog.imageAlt ? t(blog.imageAlt) : undefined,
  }));

  // Categories with translated labels
  const categories = [
    { id: 'all', label: t('blog_page.categories.all'), icon: 'fa-grip' },
    { id: 'Guías', label: t('blog_page.categories.guides'), icon: 'fa-map' },
    { id: 'Excursiones', label: t('blog_page.categories.tours'), icon: 'fa-ship' },
    { id: 'Destinos', label: t('blog_page.categories.destinations'), icon: 'fa-location-dot' },
    { id: 'Consejos', label: t('blog_page.categories.tips'), icon: 'fa-lightbulb' },
  ];

  // Translations for client component
  const translations = {
    loadMore: t('blog_page.load_more'),
    readMore: t('blog_section.read_more'),
    featuredBadge: t('blog_page.featured.badge'),
    featuredTitle: t('blog_page.featured.title'),
    featuredSubtitle: t('blog_page.featured.subtitle'),
  };

  return (
    <BlogGridClient
      blogs={serializedBlogs}
      categories={categories}
      lang={lang}
      translations={translations}
      initialVisible={6}
    />
  );
};

export default BlogIndexGridSSR;
