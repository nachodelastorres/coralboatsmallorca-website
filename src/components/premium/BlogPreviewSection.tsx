'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { blogDataOne } from '@/data/blog-data';

const BlogPreviewSection = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Show all blogs in reverse order (most recent first)
  const featuredBlogs = [...blogDataOne].reverse();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="premium-blog-preview" style={{ padding: '80px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '50px' }}>
              <span className="premium-section-header__label">{t('blog_section.label')}</span>
              <h2 className="premium-section-header__title">
                {t('blog_section.title')}
              </h2>
              <p className="premium-section-header__description">
                {t('blog_section.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Container */}
        <div style={{ position: 'relative' }}>
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              color: '#0891b2',
              fontSize: '1.2rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0891b2';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = '#0891b2';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            onClick={() => scroll('right')}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              color: '#0891b2',
              fontSize: '1.2rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0891b2';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = '#0891b2';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            style={{
              display: 'flex',
              gap: '25px',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              padding: '10px 5px 20px',
              marginBottom: '20px',
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e1 #f1f5f9',
            }}
            className="blog-scroll-container"
          >
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={getPath(`/blog-details/${blog.slug}`)}
                style={{ textDecoration: 'none', flexShrink: 0 }}
              >
                <div
                  className="blog-preview-card"
                  style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    width: '320px',
                    height: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt ? t(blog.imageAlt) : t(blog.title)}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      sizes="320px"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: '#0891b2',
                        color: '#ffffff',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                      }}
                    >
                      {t(blog.badgeTitle!)}
                    </div>
                  </div>

                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '10px',
                        fontSize: '0.8rem',
                        color: '#64748b',
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-calendar-days" style={{ marginRight: '5px' }}></i>
                        {t(blog.publishedDate)}
                      </span>
                      <span>
                        <i className="fa-solid fa-clock" style={{ marginRight: '5px' }}></i>
                        {t('blog_section.read_time')}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '10px',
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {t(blog.title)}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#64748b',
                        lineHeight: '1.5',
                        marginBottom: '15px',
                        flex: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {t(blog.description!).substring(0, 90)}...
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#0891b2',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span>{t('blog_section.read_more')}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-12 text-center">
            <Link href={getPath('/blog')}>
              <button
                className="premium-cta-button"
                style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                  color: '#ffffff',
                  padding: '18px 45px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(8, 145, 178, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(8, 145, 178, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(8, 145, 178, 0.3)';
                }}
              >
                <span>{t('blog_section.cta_button')}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
            <p
              style={{
                marginTop: '15px',
                color: '#64748b',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}
            >
              <i className="fa-solid fa-newspaper" style={{ marginRight: '8px', color: '#0891b2' }}></i>
              {t('blog_section.cta_secondary')}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .blog-scroll-container::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .blog-scroll-container::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .blog-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .blog-preview-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        }
        .blog-preview-card:hover img {
          transform: scale(1.08);
        }
        @media (max-width: 768px) {
          .blog-scroll-container {
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogPreviewSection;
