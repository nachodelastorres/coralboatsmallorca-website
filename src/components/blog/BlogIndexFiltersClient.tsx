'use client';

import { useState } from 'react';

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface BlogIndexFiltersClientProps {
  categories: Category[];
  loadMoreLabel: string;
  totalPosts: number;
  initialVisible: number;
  children: React.ReactNode;
  onVisibleChange?: (visible: number) => void;
}

const BlogIndexFiltersClient = ({
  categories,
  loadMoreLabel,
  totalPosts,
  initialVisible,
  children,
}: BlogIndexFiltersClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visiblePosts, setVisiblePosts] = useState(initialVisible);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <>
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

      {/* Blog Grid - Rendered by parent SSR component */}
      {children}

      {/* Load More Button */}
      {visiblePosts < totalPosts && (
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
                  <span>{loadMoreLabel}</span>
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

export default BlogIndexFiltersClient;
