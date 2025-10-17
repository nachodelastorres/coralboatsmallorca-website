import { Metadata } from 'next';
import BlogMain from '@/pages/blog/blog';
import { PageProps } from '@/types/params';
import { generateBlogMetadata } from '@/lib/metadata-helpers';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateBlogMetadata(params.lang);
}

export default function BlogPage() {
  return <BlogMain />;
}
