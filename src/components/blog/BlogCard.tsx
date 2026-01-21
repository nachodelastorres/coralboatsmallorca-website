'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IBlogDT } from '@/types/blog-d-t';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

interface BlogCardProps {
  blog: IBlogDT;
  featured?: boolean;
}

const BlogCard = ({ blog, featured = false }: BlogCardProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  if (featured) {
    return (
      <Link href={getPath(`/blog-details/${blog.slug}`)} style={{ textDecoration: 'none' }}>
        <div
          className="blog-card blog-card--featured"
          style={{
            position: 'relative',
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <Image
            src={blog.image}
            alt={blog.imageAlt ? t(blog.imageAlt) : t(blog.title)}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '40px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: '#0891b2',
                color: '#ffffff',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '12px',
              }}
            >
              {t(blog.badgeTitle!)}
            </div>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '12px',
                lineHeight: '1.3',
              }}
            >
              {t(blog.title)}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#e2e8f0',
                marginBottom: '16px',
                lineHeight: '1.6',
              }}
            >
              {t(blog.description!).substring(0, 150)}...
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontSize: '0.9rem',
                color: '#cbd5e1',
              }}
            >
              <span>
                <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i>
                {t(blog.publishedDate)}
              </span>
              <span>
                <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i>
                5 min read
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={getPath(`/blog-details/${blog.slug}`)} style={{ textDecoration: 'none' }}>
      <div
        className="blog-card"
        style={{
          background: '#ffffff',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <Image
            src={blog.image}
            alt={blog.imageAlt ? t(blog.imageAlt) : t(blog.title)}
            fill
            style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
            sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
          />
          <div
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              background: '#0891b2',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600',
            }}
          >
            {t(blog.badgeTitle!)}
          </div>
        </div>

        <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '12px',
              fontSize: '0.85rem',
              color: '#64748b',
            }}
          >
            <span>
              <i className="fa-solid fa-calendar-days" style={{ marginRight: '6px' }}></i>
              {t(blog.publishedDate)}
            </span>
            <span>
              <i className="fa-solid fa-clock" style={{ marginRight: '6px' }}></i>
              5 min
            </span>
          </div>

          <h3
            style={{
              fontSize: '1.35rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '12px',
              lineHeight: '1.4',
              flex: 1,
            }}
          >
            {t(blog.title)}
          </h3>

          <p
            style={{
              fontSize: '0.95rem',
              color: '#64748b',
              lineHeight: '1.6',
              marginBottom: '16px',
            }}
          >
            {t(blog.description!).substring(0, 100)}...
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#0891b2',
              fontWeight: '600',
              fontSize: '0.95rem',
            }}
          >
            <span>Read More</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12) !important;
        }
        .blog-card:hover img {
          transform: scale(1.05);
        }
        .blog-card--featured:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>
    </Link>
  );
};

export default BlogCard;
