import { tourPackagesData } from "@/data/tour-packages-data";
import { notFound } from "next/navigation";
import TourDetailsPageClient from "@/app/(tour)/tour-details/[slug]/TourDetailsPageClient";
import { Metadata } from "next";
import path from "path";
import { promises as fs } from "fs";
import { DynamicPageProps } from "@/types/params";
import { Locale } from "@/config/locales";

interface TourDetailsParams {
  slug: string;
}

type Props = DynamicPageProps<TourDetailsParams>;

async function loadTranslations(locale: Locale) {
  const filePath = path.resolve(`./public/locales/${locale}/common.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.lang;
  const translations = await loadTranslations(locale);
  const tour = tourPackagesData().find((t) => t.slug === params.slug);

  if (!tour) {
    return {
      title: "Tour Not Found – Coral Boats Mallorca",
      description: "Sorry, the boat tour you are looking for does not exist.",
    };
  }

  const title = translations[tour.metaTitle] || tour.metaTitle;
  const description = translations[tour.metaDescription] || tour.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/tour-details/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://coralboatsmallorca.com/${locale}/tour-details/${params.slug}`,
      siteName: 'Coral Boats Mallorca',
      type: 'website',
    },
  };
}

export default function TourDetailsPage({ params }: Props) {
  const tour = tourPackagesData().find((t) => t.slug === params.slug);

  if (!tour) return notFound();

  return <TourDetailsPageClient tour={tour} />;
}
