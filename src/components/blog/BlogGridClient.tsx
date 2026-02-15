'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Serialized blog type for client component
interface SerializedBlog {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  badgeTitle: string;
  publishedDate: string;
  category?: string;
  imageAlt?: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  slug: string;
}

interface BlogGridClientProps {
  blogs: SerializedBlog[];
  categories: Category[];
  lang: string;
  translations: {
    loadMore: string;
    readMore: string;
    featuredBadge: string;
    featuredTitle: string;
    featuredSubtitle: string;
    allPostsLabel: string;
  };
  initialVisible?: number;
}

const BlogGridClient = ({
  blogs,
  categories,
  lang,
  translations,
  initialVisible = 6,
}: BlogGridClientProps) => {
  const [visiblePosts, setVisiblePosts] = useState(initialVisible);

  // Featured post (most recent)
  const featuredPost = blogs[0];

  // Show all posts (no client-side filtering - categories are links now)
  const otherPosts = blogs.slice(1);
  const visibleFilteredPosts = otherPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const getBlogPath = (slug: string) => {
    return lang === 'en' ? `/blog-details/${slug}` : `/${lang}/blog-details/${slug}`;
  };

  const getCategoryHref = (categorySlug: string) => {
    return `/${lang}/blog/${categorySlug}`;
  };

  return (
    <>
      {/* Featured Post Section */}
      <section style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: '#e0f2fe',
                    color: '#0891b2',
                    padding: '8px 20px',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                  }}
                >
                  <i className="fa-solid fa-star" style={{ marginRight: '8px' }}></i>
                  {translations.featuredBadge}
                </span>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '10px',
                  }}
                >
                  {translations.featuredTitle}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  {translations.featuredSubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Card */}
          <div className="row">
            <div className="col-12">
              <Link href={getBlogPath(featuredPost.slug)} style={{ textDecoration: 'none' }}>
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
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt || featuredPost.title}
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
                      {featuredPost.badgeTitle}
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
                      {featuredPost.title}
                    </h2>
                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#e2e8f0',
                        marginBottom: '16px',
                        lineHeight: '1.6',
                      }}
                    >
                      {featuredPost.description.substring(0, 150)}...
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
                        {featuredPost.publishedDate}
                      </span>
                      <span>
                        <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i>
                        5 min
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories as Links */}
      <section style={{ padding: '40px 0 20px', background: '#ffffff' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginBottom: '40px',
                }}
              >
                {/* "All Posts" - active on the blog index */}
                <span
                  style={{
                    padding: '12px 24px',
                    border: '2px solid #0891b2',
                    background: '#e0f2fe',
                    color: '#0891b2',
                    borderRadius: '30px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <i className="fa-solid fa-grip"></i>
                  {translations.allPostsLabel}
                </span>

                {categories.map(category => (
                  <Link
                    key={category.id}
                    href={getCategoryHref(category.slug)}
                    style={{
                      padding: '12px 24px',
                      border: '2px solid #e2e8f0',
                      background: '#ffffff',
                      color: '#64748b',
                      borderRadius: '30px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <i className={`fa-solid ${category.icon}`}></i>
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '20px 0 60px', background: '#ffffff' }}>
        <div className="container">
          <div className="row g-4">
            {visibleFilteredPosts.map(blog => (
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
      {visiblePosts < otherPosts.length && (
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

export default BlogGridClient;
