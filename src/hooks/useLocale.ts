'use client';

import { useParams, usePathname } from 'next/navigation';
import { Locale, defaultLocale, isValidLocale } from '@/config/locales';
import { getLocalizedPath, removeLocaleFromPath } from '@/lib/locale-helpers';

/**
 * Hook to access current locale and locale utilities
 */
export function useLocale() {
  const params = useParams();
  const pathname = usePathname();

  // Get locale from URL params
  const rawLocale = params?.lang as string | undefined;
  const locale: Locale =
    rawLocale && isValidLocale(rawLocale) ? (rawLocale as Locale) : defaultLocale;

  /**
   * Get localized path for the current locale
   */
  const getPath = (path: string): string => {
    return getLocalizedPath(locale, path);
  };

  /**
   * Get current path without locale prefix
   */
  const getCurrentPathWithoutLocale = (): string => {
    return removeLocaleFromPath(pathname ?? '');
  };

  return {
    locale,
    getPath,
    getCurrentPathWithoutLocale,
  };
}
