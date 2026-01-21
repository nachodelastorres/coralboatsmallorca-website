/**
 * Helper functions to generate SSR translations for Header and Footer
 * Use these in page components to get properly translated navigation
 */

import { Dictionary, getNestedValue } from './dictionaries';
import { NavTranslations } from '@/layouts/headers/HeaderSSR';
import { FooterTranslations } from '@/layouts/footers/FooterSSR';

/**
 * Generate header navigation translations from dictionary
 */
export function getHeaderTranslations(dict: Dictionary): NavTranslations {
  const t = (key: string) => getNestedValue(dict as Record<string, unknown>, key);

  return {
    home: t('menu.home'),
    about: t('menu.about'),
    excursions: t('menu.excursions'),
    morningTour: t('menu.morningTour'),
    sunsetTour: t('menu.sunsetTour'),
    privateTour: t('menu.privateTour'),
    allTours: t('menu.allTours'),
    gallery: t('menu.gallery'),
    blog: t('menu.blog'),
    contact: t('menu.contact'),
    getInTouch: t('menu.getInTouch'),
    email: t('menu.email'),
    phone: t('menu.phone'),
    whatsapp: t('menu.whatsapp'),
    bookYourTour: t('menu.bookYourTour'),
  };
}

/**
 * Generate footer translations from dictionary
 */
export function getFooterTranslations(dict: Dictionary): FooterTranslations {
  const t = (key: string) => getNestedValue(dict as Record<string, unknown>, key);

  return {
    description: t('premium.footer_premium.description'),
    quickLinks: t('premium.footer_premium.quick_links'),
    home: t('premium.footer_premium.home'),
    about: t('premium.footer_premium.about'),
    ourTours: t('premium.footer_premium.our_tours'),
    gallery: t('premium.footer_premium.gallery'),
    blog: t('premium.footer_premium.blog'),
    contact: t('premium.footer_premium.contact'),
    toursTitle: t('premium.footer_premium.tours_title'),
    morningTour: t('premium.footer_premium.morning_tour'),
    sunsetTour: t('premium.footer_premium.sunset_tour'),
    privateCharter: t('premium.footer_premium.private_charter'),
    getInTouch: t('premium.footer_premium.get_in_touch'),
    location: t('premium.footer_premium.location'),
    copyright: t('premium.footer_premium.copyright'),
    privacyPolicy: t('premium.footer_premium.privacy_policy'),
    cookiesPolicy: t('premium.footer_premium.cookies_policy'),
    termsConditions: t('premium.footer_premium.terms_conditions'),
  };
}
