/**
 * Server-side dictionary loader for SSR translations
 * This module loads translations directly from JSON files on the server
 * without depending on react-i18next (which is client-side)
 */

import type { Locale } from '@/config/locales';

// Type for the dictionary structure
export type Dictionary = Record<string, unknown>;

// Cache for loaded dictionaries to avoid re-reading files
const dictionaryCache: Partial<Record<Locale, Dictionary>> = {};

/**
 * Load dictionary for a specific locale
 * Uses dynamic imports which work in Next.js server components
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  // Return from cache if available
  if (dictionaryCache[locale]) {
    return dictionaryCache[locale]!;
  }

  let dictionary: Dictionary;

  try {
    // Dynamic imports for each locale
    // These paths are relative to the project root
    switch (locale) {
      case 'es':
        dictionary = (await import('../../public/locales/es/common.json')).default;
        break;
      case 'de':
        dictionary = (await import('../../public/locales/de/common.json')).default;
        break;
      case 'fr':
        dictionary = (await import('../../public/locales/fr/common.json')).default;
        break;
      case 'it':
        dictionary = (await import('../../public/locales/it/common.json')).default;
        break;
      case 'ca':
        dictionary = (await import('../../public/locales/ca/common.json')).default;
        break;
      case 'en':
      default:
        dictionary = (await import('../../public/locales/en/common.json')).default;
        break;
    }
  } catch (error) {
    console.error(`Failed to load dictionary for locale "${locale}":`, error);
    // Fallback to English
    dictionary = (await import('../../public/locales/en/common.json')).default;
  }

  // Cache the dictionary
  dictionaryCache[locale] = dictionary;

  return dictionary;
}

/**
 * Get a nested value from an object using dot notation
 * Example: getNestedValue(dict, 'morningTour.hero.title')
 */
export function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      // Return the key path if value not found (helps debug missing translations)
      return path;
    }
  }

  return typeof result === 'string' ? result : path;
}

/**
 * Create a translation function for a specific dictionary
 * Similar to the t() function from react-i18next but for server-side use
 */
export function createTranslator(dictionary: Dictionary) {
  return function t(key: string): string {
    return getNestedValue(dictionary as Record<string, unknown>, key);
  };
}
