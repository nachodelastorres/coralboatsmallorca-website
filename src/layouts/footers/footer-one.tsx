'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

import Logo from '@/assets/img/logo/logo transparente sobre oscuro.png';

interface FooterProps {
  footerClass?: string;
  footerLogo?: StaticImageData;
  btnClass?: string;
  copyRightClass?: string;
}

const FooterOne = ({
  footerClass,
  footerLogo,
  btnClass,
  copyRightClass,
}: FooterProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

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
                    {t('premium.footer_premium.description')}
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
                  <h4 className="premium-footer__title">{t('premium.footer_premium.quick_links')}</h4>
                  <ul>
                    <li><Link href={getPath('/')}>{t('premium.footer_premium.home')}</Link></li>
                    <li><Link href={getPath('/boat-tours-alcudia')}>{t('premium.footer_premium.our_tours')}</Link></li>
                    <li><Link href={getPath('/gallery')}>{t('premium.footer_premium.gallery')}</Link></li>
                    <li><Link href={getPath('/blog')}>{t('premium.footer_premium.blog')}</Link></li>
                    <li><Link href={getPath('/contact')}>{t('premium.footer_premium.contact')}</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Tours */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="premium-footer__links">
                  <h4 className="premium-footer__title">{t('premium.footer_premium.tours_title')}</h4>
                  <ul>
                    <li><Link href={getPath('/alcudia-morning-boat-tour')}>{t('premium.footer_premium.morning_tour')}</Link></li>
                    <li><Link href={getPath('/alcudia-sunset-boat-tour')}>{t('premium.footer_premium.sunset_tour')}</Link></li>
                    <li><Link href={getPath('/alcudia-private-boat-charter')}>{t('premium.footer_premium.private_charter')}</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 4: Contact */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="premium-footer__contact">
                  <h4 className="premium-footer__title">{t('premium.footer_premium.get_in_touch')}</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:info@coralboatsmallorca.com">info@coralboatsmallorca.com</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <a href="tel:+34626681867">(+34) 626 681 867</a>
                    </li>
                    <li>
                      <i className="fa-brands fa-whatsapp"></i>
                      <a href="https://wa.me/34651992329" target="_blank" rel="noopener noreferrer">
                        (+34) 651 992 329
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{t('premium.footer_premium.location')}</span>
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
                  © {new Date().getFullYear()} {t('premium.footer_premium.copyright')}
                </p>
              </div>
              <div className="col-md-6">
                <div className="premium-footer__legal">
                  <Link href="/docs/CoralBoats_Politica_Privacidad.pdf" target="_blank" rel="noopener noreferrer">
                    {t('premium.footer_premium.privacy_policy')}
                  </Link>
                  <span>·</span>
                  <Link href="/docs/CoralBoats_Politica_Cookies.pdf" target="_blank" rel="noopener noreferrer">
                    {t('premium.footer_premium.cookies_policy')}
                  </Link>
                  <span>·</span>
                  <Link href="/docs/CoralBoats_Cancelacion_y_Condiciones.pdf" target="_blank" rel="noopener noreferrer">
                    {t('premium.footer_premium.terms_conditions')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .premium-footer {
          background: linear-gradient(135deg, #0a1929 0%, #1e293b 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .premium-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #0891b2, transparent);
        }

        .premium-footer__main {
          padding: 80px 0 40px;
        }

        .premium-footer__brand {
          padding-right: 20px;
        }

        .premium-footer__brand img {
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 8px rgba(8, 145, 178, 0.3));
        }

        .premium-footer__description {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .premium-footer__social {
          display: flex;
          gap: 15px;
        }

        .premium-footer__social a {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .premium-footer__social a:hover {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          border-color: #0891b2;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(8, 145, 178, 0.4);
        }

        .premium-footer__title {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 12px;
        }

        .premium-footer__title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #0891b2, #06b6d4);
        }

        .premium-footer__links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .premium-footer__links ul li {
          margin-bottom: 12px;
        }

        .premium-footer__links ul li a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .premium-footer__links ul li a:hover {
          color: #0891b2;
          padding-left: 5px;
        }

        .premium-footer__contact ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .premium-footer__contact ul li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .premium-footer__contact ul li i {
          color: #0891b2;
          font-size: 1.1rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .premium-footer__contact ul li a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .premium-footer__contact ul li a:hover {
          color: #0891b2;
        }

        .premium-footer__bottom {
          padding: 25px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
        }

        .premium-footer__copyright {
          margin: 0;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .premium-footer__legal {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          flex-wrap: wrap;
        }

        .premium-footer__legal a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .premium-footer__legal a:hover {
          color: #0891b2;
        }

        .premium-footer__legal span {
          color: #475569;
        }

        @media (max-width: 768px) {
          .premium-footer__main {
            padding: 50px 0 30px;
          }

          .premium-footer__brand {
            padding-right: 0;
            margin-bottom: 30px;
          }

          .premium-footer__legal {
            justify-content: flex-start;
            margin-top: 15px;
          }

          .premium-footer__copyright {
            text-align: center;
          }

          .premium-footer__legal {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default FooterOne;