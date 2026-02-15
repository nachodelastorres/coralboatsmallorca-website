'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import ContactForm from '../form/contact-form';

const ContactAreaNew = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <section style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              style={{
                background: '#ffffff',
                padding: '50px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div style={{ marginBottom: '40px' }}>
                <h2
                  style={{
                    fontSize: '2.25rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '15px',
                  }}
                >
                  {t('premium.contact_new.send_message_title')}
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.7' }}>
                  {t('premium.contact_new.send_message_subtitle')}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5">
            <div style={{ position: 'sticky', top: '100px' }}>
              {/* Contact Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {/* Email */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                    padding: '35px',
                    borderRadius: '15px',
                    color: '#ffffff',
                    boxShadow: '0 8px 25px rgba(8, 145, 178, 0.25)',
                    transition: 'all 0.3s ease',
                  }}
                  className="contact-email-card"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', marginBottom: '8px', opacity: 0.9 }}>{t('premium.contact_new.email_label')}</div>
                      <a
                        href="mailto:info@coralboatsmallorca.com"
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#ffffff',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                        }}
                        className="contact-email-link"
                      >
                        info@coralboatsmallorca.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  style={{
                    background: '#ffffff',
                    padding: '35px',
                    borderRadius: '15px',
                    border: '2px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                  className="contact-info-card"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: '#ffffff',
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', marginBottom: '8px', color: '#64748b' }}>
                        {t('premium.contact_new.tel_label')}
                      </div>
                      <a
                        href="tel:+34651992329"
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#1e293b',
                          textDecoration: 'none',
                        }}
                      >
                        (+34) 651 992 329
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div
                  style={{
                    background: '#ffffff',
                    padding: '35px',
                    borderRadius: '15px',
                    border: '2px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                  className="contact-info-card"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #25D366, #128C7E)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: '#ffffff',
                        flexShrink: 0,
                      }}
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', marginBottom: '8px', color: '#64748b' }}>WhatsApp</div>
                      <a
                        href="https://wa.me/34651992329"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#1e293b',
                          textDecoration: 'none',
                        }}
                      >
                        (+34) 651 992 329
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div
                style={{
                  marginTop: '30px',
                  padding: '25px',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <i className="fa-solid fa-clock" style={{ color: '#0891b2', fontSize: '1.2rem' }}></i>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                    {t('premium.contact_new.response_time')}
                  </h4>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  {t('premium.contact_new.response_time_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-12">
            <div
              style={{
                padding: '60px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
                borderRadius: '20px',
              }}
            >
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '25px',
                  textAlign: 'center',
                }}
              >
                {t('premium.contact_new.seo_title')}
              </h2>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.9', marginBottom: '20px' }}>
                  {t('premium.contact_new.seo_text_1')}
                </p>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.9', marginBottom: '20px' }}>
                  {t('premium.contact_new.seo_text_2')}
                </p>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.9', margin: 0 }}>
                  {t('premium.contact_new.seo_text_3')}
                </p>

                {/* Outgoing Links Section */}
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                    {t('premium.contact_new.explore_more', 'Explore More')}
                  </h3>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href={getPath('/tours')} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(8, 145, 178, 0.3)',
                      transition: 'all 0.3s ease',
                    }}>
                      <i className="fa-solid fa-ship"></i>
                      <span>{t('premium.contact_new.our_tours', 'Our Tours')}</span>
                    </Link>
                    <Link href={getPath('/gallery')} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: '#ffffff',
                      color: '#0891b2',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      border: '2px solid #0891b2',
                      transition: 'all 0.3s ease',
                    }}>
                      <i className="fa-solid fa-images"></i>
                      <span>{t('premium.contact_new.gallery', 'Gallery')}</span>
                    </Link>
                    <Link href={getPath('/about')} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: '#ffffff',
                      color: '#0891b2',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      border: '2px solid #0891b2',
                      transition: 'all 0.3s ease',
                    }}>
                      <i className="fa-solid fa-info-circle"></i>
                      <span>{t('premium.contact_new.about_us', 'About Us')}</span>
                    </Link>
                    <Link href={getPath('/blog')} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: '#ffffff',
                      color: '#0891b2',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      border: '2px solid #0891b2',
                      transition: 'all 0.3s ease',
                    }}>
                      <i className="fa-solid fa-blog"></i>
                      <span>{t('premium.contact_new.blog', 'Blog')}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
          border-color: #0891b2;
        }

        .contact-email-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(8, 145, 178, 0.35);
        }

        @media (max-width: 991px) {
          div[style*='position: sticky'] {
            position: static !important;
          }
        }

        @media (max-width: 768px) {
          div[style*='padding: 50px'] {
            padding: 30px !important;
          }
          div[style*='padding: 60px'] {
            padding: 40px 25px !important;
          }
          .contact-email-link {
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 576px) {
          .contact-email-link {
            font-size: 0.75rem !important;
          }
        }

        @media (max-width: 400px) {
          .contact-email-link {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactAreaNew;
