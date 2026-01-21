'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { IBlogDT } from '@/types/blog-d-t';

interface VisualLayoutProps {
  blog: IBlogDT;
}

const VisualLayout = ({ blog }: VisualLayoutProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  // Function to convert markdown bold syntax and links to HTML
  const processMarkdown = (text: string): React.ReactNode => {
    if (!text) return null;

    // Helper to convert absolute URLs to relative paths for internal navigation
    const convertToRelativePath = (url: string): string => {
      try {
        // Check if it's an absolute URL from coralboats.com
        if (url.startsWith('https://coralboats.com/') || url.startsWith('http://coralboats.com/')) {
          const urlObj = new URL(url);
          return urlObj.pathname; // Returns just the path part (e.g., /es/blog-details/...)
        }
        // If it's already a relative path, return as is
        return url;
      } catch (e) {
        // If URL parsing fails, return original
        return url;
      }
    };

    const elements: React.ReactNode[] = [];
    let currentIndex = 0;
    let keyCounter = 0;

    // Process text sequentially, handling patterns in priority order
    while (currentIndex < text.length) {
      const remainingText = text.substring(currentIndex);

      // Pattern 1: Bold links **[text](url)**
      const boldLinkMatch = remainingText.match(/^\*\*\[([^\]]+)\]\(([^)]+)\)\*\*/);
      if (boldLinkMatch) {
        const linkText = boldLinkMatch[1];
        const url = boldLinkMatch[2];

        elements.push(
          <Link
            key={`bold-link-${keyCounter++}`}
            href={convertToRelativePath(url)}
            style={{
              color: '#0891b2',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0e7490'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#0891b2'}
          >
            {linkText}
          </Link>
        );

        currentIndex += boldLinkMatch[0].length;
        continue;
      }

      // Pattern 2: Regular links [text](url)
      const linkMatch = remainingText.match(/^\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const url = linkMatch[2];

        elements.push(
          <Link
            key={`link-${keyCounter++}`}
            href={convertToRelativePath(url)}
            style={{
              color: '#0891b2',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0e7490'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#0891b2'}
          >
            {linkText}
          </Link>
        );

        currentIndex += linkMatch[0].length;
        continue;
      }

      // Pattern 3: Bold text **text** (with recursive processing for nested links)
      const boldMatch = remainingText.match(/^\*\*([^*]+)\*\*/);
      if (boldMatch) {
        const boldContent = boldMatch[1];

        // Recursively process the content inside bold markers to handle nested links
        elements.push(
          <strong key={`bold-${keyCounter++}`}>
            {processMarkdown(boldContent)}
          </strong>
        );

        currentIndex += boldMatch[0].length;
        continue;
      }

      // No pattern matched - find the next special character or end of string
      const nextSpecialChar = remainingText.search(/[\*\[]/);
      const plainTextEnd = nextSpecialChar === -1 ? remainingText.length : nextSpecialChar;

      if (plainTextEnd > 0) {
        const plainText = remainingText.substring(0, plainTextEnd);
        elements.push(<span key={`text-${keyCounter++}`}>{plainText}</span>);
        currentIndex += plainTextEnd;
      } else {
        // Single character that didn't match any pattern
        elements.push(<span key={`text-${keyCounter++}`}>{remainingText[0]}</span>);
        currentIndex += 1;
      }
    }

    return <>{elements}</>;
  };

  return (
    <article style={{ background: '#ffffff' }}>
      {/* Full-width Hero with Parallax Effect */}
      <section className="visual-layout-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Image
            src={blog.detailsImg!}
            alt={blog.imageAlt ? t(blog.imageAlt) : t(blog.title)}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        <div
          className="container visual-layout-hero-content"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
          }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(8, 145, 178, 0.9)',
                  color: '#ffffff',
                  padding: '10px 25px',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  marginBottom: '25px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {t(blog.badgeTitle!)}
              </div>
              <h1
                className="visual-layout-title"
                style={{
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '25px',
                  lineHeight: '1.15',
                  textShadow: '0 6px 30px rgba(0,0,0,0.6)',
                }}
              >
                {t(blog.title)}
              </h1>
              <p
                className="visual-layout-description"
                style={{
                  color: '#f0f9ff',
                  maxWidth: '800px',
                  margin: '0 auto 30px',
                  lineHeight: '1.7',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                {t(blog.description!)}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '25px',
                  fontSize: '1rem',
                  color: '#e0f2fe',
                }}
              >
                <span>
                  <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i>
                  {t(blog.publishedDate)}
                </span>
                <span>•</span>
                <span>
                  <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i>
                  5 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#ffffff',
            fontSize: '2rem',
            animation: 'bounce 2s infinite',
          }}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      {/* Content with Side-by-Side Layouts */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          {/* Section 1 - Text First */}
          <div className="row align-items-center" style={{ marginBottom: '100px' }}>
            <div className="col-lg-6" style={{ paddingRight: '60px' }}>
              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#0891b2',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '20px',
                }}
              >
                Introduction
              </div>
              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#1e293b',
                  lineHeight: '1.9',
                  marginBottom: '20px',
                  fontWeight: '500',
                }}
              >
                {processMarkdown(t(blog.section1Title!))}
              </p>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.9' }}>
                {processMarkdown(t(blog.section1Body!))}
              </p>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Image
                  src={blog.image}
                  alt={blog.imageAlt ? t(blog.imageAlt) : `${t(blog.title)} - Coral Boats Mallorca`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Section 2 - With Icon Highlights */}
          <div className="row" style={{ marginBottom: '100px' }}>
            <div className="col-12">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2
                  style={{
                    fontSize: '2.75rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '20px',
                    lineHeight: '1.2',
                  }}
                >
                  {t(blog.section2Title!)}
                </h2>
                <p style={{ fontSize: '1.15rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                  {processMarkdown(t(blog.section2Body!).split('\n')[0])}
                </p>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div
                    style={{
                      borderLeft: '4px solid #0891b2',
                      paddingLeft: '30px',
                    }}
                  >
                    {t(blog.section2Body!)
                      .split('\n')
                      .slice(1)
                      .filter(item => item.trim())
                      .map((item, idx, arr) => (
                        <p
                          key={idx}
                          style={{
                            fontSize: '1.1rem',
                            color: '#475569',
                            lineHeight: '1.9',
                            marginBottom: idx < arr.length - 1 ? '20px' : '0',
                          }}
                        >
                          {processMarkdown(item.replace('- ', ''))}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Image 1 - Full Width with Caption */}
          {blog.secondaryImage1 && (
            <div className="row" style={{ marginBottom: '100px' }}>
              <div className="col-12">
                <div
                  style={{
                    position: 'relative',
                    height: '500px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Image
                    src={blog.secondaryImage1}
                    alt={blog.secondaryImage1Alt ? t(blog.secondaryImage1Alt) : `${t(blog.title)} - Coral Boats Mallorca`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Immersive CTA */}
          <div className="row" style={{ marginBottom: '100px' }}>
            <div className="col-12">
              <div
                style={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Image
                  src="/assets/img/premium/gallery_new/puesta-sol-mediterranea-crucero-sunset-magic-mallorca.webp"
                  alt="Sunset boat tour Alcudia Mallorca - Book your exclusive experience"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.85), rgba(14, 116, 144, 0.85))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '20px',
                      textAlign: 'center',
                    }}
                  >
                    Experience the Magic Yourself
                  </h3>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      color: '#e0f2fe',
                      marginBottom: '30px',
                      maxWidth: '600px',
                      textAlign: 'center',
                    }}
                  >
                    Join thousands of happy guests who've discovered the beauty of Alcudia Bay
                  </p>
                  <Link
                    href={getPath('/boat-tours-alcudia')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '18px 40px',
                      background: '#ffffff',
                      color: '#0891b2',
                      borderRadius: '50px',
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                    }}
                  >
                    <span>Explore Our Tours</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Visual Cards */}
          <div className="row" style={{ marginBottom: '100px' }}>
            <div className="col-12">
              <h2
                style={{
                  fontSize: '2.75rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                {t(blog.section3Title!)}
              </h2>
              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#64748b',
                  marginBottom: '60px',
                  textAlign: 'center',
                  maxWidth: '700px',
                  margin: '0 auto 60px',
                }}
              >
                {processMarkdown(t(blog.section3Body!))}
              </p>

              <div className="row g-4">
                {[
                  { subtitle: blog.section3sub1Subtitle, body: blog.section3sub1Body },
                  { subtitle: blog.section3sub2Subtitle, body: blog.section3sub2Body },
                  { subtitle: blog.section3sub3Subtitle, body: blog.section3sub3Body },
                ].map((section, idx) => (
                  <div key={idx} className="col-lg-4">
                    <div
                      style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                        height: '100%',
                        transition: 'transform 0.3s ease',
                      }}
                      className="visual-story-card"
                    >
                      <div
                        style={{
                          height: '200px',
                          background: `linear-gradient(135deg, ${['#0891b2', '#8b5cf6', '#f59e0b'][idx]}, ${
                            ['#0e7490', '#7c3aed', '#d97706'][idx]
                          })`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '3rem',
                          color: '#ffffff',
                        }}
                      >
                        <i className={`fa-solid ${['fa-ship', 'fa-compass', 'fa-anchor'][idx]}`}></i>
                      </div>
                      <div style={{ padding: '30px' }}>
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: '#1e293b',
                            marginBottom: '15px',
                          }}
                        >
                          {processMarkdown(t(section.subtitle!))}
                        </h3>
                        <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.8' }}>
                          {processMarkdown(t(section.body!))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Image 2 - Full Width with Caption */}
          {blog.secondaryImage2 && (
            <div className="row" style={{ marginBottom: '100px' }}>
              <div className="col-12">
                <div
                  style={{
                    position: 'relative',
                    height: '500px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Image
                    src={blog.secondaryImage2}
                    alt={blog.secondaryImage2Alt ? t(blog.secondaryImage2Alt) : `${t(blog.title)} - Vista de Mallorca`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Section 4 & 5 - Combined Final Section */}
          {blog.section4Title && (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  style={{
                    padding: '60px',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
                    borderRadius: '20px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '2.25rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section4Title)}
                  </h2>
                  <div style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '40px' }}>
                    {t(blog.section4Body!).split('\n\n').map((paragraph, pIdx) => {
                      // Check if paragraph contains bullet points
                      if (paragraph.includes('- ')) {
                        return (
                          <ul key={pIdx} style={{ listStyle: 'none', padding: 0, marginTop: '20px', marginBottom: '20px' }}>
                            {paragraph.split('\n').filter(line => line.trim()).map((line, lIdx) => (
                              <li key={lIdx} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                marginBottom: '15px',
                                paddingLeft: '0'
                              }}>
                                <span style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                                  color: '#ffffff',
                                  fontSize: '0.75rem',
                                  fontWeight: 'bold',
                                  flexShrink: 0,
                                  marginRight: '15px',
                                  marginTop: '2px'
                                }}>
                                  <i className="fa-solid fa-check"></i>
                                </span>
                                <span>{processMarkdown(line.replace('- ', ''))}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      // Regular paragraph
                      return <p key={pIdx} style={{ marginBottom: '15px' }}>{processMarkdown(paragraph)}</p>;
                    })}
                  </div>

                  {blog.section5Title && (
                    <>
                      <h3
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: '600',
                          color: '#0891b2',
                          marginBottom: '20px',
                        }}
                      >
                        {t(blog.section5Title)}
                      </h3>
                      <div style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9' }}>
                        {t(blog.section5Body!).split('\n\n').map((paragraph, idx) => {
                          // Check if paragraph contains bullet points
                          if (paragraph.includes('- ')) {
                            return (
                              <ul key={idx} style={{ listStyle: 'none', padding: 0, marginTop: '20px', marginBottom: '20px' }}>
                                {paragraph.split('\n').filter(line => line.trim()).map((line, lIdx) => (
                                  <li key={lIdx} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    marginBottom: '15px',
                                    paddingLeft: '0'
                                  }}>
                                    <span style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: '24px',
                                      height: '24px',
                                      borderRadius: '50%',
                                      background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                                      color: '#ffffff',
                                      fontSize: '0.75rem',
                                      fontWeight: 'bold',
                                      flexShrink: 0,
                                      marginRight: '15px',
                                      marginTop: '2px'
                                    }}>
                                      <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span>{processMarkdown(line.replace('- ', ''))}</span>
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                          // Regular paragraph
                          return <p key={idx} style={{ marginBottom: '15px' }}>{processMarkdown(paragraph)}</p>;
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
        .visual-story-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15) !important;
        }

        /* Hero section responsive */
        .visual-layout-hero {
          height: 85vh;
        }

        .visual-layout-hero-content {
          padding: 0 15px;
        }

        /* Title responsive */
        .visual-layout-title {
          font-size: 3.5rem;
        }

        /* Description responsive */
        .visual-layout-description {
          font-size: 1.3rem;
        }

        /* Tablet */
        @media (max-width: 991px) {
          .visual-layout-hero {
            height: 75vh;
          }

          .visual-layout-title {
            font-size: 2.5rem;
          }

          .visual-layout-description {
            font-size: 1.1rem;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .visual-layout-hero {
            height: 100vh;
            min-height: 500px;
          }

          .visual-layout-hero-content {
            padding-left: 20px;
            padding-right: 20px;
          }

          .visual-layout-title {
            font-size: 1.75rem;
            line-height: 1.25;
            margin-bottom: 15px;
          }

          .visual-layout-description {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .visual-layout-title {
            font-size: 1.5rem;
          }

          .visual-layout-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </article>
  );
};

export default VisualLayout;
