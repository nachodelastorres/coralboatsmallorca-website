import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateGalleryMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import { getHeaderTranslations, getFooterTranslations } from '@/lib/layout-translations';
import type { Locale } from '@/config/locales';
import { blogDataOne } from '@/data/blog-data';

// Layout Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR from '@/layouts/headers/HeaderSSR';
import FooterSSR from '@/layouts/footers/FooterSSR';

// SSR Components
import GalleryHeroSSR from '@/components/gallery/GalleryHeroSSR';
import GalleryGridClient from '@/components/gallery/GalleryGridClient';
import OurExperiencesTimelineSSR from '@/components/about/OurExperiencesTimelineSSR';
import BlogPreviewSectionSSR from '@/components/premium/BlogPreviewSectionSSR';
import GallerySchema from '@/components/schema/GallerySchema';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateGalleryMetadata(params.lang);
}

export default async function GalleryPage({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  // Paths
  const morningTourPath = `/${locale}/alcudia-morning-boat-tour`;
  const sunsetTourPath = `/${locale}/alcudia-sunset-boat-tour`;
  const charterPath = `/${locale}/alcudia-private-boat-charter`;
  const toursPath = `/${locale}/boat-tours-alcudia`;
  const contactPath = `/${locale}/contact`;
  const blogPath = `/${locale}/blog`;

  // ===== HERO TEXTS =====
  const heroTexts = {
    badge: t('premium.gallery.hero_badge'),
    title: t('premium.gallery.hero_title'),
    subtitle: t('premium.gallery.hero_subtitle'),
  };

  // ===== GALLERY GRID TEXTS =====
  const galleryImages = [
    { file: 'faro-alcanada-excursion-barco-alcudia-mallorca.webp', title: t('premium.gallery.image_alcanada_lighthouse') },
    { file: 'coral-boats-navegando-isla-alcanada-alcudia.webp', title: t('premium.gallery.image_boat_alcanada') },
    { file: 'turistas-paseo-barco-aguas-cristalinas-mallorca.webp', title: t('premium.gallery.image_boat_fun') },
    { file: 'interior-barco-coral-boats-puerto-alcudia.webp', title: t('premium.gallery.image_boat_interior') },
    { file: 'excursion-matutina-snorkel-paddle-surf-alcudia.webp', title: t('premium.gallery.image_card_morning') },
    { file: 'charter-privado-lujo-grupos-alcudia-mallorca.webp', title: t('premium.gallery.image_card_private') },
    { file: 'crucero-atardecer-sunset-magic-alcudia.webp', title: t('premium.gallery.image_card_sunset') },
    { file: 'barco-clasico-madera-coral-boats-mallorca.webp', title: t('premium.gallery.image_classic_boat') },
    { file: 'vistas-costa-norte-mallorca-excursion-barco.webp', title: t('premium.gallery.image_coastline_views') },
    { file: 'cala-secreta-accesible-barco-alcudia-mallorca.webp', title: t('premium.gallery.image_cove') },
    { file: 'tripulacion-profesional-sirviendo-paseo-barco-alcudia.webp', title: t('premium.gallery.image_crew_service') },
    { file: 'amigos-excursion-barco-bahia-alcudia.webp', title: t('premium.gallery.image_friends_enjoy') },
    { file: 'amigos-recuerdos-paseo-barco-calas-mallorca.webp', title: t('premium.gallery.image_friends_fun') },
    { file: 'celebracion-grupo-charter-privado-alcudia-mallorca.webp', title: t('premium.gallery.image_friends_group') },
    { file: 'hora-dorada-mediterraneo-crucero-mallorca.webp', title: t('premium.gallery.image_golden_hour') },
    { file: 'calas-escondidas-norte-mallorca-excursion-barco.webp', title: t('premium.gallery.image_hidden_coves') },
    { file: 'excursion-barco-isla-alcanada-puerto-alcudia.webp', title: t('premium.gallery.image_island_boat') },
    { file: 'ninos-actividades-acuaticas-excursion-familiar-mallorca.webp', title: t('premium.gallery.image_kids_fun') },
    { file: 'paisaje-costero-mallorca-barco-excursiones-alcudia.webp', title: t('premium.gallery.image_mallorca_views') },
    { file: 'tapas-mallorquinas-tradicionales-bordo-paseo-barco.webp', title: t('premium.gallery.image_mallorcan_tapas') },
    { file: 'relax-colchoneta-flotante-aguas-alcudia.webp', title: t('premium.gallery.image_matress') },
    { file: 'comida-mediterranea-excursion-barco-mallorca.webp', title: t('premium.gallery.image_meal') },
    { file: 'paddle-surf-aguas-turquesas-excursion-alcudia.webp', title: t('premium.gallery.image_paddel_board') },
    { file: 'vista-panoramica-playa-muro-bahia-alcudia.webp', title: t('premium.gallery.image_panoramic_beach') },
    { file: 'pareja-crucero-romantico-atardecer-mallorca.webp', title: t('premium.gallery.image_partners') },
    { file: 'tripulacion-experta-coral-boats-alcudia.webp', title: t('premium.gallery.image_professional_crew') },
    { file: 'sangria-espanola-tapas-excursion-barco-mallorca.webp', title: t('premium.gallery.image_sangria_tapas') },
    { file: 'atardecer-espectacular-mar-bahia-alcudia.webp', title: t('premium.gallery.image_sunset') },
    { file: 'puesta-sol-mediterranea-crucero-sunset-magic-mallorca.webp', title: t('premium.gallery.image_sunset_image') },
    { file: 'luz-dorada-atardecer-aguas-alcudia-mallorca.webp', title: t('premium.gallery.image_sunset_light') },
    { file: 'puerto-alcudia-atardecer-barcos-excursiones.webp', title: t('premium.gallery.image_sunset_port') },
    { file: 'pasajeros-excursion-barco-coral-boats-mallorca.webp', title: t('premium.gallery.image_tour') },
    { file: 'actividades-acuaticas-snorkel-paddle-surf-alcudia.webp', title: t('premium.gallery.image_water_fun') },
  ];

  const galleryGridTexts = {
    sectionLabel: t('premium.gallery.section_label'),
    sectionTitle: t('premium.gallery.section_title'),
    sectionDescription: t('premium.gallery.section_description'),
    seoTitle: t('premium.gallery.seo_title'),
    seoIntro: t('premium.gallery.seo_intro'),
    toursTitle: t('premium.gallery.tours_title'),
    toursDescription: t('premium.gallery.tours_description'),
    tourMorning: t('premium.gallery.tour_morning'),
    tourSunset: t('premium.gallery.tour_sunset'),
    tourPrivate: t('premium.gallery.tour_private'),
    whyAlcudiaTitle: t('premium.gallery.why_alcudia_title'),
    whyAlcudiaDescription: t('premium.gallery.why_alcudia_description'),
    beachesTitle: t('premium.gallery.beaches_title'),
    beachesP1: t('premium.gallery.beaches_p1'),
    beachesP2: t('premium.gallery.beaches_p2'),
    bookTitle: t('premium.gallery.book_title'),
    bookDescription: t('premium.gallery.book_description'),
    bookFooter: t('premium.gallery.book_footer'),
    viewToursButton: t('premium.gallery.view_tours_button') || t('common.view_tours') || 'View Our Tours',
    contactButton: t('premium.gallery.contact_button') || t('common.contact_us') || 'Contact Us',
    images: galleryImages,
    paths: {
      morningTour: morningTourPath,
      sunsetTour: sunsetTourPath,
      privateTour: charterPath,
      tours: toursPath,
      contact: contactPath,
    },
  };

  // ===== EXPERIENCES TIMELINE TEXTS =====
  const experiencesTexts = {
    label: t('experiences_timeline.label'),
    title: t('experiences_timeline.title'),
    description: t('experiences_timeline.description'),
    ctaInline: t('experiences_timeline.cta_inline'),
    experiences: [
      {
        id: 'morning',
        title: t('experiences_timeline.morning.title'),
        description: t('experiences_timeline.morning.description'),
        time: t('experiences_timeline.morning.time'),
        image: '/assets/img/premium/home_new/card_morning.webp',
        link: morningTourPath,
        number: '01',
      },
      {
        id: 'sunset',
        title: t('experiences_timeline.sunset.title'),
        description: t('experiences_timeline.sunset.description'),
        time: t('experiences_timeline.sunset.time'),
        image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
        link: sunsetTourPath,
        number: '02',
      },
      {
        id: 'charter',
        title: t('experiences_timeline.charter.title'),
        description: t('experiences_timeline.charter.description'),
        time: t('experiences_timeline.charter.time'),
        image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
        link: charterPath,
        number: '03',
      },
    ],
  };

  // ===== BLOG PREVIEW TEXTS =====
  const featuredBlogs = [...blogDataOne].reverse();
  const blogPreviewTexts = {
    label: t('blog_section.label'),
    title: t('blog_section.title'),
    description: t('blog_section.description'),
    readTime: t('blog_section.read_time'),
    readMore: t('blog_section.read_more'),
    ctaButton: t('blog_section.cta_button'),
    ctaSecondary: t('blog_section.cta_secondary'),
    blogPath: blogPath,
    blogs: featuredBlogs.map((blog) => ({
      id: blog.id,
      slug: blog.slug,
      image: typeof blog.image === 'string' ? blog.image : blog.image.src,
      badgeTitle: t(blog.badgeTitle!),
      title: t(blog.title),
      description: t(blog.description!),
      publishedDate: t(blog.publishedDate),
      imageAlt: blog.imageAlt ? t(blog.imageAlt) : undefined,
      link: `/${locale}/blog-details/${blog.slug}`,
    })),
  };

  // ===== JSON-LD BREADCRUMB =====
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: locale,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('nav.home') || 'Home',
        item: `https://www.coralboatsmallorca.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('nav.gallery') || 'Gallery',
        item: `https://www.coralboatsmallorca.com/${locale}/gallery`,
      },
    ],
  };

  return (
    <>
      <GallerySchema locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Wrapper>
        <HeaderSSR locale={locale} translations={getHeaderTranslations(dictionary)} hasTopBar />
        <main>
          <GalleryHeroSSR texts={heroTexts} />
          <GalleryGridClient texts={galleryGridTexts} />
          <OurExperiencesTimelineSSR texts={experiencesTexts} />
          <BlogPreviewSectionSSR texts={blogPreviewTexts} />
        </main>
        <FooterSSR locale={locale} translations={getFooterTranslations(dictionary)} />
      </Wrapper>
    </>
  );
}
