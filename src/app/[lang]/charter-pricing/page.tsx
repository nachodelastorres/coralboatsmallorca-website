import { Metadata } from 'next';
import CharterPricingPage from '@/pages/tours/charter-pricing';
import { PageProps } from '@/types/params';
import { generateCharterPricingMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateCharterPricingMetadata(params.lang);
}

export default function CharterPricing() {
  return <CharterPricingPage />;
}
