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
          url: '/assets/img/premium/2026/gallery/coral-boats-mallorca-boat-trips-in-turquoise-water.webp',
          width: 2400,
          height: 1350,
          alt: 'Coral Boats trips through the turquoise water of Mallorca — Bay of Alcudia',
        },
        {
          url: '/assets/img/premium/2026/gallery/sunset-lights-from-sea-excursion-experience-in-mallorca-alcudia.webp',
          width: 2400,
          height: 1800,
          alt: 'Sunset lights seen from a sea excursion experience in Alcudia, Mallorca',
        },
        {
          url: '/assets/img/premium/2026/gallery/coral-boats-crew-cruise-mallorca-north.webp',
          width: 1440,
          height: 1080,
          alt: 'The professional and friendly Coral Boats Mallorca crew during a cruise in north Mallorca',
        },
      ],
      locale: localeHreflang[locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/assets/img/premium/2026/gallery/coral-boats-mallorca-boat-trips-in-turquoise-water.webp'],
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
 * Generic helper to generate metadata for any page.
 * Pass `ogImage` to surface a representative image in social shares and reinforce
 * Google's image selection (combined with JSON-LD ImageObject + hero <Image priority>).
 */
export function generatePageMetadata(
  metadata: Record<Locale, PageMetadata>,
  locale: Locale,
  path: string,
  ogImage?: { url: string; width: number; height: number; alt: string }
): Metadata {
  const meta = metadata[locale];
  const ogImages = ogImage
    ? [{ url: ogImage.url, width: ogImage.width, height: ogImage.height, alt: ogImage.alt }]
    : undefined;
  const twitterImages = ogImage ? [ogImage.url] : undefined;

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
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@coralboatsmallorca',
      ...(twitterImages ? { images: twitterImages } : {}),
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
 * Per-page og:image map. Each entry mirrors the page's hero / JSON-LD image so
 * the signal triplet (hero, structured data, og:image) is consistent — Google
 * almost always surfaces the chosen image when all three agree.
 */
const PAGE_OG_IMAGES = {
  morningTour: { file: 'scenic-view-of-coll-baix-from-the-sky-during-boat-tour.webp', alt: 'Aerial scenic view of Coll Baix beach during a boat tour from Alcudia', width: 4032, height: 2268 },
  sunsetTour: { file: 'puesta-de-sol-puerto-alcuida-paseo-en-barco.webp', alt: 'Sunset over Port of Alcudia during a boat trip', width: 2400, height: 1800 },
  privateCharter: { file: 'alcanada-island-lighhouse-near-port-of-alcudia-during-boat-trip.webp', alt: 'View of Alcanada Lighthouse from a private boat charter in Alcudia, Mallorca', width: 2400, height: 1350 },
  boatToursAlcudia: { file: 'aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island.webp', alt: 'Aerial view of Coral Boats sailing past Alcanada Lighthouse Island in Alcudia', width: 2400, height: 1350 },
  charterPricing: { file: 'coral-boat-for-water-activities-and-boat-excursiones-mallorca-alcudia.webp', alt: 'Coral Boats vessel ready for private charter and water activities in Alcudia', width: 2400, height: 3200 },
  about: { file: 'coral-boat-ride-in-best-beaches-mallorca-alcudia-views.webp', alt: 'Coral Boats ride along the best beaches of Alcudia Bay in Mallorca', width: 1280, height: 1707 },
  contact: { file: 'coral-boats-mallorca-boat-trips-in-turquoise-water.webp', alt: 'Coral Boats trips through the turquoise water of Mallorca — contact us', width: 2400, height: 1350 },
  blog: { file: 'coral-boats-crew-cruise-mallorca-north.webp', alt: 'The Coral Boats Mallorca crew during a cruise in the north of the island', width: 1440, height: 1080 },
} as const;

function buildOgImage(key: keyof typeof PAGE_OG_IMAGES) {
  const m = PAGE_OG_IMAGES[key];
  return { url: `${baseUrl}/assets/img/premium/2026/gallery/${m.file}`, width: m.width, height: m.height, alt: m.alt };
}

/**
 * Generate metadata for Morning Tour page
 */
export function generateMorningTourMetadata(locale: Locale): Metadata {
  return generatePageMetadata(morningTourMetadata, locale, '/alcudia-morning-boat-tour', buildOgImage('morningTour'));
}

/**
 * Generate metadata for Sunset Tour page
 */
export function generateSunsetTourMetadata(locale: Locale): Metadata {
  return generatePageMetadata(sunsetTourMetadata, locale, '/alcudia-sunset-boat-tour', buildOgImage('sunsetTour'));
}

/**
 * Generate metadata for Private Charter page
 */
export function generatePrivateCharterMetadata(locale: Locale): Metadata {
  return generatePageMetadata(privateCharterMetadata, locale, '/alcudia-private-boat-charter', buildOgImage('privateCharter'));
}

/**
 * Generate metadata for Boat Tours Alcudia page
 */
export function generateBoatToursAlcudiaMetadata(locale: Locale): Metadata {
  return generatePageMetadata(boatToursAlcudiaMetadata, locale, '/boat-tours-alcudia', buildOgImage('boatToursAlcudia'));
}

/**
 * Generate metadata for Charter Pricing page
 */
export function generateCharterPricingMetadata(locale: Locale): Metadata {
  return generatePageMetadata(charterPricingMetadata, locale, '/charter-pricing', buildOgImage('charterPricing'));
}

/**
 * Generate metadata for About page
 */
export function generateAboutMetadata(locale: Locale): Metadata {
  return generatePageMetadata(aboutMetadata, locale, '/about', buildOgImage('about'));
}

/**
 * Generate metadata for Contact page
 */
export function generateContactMetadata(locale: Locale): Metadata {
  return generatePageMetadata(contactMetadata, locale, '/contact', buildOgImage('contact'));
}

/**
 * Generate metadata for Gallery page
 */
export function generateGalleryMetadata(locale: Locale): Metadata {
  const meta = galleryMetadata[locale];
  return generatePageMetadata(galleryMetadata, locale, '/gallery', {
    url: `${baseUrl}/assets/img/premium/2026/gallery/aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island.webp`,
    width: 2400,
    height: 1350,
    alt: meta.title,
  });
}

/**
 * Generate metadata for Blog page
 */
export function generateBlogMetadata(locale: Locale): Metadata {
  return generatePageMetadata(blogMetadata, locale, '/blog', buildOgImage('blog'));
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
