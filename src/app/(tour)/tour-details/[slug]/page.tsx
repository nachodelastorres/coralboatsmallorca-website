import { tourPackagesData } from "@/data/tour-packages-data";
import { notFound } from "next/navigation";
import TourDetailsPageClient from "../[slug]/TourDetailsPageClient";
import { Metadata } from "next";
import path from "path";
import { promises as fs } from "fs";

interface Props {
  params: {
    slug: string;
  };
  searchParams?: {
    locale?: string;
  };
}

async function loadTranslations(locale: string) {
  const filePath = path.resolve(`./public/locales/${locale}/common.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const locale = searchParams?.locale || 'en';
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
  };
}

// 🟢 AQUÍ EL COMPONENTE QUE ESPERA Next.js:
export default function TourDetailsPage({ params }: Props) {
  const tour = tourPackagesData().find((t) => t.slug === params.slug);

  if (!tour) return notFound();

  return <TourDetailsPageClient tour={tour} />;
}
