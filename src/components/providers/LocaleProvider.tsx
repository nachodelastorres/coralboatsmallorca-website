'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '@/config/locales';

interface LocaleProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

/**
 * Provider to sync i18next language with the current locale from URL
 */
export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Sync i18next language with URL locale
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return <>{children}</>;
}
