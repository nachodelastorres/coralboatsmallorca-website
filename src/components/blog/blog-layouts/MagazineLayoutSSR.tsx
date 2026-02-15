/**
 * MagazineLayoutSSR - Server Component for SEO
 *
 * This component renders the blog post content server-side,
 * ensuring H1, H2, paragraphs appear in "View Source" for Google indexing.
 *
 * NO 'use client' directive - this is a Server Component
 */

import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

// Types for translated content
export interface BlogSection {
  title?: string;
  body?: string;
  subsections?: BlogSubsection[];
}

export interface BlogSubsection {
  subtitle: string;
  body: string;
}

export interface BlogPostTranslated {
  // Basic info
  title: string;
  badgeTitle: string;
  publishedDate: string;
  description: string;
  readTime: string;

  // Images
  mainImage: StaticImageData;
  mainImageAlt: string;
  secondaryImage1?: StaticImageData;
  secondaryImage1Alt?: string;
  secondaryImage2?: StaticImageData;
  secondaryImage2Alt?: string;
  secondaryImage3?: StaticImageData;
  secondaryImage3Alt?: string;
  secondaryImage4?: StaticImageData;
  secondaryImage4Alt?: string;
  secondaryImage5?: StaticImageData;
  secondaryImage5Alt?: string;
  secondaryImage6?: StaticImageData;
  secondaryImage6Alt?: string;

  // Sections (already translated)
  section1?: BlogSection;
  section2?: BlogSection;
  section3?: BlogSection;
  section4?: BlogSection;
  section5?: BlogSection;
  section6?: BlogSection;
  section7?: BlogSection;
  section8?: BlogSection;
  section9?: BlogSection;
  section10?: BlogSection;
  section11?: BlogSection;
  section12?: BlogSection;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaLink: string;
}

interface MagazineLayoutSSRProps {
  blog: BlogPostTranslated;
}

// Helper function to get lines in order (preserves bullet position)
const getOrderedLines = (text: string): string[] => {
  if (!text) return [];
  return text.split('\n').filter(line => line.trim());
};

// Helper function to render text with bold markers and markdown links (Server-side)
const renderTextWithBold = (text: string): React.ReactNode => {
  if (!text) return null;

  // Helper to convert absolute URLs to relative paths for internal navigation
  const convertToRelativePath = (url: string): string => {
    try {
      if (url.startsWith('https://coralboats.com/') || url.startsWith('http://coralboats.com/')) {
        const urlObj = new URL(url);
        return urlObj.pathname;
      }
      return url;
    } catch {
      return url;
    }
  };

  const elements: React.ReactNode[] = [];
  let currentIndex = 0;
  let keyCounter = 0;

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
          }}
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
          }}
        >
          {linkText}
        </Link>
      );

      currentIndex += linkMatch[0].length;
      continue;
    }

    // Pattern 3: Bold text **text**
    const boldMatch = remainingText.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      const boldContent = boldMatch[1];
      elements.push(
        <strong key={`bold-${keyCounter++}`} style={{ fontWeight: '700', color: '#1e293b' }}>
          {boldContent}
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
      elements.push(<span key={`text-${keyCounter++}`}>{remainingText[0]}</span>);
      currentIndex += 1;
    }
  }

  return <>{elements}</>;
};

// Component to render a bullet point
const BulletPoint = ({ text }: { text: string }) => (
  <div
    style={{
      fontSize: '1.05rem',
      color: '#475569',
      lineHeight: '1.8',
      marginBottom: '12px',
      paddingLeft: '30px',
      position: 'relative',
    }}
  >
    <span
      style={{
        position: 'absolute',
        left: '0',
        top: '5px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: '#e0f2fe',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i className="fa-solid fa-check" style={{ color: '#0891b2', fontSize: '0.7rem' }}></i>
    </span>
    {renderTextWithBold(text)}
  </div>
);

// Component to render section content (paragraphs and bullets)
const SectionContent = ({ body }: { body: string }) => {
  const lines = getOrderedLines(body);

  return (
    <>
      {lines.map((line, idx) => {
        const isBullet = line.trim().startsWith('- ');
        if (isBullet) {
          return <BulletPoint key={idx} text={line.replace(/^-\s*/, '').trim()} />;
        }
        return (
          <p key={idx} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '15px' }}>
            {renderTextWithBold(line.trim())}
          </p>
        );
      })}
    </>
  );
};

// Component to render a subsection card
const SubsectionCard = ({ subsection, index }: { subsection: BlogSubsection; index: number }) => {
  const lines = getOrderedLines(subsection.body);

  return (
    <div
      style={{
        padding: '30px',
        background: '#ffffff',
        borderRadius: '15px',
        border: '2px solid #e2e8f0',
        transition: 'all 0.3s ease',
      }}
      className="magazine-feature-card"
    >
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#0891b2',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            background: '#e0f2fe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: '700',
          }}
        >
          {index + 1}
        </span>
        {renderTextWithBold(subsection.subtitle)}
      </h3>

      {lines.map((line, lIdx) => {
        const isBullet = line.trim().startsWith('- ');
        if (isBullet) {
          return <BulletPoint key={lIdx} text={line.replace(/^-\s*/, '').trim()} />;
        }
        return (
          <p key={lIdx} style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }}>
            {renderTextWithBold(line.trim())}
          </p>
        );
      })}
    </div>
  );
};

// Component to render a full section
const BlogSectionComponent = ({ section, sectionNumber }: { section: BlogSection; sectionNumber: number }) => {
  if (!section.title) return null;

  const hasSubsections = section.subsections && section.subsections.length > 0;

  // Section 12 is the conclusion with special styling
  if (sectionNumber === 12) {
    return (
      <div
        style={{
          padding: '35px',
          background: '#f8fafc',
          borderRadius: '15px',
          borderLeft: '5px solid #0891b2',
        }}
      >
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '20px',
          }}
        >
          {section.title}
        </h2>
        {section.body && <SectionContent body={section.body} />}
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '50px' }}>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '25px',
        }}
      >
        {section.title}
      </h2>

      {hasSubsections ? (
        <>
          {section.body && (
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
              {renderTextWithBold(section.body)}
            </p>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {section.subsections!.map((subsection, idx) => (
              <SubsectionCard key={idx} subsection={subsection} index={idx} />
            ))}
          </div>
        </>
      ) : (
        section.body && <SectionContent body={section.body} />
      )}
    </div>
  );
};

const MagazineLayoutSSR = ({ blog }: MagazineLayoutSSRProps) => {
  return (
    <article style={{ background: '#ffffff' }}>
      {/* Hero Section with Overlay Text */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '500px' }}>
        <Image
          src={blog.mainImage}
          alt={blog.mainImageAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        <div
          className="container"
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
          }}
        >
          <div className="row">
            <div className="col-lg-10 col-xl-8">
              <div
                style={{
                  display: 'inline-block',
                  background: '#0891b2',
                  color: '#ffffff',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                }}
              >
                {blog.badgeTitle}
              </div>
              {/* H1 - Critical for SEO - Server Rendered */}
              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '20px',
                  lineHeight: '1.2',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                }}
              >
                {blog.title}
              </h1>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '25px',
                  flexWrap: 'wrap',
                  color: '#e2e8f0',
                  fontSize: '1rem',
                }}
              >
                <span>
                  <i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i>
                  {blog.publishedDate}
                </span>
                <span>
                  <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i>
                  {blog.readTime}
                </span>
                <span>
                  <i className="fa-solid fa-user" style={{ marginRight: '8px' }}></i>
                  Coral Boats Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {/* Lead Paragraph */}
              <div
                style={{
                  fontSize: '1.25rem',
                  color: '#1e293b',
                  lineHeight: '1.8',
                  marginBottom: '40px',
                  paddingLeft: '30px',
                  borderLeft: '4px solid #0891b2',
                  fontWeight: '500',
                }}
              >
                {blog.description}
              </div>

              {/* Section 1 - Intro paragraph */}
              {blog.section1 && (
                <div style={{ marginBottom: '50px' }}>
                  {blog.section1.title && (
                    <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '20px' }}>
                      {renderTextWithBold(blog.section1.title)}
                    </p>
                  )}
                  {blog.section1.body && (
                    <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9' }}>
                      {renderTextWithBold(blog.section1.body)}
                    </p>
                  )}
                </div>
              )}

              {/* Section 2 */}
              {blog.section2 && <BlogSectionComponent section={blog.section2} sectionNumber={2} />}

              {/* CTA Mid-Article */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                  padding: '40px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  marginBottom: '50px',
                  boxShadow: '0 10px 40px rgba(8, 145, 178, 0.3)',
                }}
              >
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#ffffff', marginBottom: '15px' }}>
                  {blog.ctaTitle}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#e0f2fe', marginBottom: '25px' }}>
                  {blog.ctaDescription}
                </p>
                <Link
                  href={blog.ctaLink}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '16px 35px',
                    background: '#ffffff',
                    color: '#0891b2',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <span>{blog.ctaButtonText}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

              {/* Sections 3-12 with distributed images */}
              {(() => {
                const hasDistributedImages = !!blog.secondaryImage3;

                if (hasDistributedImages) {
                  // Distributed layout: images placed between sections
                  return (
                    <>
                      {blog.section3 && <BlogSectionComponent section={blog.section3} sectionNumber={3} />}

                      {/* Image pair after section 3 */}
                      {(blog.secondaryImage1 || blog.secondaryImage2) && (
                        <div style={{ marginBottom: '50px' }}>
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: blog.secondaryImage1 && blog.secondaryImage2 ? 'repeat(2, 1fr)' : '1fr',
                              gap: '20px',
                            }}
                          >
                            {blog.secondaryImage1 && (
                              <div style={{ position: 'relative', height: '350px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                                <Image src={blog.secondaryImage1} alt={blog.secondaryImage1Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                              </div>
                            )}
                            {blog.secondaryImage2 && (
                              <div style={{ position: 'relative', height: '350px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                                <Image src={blog.secondaryImage2} alt={blog.secondaryImage2Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {blog.section4 && <BlogSectionComponent section={blog.section4} sectionNumber={4} />}

                      {/* Single image after section 4 */}
                      {blog.secondaryImage3 && (
                        <div style={{ marginBottom: '50px' }}>
                          <div style={{ position: 'relative', height: '400px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                            <Image src={blog.secondaryImage3} alt={blog.secondaryImage3Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                          </div>
                        </div>
                      )}

                      {blog.section5 && <BlogSectionComponent section={blog.section5} sectionNumber={5} />}

                      {/* Single image after section 5 */}
                      {blog.secondaryImage4 && (
                        <div style={{ marginBottom: '50px' }}>
                          <div style={{ position: 'relative', height: '400px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                            <Image src={blog.secondaryImage4} alt={blog.secondaryImage4Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                          </div>
                        </div>
                      )}

                      {blog.section6 && <BlogSectionComponent section={blog.section6} sectionNumber={6} />}
                      {blog.section7 && <BlogSectionComponent section={blog.section7} sectionNumber={7} />}

                      {/* Image pair after section 7 */}
                      {(blog.secondaryImage5 || blog.secondaryImage6) && (
                        <div style={{ marginBottom: '50px' }}>
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: blog.secondaryImage5 && blog.secondaryImage6 ? 'repeat(2, 1fr)' : '1fr',
                              gap: '20px',
                            }}
                          >
                            {blog.secondaryImage5 && (
                              <div style={{ position: 'relative', height: '350px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                                <Image src={blog.secondaryImage5} alt={blog.secondaryImage5Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                              </div>
                            )}
                            {blog.secondaryImage6 && (
                              <div style={{ position: 'relative', height: '350px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                                <Image src={blog.secondaryImage6} alt={blog.secondaryImage6Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {blog.section8 && <BlogSectionComponent section={blog.section8} sectionNumber={8} />}
                      {blog.section9 && <BlogSectionComponent section={blog.section9} sectionNumber={9} />}
                      {blog.section10 && <BlogSectionComponent section={blog.section10} sectionNumber={10} />}
                      {blog.section11 && <BlogSectionComponent section={blog.section11} sectionNumber={11} />}
                      {blog.section12 && <BlogSectionComponent section={blog.section12} sectionNumber={12} />}
                    </>
                  );
                }

                // Classic layout: single image block after section 5
                return (
                  <>
                    {blog.section3 && <BlogSectionComponent section={blog.section3} sectionNumber={3} />}
                    {blog.section4 && <BlogSectionComponent section={blog.section4} sectionNumber={4} />}
                    {blog.section5 && <BlogSectionComponent section={blog.section5} sectionNumber={5} />}

                    {(blog.secondaryImage1 || blog.secondaryImage2) && (
                      <div style={{ marginBottom: '50px' }}>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: blog.secondaryImage1 && blog.secondaryImage2 ? 'repeat(2, 1fr)' : '1fr',
                            gap: '20px',
                          }}
                        >
                          {blog.secondaryImage1 && (
                            <div style={{ position: 'relative', height: '350px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                              <Image src={blog.secondaryImage1} alt={blog.secondaryImage1Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                          )}
                          {blog.secondaryImage2 && (
                            <div style={{ position: 'relative', height: '350px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                              <Image src={blog.secondaryImage2} alt={blog.secondaryImage2Alt || blog.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {blog.section6 && <BlogSectionComponent section={blog.section6} sectionNumber={6} />}
                    {blog.section7 && <BlogSectionComponent section={blog.section7} sectionNumber={7} />}
                    {blog.section8 && <BlogSectionComponent section={blog.section8} sectionNumber={8} />}
                    {blog.section9 && <BlogSectionComponent section={blog.section9} sectionNumber={9} />}
                    {blog.section10 && <BlogSectionComponent section={blog.section10} sectionNumber={10} />}
                    {blog.section11 && <BlogSectionComponent section={blog.section11} sectionNumber={11} />}
                    {blog.section12 && <BlogSectionComponent section={blog.section12} sectionNumber={12} />}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MagazineLayoutSSR;
