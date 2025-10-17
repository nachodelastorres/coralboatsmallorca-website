'use client';

import { useState } from 'react';
import { blogDataOne } from '@/data/blog-data';
import BlogCard from './BlogCard';

const BlogGridArea = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Define categories based on badge titles
  const categories = [
    { id: 'all', label: 'All Posts', icon: 'fa-grip' },
    { id: 'Guías', label: 'Guides & Tips', icon: 'fa-map' },
    { id: 'Excursiones', label: 'Boat Tours', icon: 'fa-ship' },
    { id: 'Destinos', label: 'Destinations', icon: 'fa-location-dot' },
    { id: 'Consejos', label: 'Travel Tips', icon: 'fa-lightbulb' },
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
                  Featured Post
                </span>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '10px',
                  }}
                >
                  Latest from Coral Boats
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  Discover our most recent insights and tips for the perfect boat tour experience in Mallorca
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
                    {category.label}
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
                  <span>Load More Posts</span>
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
                  Your Complete Guide to Boat Tours in Mallorca
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }}>
                  Welcome to the <strong>Coral Boats blog</strong>, your trusted source for everything related to{' '}
                  <strong>boat tours in Alcudia, Mallorca</strong>. Whether you're planning your first{' '}
                  <strong>boat trip in Mallorca</strong> or you're a seasoned sailor looking for hidden gems, our blog
                  provides insider tips, local knowledge, and expert advice to make your experience unforgettable.
                </p>
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
                      Expert Tips & Guides
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}>
                      Learn from our years of experience operating <strong>boat tours in Alcudia Bay</strong>. From what to
                      pack for your <strong>boat excursion in Mallorca</strong> to the best time to spot marine life, we
                      share practical advice to enhance your adventure.
                    </p>
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
                      Discover Hidden Treasures
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}>
                      Explore <strong>secret beaches in Mallorca</strong>, discover <strong>hidden coves near Alcudia</strong>,
                      and learn about the stunning <strong>coastline of North Mallorca</strong> that you can only access by
                      boat. Our local expertise reveals the island's best-kept secrets.
                    </p>
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
                  Plan Your Perfect Boat Tour in Mallorca
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#475569',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                  }}
                >
                  From <strong>morning boat tours</strong> perfect for snorkeling to <strong>romantic sunset cruises</strong> and{' '}
                  <strong>private boat charters</strong> for special celebrations, we cover everything you need to know about{' '}
                  <strong>boat tours from Port d'Alcudia</strong>. Join thousands of satisfied guests who have made their Mallorca
                  vacation extraordinary with Coral Boats.
                </p>
                <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
                  📍 Operating from Port d'Alcudia, Mallorca | ⭐ 4.9/5 Rating | 🏆 10+ Years of Excellence
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
