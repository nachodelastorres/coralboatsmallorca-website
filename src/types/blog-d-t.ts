import { StaticImageData } from 'next/image';

export interface IBlogDT {
  id: number;
  slug: string;
  image: StaticImageData;
  badgeTitle?: string;
  title: string; // Translation key for display
  metaTitle?: string; // Literal string for SEO <title>
  publishedDate: string;
  blogAuthor?: string;
  blogText?: string;
  detailsImg: StaticImageData;
  commentCount: string;
  description?: string; // Translation key for display
  metaDescription?: string; // Literal string for SEO meta description
  btnText?: string;
  keyword: string; // Already literal for SEO
  category?: string; // Category for filtering (Guías, Excursiones, Destinos, Consejos)

  // Secciones clásicas (opcional para posts tipo simple)
  section1Title?: string;
  section1Body?: string;
  section2Title?: string;
  section2Body?: string;
  section3Title?: string;
  section3Body?: string;
  section3sub1Subtitle?: string;
  section3sub1Body?: string;
  section3sub2Subtitle?: string;
  section3sub2Body?: string;
  section3sub3Subtitle?: string;
  section3sub3Body?: string;
  section3sub4Subtitle?: string;
  section3sub4Body?: string;
  section3sub5Subtitle?: string;
  section3sub5Body?: string;
  section3sub6Subtitle?: string;
  section3sub6Body?: string;
  section3sub7Subtitle?: string;
  section3sub7Body?: string;
  section3sub8Subtitle?: string;
  section3sub8Body?: string;
  section3sub9Subtitle?: string;
  section3sub9Body?: string;
  section3sub10Subtitle?: string;
  section3sub10Body?: string;
  section3sub11Subtitle?: string;
  section3sub11Body?: string;
  section3sub12Subtitle?: string;
  section3sub12Body?: string;
  section4Title?: string;
  section4Body?: string;
  section4sub1Subtitle?: string;
  section4sub1Body?: string;
  section4sub2Subtitle?: string;
  section4sub2Body?: string;
  section4sub3Subtitle?: string;
  section4sub3Body?: string;
  section5Title?: string;
  section5Body?: string;
  section5sub1Subtitle?: string;
  section5sub1Body?: string;
  section5sub2Subtitle?: string;
  section5sub2Body?: string;
  section5sub3Subtitle?: string;
  section5sub3Body?: string;
  section6Title?: string;
  section6Body?: string;
  section6sub1Subtitle?: string;
  section6sub1Body?: string;
  section6sub2Subtitle?: string;
  section6sub2Body?: string;
  section6sub3Subtitle?: string;
  section6sub3Body?: string;
  section6sub4Subtitle?: string;
  section6sub4Body?: string;
  section7Title?: string;
  section7Body?: string;
  section7sub1Subtitle?: string;
  section7sub1Body?: string;
  section7sub2Subtitle?: string;
  section7sub2Body?: string;
  section7sub3Subtitle?: string;
  section7sub3Body?: string;
  section8Title?: string;
  section8Body?: string;
  section9Title?: string;
  section9Body?: string;
  section10Title?: string;
  section10Body?: string;
  section11Title?: string;
  section11Body?: string;
  section12Title?: string;
  section12Body?: string;

  // Nuevo: contenido libre y tipo de layout
  content?: string;
  layout: 'classic' | 'simple' | 'magazine' | 'minimalist' | 'visual' | 'storytelling'; // mejor con literal types

  // Imágenes secundarias para posts con múltiples imágenes
  secondaryImage1?: StaticImageData;
  secondaryImage2?: StaticImageData;

  // Metadata SEO de imágenes (claves i18n)
  imageAlt?: string;              // Alt específico imagen principal
  imageCaption?: string;          // Caption/descripción larga para Schema.org
  secondaryImage1Alt?: string;    // Alt imagen secundaria 1
  secondaryImage2Alt?: string;    // Alt imagen secundaria 2
}
