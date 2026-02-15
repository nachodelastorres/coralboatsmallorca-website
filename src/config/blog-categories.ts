import type { Locale } from '@/config/locales';
import { locales } from '@/config/locales';
import { blogDataOne } from '@/data/blog-data';
import type { IBlogDT } from '@/types/blog-d-t';

export interface BlogCategory {
  id: string;
  slug: string;
  icon: string;
  translationKey: string;       // key inside blog_page.categories.*
  categoryTranslationKey: string; // key inside blog_category.*
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'Excursiones',
    slug: 'boat-tours',
    icon: 'fa-ship',
    translationKey: 'tours',
    categoryTranslationKey: 'tours',
  },
  {
    id: 'Destinos',
    slug: 'destinations',
    icon: 'fa-location-dot',
    translationKey: 'destinations',
    categoryTranslationKey: 'destinations',
  },
  {
    id: 'Guias',
    slug: 'guides-and-tips',
    icon: 'fa-map',
    translationKey: 'guides',
    categoryTranslationKey: 'guides',
  },
  {
    id: 'Consejos',
    slug: 'travel-tips',
    icon: 'fa-lightbulb',
    translationKey: 'tips',
    categoryTranslationKey: 'tips',
  },
];

/** Get a category by its internal ID */
export function getCategoryById(categoryId: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.id === categoryId);
}

/** Get the slug for a category */
export function getCategorySlug(categoryId: string): string {
  const category = getCategoryById(categoryId);
  return category ? category.slug : '';
}

/** Find a category by its slug */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

/** Get all blog posts for a given category */
export function getPostsByCategory(categoryId: string): IBlogDT[] {
  return blogDataOne.filter((post) => post.category === categoryId);
}

/** Generate all static params for category pages (locale + slug combos) */
export function generateCategoryStaticParams(): Array<{ lang: string; categorySlug: string }> {
  const params: Array<{ lang: string; categorySlug: string }> = [];
  for (const locale of locales) {
    for (const category of blogCategories) {
      params.push({
        lang: locale,
        categorySlug: category.slug,
      });
    }
  }
  return params;
}
