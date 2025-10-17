import { Metadata } from 'next';
import GalleryMain from '@/pages/gallery/gallery';
import { PageProps } from '@/types/params';
import { generateGalleryMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateGalleryMetadata(params.lang);
}

export default function GalleryPage() {
  return <GalleryMain />;
}
