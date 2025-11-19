'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { IBlogDT } from '@/types/blog-d-t';

interface MinimalistLayoutProps {
  blog: IBlogDT;
}

// Helper function to process markdown text
const processMarkdown = (text: string) => {
  if (!text) return { paragraphs: [], bullets: [] };

  const lines = text.split('\n').filter(line => line.trim());
  const paragraphs: string[] = [];
  const bullets: string[] = [];

  lines.forEach(line => {
    if (line.trim().startsWith('- ')) {
      bullets.push(line.replace(/^-\s*/, '').trim());
    } else {
      paragraphs.push(line.trim());
    }
  });

  return { paragraphs, bullets };
};

// Helper function to render text with bold markers and markdown links
const renderTextWithBold = (text: string): React.ReactNode => {
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
        <strong key={`bold-${keyCounter++}`} style={{ fontWeight: '700', color: '#1e293b' }}>
          {renderTextWithBold(boldContent)}
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

const MinimalistLayout = ({ blog }: MinimalistLayoutProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <article style={{ background: '#ffffff' }}>
      {/* Clean Header */}
      <section style={{ padding: '100px 0 60px', background: '#ffffff' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#0891b2',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '20px',
                  }}
                >
                  {t(blog.badgeTitle!)}
                </div>
                <h1
                  style={{
                    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                    fontWeight: '300',
                    color: '#1e293b',
                    marginBottom: '25px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t(blog.title)}
                </h1>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    fontSize: '0.95rem',
                    color: '#64748b',
                    marginBottom: '30px',
                  }}
                >
                  <span>{t(blog.publishedDate)}</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <div
                  style={{
                    width: '60px',
                    height: '2px',
                    background: '#0891b2',
                    margin: '0 auto',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section style={{ marginBottom: '80px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ position: 'relative', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src={blog.detailsImg!}
                  alt={t(blog.title)}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              {/* Introduction */}
              <div style={{ marginBottom: '50px' }}>
                <p
                  style={{
                    fontSize: '1.3rem',
                    color: '#1e293b',
                    lineHeight: '1.9',
                    fontWeight: '300',
                    marginBottom: '30px',
                  }}
                >
                  {t(blog.description!)}
                </p>
              </div>

              {/* Section 1 */}
              <div style={{ marginBottom: '50px' }}>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '2', marginBottom: '20px', fontWeight: '300' }}>
                  {renderTextWithBold(t(blog.section1Title!))}
                </p>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '2', fontWeight: '300' }}>
                  {renderTextWithBold(t(blog.section1Body!))}
                </p>
              </div>

              {/* Divider */}
              <div style={{ margin: '60px 0' }}>
                <div style={{ width: '100%', height: '1px', background: '#e2e8f0' }}></div>
              </div>

              {/* Section 2 */}
              <div style={{ marginBottom: '50px' }}>
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: '300',
                    color: '#1e293b',
                    marginBottom: '30px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t(blog.section2Title!)}
                </h2>
                {(() => {
                  const section2Content = t(blog.section2Body!);
                  const { paragraphs, bullets } = processMarkdown(section2Content);

                  return (
                    <>
                      {paragraphs.map((para, idx) => (
                        <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '2', marginBottom: '30px', fontWeight: '300' }}>
                          {renderTextWithBold(para)}
                        </p>
                      ))}

                      {bullets.length > 0 && (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: '1.05rem',
                                color: '#475569',
                                lineHeight: '2',
                                marginBottom: '15px',
                                paddingLeft: '30px',
                                position: 'relative',
                                fontWeight: '300',
                              }}
                            >
                              <span
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: '12px',
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: '#0891b2',
                                }}
                              ></span>
                              {renderTextWithBold(bullet)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Simple CTA */}
              <div
                style={{
                  padding: '50px 0',
                  margin: '60px 0',
                  borderTop: '1px solid #e2e8f0',
                  borderBottom: '1px solid #e2e8f0',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '25px', fontWeight: '300' }}>
                  Interested in exploring Alcudia Bay?
                </p>
                <Link
                  href={getPath('/boat-tours-alcudia')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 32px',
                    background: '#0891b2',
                    color: '#ffffff',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.3px',
                  }}
                >
                  <span>Discover Our Tours</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.9rem' }}></i>
                </Link>
              </div>

              {/* Section 3 */}
              <div style={{ marginBottom: '50px' }}>
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: '300',
                    color: '#1e293b',
                    marginBottom: '30px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t(blog.section3Title!)}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '2', marginBottom: '40px', fontWeight: '300' }}>
                  {t(blog.section3Body!)}
                </p>

                {/* Sub-sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  {[
                    { subtitle: blog.section3sub1Subtitle, body: blog.section3sub1Body },
                    { subtitle: blog.section3sub2Subtitle, body: blog.section3sub2Body },
                    { subtitle: blog.section3sub3Subtitle, body: blog.section3sub3Body },
                  ].map((section, idx) => {
                    const content = t(section.body!);
                    const { paragraphs, bullets } = processMarkdown(content);

                    return (
                      <div key={idx}>
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: '400',
                            color: '#1e293b',
                            marginBottom: '15px',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {t(section.subtitle!)}
                        </h3>

                        {paragraphs.map((para, pIdx) => (
                          <p key={`para-${pIdx}`} style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '2', fontWeight: '300', marginBottom: '20px' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '2',
                                  marginBottom: '15px',
                                  paddingLeft: '30px',
                                  position: 'relative',
                                  fontWeight: '300',
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '12px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: '#0891b2',
                                  }}
                                ></span>
                                {renderTextWithBold(bullet)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 4 */}
              {blog.section4Title && (
                <>
                  <div style={{ margin: '60px 0' }}>
                    <div style={{ width: '100%', height: '1px', background: '#e2e8f0' }}></div>
                  </div>
                  <div style={{ marginBottom: '50px' }}>
                    <h2
                      style={{
                        fontSize: '2rem',
                        fontWeight: '300',
                        color: '#1e293b',
                        marginBottom: '30px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {t(blog.section4Title)}
                    </h2>
                    {(() => {
                      const section4Content = t(blog.section4Body!);
                      const { paragraphs, bullets } = processMarkdown(section4Content);

                      return (
                        <>
                          {paragraphs.map((para, idx) => (
                            <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '2', marginBottom: '30px', fontWeight: '300' }}>
                              {renderTextWithBold(para)}
                            </p>
                          ))}

                          {bullets.length > 0 && (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  style={{
                                    fontSize: '1.05rem',
                                    color: '#475569',
                                    lineHeight: '2',
                                    marginBottom: '15px',
                                    paddingLeft: '30px',
                                    position: 'relative',
                                    fontWeight: '300',
                                  }}
                                >
                                  <span
                                    style={{
                                      position: 'absolute',
                                      left: 0,
                                      top: '12px',
                                      width: '6px',
                                      height: '6px',
                                      borderRadius: '50%',
                                      background: '#0891b2',
                                    }}
                                  ></span>
                                  {renderTextWithBold(bullet)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </>
              )}

              {/* Section 5 - Conclusion */}
              {blog.section5Title && (
                <div
                  style={{
                    padding: '40px 0',
                    borderTop: '2px solid #0891b2',
                    marginTop: '60px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '400',
                      color: '#1e293b',
                      marginBottom: '25px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t(blog.section5Title)}
                  </h2>
                  {(() => {
                    const section5Content = t(blog.section5Body!);
                    const { paragraphs, bullets } = processMarkdown(section5Content);

                    return (
                      <>
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '2', marginBottom: '30px', fontWeight: '300' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {bullets.map((bullet, idx) => (
                              <li
                                key={idx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '2',
                                  marginBottom: '15px',
                                  paddingLeft: '30px',
                                  position: 'relative',
                                  fontWeight: '300',
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '12px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: '#0891b2',
                                  }}
                                ></span>
                                {renderTextWithBold(bullet)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Author Note */}
              <div
                style={{
                  marginTop: '60px',
                  padding: '30px',
                  background: '#f8fafc',
                  borderRadius: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#0891b2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '1.5rem',
                    }}
                  >
                    <i className="fa-solid fa-ship"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b' }}>Coral Boats Team</div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Boat Tour Experts in Alcudia</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.7', margin: 0, fontWeight: '300' }}>
                  With over 10 years of experience operating boat tours in Mallorca, we're passionate about sharing the beauty
                  of Alcudia Bay with travelers from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MinimalistLayout;
