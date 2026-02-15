'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

interface OffCanvasSSRProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MobileMenuItem[];
  contactTexts: ContactTexts;
  selectedLanguage: keyof typeof languageOptions;
  onLanguageChange: (lang: keyof typeof languageOptions) => void;
  openSubmenu: string | null;
  onSubmenuToggle: (menuId: string) => void;
  logoHref: string;
}

/**
 * OffCanvas Mobile Menu
 * Receives all translations via props for SSR compatibility
 */
const OffCanvasSSR = ({
  isOpen,
  onClose,
  menuItems,
  contactTexts,
  selectedLanguage,
  onLanguageChange,
  openSubmenu,
  onSubmenuToggle,
  logoHref,
}: OffCanvasSSRProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {/* Offcanvas */}
      <div className={`premium-offcanvas ${isOpen ? 'active' : ''}`}>
        <div className="premium-offcanvas__content">
          {/* Header */}
          <div className="premium-offcanvas__header">
            <Link href={logoHref} onClick={handleClose}>
              <Image src={Logo} alt="Coral Boats Logo" width={60} height={60} priority />
            </Link>
            <button className="premium-offcanvas__close" onClick={handleClose} aria-label="Close menu">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Navigation */}
          <nav className="premium-offcanvas__nav">
            {menuItems.map((item) => (
              <div key={item.id} className="premium-nav-item">
                {item.submenu ? (
                  <>
                    <button
                      className={`premium-nav-link premium-nav-link--parent ${
                        openSubmenu === item.id ? 'active' : ''
                      }`}
                      onClick={() => onSubmenuToggle(item.id)}
                    >
                      <div className="nav-left">
                        <span className="nav-icon">
                          <i className={`fa-solid ${item.icon}`}></i>
                        </span>
                        <span className="nav-text">{item.label}</span>
                      </div>
                      <span className="nav-arrow">
                        <i className={`fa-solid fa-chevron-down ${openSubmenu === item.id ? 'rotate' : ''}`}></i>
                      </span>
                    </button>
                    <div className={`premium-submenu ${openSubmenu === item.id ? 'active' : ''}`}>
                      {item.submenu.map((subitem, idx) => (
                        <Link
                          key={idx}
                          href={subitem.href}
                          className="premium-submenu-link"
                          onClick={handleClose}
                        >
                          <i className={`fa-solid ${subitem.icon}`}></i>
                          <span>{subitem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href || '#'} className="premium-nav-link" onClick={handleClose}>
                    <span className="nav-icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </span>
                    <span className="nav-text">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="premium-offcanvas__language">
            <button
              className="language-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={languageOptions[selectedLanguage].flag}
                alt={languageOptions[selectedLanguage].label}
                width={24}
                height={24}
              />
              <span>{languageOptions[selectedLanguage].label}</span>
              <i className={`fa-solid fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
            </button>

            {isDropdownOpen && (
              <div className="language-dropdown">
                {Object.entries(languageOptions).map(([key, { label, flag }]) => (
                  <button
                    key={key}
                    className={`language-option ${key === selectedLanguage ? 'active' : ''}`}
                    onClick={() => {
                      onLanguageChange(key as keyof typeof languageOptions);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <img src={flag} alt={label} width={20} height={20} />
                    <span>{label}</span>
                    {key === selectedLanguage && <i className="fa-solid fa-check"></i>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="premium-offcanvas__contact">
            <h4 className="contact-title">{contactTexts.getInTouch}</h4>

            <a href="mailto:info@coralboatsmallorca.com" className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">{contactTexts.email}</span>
                <span className="contact-value">info@coralboatsmallorca.com</span>
              </div>
            </a>

            <a href="tel:+34651992329" className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">{contactTexts.phone}</span>
                <span className="contact-value">(+34) 651 992 329</span>
              </div>
            </a>

            <a href="https://wa.me/34651992329" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon contact-icon--whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">{contactTexts.whatsapp}</span>
                <span className="contact-value">(+34) 651 992 329</span>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="premium-offcanvas__cta">
            <Link href={logoHref.replace(/\/$/, '') + '/boat-tours-alcudia'} className="cta-button" onClick={handleClose}>
              <i className="fa-solid fa-calendar-check"></i>
              <span>{contactTexts.bookYourTour}</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="premium-offcanvas__social">
            <a href="https://www.facebook.com/profile.php?id=61576256470622" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/coralboatsmallorca" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://share.google/8mK0qmqnoVmc2Mrkw" target="_blank" rel="noopener noreferrer" aria-label="Google">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`premium-offcanvas__overlay ${isOpen ? 'active' : ''}`}
        onClick={handleClose}
      ></div>

      <style jsx global>{`
        .premium-offcanvas {
          position: fixed;
          top: 0;
          right: -100%;
          width: 90%;
          max-width: 400px;
          height: 100vh;
          background: linear-gradient(135deg, #0a1929 0%, #1e293b 100%);
          z-index: 9999;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
        }

        .premium-offcanvas.active {
          right: 0;
        }

        .premium-offcanvas__content {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .premium-offcanvas__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .premium-offcanvas__close {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .premium-offcanvas__close:hover {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          transform: rotate(90deg);
          box-shadow: 0 4px 12px rgba(8, 145, 178, 0.4);
          border-color: #0891b2;
        }

        .premium-offcanvas__nav {
          margin-bottom: 15px;
          flex-shrink: 0;
        }

        .premium-nav-item {
          margin-bottom: 6px;
        }

        .premium-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .premium-nav-link--parent {
          justify-content: space-between;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .premium-nav-link:hover,
        .premium-nav-link.active {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          border-color: #0891b2;
          transform: translateX(5px);
          box-shadow: 0 4px 15px rgba(8, 145, 178, 0.4);
        }

        .nav-icon {
          width: 24px;
          text-align: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .nav-arrow {
          transition: transform 0.3s ease;
        }

        .nav-arrow .rotate {
          transform: rotate(180deg);
        }

        .premium-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          margin-left: 12px;
        }

        .premium-submenu.active {
          max-height: 300px;
        }

        .premium-submenu-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 15px;
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid transparent;
          color: #e0f2fe;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          margin-bottom: 6px;
          border-radius: 0 8px 8px 0;
        }

        .premium-submenu-link:hover {
          background: rgba(8, 145, 178, 0.2);
          border-left-color: #0891b2;
          padding-left: 25px;
        }

        .premium-offcanvas__language {
          position: relative;
          margin-bottom: 15px;
          flex-shrink: 0;
        }

        .language-toggle {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .language-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .language-toggle i {
          margin-left: auto;
          transition: transform 0.3s ease;
        }

        .language-toggle i.rotate {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: #0a1929;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 18px;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .language-option:last-child {
          border-bottom: none;
        }

        .language-option:hover {
          background: rgba(8, 145, 178, 0.2);
        }

        .language-option.active {
          background: rgba(8, 145, 178, 0.3);
          font-weight: 600;
        }

        .language-option i {
          margin-left: auto;
          color: #0891b2;
        }

        .premium-offcanvas__contact {
          margin-bottom: 15px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        .contact-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.1rem;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(8, 145, 178, 0.4);
          transition: all 0.3s ease;
        }

        .contact-icon--whatsapp {
          background: linear-gradient(135deg, #25D366, #128C7E);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-label {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .contact-value {
          font-size: 0.85rem;
          color: #ffffff;
          font-weight: 600;
        }

        .premium-offcanvas__cta {
          margin-bottom: 15px;
          flex-shrink: 0;
        }

        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px 20px;
          background: linear-gradient(135deg, #0891b2, #0e7490);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(8, 145, 178, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(8, 145, 178, 0.6);
        }

        .premium-offcanvas__social {
          display: flex;
          justify-content: center;
          gap: 12px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: auto;
          flex-shrink: 0;
        }

        .premium-offcanvas__social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .premium-offcanvas__social a:hover {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(8, 145, 178, 0.4);
          border-color: #0891b2;
        }

        .premium-offcanvas__overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .premium-offcanvas__overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .premium-offcanvas__content::-webkit-scrollbar {
          width: 6px;
        }

        .premium-offcanvas__content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .premium-offcanvas__content::-webkit-scrollbar-thumb {
          background: #0891b2;
          border-radius: 3px;
        }

        @media (max-width: 480px) {
          .premium-offcanvas {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default OffCanvasSSR;
