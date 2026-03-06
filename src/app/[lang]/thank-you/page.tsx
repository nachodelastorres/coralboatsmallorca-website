import { Metadata } from 'next';
import Link from 'next/link';
import { PageProps } from '@/types/params';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';

import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  return {
    title: t('premium.thank_you.page_title') + ' | Coral Boats Mallorca',
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouPage({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  return (
    <Wrapper>
      <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} hasTopBar />

      <main>
        <section style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 50%, #f0f9ff 100%)',
          padding: '120px 0 80px',
        }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                }}>
                  <i className="fa-solid fa-check" style={{ fontSize: '2.5rem', color: '#ffffff' }}></i>
                </div>

                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                  color: '#ffffff',
                  padding: '6px 20px',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}>
                  {t('premium.thank_you.hero_badge')}
                </span>

                <h1 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: '800',
                  color: '#0f172a',
                  marginBottom: '20px',
                  lineHeight: '1.2',
                }}>
                  {t('premium.thank_you.hero_title')}
                </h1>

                <p style={{
                  fontSize: '1.1rem',
                  color: '#475569',
                  lineHeight: '1.8',
                  maxWidth: '600px',
                  margin: '0 auto 50px',
                }}>
                  {t('premium.thank_you.hero_subtitle')}
                </p>

                <div style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 10px 40px rgba(8, 145, 178, 0.1)',
                  textAlign: 'left',
                  marginBottom: '40px',
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '25px',
                  }}>
                    {t('premium.thank_you.summary_title')}
                  </h3>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['step_1', 'step_2', 'step_3'].map((step, i) => (
                      <li key={step} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '15px',
                        marginBottom: i < 2 ? '20px' : '0',
                        padding: '15px',
                        background: '#f8fafc',
                        borderRadius: '12px',
                      }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#ffffff',
                          fontWeight: '700',
                          fontSize: '0.9rem',
                        }}>
                          {i + 1}
                        </div>
                        <p style={{
                          margin: 0,
                          color: '#334155',
                          fontSize: '1rem',
                          lineHeight: '1.6',
                        }}>
                          {t(`premium.thank_you.${step}`)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href={`/${locale}`}
                    style={{
                      padding: '15px 30px',
                      background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                      color: '#ffffff',
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                    }}
                  >
                    <i className="fa-solid fa-house"></i>
                    {t('premium.thank_you.back_home')}
                  </Link>
                  <Link
                    href={`/${locale}/charter-pricing`}
                    style={{
                      padding: '15px 30px',
                      background: '#ffffff',
                      color: '#0891b2',
                      border: '2px solid #0891b2',
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <i className="fa-solid fa-ship"></i>
                    {t('premium.thank_you.back_charters')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
    </Wrapper>
  );
}
