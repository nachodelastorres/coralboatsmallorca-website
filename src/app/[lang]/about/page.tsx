import { Metadata } from 'next';
import AboutMain from '@/pages/about/about';
import { PageProps } from '@/types/params';
import { generateAboutMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateAboutMetadata(params.lang);
}

export default function AboutPage() {
  return <AboutMain />;
}
