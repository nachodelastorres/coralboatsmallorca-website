import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/locale-helpers';
import type { Locale } from '@/config/locales';
import HeaderClient from './HeaderClient';

import Logo from '@/assets/img/logo/logo transparente sobre claro.png';

// Navigation translations interface
export interface NavTranslations {
  home: string;
  about: string;
  excursions: string;
  morningTour: string;
  sunsetTour: string;
  privateTour: string;
  allTours: string;
  gallery: string;
  blog: string;
  contact: string;
  getInTouch: string;
  email: string;
  phone: string;
  whatsapp: string;
  bookYourTour: string;
}

interface HeaderSSRProps {
  locale: Locale;
  translations: NavTranslations;
  hasTopBar?: boolean;
  headerClass?: string;
}

/**
 * Server-Side Rendered Header Component
 * All text content is rendered on the server with correct translations
 * Client interactivity (sticky, language selector, mobile menu) handled by HeaderClient
 */
const HeaderSSR = ({ locale, translations, hasTopBar, headerClass }: HeaderSSRProps) => {
  const getPath = (path: string) => getLocalizedPath(locale, path);

  // Menu items with translated labels
  const menuItems = [
    { id: 'home', label: translations.home, href: getPath('/') },
    { id: 'about', label: translations.about, href: getPath('/about') },
    {
      id: 'tours',
      label: translations.excursions,
      href: getPath('/boat-tours-alcudia'),
      submenu: [
        { label: translations.morningTour, href: getPath('/alcudia-morning-boat-tour') },
        { label: translations.sunsetTour, href: getPath('/alcudia-sunset-boat-tour') },
        { label: translations.privateTour, href: getPath('/alcudia-private-boat-charter') },
      ],
    },
    { id: 'gallery', label: translations.gallery, href: getPath('/gallery') },
    { id: 'blog', label: translations.blog, href: getPath('/blog') },
    { id: 'contact', label: translations.contact, href: getPath('/contact') },
  ];

  // Mobile menu items (same structure with icons)
  const mobileMenuItems = [
    { id: 'home', label: translations.home, href: getPath('/'), icon: 'fa-house' },
    { id: 'about', label: translations.about, href: getPath('/about'), icon: 'fa-anchor' },
    {
      id: 'tours',
      label: translations.excursions,
      icon: 'fa-ship',
      submenu: [
        { label: translations.morningTour, href: getPath('/alcudia-morning-boat-tour'), icon: 'fa-sun' },
        { label: translations.sunsetTour, href: getPath('/alcudia-sunset-boat-tour'), icon: 'fa-sunset' },
        { label: translations.privateTour, href: getPath('/alcudia-private-boat-charter'), icon: 'fa-champagne-glasses' },
        { label: translations.allTours, href: getPath('/boat-tours-alcudia'), icon: 'fa-compass' },
      ],
    },
    { id: 'gallery', label: translations.gallery, href: getPath('/gallery'), icon: 'fa-camera' },
    { id: 'blog', label: translations.blog, href: getPath('/blog'), icon: 'fa-newspaper' },
    { id: 'contact', label: translations.contact, href: getPath('/contact'), icon: 'fa-envelope' },
  ];

  // Contact translations for mobile menu
  const contactTexts = {
    getInTouch: translations.getInTouch,
    email: translations.email,
    phone: translations.phone,
    whatsapp: translations.whatsapp,
    bookYourTour: translations.bookYourTour,
  };

  return (
    <HeaderClient
      locale={locale}
      headerClass={headerClass}
      menuItems={menuItems}
      mobileMenuItems={mobileMenuItems}
      contactTexts={contactTexts}
      logoElement={
        <Link href={getPath('/')}>
          <Image
            src={Logo}
            alt="Coral Boats Logo"
            className="logo-img"
            width={60}
            height={60}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
      }
    />
  );
};

export default HeaderSSR;
