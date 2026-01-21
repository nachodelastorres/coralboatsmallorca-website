/**
 * RelatedPostsSSR - Server Component for SEO
 *
 * This component renders related blog posts server-side,
 * ensuring content appears in "View Source" for Google indexing.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

export interface RelatedPostTranslated {
  id: number;
  slug: string;
  image: StaticImageData;
  badgeTitle: string;
  title: string;
  publishedDate: string;
  description: string;
}

export interface RelatedPostsTexts {
  title: string;
  subtitle: string;
  readArticle: string;
  viewAllArticles: string;
}

interface RelatedPostsSSRProps {
  posts: RelatedPostTranslated[];
  texts: RelatedPostsTexts;
  locale: string;
}

const RelatedPostsSSR = ({ posts, texts, locale }: RelatedPostsSSRProps) => {
  const getPath = (path: string) => {
    // For English, don't add prefix (or add /en if required by your setup)
    if (locale === 'en') {
      return path.startsWith('/') ? path : `/${path}`;
    }
    return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
  };

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
                {texts.title}
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                {texts.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {posts.map(post => (
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
                      alt={post.title}
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
                      {post.badgeTitle}
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
                      {post.publishedDate}
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
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: '#64748b',
                        lineHeight: '1.6',
                        marginBottom: '16px',
                      }}
                    >
                      {post.description.substring(0, 90)}...
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
                      <span>{texts.readArticle}</span>
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
                boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
              }}
            >
              <span>{texts.viewAllArticles}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPostsSSR;
