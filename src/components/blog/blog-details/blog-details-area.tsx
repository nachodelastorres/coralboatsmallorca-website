'use client';

import { useTranslation } from 'react-i18next';
import { IBlogDT } from '@/types/blog-d-t';
import MagazineLayout from '../blog-layouts/MagazineLayout';
import MinimalistLayout from '../blog-layouts/MinimalistLayout';
import VisualLayout from '../blog-layouts/VisualLayout';
import RelatedPosts from '../RelatedPosts';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const BlogDetailsArea = ({ blog }: BlogDetailsProps) => {
  const { t } = useTranslation('common');

  // Determine which layout to use
  const renderLayout = () => {
    switch (blog.layout) {
      case "magazine":
        return <MagazineLayout blog={blog} />;
      case 'minimalist':
        return <MinimalistLayout blog={blog} />;
      case 'visual':
        return <VisualLayout blog={blog} />;
      case 'simple':
        // Simple layout for very short posts
        return <MinimalistLayout blog={blog} />;
      case 'classic':
      default:
        return <MagazineLayout blog={blog} />;
    }
  };

  return (
    <>
      {renderLayout()}
      <RelatedPosts currentPostId={blog.id} />
    </>
  );
};

export default BlogDetailsArea;
