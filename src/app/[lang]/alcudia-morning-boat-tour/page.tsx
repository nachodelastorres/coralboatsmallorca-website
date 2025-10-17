import { Metadata } from 'next';
import MorningTourPage from '@/pages/tours/morning-tour';
import { PageProps } from '@/types/params';
import { generateMorningTourMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateMorningTourMetadata(params.lang);
}

export default function MorningTour() {
  return <MorningTourPage />;
}
