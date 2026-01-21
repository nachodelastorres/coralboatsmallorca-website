import { Locale, defaultLocale } from '@/config/locales';

/**
 * Generate a localized path
 * @param locale - The locale to use
 * @param path - The path without locale prefix (e.g., '/contact')
 * @returns Localized path (e.g., '/en/contact')
 */
export function getLocalizedPath(locale: Locale, path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Return path with locale prefix
  return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`;
}

/**
 * Remove locale prefix from path
 * @param path - Path with locale prefix (e.g., '/en/contact')
 * @returns Path without locale (e.g., '/contact')
 */
export function removeLocaleFromPath(path: string): string {
  // Match pattern: /[locale]/rest-of-path
  const match = path.match(/^\/[a-z]{2}(\/.*)?$/);
  if (match) {
    return match[1] || '/';
  }
  return path;
}

/**
 * Extract locale from path
 * @param path - Path that may contain locale (e.g., '/en/contact')
 * @returns Locale if found, undefined otherwise
 */
export function getLocaleFromPath(path: string): string | undefined {
  const match = path.match(/^\/([a-z]{2})(\/|$)/);
  return match ? match[1] : undefined;
}

/**
 * Switch to a different locale while preserving the current path
 * @param currentPath - Current path (e.g., '/en/contact')
 * @param newLocale - Target locale
 * @returns New path with switched locale (e.g., '/de/contact')
 */
export function switchLocale(currentPath: string, newLocale: Locale): string {
  const pathWithoutLocale = removeLocaleFromPath(currentPath);
  return getLocalizedPath(newLocale, pathWithoutLocale);
}

/**
 * Get alternate links for hreflang tags
 * @param path - Current path without locale (e.g., '/contact')
 * @param baseUrl - Base URL of the site
 * @param locales - Array of locales
 * @returns Array of alternate link objects including x-default pointing to /en
 */
export function getAlternateLinks(
  path: string,
  baseUrl: string,
  locales: readonly Locale[]
): Array<{ hreflang: string; href: string }> {
  // Generate links for each locale
  const localeLinks = locales.map((locale) => ({
    hreflang: locale,
    href: `${baseUrl}${getLocalizedPath(locale, path)}`,
  }));

  // Add x-default pointing to /en version (international fallback)
  const xDefaultLink = {
    hreflang: 'x-default',
    href: `${baseUrl}${getLocalizedPath('en', path)}`,
  };

  return [...localeLinks, xDefaultLink];
}
