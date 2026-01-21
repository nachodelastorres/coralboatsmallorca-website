'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import type { Locale } from '@/config/locales';
import { removeLocaleFromPath } from '@/lib/locale-helpers';
import OffCanvasSSR from '@/components/offcanvas/OffCanvasSSR';

import Logo from '@/assets/img/logo/logo transparente sobre oscuro.png';

const UKFlag = '/flags/uk-modified.png';
const SpainFlag = '/flags/spain-modified.png';
const GermanyFlag = '/flags/germany-modified.png';
const FrenchFlag = '/flags/france-modified.png';
const ItalianFlag = '/flags/italy-modified.png';
const CatalanFlag = '/flags/catalonia-modified.png';

type LanguageOptions = {
  [key: string]: {
    label: string;
    flag: string;
  };
};

const languageOptions: LanguageOptions = {
  en: { label: 'English', flag: UKFlag },
  ca: { label: 'Català', flag: CatalanFlag },
  es: { label: 'Español', flag: SpainFlag },
  de: { label: 'Deutsch', flag: GermanyFlag },
  fr: { label: 'Français', flag: FrenchFlag },
  it: { label: 'Italiano', flag: ItalianFlag },
};

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}

interface MobileMenuItem {
  id: string;
  label: string;
  href?: string;
  icon: string;
  submenu?: { label: string; href: string; icon: string }[];
}

interface ContactTexts {
  getInTouch: string;
  email: string;
  phone: string;
  whatsapp: string;
  bookYourTour: string;
}

interface HeaderClientProps {
  locale: Locale;
  headerClass?: string;
  menuItems: MenuItem[];
  mobileMenuItems: MobileMenuItem[];
  contactTexts: ContactTexts;
  logoElement: ReactNode;
}

const HeaderClient = ({
  locale,
  headerClass,
  menuItems,
  mobileMenuItems,
  contactTexts,
  logoElement,
}: HeaderClientProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof languageOptions>(locale);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const languageRef = useRef<HTMLDivElement | null>(null);

  // Show sticky header on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Sync selected language with locale
  useEffect(() => {
    if (locale && languageOptions[locale]) {
      setSelectedLanguage(locale);
    }
  }, [locale]);

  const handleMouseEnter = () => {
    setIsLanguageDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsLanguageDropdownOpen(false);
  };

  const handleLanguageChange = (lang: keyof typeof languageOptions) => {
    setIsLanguageDropdownOpen(false);
    const currentPath = removeLocaleFromPath(pathname ?? '');
    const newPath = `/${lang}${currentPath}`;
    router.push(newPath);
  };

  const handleSubmenuToggle = (menuId: string) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
  };

  const getPath = (path: string) => {
    return `/${locale}${path === '/' ? '' : path}`;
  };

  return (
    <>
      <OffCanvasSSR
        isOpen={isOffCanvasOpen}
        onClose={() => {
          setIsOffCanvasOpen(false);
          setOpenSubmenu(null);
        }}
        menuItems={mobileMenuItems}
        contactTexts={contactTexts}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        openSubmenu={openSubmenu}
        onSubmenuToggle={handleSubmenuToggle}
        logoHref={getPath('/')}
      />

      <header>
        <div
          className={
            isVisible
              ? `${headerClass ? headerClass : 'it-header-bottom-area'} header-sticky`
              : `${headerClass ? headerClass : 'it-header-bottom-area'}`
          }
        >
          <div className="container-fluid">
            <div className="it-header-bottom it-header-mob-space">
              <div className="row align-items-center flex-nowrap">
                {/* LOGO */}
                <div className="col-xl-2 col-lg-6 col-md-6 col-6 justify-content-start">
                  <div className="it-main-logo">
                    {logoElement}
                  </div>
                </div>

                {/* MENU */}
                <div className="col-xl-10 col-lg-6 col-md-6 col-6 d-flex justify-content-end align-items-center" style={{ position: 'relative' }}>
                  <div className="d-none d-xl-block" style={{ flex: '1', overflow: 'visible', marginRight: '60px' }}>
                    <div className="it-main-menu text-center">
                      <nav className="it-menu-content">
                        <ul className="it-main-menu">
                          {menuItems.map((item) => (
                            <li key={item.id} className={item.submenu ? 'has-dropdown' : ''}>
                              <Link href={item.href || '#'}>
                                {item.label}
                              </Link>
                              {item.submenu && (
                                <ul className="it-submenu submenu">
                                  <li>
                                    {item.submenu.map((subitem, idx) => (
                                      <Link key={idx} href={subitem.href}>
                                        {subitem.label}
                                      </Link>
                                    ))}
                                  </li>
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>

                  {/* HAMBURGER MENU */}
                  <div className="it-header-bar-wrap d-xl-none" style={{ position: 'absolute', right: 15 }}>
                    <button
                      className="it-header-bar it-menu-bar"
                      onClick={() => setIsOffCanvasOpen(true)}
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>

                  {/* LANGUAGE SELECTOR */}
                  <div
                    className="it-header-bottom-right d-flex align-items-center justify-content-end"
                    ref={languageRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="it-header-lang d-none d-md-block">
                      <img
                        src={languageOptions[selectedLanguage].flag}
                        alt={languageOptions[selectedLanguage].label}
                        width={20}
                        height={20}
                        style={{ cursor: 'pointer' }}
                      />

                      <ul
                        className={
                          isLanguageDropdownOpen
                            ? 'it-header-lang-list it-lang-list it-lang-list-open'
                            : 'it-header-lang-list it-lang-list'
                        }
                      >
                        {Object.entries(languageOptions).map(([key, { label, flag }]) => (
                          <li
                            key={key}
                            onClick={() => handleLanguageChange(key as keyof typeof languageOptions)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                            }}
                          >
                            <img src={flag} alt={label} width={20} height={20} />
                            {label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .logo-img {
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .logo-img {
            width: 160px !important;
            height: 160px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderClient;
