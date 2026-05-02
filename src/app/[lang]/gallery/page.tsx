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
import GalleryGridClient, { GalleryImage } from '@/components/gallery/GalleryGridClient';
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
    imageAlt: t('premium.gallery.image_aerial_alcanada_lighthouse'),
  };

  // ===== GALLERY GRID TEXTS =====
  // Images live in /public/assets/img/premium/2026/gallery/. Order is intentional —
  // drives the masonry tessellation (index 0 is the 4×2 banner). Alt text comes
  // from premium.gallery.image_* keys, translated per locale.
  const galleryImages: GalleryImage[] = [
    { file: 'coral-boats-mallorca-boat-trips-in-turquoise-water.webp', title: t('premium.gallery.image_turquoise_trips'), width: 2400, height: 1350, orient: 'landscape' },
    { file: 'aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island.webp', title: t('premium.gallery.image_aerial_alcanada_lighthouse'), width: 2400, height: 1350, orient: 'landscape' },
    { file: 'alcanada-island-lighhouse-near-port-of-alcudia-during-boat-trip.webp', title: t('premium.gallery.image_alcanada_lighthouse_trip'), width: 2400, height: 1350, orient: 'landscape' },
    { file: 'boat-cruise-meal-with-local-products-experience-alcudia-mallorca.webp', title: t('premium.gallery.image_local_products_meal'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'boat-ride-from-port-of-alcudia-with-sunset-vibes-and-lights.webp', title: t('premium.gallery.image_sunset_vibes'), width: 2400, height: 1800, orient: 'landscape' },
    { file: 'classic-boat-interior-with-spacious-seats-for-a-boat-trip.webp', title: t('premium.gallery.image_classic_interior_seats'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'cliffs-caves-and-coves-during-boat-trip-alcudia-mallorca.webp', title: t('premium.gallery.image_cliffs_caves_coves'), width: 1280, height: 1707, orient: 'portrait' },
    { file: 'coral-boat-for-water-activities-and-boat-excursiones-mallorca-alcudia.webp', title: t('premium.gallery.image_water_activities_boat'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'coral-boat-ride-in-best-beaches-mallorca-alcudia-views.webp', title: t('premium.gallery.image_best_beaches'), width: 1280, height: 1707, orient: 'portrait' },
    { file: 'coral-boats-crew-cruise-mallorca-north.webp', title: t('premium.gallery.image_crew_cruise'), width: 1440, height: 1080, orient: 'landscape' },
    { file: 'aereal-view-of-boat-trip-in-mallorca-north-water-classic-vessel.webp', title: t('premium.gallery.image_aerial_north_classic'), width: 2400, height: 1350, orient: 'landscape' },
    { file: 'crystal-clear-water-in-mallorca-beach-during-boat-tour-alcudia.webp', title: t('premium.gallery.image_crystal_clear'), width: 2400, height: 1350, orient: 'landscape' },
    { file: 'fantastic-buffet-meal-served-during-boat-cruise-in-alcududia-mallorca.webp', title: t('premium.gallery.image_buffet_cruise'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'mountain-coastal-view-and-best-boat-ride-in-north-mallorca.webp', title: t('premium.gallery.image_mountain_coastal'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'north-coats-cliffs-coves-mallorca-views-from-boat-trip.webp', title: t('premium.gallery.image_north_cliffs'), width: 2035, height: 2069, orient: 'landscape' },
    { file: 'north-mallorca-sea-views-from-back-of-boat-during-water-excursion.webp', title: t('premium.gallery.image_sea_views_back'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'port-of-alcudia-sunset-view-from-a-boat-tours.webp', title: t('premium.gallery.image_port_sunset_view'), width: 1536, height: 1152, orient: 'landscape' },
    { file: 'puesta-de-sol-puerto-alcuida-paseo-en-barco.webp', title: t('premium.gallery.image_sunset_port_trip'), width: 2400, height: 1800, orient: 'landscape' },
    { file: 'scenic-view-of-coll-baix-from-the-sky-during-boat-tour.webp', title: t('premium.gallery.image_coll_baix_aerial'), width: 2400, height: 1350, orient: 'landscape' },
    { file: 'scenic-views-north-mallorca-cliffs-from-relaxed-boat-trip.webp', title: t('premium.gallery.image_scenic_relaxed'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'side-of-classic-mediterranean-boat-during-excursion-north-mallorca.webp', title: t('premium.gallery.image_classic_mediterranean_side'), width: 1280, height: 1707, orient: 'portrait' },
    { file: 'sunset-boat-trous-in-alcudia-beach-from-classic-vessel.webp', title: t('premium.gallery.image_sunset_classic_vessel'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'sunset-horizon-alcudia-mallorca-views-boat-trip.webp', title: t('premium.gallery.image_sunset_horizon'), width: 1280, height: 1707, orient: 'portrait' },
    { file: 'sunset-lights-from-sea-excursion-experience-in-mallorca-alcudia.webp', title: t('premium.gallery.image_sunset_lights_sea'), width: 2400, height: 1800, orient: 'landscape' },
    { file: 'sunset-view-in-alcudia-with-coral-boats-tour-mallorca.webp', title: t('premium.gallery.image_sunset_view_alcudia'), width: 2400, height: 1350, orient: 'landscape' },
    { file: 'tapas-and-sangria-served-in-boat-trip-cruise-mallorca-alcudia.webp', title: t('premium.gallery.image_tapas_sangria'), width: 2400, height: 3200, orient: 'portrait' },
    { file: 'typical-local-mallorca-tapas-meal-during-boat-trip-alcudia.webp', title: t('premium.gallery.image_local_tapas'), width: 2400, height: 1800, orient: 'landscape' },
    { file: 'wooden-classic-boat-trips-alcudia-with-confortable-interior.webp', title: t('premium.gallery.image_wooden_classic'), width: 2400, height: 3200, orient: 'portrait' },
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
      <GallerySchema
        locale={locale}
        heroFile="aereal-view-of-coral-boat-sailing-past-alcanada-lighthouse-island.webp"
        images={galleryImages.map((img) => ({
          file: img.file,
          description: img.title,
          width: img.width,
          height: img.height,
        }))}
      />
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
