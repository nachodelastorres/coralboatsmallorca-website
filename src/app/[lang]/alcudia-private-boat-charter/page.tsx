import { Metadata } from 'next';
import PrivateCharterPage from '@/pages/tours/private-charter';
import { PageProps } from '@/types/params';
import { generatePrivateCharterMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generatePrivateCharterMetadata(params.lang);
}

export default function PrivateCharter() {
  return <PrivateCharterPage />;
}
