'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MenuItems from './menu-items';
import OffCanvasPremium from '@/components/offcanvas/offcanvas-premium';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import '@/i18n'; // ✅ Importamos la configuración correcta de i18n

import Logo from '@/assets/img/logo/logo transparente sobre claro.png';

const UKFlag = '/flags/uk-modified.png';
const SpainFlag = '/flags/spain-modified.png';
const GermanyFlag = '/flags/germany-modified.png';
const FrenchFlag = '/flags/france-modified.png';
const ItalianFlag = '/flags/italy-modified.png';
const CatalanFlag = '/flags/catalonia-modified.png';

interface HeaderProps {
  hasTopBar?: boolean;
  hasTopBarTwo?: boolean;
  headerClass?: string;
}

type LanguageOptions = {
  [key: string]: {
    label: string;
    flag: string;
  };
};

const languageOptions: LanguageOptions = {
  en: {
    label: 'English',
    flag: UKFlag,
  },
  ca: {
    label: 'Català',
    flag: CatalanFlag,
  },
  es: {
    label: 'Español',
    flag: SpainFlag,
  },
  de: {
    label: 'Deutsch',
    flag: GermanyFlag,
  },
  fr: {
    label: 'Français',
    flag: FrenchFlag,
  },
  it: {
    label: 'Italiano',
    flag: ItalianFlag,
  },
};

const HeaderOne = ({ hasTopBar, hasTopBarTwo, headerClass }: HeaderProps) => {
  const { t, i18n } = useTranslation('common'); // ✅ Obtenemos i18n desde useTranslation
  const { locale, getCurrentPathWithoutLocale, getPath } = useLocale();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof languageOptions>('en');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement | null>(null);

  // ✅ Mostrar el header al hacer scroll
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

  // ✅ Sincronizar el idioma seleccionado con el locale actual de la URL
  useEffect(() => {
    if (locale && languageOptions[locale]) {
      setSelectedLanguage(locale as keyof typeof languageOptions);
    }
  }, [locale]);
  

  // ✅ Abrir menú al pasar el ratón por encima
  const handleMouseEnter = () => {
    setIsLanguageDropdownOpen(true);
  };

  // ✅ Cerrar menú al sacar el ratón
  const handleMouseLeave = () => {
    setIsLanguageDropdownOpen(false);
  };

  // ✅ Cambiar idioma navegando a la URL del nuevo idioma
  const handleLanguageChange = (lang: keyof typeof languageOptions) => {
    setIsLanguageDropdownOpen(false);

    // Obtener la ruta actual sin el locale
    const currentPath = getCurrentPathWithoutLocale();

    // Navegar a la misma página pero en el nuevo idioma
    const newPath = `/${lang}${currentPath}`;
    router.push(newPath);
  };
  
  

  return (
    <>
      <OffCanvasPremium
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
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
                  </div>
                </div>

                {/* MENÚ */}
                <div className="col-xl-10 col-lg-6 col-md-6 col-6 d-flex justify-content-end align-items-center" style={{ position: 'relative' }}>
                  <div className="d-none d-xl-block" style={{ flex: '1', overflow: 'visible', marginRight: '60px' }}>
                    <div className="it-main-menu text-center">
                      <nav className="it-menu-content">
                        <MenuItems />
                      </nav>
                    </div>
                  </div>

                  {/* MENÚ HAMBURGUESA */}
                  <div className="it-header-bar-wrap d-xl-none" style={{ position: 'absolute', right: 15 }}/*style={{ display: 'block', marginLeft: 'auto' }}*/>
                    <button
                      className="it-header-bar it-menu-bar"
                      onClick={() => setIsOffCanvasOpen(true)}
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                    {/* <button className="hamburger-btn" onClick={() => setIsOffCanvasOpen(true)}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button> */}

                  </div>

                  {/* IDIOMA */}
                  <div
                    className="it-header-bottom-right d-flex align-items-center justify-content-end"
                    ref={languageRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="it-header-lang d-none d-md-block">
                      {/* Bandera actual */}
                      <img
                        src={languageOptions[selectedLanguage].flag}
                        alt={languageOptions[selectedLanguage].label}
                        width={20}
                        height={20}
                        style={{ cursor: 'pointer' }}
                      />

                      {/* Lista desplegable */}
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

export default HeaderOne;
