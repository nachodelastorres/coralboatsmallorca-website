import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/locale-helpers';
import type { Locale } from '@/config/locales';

import Logo from '@/assets/img/logo/logo transparente sobre oscuro.png';

// Footer translations interface
export interface FooterTranslations {
  description: string;
  quickLinks: string;
  home: string;
  about: string;
  ourTours: string;
  gallery: string;
  blog: string;
  contact: string;
  toursTitle: string;
  morningTour: string;
  sunsetTour: string;
  privateCharter: string;
  getInTouch: string;
  location: string;
  copyright: string;
  privacyPolicy: string;
  cookiesPolicy: string;
  termsConditions: string;
}

interface FooterSSRProps {
  locale: Locale;
  translations: FooterTranslations;
  footerLogo?: StaticImageData;
}

/**
 * Server-Side Rendered Footer Component
 * All text content is rendered on the server with correct translations
 */
const FooterSSR = ({ locale, translations, footerLogo }: FooterSSRProps) => {
  const getPath = (path: string) => getLocalizedPath(locale, path);

  return (
    <>
      <footer className="premium-footer">
        <div className="premium-footer__main">
          <div className="container">
            <div className="row">
              {/* Column 1: Logo & Description */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="premium-footer__brand">
                  <Link href={getPath('/')}>
                    <Image
                      src={footerLogo ? footerLogo : Logo}
                      alt="Coral Boats Mallorca"
                      width={100}
                      height={100}
                      style={{ objectFit: 'contain' }}
                    />
                  </Link>
                  <p className="premium-footer__description">
                    {translations.description}
                  </p>
                  <div className="premium-footer__social">
                    <a
                      href="https://instagram.com/coralboatsmallorca"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61576256470622"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://share.google/8mK0qmqnoVmc2Mrkw"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google"
                    >
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="col-lg-2 col-md-6 mb-4">
                <div className="premium-footer__links">
                  <h4 className="premium-footer__title">{translations.quickLinks}</h4>
                  <ul>
                    <li><Link href={getPath('/')}>{translations.home}</Link></li>
                    <li><Link href={getPath('/about')}>{translations.about}</Link></li>
                    <li><Link href={getPath('/boat-tours-alcudia')}>{translations.ourTours}</Link></li>
                    <li><Link href={getPath('/gallery')}>{translations.gallery}</Link></li>
                    <li><Link href={getPath('/blog')}>{translations.blog}</Link></li>
                    <li><Link href={getPath('/contact')}>{translations.contact}</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Tours */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="premium-footer__links">
                  <h4 className="premium-footer__title">{translations.toursTitle}</h4>
                  <ul>
                    <li><Link href={getPath('/alcudia-morning-boat-tour')}>{translations.morningTour}</Link></li>
                    <li><Link href={getPath('/alcudia-sunset-boat-tour')}>{translations.sunsetTour}</Link></li>
                    <li><Link href={getPath('/alcudia-private-boat-charter')}>{translations.privateCharter}</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 4: Contact */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="premium-footer__contact">
                  <h4 className="premium-footer__title">{translations.getInTouch}</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:info@coralboatsmallorca.com">info@coralboatsmallorca.com</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <a href="tel:+34651992329">(+34) 651 992 329</a>
                    </li>
                    <li>
                      <i className="fa-brands fa-whatsapp"></i>
                      <a href="https://wa.me/34651992329" target="_blank" rel="noopener noreferrer">
                        (+34) 651 992 329
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{translations.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="premium-footer__bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="premium-footer__copyright">
                  © {new Date().getFullYear()} {translations.copyright}
                </p>
              </div>
              <div className="col-md-6">
                <div className="premium-footer__legal">
                  <Link href="/docs/CoralBoats_Politica_Privacidad.pdf" target="_blank" rel="noopener noreferrer">
                    {translations.privacyPolicy}
                  </Link>
                  <span>·</span>
                  <Link href="/docs/CoralBoats_Politica_Cookies.pdf" target="_blank" rel="noopener noreferrer">
                    {translations.cookiesPolicy}
                  </Link>
                  <span>·</span>
                  <Link href="/docs/CoralBoats_Cancelacion_y_Condiciones.pdf" target="_blank" rel="noopener noreferrer">
                    {translations.termsConditions}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default FooterSSR;
