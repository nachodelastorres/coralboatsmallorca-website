import { Locale } from '@/config/locales';

/**
 * Standard params for pages with locale
 */
export interface LocaleParams {
  lang: Locale;
}

/**
 * Props for pages with locale params
 */
export interface PageProps {
  params: LocaleParams;
}

/**
 * Props for dynamic pages with locale and additional params
 */
export interface DynamicPageProps<T = Record<string, string>> {
  params: LocaleParams & T;
}
