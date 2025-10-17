import { Metadata } from 'next';
import HomePremium from '@/pages/homes/home-premium';
import { PageProps } from '@/types/params';
import { generateHomeMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateHomeMetadata(params.lang);
}

export default function Home({ params }: PageProps) {
  return <HomePremium />;
}
