import { Metadata } from 'next';
import ToursPage from '@/pages/tours/tours';
import { PageProps } from '@/types/params';
import { generateBoatToursAlcudiaMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateBoatToursAlcudiaMetadata(params.lang);
}

export default function BoatToursAlcudia() {
  return <ToursPage />;
}
