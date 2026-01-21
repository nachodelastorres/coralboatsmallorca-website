/**
 * ContactAreaSSR - Server Component for SEO
 *
 * Renders contact info, form section header, and SEO content server-side.
 * The form component is imported as a Client Component.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Link from 'next/link';
import ContactFormClient from '../form/ContactFormClient';

export interface ContactFormTexts {
  nameLabel: string;
  surnameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  subjectLabel: string;
  messageLabel: string;
  submitButton: string;
  errorFirstName: string;
  errorLastName: string;
  errorEmail: string;
  errorEmailInvalid: string;
  errorPhone: string;
  errorSubject: string;
  errorMessage: string;
  errorMessageMin: string;
  successMessage: string;
}

export interface ContactAreaTexts {
  sendMessageTitle: string;
  sendMessageSubtitle: string;
  emailLabel: string;
  telLabel: string;
  responseTime: string;
  responseTimeDesc: string;
  seoTitle: string;
  seoText1: string;
  seoText2: string;
  seoText3: string;
  exploreMore: string;
  ourTours: string;
  gallery: string;
  aboutUs: string;
  blog: string;
  toursPath: string;
  galleryPath: string;
  aboutPath: string;
  blogPath: string;
  formTexts: ContactFormTexts;
}

interface ContactAreaSSRProps {
  texts: ContactAreaTexts;
}

const ContactAreaSSR = ({ texts }: ContactAreaSSRProps) => {
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
                {/* H2 - Important for SEO - Server Rendered */}
                <h2
                  style={{
                    fontSize: '2.25rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '15px',
                  }}
                >
                  {texts.sendMessageTitle}
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.7' }}>
                  {texts.sendMessageSubtitle}
                </p>
              </div>

              {/* Client Component for Form */}
              <ContactFormClient texts={texts.formTexts} />
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
                  }}
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
                      <div style={{ fontSize: '0.9rem', marginBottom: '8px', opacity: 0.9 }}>{texts.emailLabel}</div>
                      <a
                        href="mailto:info@coralboatsmallorca.com"
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#ffffff',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                        }}
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
                  }}
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
                        {texts.telLabel}
                      </div>
                      <a
                        href="tel:+34626681867"
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#1e293b',
                          textDecoration: 'none',
                        }}
                      >
                        (+34) 626 681 867
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
                  }}
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
                  {/* H4 - Server Rendered */}
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                    {texts.responseTime}
                  </h4>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  {texts.responseTimeDesc}
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
              {/* H2 - Important for SEO - Server Rendered */}
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '25px',
                  textAlign: 'center',
                }}
              >
                {texts.seoTitle}
              </h2>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.9', marginBottom: '20px' }}>
                  {texts.seoText1}
                </p>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.9', marginBottom: '20px' }}>
                  {texts.seoText2}
                </p>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.9', margin: 0 }}>
                  {texts.seoText3}
                </p>

                {/* Outgoing Links Section */}
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                  {/* H3 - Server Rendered */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                    {texts.exploreMore}
                  </h3>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href={texts.toursPath} style={{
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
                    }}>
                      <i className="fa-solid fa-ship"></i>
                      <span>{texts.ourTours}</span>
                    </Link>
                    <Link href={texts.galleryPath} style={{
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
                    }}>
                      <i className="fa-solid fa-images"></i>
                      <span>{texts.gallery}</span>
                    </Link>
                    <Link href={texts.aboutPath} style={{
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
                    }}>
                      <i className="fa-solid fa-info-circle"></i>
                      <span>{texts.aboutUs}</span>
                    </Link>
                    <Link href={texts.blogPath} style={{
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
                    }}>
                      <i className="fa-solid fa-blog"></i>
                      <span>{texts.blog}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAreaSSR;
