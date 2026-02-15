'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SerializedBlog {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  badgeTitle: string;
  publishedDate: string;
  imageAlt?: string;
}

interface CategoryLink {
  id: string;
  label: string;
  icon: string;
  href: string;
  active: boolean;
}

interface CategoryGridClientProps {
  blogs: SerializedBlog[];
  categoryLinks: CategoryLink[];
  lang: string;
  translations: {
    loadMore: string;
    readMore: string;
    postCount: string;
    backToBlog: string;
    allPostsLabel: string;
  };
  blogHref: string;
  initialVisible?: number;
}

const CategoryGridClient = ({
  blogs,
  categoryLinks,
  lang,
  translations,
  blogHref,
  initialVisible = 6,
}: CategoryGridClientProps) => {
  const [visiblePosts, setVisiblePosts] = useState(initialVisible);

  const visibleBlogs = blogs.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const getBlogPath = (slug: string) => {
    return lang === 'en' ? `/blog-details/${slug}` : `/${lang}/blog-details/${slug}`;
  };

  return (
    <>
      {/* Category Navigation Pills */}
      <section style={{ padding: '40px 0 10px', background: '#ffffff' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {/* All Posts link */}
                <Link
                  href={blogHref}
                  style={{
                    padding: '10px 22px',
                    border: '2px solid #e2e8f0',
                    background: '#ffffff',
                    color: '#64748b',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <i className="fa-solid fa-grip"></i>
                  {translations.allPostsLabel}
                </Link>

                {/* Category links */}
                {categoryLinks.map(cat => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    style={{
                      padding: '10px 22px',
                      border: cat.active ? '2px solid #0891b2' : '2px solid #e2e8f0',
                      background: cat.active ? '#e0f2fe' : '#ffffff',
                      color: cat.active ? '#0891b2' : '#64748b',
                      borderRadius: '30px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <i className={`fa-solid ${cat.icon}`}></i>
                    {cat.label}
                  </Link>
                ))}
              </div>

              {/* Post count */}
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>
                <strong style={{ color: '#0891b2' }}>{blogs.length}</strong> {translations.postCount}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '20px 0 60px', background: '#ffffff' }}>
        <div className="container">
          <div className="row g-4">
            {visibleBlogs.map(blog => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <Link href={getBlogPath(blog.slug)} style={{ textDecoration: 'none' }}>
                  <article
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
                        alt={blog.imageAlt || blog.title}
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
                        {blog.badgeTitle}
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
                          {blog.publishedDate}
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
                        {blog.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '0.95rem',
                          color: '#64748b',
                          lineHeight: '1.6',
                          marginBottom: '16px',
                        }}
                      >
                        {blog.description.substring(0, 100)}...
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
                        <span>{translations.readMore}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      {visiblePosts < blogs.length && (
        <section style={{ padding: '0 0 60px', background: '#ffffff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <button
                  onClick={loadMore}
                  style={{
                    padding: '16px 40px',
                    background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(8, 145, 178, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(8, 145, 178, 0.3)';
                  }}
                >
                  <span>{translations.loadMore}</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryGridClient;
