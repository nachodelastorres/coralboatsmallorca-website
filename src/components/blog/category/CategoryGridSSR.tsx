import { Dictionary, getNestedValue } from '@/lib/dictionaries';
import { blogDataOne } from '@/data/blog-data';
import { blogCategories, getCategorySlug } from '@/config/blog-categories';
import type { BlogCategory } from '@/config/blog-categories';
import CategoryGridClient from './CategoryGridClient';

interface CategoryGridSSRProps {
  dict: Dictionary;
  lang: string;
  category: BlogCategory;
}

const CategoryGridSSR = ({ dict, lang, category }: CategoryGridSSRProps) => {
  const t = (key: string) => getNestedValue(dict as Record<string, unknown>, key);

  // Get posts for this category, sorted newest first
  const categoryPosts = [...blogDataOne]
    .filter(post => post.category === category.id)
    .sort((a, b) => b.id - a.id);

  // Serialize for client
  const serializedBlogs = categoryPosts.map(blog => ({
    id: blog.id,
    slug: blog.slug,
    image: typeof blog.image === 'string' ? blog.image : blog.image.src,
    title: t(blog.title),
    description: t(blog.description || ''),
    badgeTitle: t(blog.badgeTitle || ''),
    publishedDate: t(blog.publishedDate),
    imageAlt: blog.imageAlt ? t(blog.imageAlt) : undefined,
  }));

  // Build category navigation links
  const categoryLinks = blogCategories.map(cat => ({
    id: cat.id,
    label: t(`blog_page.categories.${cat.translationKey}`),
    icon: cat.icon,
    href: `/${lang}/blog/${getCategorySlug(cat.id)}`,
    active: cat.id === category.id,
  }));

  const blogHref = lang === 'en' ? '/blog' : `/${lang}/blog`;

  const translations = {
    loadMore: t('blog_page.load_more'),
    readMore: t('blog_section.read_more'),
    postCount: t(`blog_category.${category.categoryTranslationKey}.post_count`),
    backToBlog: t('blog_category.back_to_blog'),
    allPostsLabel: t('blog_page.categories.all'),
  };

  return (
    <CategoryGridClient
      blogs={serializedBlogs}
      categoryLinks={categoryLinks}
      lang={lang}
      translations={translations}
      blogHref={blogHref}
      initialVisible={6}
    />
  );
};

export default CategoryGridSSR;
