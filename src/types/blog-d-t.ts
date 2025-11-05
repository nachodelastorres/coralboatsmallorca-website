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
  section4Title?: string;
  section4Body?: string;
  section5Title?: string;
  section5Body?: string;

  // Nuevo: contenido libre y tipo de layout
  content?: string;
  layout: 'classic' | 'simple' | 'magazine' | 'minimalist' | 'visual' | 'storytelling'; // mejor con literal types
}
