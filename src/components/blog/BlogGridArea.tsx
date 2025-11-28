'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { blogDataOne } from '@/data/blog-data';
import BlogCard from './BlogCard';

const BlogGridArea = () => {
  const { t } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Define categories based on badge titles
  const categories = [
    { id: 'all', labelKey: 'blogCategories.all', icon: 'fa-grip' },
    { id: 'Guías', labelKey: 'blogCategories.guides', icon: 'fa-map' },
    { id: 'Excursiones', labelKey: 'blogCategories.tours', icon: 'fa-ship' },
    { id: 'Destinos', labelKey: 'blogCategories.destinations', icon: 'fa-location-dot' },
    { id: 'Consejos', labelKey: 'blogCategories.tips', icon: 'fa-lightbulb' },
  ];

  // Sort blogs by ID (newest first)
  const sortedBlogs = [...blogDataOne].sort((a, b) => b.id - a.id);

  // Get featured post (most recent)
  const featuredPost = sortedBlogs[0];

  // Filter posts based on selected category (excluding featured)
  const filteredPosts = sortedBlogs.slice(1).filter(blog => {
    if (selectedCategory === 'all') return true;
    // This would need proper category mapping in your data
    return true; // For now, show all
  });

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
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
                  {t('blogHero.featuredBadge')}
                </span>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '10px',
                  }}
                >
                  {t('blogHero.title')}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  {t('blogHero.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <BlogCard blog={featuredPost} featured={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
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
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{
                      padding: '12px 24px',
                      border: selectedCategory === category.id ? '2px solid #0891b2' : '2px solid #e2e8f0',
                      background: selectedCategory === category.id ? '#e0f2fe' : '#ffffff',
                      color: selectedCategory === category.id ? '#0891b2' : '#64748b',
                      borderRadius: '30px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== category.id) {
                        e.currentTarget.style.borderColor = '#0891b2';
                        e.currentTarget.style.background = '#f0f9ff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategory !== category.id) {
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.background = '#ffffff';
                      }
                    }}
                  >
                    <i className={`fa-solid ${category.icon}`}></i>
                    {t(category.labelKey)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '20px 0 100px', background: '#ffffff' }}>
        <div className="container">
          <div className="row g-4">
            {filteredPosts.slice(0, visiblePosts).map(blog => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="row" style={{ marginTop: '50px' }}>
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
                  <span>{t('blogActions.loadMore')}</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content Section */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '20px',
                  }}
                >
                  {t('blogSEO.title')}
                </h2>
                <p
                  style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }}
                  dangerouslySetInnerHTML={{ __html: t('blogSEO.intro') }}
                />
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    style={{
                      padding: '30px',
                      background: '#ffffff',
                      borderRadius: '15px',
                      height: '100%',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#0891b2',
                        marginBottom: '15px',
                      }}
                    >
                      <i className="fa-solid fa-lightbulb" style={{ marginRight: '10px' }}></i>
                      {t('blogSEO.expertTips.title')}
                    </h3>
                    <p
                      style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}
                      dangerouslySetInnerHTML={{ __html: t('blogSEO.expertTips.description') }}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    style={{
                      padding: '30px',
                      background: '#ffffff',
                      borderRadius: '15px',
                      height: '100%',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#0891b2',
                        marginBottom: '15px',
                      }}
                    >
                      <i className="fa-solid fa-map-location-dot" style={{ marginRight: '10px' }}></i>
                      {t('blogSEO.hiddenTreasures.title')}
                    </h3>
                    <p
                      style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}
                      dangerouslySetInnerHTML={{ __html: t('blogSEO.hiddenTreasures.description') }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '40px',
                  padding: '30px',
                  background: '#e0f2fe',
                  borderRadius: '15px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#0891b2',
                    marginBottom: '15px',
                  }}
                >
                  {t('blogSEO.planTour.title')}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#475569',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                  }}
                  dangerouslySetInnerHTML={{ __html: t('blogSEO.planTour.description') }}
                />
                <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
                  {t('blogSEO.planTour.footer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridArea;
