import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateContactMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';

// SSR Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';
import ContactHeroSSR from '@/components/contact/ContactHeroSSR';
import ContactAreaSSR from '@/components/contact/ContactAreaSSR';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateContactMetadata(params.lang);
}

export default async function ContactPage({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  const canonicalUrl = `https://www.coralboatsmallorca.com/${locale}/contact`;
  const toursPath = `/${locale}/boat-tours-alcudia`;
  const galleryPath = `/${locale}/gallery`;
  const aboutPath = `/${locale}/about`;
  const blogPath = `/${locale}/blog`;

  // ===== HERO TEXTS =====
  const heroTexts = {
    badge: t('premium.contact_page.hero_badge'),
    title: t('premium.contact.title'),
    subtitle: t('premium.contact.body'),
  };

  // ===== FORM TEXTS =====
  const formTexts = {
    nameLabel: t('premium.contact.name'),
    surnameLabel: t('premium.contact.surname'),
    emailLabel: 'Email',
    phoneLabel: t('premium.contact.tel'),
    subjectLabel: t('premium.contact.subject'),
    messageLabel: t('premium.contact.message'),
    submitButton: t('premium.contact.send_message'),
    errorFirstName: t('premium.contact_page.form_error_first_name'),
    errorLastName: t('premium.contact_page.form_error_last_name'),
    errorEmail: t('premium.contact_page.form_error_email'),
    errorEmailInvalid: t('premium.contact_page.form_error_email_invalid'),
    errorPhone: t('premium.contact_page.form_error_phone'),
    errorSubject: t('premium.contact_page.form_error_subject'),
    errorMessage: t('premium.contact_page.form_error_message'),
    errorMessageMin: t('premium.contact_page.form_error_message_min'),
    successMessage: t('premium.contact_page.form_success'),
  };

  // ===== CONTACT AREA TEXTS =====
  const contactAreaTexts = {
    sendMessageTitle: t('premium.contact_new.send_message_title'),
    sendMessageSubtitle: t('premium.contact_new.send_message_subtitle'),
    emailLabel: t('premium.contact_new.email_label'),
    telLabel: t('premium.contact_new.tel_label'),
    responseTime: t('premium.contact_new.response_time'),
    responseTimeDesc: t('premium.contact_new.response_time_desc'),
    seoTitle: t('premium.contact_new.seo_title'),
    seoText1: t('premium.contact_new.seo_text_1'),
    seoText2: t('premium.contact_new.seo_text_2'),
    seoText3: t('premium.contact_new.seo_text_3'),
    exploreMore: t('premium.contact_new.explore_more') || 'Explore More',
    ourTours: t('premium.contact_new.our_tours') || 'Our Tours',
    gallery: t('premium.contact_new.gallery') || 'Gallery',
    aboutUs: t('premium.contact_new.about_us') || 'About Us',
    blog: t('premium.contact_new.blog') || 'Blog',
    toursPath,
    galleryPath,
    aboutPath,
    blogPath,
    formTexts,
  };

  // ===== JSON-LD SCHEMAS =====

  // ContactPage Schema
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': canonicalUrl,
    name: heroTexts.title,
    description: heroTexts.subtitle,
    url: canonicalUrl,
    inLanguage: locale,
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+34-651-992-329',
        email: 'info@coralboatsmallorca.com',
        contactType: 'customer service',
        areaServed: 'ES',
        availableLanguage: ['English', 'Spanish', 'German', 'French', 'Italian'],
      },
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://www.coralboatsmallorca.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: heroTexts.badge,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} hasTopBar />

        <main>
          <ContactHeroSSR texts={heroTexts} />
          <ContactAreaSSR texts={contactAreaTexts} />
        </main>

        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
