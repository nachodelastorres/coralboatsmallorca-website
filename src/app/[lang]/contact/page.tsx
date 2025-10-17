import { Metadata } from 'next';
import ContactMain from '@/pages/contact/contact';
import { PageProps } from '@/types/params';
import { generateContactMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateContactMetadata(params.lang);
}

export default function ContactPage() {
  return <ContactMain />;
}
