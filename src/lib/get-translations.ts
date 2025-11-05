import { Locale } from '@/config/locales';
import fs from 'fs';
import path from 'path';

// Cache for loaded translations
const translationsCache = new Map<Locale, Record<string, any>>();

/**
 * Load translations for a specific locale
 * This is a server-side helper for loading translations in server components
 */
export async function getTranslations(locale: Locale): Promise<(key: string) => string | null> {
  // Check if translations are already cached
  if (!translationsCache.has(locale)) {
    try {
      // Load the common.json file for the locale
      const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'common.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const translations = JSON.parse(fileContents);

      // Cache the translations
      translationsCache.set(locale, translations);
    } catch (error) {
      console.error(`Failed to load translations for locale: ${locale}`, error);
      return () => null;
    }
  }

  const translations = translationsCache.get(locale)!;

  // Return a translation function
  return (key: string): string | null => {
    if (!key) return null;

    // Support nested keys like "blog_uno.title"
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }

    return typeof value === 'string' ? value : null;
  };
}
