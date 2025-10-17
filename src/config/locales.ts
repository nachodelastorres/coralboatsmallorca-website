// Supported locales configuration
export const locales = ['en', 'es', 'de', 'fr', 'it', 'ca'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale names for display
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  ca: 'Català',
};

// Locale flags (using existing flag images)
export const localeFlags: Record<Locale, string> = {
  en: '/flags/uk-modified.png',
  es: '/flags/spain-modified.png',
  de: '/flags/germany-modified.png',
  fr: '/flags/france-modified.png',
  it: '/flags/italy-modified.png',
  ca: '/flags/catalonia-modified.png',
};

// SEO: Locale codes for hreflang
export const localeHreflang: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  de: 'de',
  fr: 'fr',
  it: 'it',
  ca: 'ca',
};

// Check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Get locale from string with fallback
export function getValidLocale(locale: string | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return defaultLocale;
}
