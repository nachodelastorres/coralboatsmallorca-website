import { Metadata } from 'next';
import SunsetTourPage from '@/pages/tours/sunset-tour';
import { PageProps } from '@/types/params';
import { generateSunsetTourMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateSunsetTourMetadata(params.lang);
}

export default function SunsetTour() {
  return <SunsetTourPage />;
}
