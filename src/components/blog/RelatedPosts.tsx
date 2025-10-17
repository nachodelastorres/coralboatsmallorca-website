'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { IBlogDT } from '@/types/blog-d-t';
import { blogDataOne } from '@/data/blog-data';

interface RelatedPostsProps {
  currentPostId: number;
}

const RelatedPosts = ({ currentPostId }: RelatedPostsProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  // Get 3 random related posts (excluding current post)
  const relatedPosts = blogDataOne
    .filter(post => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px',
                }}
              >
                Continue Reading
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                Discover more insights about boat tours in Mallorca
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {relatedPosts.map(post => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <Link href={getPath(`/blog-details/${post.slug}`)} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  className="related-post-card"
                >
                  <div style={{ position: 'relative', height: '200px' }}>
                    <Image
                      src={post.image}
                      alt={t(post.title)}
                      fill
                      style={{ objectFit: 'cover' }}
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
                      {t(post.badgeTitle!)}
                    </div>
                  </div>

                  <div style={{ padding: '25px' }}>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: '#64748b',
                        marginBottom: '12px',
                      }}
                    >
                      <i className="fa-solid fa-calendar-days" style={{ marginRight: '6px' }}></i>
                      {t(post.publishedDate)}
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '12px',
                        lineHeight: '1.4',
                      }}
                    >
                      {t(post.title)}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: '#64748b',
                        lineHeight: '1.6',
                        marginBottom: '16px',
                      }}
                    >
                      {t(post.description!).substring(0, 90)}...
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
                      <span>Read Article</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA to Blog */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-12 text-center">
            <Link
              href={getPath('/blog')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 35px',
                background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                color: '#ffffff',
                borderRadius: '50px',
                fontSize: '1.05rem',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
              }}
            >
              <span>View All Articles</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .related-post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12) !important;
        }
      `}</style>
    </section>
  );
};

export default RelatedPosts;
