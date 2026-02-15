import { Metadata } from 'next';
import { PageProps } from '@/types/params';
import { generateHomeMetadata } from '@/lib/metadata-helpers';
import { getDictionary, getNestedValue } from '@/lib/dictionaries';
import type { Locale } from '@/config/locales';

// SSR Components
import Wrapper from '@/layouts/wrapper';
import HeaderSSR, { NavTranslations } from '@/layouts/headers/HeaderSSR';
import FooterSSR, { FooterTranslations } from '@/layouts/footers/FooterSSR';
import HeroPremiumSSR from '@/components/premium/HeroPremiumSSR';
import ToursPremiumSSR from '@/components/premium/ToursPremiumSSR';
import AboutPremiumSSR from '@/components/premium/AboutPremiumSSR';
import PrivateChartersPremiumSSR from '@/components/premium/PrivateChartersPremiumSSR';
import TestimonialsPremiumSSR from '@/components/premium/TestimonialsPremiumSSR';
import WhyChooseUsPremiumSSR from '@/components/premium/WhyChooseUsPremiumSSR';
import GalleryPreviewSectionSSR from '@/components/premium/GalleryPreviewSectionSSR';
import BlogPreviewSectionSSR from '@/components/premium/BlogPreviewSectionSSR';
import ToursCtaBannerSSR, { ToursCtaBannerTexts } from '@/components/blog/category/ToursCtaBannerSSR';

// Data imports
import { blogData } from '@/data/blog-data';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateHomeMetadata(params.lang);
}

export default async function Home({ params }: PageProps) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const t = (key: string) => getNestedValue(dictionary as Record<string, unknown>, key);

  const canonicalUrl = `https://www.coralboatsmallorca.com/${locale}`;
  const toursPath = `/${locale}/boat-tours-alcudia`;
  const morningTourPath = `/${locale}/alcudia-morning-boat-tour`;
  const sunsetTourPath = `/${locale}/alcudia-sunset-boat-tour`;
  const charterPath = `/${locale}/alcudia-private-boat-charter`;
  const galleryPath = `/${locale}/gallery`;
  const blogPath = `/${locale}/blog`;
  const aboutPath = `/${locale}/about`;

  // ===== HEADER TRANSLATIONS (SSR) =====
  const headerTranslations: NavTranslations = {
    home: t('menu.home'),
    about: t('menu.about'),
    excursions: t('menu.excursions'),
    morningTour: t('menu.morningTour'),
    sunsetTour: t('menu.sunsetTour'),
    privateTour: t('menu.privateTour'),
    allTours: t('menu.allTours'),
    gallery: t('menu.gallery'),
    blog: t('menu.blog'),
    contact: t('menu.contact'),
    getInTouch: t('menu.getInTouch'),
    email: t('menu.email'),
    phone: t('menu.phone'),
    whatsapp: t('menu.whatsapp'),
    bookYourTour: t('menu.bookYourTour'),
  };

  // ===== FOOTER TRANSLATIONS (SSR) =====
  const footerTranslations: FooterTranslations = {
    description: t('premium.footer_premium.description'),
    quickLinks: t('premium.footer_premium.quick_links'),
    home: t('premium.footer_premium.home'),
    about: t('premium.footer_premium.about'),
    ourTours: t('premium.footer_premium.our_tours'),
    gallery: t('premium.footer_premium.gallery'),
    blog: t('premium.footer_premium.blog'),
    contact: t('premium.footer_premium.contact'),
    toursTitle: t('premium.footer_premium.tours_title'),
    morningTour: t('premium.footer_premium.morning_tour'),
    sunsetTour: t('premium.footer_premium.sunset_tour'),
    privateCharter: t('premium.footer_premium.private_charter'),
    getInTouch: t('premium.footer_premium.get_in_touch'),
    location: t('premium.footer_premium.location'),
    copyright: t('premium.footer_premium.copyright'),
    privacyPolicy: t('premium.footer_premium.privacy_policy'),
    cookiesPolicy: t('premium.footer_premium.cookies_policy'),
    termsConditions: t('premium.footer_premium.terms_conditions'),
  };

  // ===== HERO TEXTS =====
  const heroTexts = {
    title: t('premium.hero.title'),
    subtitle: t('premium.hero.subtitle'),
    ctaBook: t('premium.hero.cta_book'),
    ctaViewAll: t('premium.hero.cta_view_all'),
    videoName: t('premium.hero.video.name'),
    videoDescription: t('premium.hero.video.description'),
    toursPath,
  };

  // ===== TOURS TEXTS =====
  const toursTexts = {
    label: t('premium.tours.label'),
    title: t('premium.tours.title'),
    description: t('premium.tours.description'),
    whatsIncluded: t('premium.tours.whats_included'),
    snorkelingEquipment: t('premium.tours.snorkeling_equipment'),
    paddleBoards: t('premium.tours.paddle_boards'),
    mallorcanTapas: t('premium.tours.mallorcan_tapas'),
    freeDrink: t('premium.tours.free_drink'),
    from: t('premium.tours.from'),
    perPerson: t('premium.tours.per_person'),
    bookNow: t('premium.tours.book_now'),
    departureTitle: t('premium.tours.departure_title'),
    departureDescription: t('premium.tours.departure_description'),
    transferInfo: {
      title: t('premium.tours.transfer_title'),
      description: t('premium.tours.transfer_description'),
      locations: t('premium.tours.transfer_locations'),
      contactNote: t('premium.tours.transfer_contact_note'),
      cta: t('premium.tours.transfer_cta'),
      ctaLink: '#tours',
    },
    priceBreakdown: {
      adults: t('premium.tours.adults'),
      adultsAge: t('premium.tours.adults_age'),
      children: t('premium.tours.children'),
      childrenAge: t('premium.tours.children_age'),
      infants: t('premium.tours.infants'),
      infantsAge: t('premium.tours.infants_age'),
      free: t('premium.tours.free'),
    },
    tours: [
      {
        id: 'morning',
        name: t('premium.tours.morning_name'),
        time: t('premium.tours.morning_time'),
        duration: t('premium.tours.morning_duration'),
        price: t('premium.tours.morning_price'),
        image: '/assets/img/premium/home_new/card_morning.webp',
        imageAlt: `${t('premium.tours.morning_name')} boat tour in Mallorca Bay of Alcudia`,
        link: morningTourPath,
        highlight: t('premium.tours.morning_highlights').split('•')[0].trim(),
        adultPrice: '€68',
        childPrice: '€48',
      },
      {
        id: 'sunset',
        name: t('premium.tours.sunset_name'),
        time: t('premium.tours.sunset_time'),
        duration: t('premium.tours.sunset_duration'),
        price: t('premium.tours.sunset_price'),
        image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
        imageAlt: `${t('premium.tours.sunset_name')} boat tour in Mallorca Bay of Alcudia`,
        link: sunsetTourPath,
        highlight: t('premium.tours.sunset_highlights').split('•')[0].trim(),
        adultPrice: '€65',
        childPrice: '€45',
      },
    ],
  };

  // ===== ABOUT TEXTS =====
  const aboutTexts = {
    label: t('about.label'),
    title: t('about.title'),
    paragraph1: t('about.paragraph_1'),
    paragraph2: t('about.paragraph_2'),
    paragraph3: t('about.paragraph_3'),
    badgeSince: t('about.badge_since'),
    badgeYear: t('about.badge_year'),
    stat1Number: t('about.stat_1_number'),
    stat1Label: t('about.stat_1_label'),
    stat2Number: t('about.stat_2_number'),
    stat2Label: t('about.stat_2_label'),
    stat3Number: t('about.stat_3_number'),
    stat3Label: t('about.stat_3_label'),
    quoteText: t('about.quote_text'),
    quoteAuthor: t('about.quote_author'),
    ctaButton: t('about.cta_button'),
    aboutPath,
  };

  // ===== PRIVATE CHARTERS TEXTS =====
  const privateChartersTexts = {
    label: t('premium.private_charters.label'),
    title: t('premium.private_charters.title'),
    description: t('premium.private_charters.description'),
    name: t('premium.private_charters.name'),
    time: t('premium.private_charters.time'),
    duration: t('premium.private_charters.duration'),
    highlight: t('premium.private_charters.highlights').split('•')[0].trim(),
    whatsIncluded: t('premium.tours.whats_included'),
    customItinerary: t('premium.private_charters.custom_itinerary'),
    cateringDrinks: t('premium.private_charters.catering_drinks'),
    professionalCrew: t('premium.private_charters.professional_crew'),
    waterActivities: t('premium.private_charters.water_activities'),
    durationLabel: t('premium.private_charters.duration_label'),
    durationValue: t('premium.private_charters.duration_value'),
    flexibleOptions: t('premium.private_charters.flexible_options'),
    bookNow: t('premium.tours.book_now'),
    infoText: t('premium.private_charters.info_text'),
    charterPath,
  };

  // ===== TESTIMONIALS TEXTS =====
  const testimonialsTexts = {
    label: t('premium.testimonials.label'),
    title: t('premium.testimonials.title'),
    description: t('premium.testimonials.description'),
    averageRating: t('premium.testimonials.average_rating'),
    fiveStarReviews: t('premium.testimonials.five_star_reviews'),
    happyTravelers: t('premium.testimonials.happy_travelers'),
    findUsOn: t('premium.testimonials.find_us_on'),
    testimonials: [
      {
        id: 1,
        name: 'Sarah & James Mitchell',
        country: 'United Kingdom',
        rating: 5,
        iconColor: '#0891b2',
        text: 'Our sunset tour with Coral Boats was the highlight of our Mallorca vacation! The captain was incredibly knowledgeable about the area and took us to the most stunning hidden coves. The homemade sangria was delicious, and the tapas were authentic and fresh. We celebrated our anniversary on board, and the crew made it truly special. Highly recommend for couples!',
        tour: 'Sunset Magic Tour',
        date: 'August 2024',
      },
      {
        id: 2,
        name: 'Familie Schmidt',
        country: 'Germany',
        rating: 5,
        iconColor: '#06b6d4',
        text: 'Wunderbare Erfahrung! We took the morning tour with our two children (ages 8 and 12) and they absolutely loved it. The snorkeling was fantastic—we saw so many fish! The crew was patient and helpful with the kids, making sure everyone felt safe and comfortable. The boat itself is beautiful and well-maintained. Ein perfekter Familientag!',
        tour: 'Morning Adventure',
        date: 'July 2024',
      },
      {
        id: 3,
        name: 'Marco Rossi',
        country: 'Italy',
        rating: 5,
        iconColor: '#0e7490',
        text: "Esperienza fantastica! I organized a private charter for my company's team building event, and it exceeded all expectations. The crew was professional, the boat was perfect for our group of 20, and the entire experience was seamlessly organized. Great food, beautiful locations, and excellent service. Already planning our return next year!",
        tour: 'Private Charter',
        date: 'September 2024',
      },
      {
        id: 4,
        name: 'Sophie Dubois',
        country: 'France',
        rating: 5,
        iconColor: '#0284c7',
        text: 'Magnifique! The afternoon tour was absolutely perfect. We visited places we would never have found on our own. The water was crystal clear, and the paddle boarding was so much fun. The crew shared interesting stories about Mallorca and made us feel like friends, not just customers. The value for money is excellent—everything is included!',
        tour: 'Afternoon Discovery',
        date: 'August 2024',
      },
    ],
  };

  // ===== WHY CHOOSE US TEXTS =====
  const whyChooseUsTexts = {
    label: t('premium.why_choose.label'),
    title: t('premium.why_choose.title'),
    description: t('premium.why_choose.description'),
    ctaTitle: t('premium.why_choose.cta_title'),
    ctaDescription: t('premium.why_choose.cta_description'),
    instantConfirmation: t('premium.why_choose.instant_confirmation'),
    freeCancellation: t('premium.why_choose.free_cancellation'),
    bestPrice: t('premium.why_choose.best_price'),
    ctaButton: t('premium.why_choose.cta_button'),
    rating: t('premium.why_choose.rating'),
    seoSubtitle1: t('premium.why_choose.seo_subtitle_1'),
    seoText1: t('premium.why_choose.seo_text_1'),
    seoSubtitle2: t('premium.why_choose.seo_subtitle_2'),
    seoText2: t('premium.why_choose.seo_text_2'),
    toursPath,
    reasons: [
      {
        icon: 'fa-water',
        title: t('premium.why_choose.reason_1_title'),
        description: t('premium.why_choose.reason_1_desc'),
        image: '/assets/img/premium/whychoose/mallorca.png',
      },
      {
        icon: 'fa-ship',
        title: t('premium.why_choose.reason_2_title'),
        description: t('premium.why_choose.reason_2_desc'),
        image: '/assets/img/premium/whychoose/classic.png',
      },
      {
        icon: 'fa-utensils',
        title: t('premium.why_choose.reason_3_title'),
        description: t('premium.why_choose.reason_3_desc'),
        image: '/assets/img/premium/whychoose/tapas.png',
      },
      {
        icon: 'fa-user-group',
        title: t('premium.why_choose.reason_4_title'),
        description: t('premium.why_choose.reason_4_desc'),
        image: '/assets/img/premium/whychoose/friends.jpg',
      },
      {
        icon: 'fa-certificate',
        title: t('premium.why_choose.reason_5_title'),
        description: t('premium.why_choose.reason_5_desc'),
        image: '/assets/img/premium/whychoose/lisenced.png',
      },
      {
        icon: 'fa-heart',
        title: t('premium.why_choose.reason_6_title'),
        description: t('premium.why_choose.reason_6_desc'),
        image: '/assets/img/premium/whychoose/sunset.jpg',
      },
    ],
  };

  // ===== TOURS CTA BANNER =====
  const toursCtaBannerTexts: ToursCtaBannerTexts = {
    headline: t('tours_cta_banner.home.headline') || 'Ready to book your adventure?',
    subheadline: t('tours_cta_banner.home.subheadline') || 'Choose your perfect experience in Alcudia Bay',
    cta: t('tours_cta_banner.cta') || 'All tours depart from Puerto de Alcudia',
    bookCta: t('tours_cta_banner.book_cta') || 'Reserve your spot',
    tours: [
      {
        id: 'morning',
        name: t('tours_cta_banner.morning.name') || 'Morning Tour',
        tagline: t('tours_cta_banner.morning.tagline') || 'Crystal waters & snorkeling',
        image: '/assets/img/premium/home_new/card_morning.webp',
        link: morningTourPath,
      },
      {
        id: 'sunset',
        name: t('tours_cta_banner.sunset.name') || 'Sunset Tour',
        tagline: t('tours_cta_banner.sunset.tagline') || 'Golden hour & cava toast',
        image: '/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
        link: sunsetTourPath,
      },
      {
        id: 'charter',
        name: t('tours_cta_banner.charter.name') || 'Private Charter',
        tagline: t('tours_cta_banner.charter.tagline') || 'Your boat, your schedule',
        image: '/assets/img/premium/home_new/private-charter-card-alcudia-mallorca.webp',
        link: charterPath,
      },
    ],
  };

  // ===== GALLERY TEXTS =====
  const galleryTexts = {
    label: t('gallery_section.label'),
    title: t('gallery_section.title'),
    description: t('gallery_section.description'),
    ctaButton: t('gallery_section.cta_button'),
    ctaSecondary: t('gallery_section.cta_secondary'),
    galleryPath,
    images: [
      {
        file: 'calas-escondidas-norte-mallorca-excursion-barco.webp',
        title: t('gallery_section.featured_images.image_1'),
      },
      {
        file: 'puesta-sol-mediterranea-crucero-sunset-magic-mallorca.webp',
        title: t('gallery_section.featured_images.image_2'),
      },
      {
        file: 'amigos-recuerdos-paseo-barco-calas-mallorca.webp',
        title: t('gallery_section.featured_images.image_3'),
      },
      {
        file: 'actividades-acuaticas-snorkel-paddle-surf-alcudia.webp',
        title: t('gallery_section.featured_images.image_4'),
      },
    ],
  };

  // ===== BLOG TEXTS =====
  const recentBlogs = blogData.slice(0, 5);
  const blogTexts = {
    label: t('blog_section.label'),
    title: t('blog_section.title'),
    description: t('blog_section.description'),
    readTime: t('blog_section.read_time'),
    readMore: t('blog_section.read_more'),
    ctaButton: t('blog_section.cta_button'),
    ctaSecondary: t('blog_section.cta_secondary'),
    blogPath,
    blogs: recentBlogs.map((blog) => ({
      id: blog.id,
      slug: blog.slug,
      image: typeof blog.image === 'string' ? blog.image : blog.image.src,
      badgeTitle: blog.badgeTitle ? t(blog.badgeTitle) : '',
      title: t(blog.title),
      description: blog.description ? t(blog.description) : '',
      publishedDate: t(blog.publishedDate),
      imageAlt: t(blog.imageAlt || blog.title),
      link: `/${locale}/blog-details/${blog.slug}`,
    })),
  };

  // ===== JSON-LD SCHEMAS =====
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': 'https://www.coralboatsmallorca.com/#hero-video',
    name: t('premium.hero.video.name'),
    description: t('premium.hero.video.description'),
    thumbnailUrl: 'https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca-thumbnail.webp',
    uploadDate: '2024-04-01T09:00:00+02:00',
    duration: 'PT33S',
    contentUrl: 'https://www.coralboatsmallorca.com/assets/img/premium/alcudia-boat-trips-mallorca.mp4',
    embedUrl: canonicalUrl,
    encodingFormat: 'video/mp4',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    inLanguage: locale,
    isFamilyFriendly: true,
    regionsAllowed: 'ES,EU',
    potentialAction: {
      '@type': 'WatchAction',
      target: canonicalUrl,
    },
  };

  const toursItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${canonicalUrl}#tours-list`,
    name: t('premium.tours.title'),
    description: t('premium.tours.description'),
    numberOfItems: 2,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristTrip',
          '@id': `https://www.coralboatsmallorca.com/${locale}/alcudia-morning-boat-tour#tour`,
          name: t('premium.tours.morning_name'),
          description: t('premium.tours.description'),
          image: 'https://www.coralboatsmallorca.com/assets/img/premium/home_new/card_morning.webp',
          url: `https://www.coralboatsmallorca.com/${locale}/alcudia-morning-boat-tour`,
          duration: 'PT4H',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0.00',
            highPrice: '68.00',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TouristTrip',
          '@id': `https://www.coralboatsmallorca.com/${locale}/alcudia-sunset-boat-tour#tour`,
          name: t('premium.tours.sunset_name'),
          description: t('premium.tours.description'),
          image: 'https://www.coralboatsmallorca.com/assets/img/premium/home_new/sunset-views-private-charter-alcudia-bay.webp',
          url: `https://www.coralboatsmallorca.com/${locale}/alcudia-sunset-boat-tour`,
          duration: 'PT3H',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0.00',
            highPrice: '65.00',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
          },
        },
      },
    ],
  };

  const blogItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${canonicalUrl}#blog-list`,
    name: t('blog_section.title'),
    description: t('blog_section.description'),
    numberOfItems: 5,
    itemListElement: recentBlogs.slice(0, 5).map((blog, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        '@id': `https://www.coralboatsmallorca.com/${locale}/blog-details/${blog.slug}#blogposting`,
        headline: t(blog.title),
        url: `https://www.coralboatsmallorca.com/${locale}/blog-details/${blog.slug}`,
      },
    })),
  };

  const review1Schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${canonicalUrl}#review-1`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Sarah & James Mitchell',
    },
    reviewBody:
      'Our sunset tour with Coral Boats was the highlight of our Mallorca vacation! The captain was incredibly knowledgeable about the area and took us to the most stunning hidden coves. The homemade sangria was delicious, and the tapas were authentic and fresh. We celebrated our anniversary on board, and the crew made it truly special. Highly recommend for couples!',
    itemReviewed: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    datePublished: '2024-08-15',
  };

  const review2Schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${canonicalUrl}#review-2`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Familie Schmidt',
    },
    reviewBody:
      'Wunderbare Erfahrung! We took the morning tour with our two children (ages 8 and 12) and they absolutely loved it. The snorkeling was fantastic—we saw so many fish! The crew was patient and helpful with the kids, making sure everyone felt safe and comfortable. The boat itself is beautiful and well-maintained. Ein perfekter Familientag!',
    itemReviewed: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    datePublished: '2024-07-22',
  };

  const review3Schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${canonicalUrl}#review-3`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Marco Rossi',
    },
    reviewBody:
      "Esperienza fantastica! I organized a private charter for my company's team building event, and it exceeded all expectations. The crew was professional, the boat was perfect for our group of 20, and the entire experience was seamlessly organized. Great food, beautiful locations, and excellent service. Already planning our return next year!",
    itemReviewed: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    datePublished: '2024-09-10',
  };

  const review4Schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${canonicalUrl}#review-4`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Sophie Dubois',
    },
    reviewBody:
      "Magnifique! The afternoon tour was absolutely perfect. We visited places we would never have found on our own. The water was crystal clear, and the paddle boarding was so much fun. The crew shared interesting stories about Mallorca and made us feel like friends, not just customers. The value for money is excellent—everything is included!",
    itemReviewed: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    datePublished: '2024-08-28',
  };

  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${canonicalUrl}#image-gallery`,
    name: t('gallery_section.title'),
    description: t('gallery_section.description'),
    about: {
      '@type': 'Organization',
      '@id': 'https://www.coralboatsmallorca.com/#organization',
      name: 'Coral Boats Mallorca',
    },
    image: [
      {
        '@type': 'ImageObject',
        '@id': `${canonicalUrl}#gallery-image-1`,
        url: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/barco-clasico-madera-coral-boats-mallorca.webp',
        contentUrl: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/barco-clasico-madera-coral-boats-mallorca.webp',
        name: t('gallery_section.featured_images.image_1'),
        encodingFormat: 'image/webp',
      },
      {
        '@type': 'ImageObject',
        '@id': `${canonicalUrl}#gallery-image-2`,
        url: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/vistas-costa-norte-mallorca-excursion-barco.webp',
        contentUrl: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/vistas-costa-norte-mallorca-excursion-barco.webp',
        name: t('gallery_section.featured_images.image_2'),
        encodingFormat: 'image/webp',
      },
      {
        '@type': 'ImageObject',
        '@id': `${canonicalUrl}#gallery-image-3`,
        url: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/sangria-espanola-tapas-excursion-barco-mallorca.webp',
        contentUrl: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/sangria-espanola-tapas-excursion-barco-mallorca.webp',
        name: t('gallery_section.featured_images.image_3'),
        encodingFormat: 'image/webp',
      },
      {
        '@type': 'ImageObject',
        '@id': `${canonicalUrl}#gallery-image-4`,
        url: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/amigos-recuerdos-paseo-barco-calas-mallorca.webp',
        contentUrl: 'https://www.coralboatsmallorca.com/assets/img/premium/gallery_new/amigos-recuerdos-paseo-barco-calas-mallorca.webp',
        name: t('gallery_section.featured_images.image_4'),
        encodingFormat: 'image/webp',
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toursItemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review1Schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review2Schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review3Schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review4Schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      <Wrapper>
        <HeaderSSR locale={locale} translations={headerTranslations} hasTopBar />

        <main>
          <HeroPremiumSSR texts={heroTexts} />
          <ToursPremiumSSR texts={toursTexts} />
          <PrivateChartersPremiumSSR texts={privateChartersTexts} />
          <AboutPremiumSSR texts={aboutTexts} />
          <TestimonialsPremiumSSR texts={testimonialsTexts} />
          <ToursCtaBannerSSR texts={toursCtaBannerTexts} />
          <GalleryPreviewSectionSSR texts={galleryTexts} />
          <BlogPreviewSectionSSR texts={blogTexts} />
          <WhyChooseUsPremiumSSR texts={whyChooseUsTexts} />
        </main>

        <FooterSSR locale={locale} translations={footerTranslations} />
      </Wrapper>
    </>
  );
}
