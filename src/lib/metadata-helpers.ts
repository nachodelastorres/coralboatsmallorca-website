import { Metadata } from 'next';
import { Locale, localeHreflang, locales } from '@/config/locales';
import { homeMetadata, PageMetadata } from '@/config/metadata';
import {
  morningTourMetadata,
  sunsetTourMetadata,
  privateCharterMetadata,
  boatToursAlcudiaMetadata,
  charterPricingMetadata
} from '@/config/tour-metadata';
import {
  aboutMetadata,
  contactMetadata,
  galleryMetadata,
  blogMetadata
} from '@/config/secondary-pages-metadata';
import { categoryMetadataMap } from '@/config/blog-category-metadata';
import { getCategoryById } from '@/config/blog-categories';
import { getAlternateLinks } from './locale-helpers';

const baseUrl = 'https://www.coralboatsmallorca.com';

/**
 * Build a canonical URL with locale and path
 * Ensures no double slashes and proper formatting
 * @param locale - The locale code (e.g., 'en', 'es')
 * @param path - The path without locale (e.g., '/tours' or 'tours')
 * @returns Complete canonical URL (e.g., 'https://www.coralboatsmallorca.com/en/tours')
 */
export function buildCanonical(locale: Locale, path: string = ''): string {
  // Normalize path: remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Build canonical: baseUrl + / + locale + / + path (if path exists)
  // For home page, cleanPath will be empty, so we get: baseUrl/locale
  return cleanPath
    ? `${baseUrl}/${locale}/${cleanPath}`
    : `${baseUrl}/${locale}`;
}

/**
 * Generate metadata for homepage with locale support
 */
export function generateHomeMetadata(locale: Locale): Metadata {
  const meta = homeMetadata[locale];
  const path = '';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Coral Boats Mallorca' }],
    creator: 'Coral Boats Mallorca',
    publisher: 'Coral Boats Mallorca',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: buildCanonical(locale, path),
      languages: Object.fromEntries(
        getAlternateLinks('/', baseUrl, Object.keys(homeMetadata) as Locale[])
          .map(({ hreflang, href }) => [hreflang, href])
      ),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildCanonical(locale, path),
      siteName: 'Coral Boats Mallorca',
      images: [
        {
          url: '/assets/img/premium/01moring.jpg',
          width: 1200,
          height: 630,
          alt: 'Crystal-clear Mediterranean waters in Bay of Alcudia with Coral Boats Mallorca luxury boat tour',
        },
        {
          url: '/assets/img/premium/03sunset.jpg',
          width: 1200,
          height: 630,
          alt: 'Stunning sunset boat tour in Mallorca Bay of Alcudia',
        },
        {
          url: '/assets/img/premium/crew.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional and friendly boat crew of Coral Boats Mallorca',
        },
      ],
      locale: localeHreflang[locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/assets/img/premium/01moring.jpg'],
      creator: '@coralboatsmallorca',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'QEQVoI6aQ5CBtg8FKcEvugtK_T0y6OVRbQoHG8ml79w',
    },
    category: 'travel',
    other: {
      'geo.region': 'ES-PM',
      'geo.placename': 'Alcudia, Mallorca',
      'geo.position': '39.8525;3.1211',
      'ICBM': '39.8525, 3.1211',
    },
  };
}

/**
 * Generic helper to generate metadata for any page
 */
export function generatePageMetadata(
  metadata: Record<Locale, PageMetadata>,
  locale: Locale,
  path: string
): Metadata {
  const meta = metadata[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Coral Boats Mallorca' }],
    creator: 'Coral Boats Mallorca',
    publisher: 'Coral Boats Mallorca',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: buildCanonical(locale, path),
      languages: Object.fromEntries(
        getAlternateLinks(path, baseUrl, Object.keys(metadata) as Locale[])
          .map(({ hreflang, href }) => [hreflang, href])
      ),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildCanonical(locale, path),
      siteName: 'Coral Boats Mallorca',
      locale: localeHreflang[locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@coralboatsmallorca',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'travel',
    other: {
      'geo.region': 'ES-PM',
      'geo.placename': 'Alcudia, Mallorca',
      'geo.position': '39.8525;3.1211',
      'ICBM': '39.8525, 3.1211',
    },
  };
}

/**
 * Generate metadata for Morning Tour page
 */
export function generateMorningTourMetadata(locale: Locale): Metadata {
  return generatePageMetadata(morningTourMetadata, locale, '/alcudia-morning-boat-tour');
}

/**
 * Generate metadata for Sunset Tour page
 */
export function generateSunsetTourMetadata(locale: Locale): Metadata {
  return generatePageMetadata(sunsetTourMetadata, locale, '/alcudia-sunset-boat-tour');
}

/**
 * Generate metadata for Private Charter page
 */
export function generatePrivateCharterMetadata(locale: Locale): Metadata {
  return generatePageMetadata(privateCharterMetadata, locale, '/alcudia-private-boat-charter');
}

/**
 * Generate metadata for Boat Tours Alcudia page
 */
export function generateBoatToursAlcudiaMetadata(locale: Locale): Metadata {
  return generatePageMetadata(boatToursAlcudiaMetadata, locale, '/boat-tours-alcudia');
}

/**
 * Generate metadata for Charter Pricing page
 */
export function generateCharterPricingMetadata(locale: Locale): Metadata {
  return generatePageMetadata(charterPricingMetadata, locale, '/charter-pricing');
}

/**
 * Generate metadata for About page
 */
export function generateAboutMetadata(locale: Locale): Metadata {
  return generatePageMetadata(aboutMetadata, locale, '/about');
}

/**
 * Generate metadata for Contact page
 */
export function generateContactMetadata(locale: Locale): Metadata {
  return generatePageMetadata(contactMetadata, locale, '/contact');
}

/**
 * Generate metadata for Gallery page
 */
export function generateGalleryMetadata(locale: Locale): Metadata {
  return generatePageMetadata(galleryMetadata, locale, '/gallery');
}

/**
 * Generate metadata for Blog page
 */
export function generateBlogMetadata(locale: Locale): Metadata {
  return generatePageMetadata(blogMetadata, locale, '/blog');
}

/**
 * Generate metadata for Blog Category pages.
 * Uses localized slugs for canonical and alternate links.
 */
export function generateBlogCategoryMetadata(categoryId: string, locale: Locale): Metadata {
  const metadataRecord = categoryMetadataMap[categoryId];
  const category = getCategoryById(categoryId);

  if (!metadataRecord || !category) {
    return generateBlogMetadata(locale);
  }

  const meta = metadataRecord[locale];
  const categorySlug = category.slug;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Coral Boats Mallorca' }],
    creator: 'Coral Boats Mallorca',
    publisher: 'Coral Boats Mallorca',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: buildCanonical(locale, `blog/${categorySlug}`),
      languages: Object.fromEntries([
        ...locales.map((l) => [
          l,
          `${baseUrl}/${l}/blog/${categorySlug}`,
        ]),
        ['x-default', `${baseUrl}/en/blog/${categorySlug}`],
      ]),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildCanonical(locale, `blog/${categorySlug}`),
      siteName: 'Coral Boats Mallorca',
      locale: localeHreflang[locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@coralboatsmallorca',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'travel',
    other: {
      'geo.region': 'ES-PM',
      'geo.placename': 'Alcudia, Mallorca',
      'geo.position': '39.8525;3.1211',
      'ICBM': '39.8525, 3.1211',
    },
  };
}
