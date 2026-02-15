import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuItems from '@/layouts/headers/menu-items';
import { useLocale } from '@/hooks/useLocale';

import Logo from '@/assets/img/logo/logo transparente sobre oscuro.png';

const UKFlag = '/flags/uk-modified.png';
const SpainFlag = '/flags/spain-modified.png';
const GermanyFlag = '/flags/germany-modified.png';
const FrenchFlag = '/flags/france-modified.png';
const ItalianFlag = '/flags/italy-modified.png';

type LanguageOptions = {
  [key: string]: {
    label: string;
    flag: string;
  };
};

const languageOptions: LanguageOptions = {
  en: { label: 'English', flag: UKFlag },
  es: { label: 'Español', flag: SpainFlag },
  de: { label: 'Deutsch', flag: GermanyFlag },
  fr: { label: 'Français', flag: FrenchFlag },
  it: { label: 'Italiano', flag: ItalianFlag },
};

type IProps = {
  isOffCanvasOpen: boolean;
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: keyof typeof languageOptions;
  handleLanguageChange: (lang: keyof typeof languageOptions) => void;
};

const OffCanvas = ({
  isOffCanvasOpen,
  setIsOffCanvasOpen,
  selectedLanguage,
  handleLanguageChange,
}: IProps) => {
  const { getPath } = useLocale();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="it-offcanvas-area">
        <div className={isOffCanvasOpen ? 'itoffcanvas opened' : 'itoffcanvas'}>
          {/* ✅ Botón cerrar */}
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => setIsOffCanvasOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>

          {/* ✅ Logo */}
          <div className="itoffcanvas__logo">
            <Link href={getPath('/')}>
              <Image src={Logo} alt="Coral Boats Logo" width={72} height={72} />
            </Link>
          </div>

          {/* ✅ Menú */}
          <div className="it-menu-mobile">
            <MenuItems isMobileMenu />
          </div>

          {/* ✅ Dropdown de idioma */}
          <div className="language-selector">
            {/* ✅ Botón principal (con la bandera del idioma actual) */}
            <button
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={languageOptions[selectedLanguage].flag}
                alt={languageOptions[selectedLanguage].label}
                width={24}
                height={24}
              />
              {languageOptions[selectedLanguage].label}
              <i
                className={`fa fa-chevron-down ${
                  isDropdownOpen ? 'rotate' : ''
                }`}
              ></i>
            </button>

            {/* ✅ Lista desplegable */}
            {isDropdownOpen && (
              <ul className="dropdown-list">
                {Object.entries(languageOptions).map(([key, { label, flag }]) => (
                  <li
                    key={key}
                    onClick={() => {
                      handleLanguageChange(key as keyof typeof languageOptions);
                      setIsDropdownOpen(false);
                    }}
                    className={key === selectedLanguage ? 'active' : ''}
                  >
                    <img src={flag} alt={label} width={20} height={20} />
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ✅ Info de contacto */}
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Contáctanos</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="mailto:info@coralboatsmallorca.com">
                  info@coralboatsmallorca.com
                </a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Teléfono</span>
                <a href="tel:+34651992329">(+34) 651 992 329</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Overlay */}
      {isOffCanvasOpen ? (
        <div
          className="body-overlay apply"
          onClick={() => setIsOffCanvasOpen(false)}
        ></div>
      ) : (
        <div className="body-overlay"></div>
      )}
    </>
  );
};

export default OffCanvas;
