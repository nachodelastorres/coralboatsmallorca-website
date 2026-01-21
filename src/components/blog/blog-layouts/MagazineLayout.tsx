'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { IBlogDT } from '@/types/blog-d-t';

interface MagazineLayoutProps {
  blog: IBlogDT;
}

// Helper function to process markdown text (legacy - separates bullets)
const processMarkdown = (text: string) => {
  if (!text) return { paragraphs: [], bullets: [] };

  const lines = text.split('\n').filter(line => line.trim());
  const paragraphs: string[] = [];
  const bullets: string[] = [];

  lines.forEach(line => {
    if (line.trim().startsWith('- ')) {
      bullets.push(line.replace(/^-\s*/, '').trim());
    } else if (!line.startsWith('**¿Qué significa esto para ti?**') && !line.startsWith('**What does this mean for you?**')) {
      paragraphs.push(line.trim());
    }
  });

  return { paragraphs, bullets };
};

// Helper function to get lines in order (preserves bullet position)
const getOrderedLines = (text: string) => {
  if (!text) return [];
  return text.split('\n').filter(line => line.trim());
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

const MagazineLayout = ({ blog }: MagazineLayoutProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <article style={{ background: '#ffffff' }}>
      {/* Hero Section with Overlay Text */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '500px' }}>
        <Image
          src={blog.detailsImg!}
          alt={blog.imageAlt ? t(blog.imageAlt) : t(blog.title)}
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
                {t(blog.badgeTitle!)}
              </div>
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
                {t(blog.title)}
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
                  {t(blog.publishedDate)}
                </span>
                <span>
                  <i className="fa-solid fa-clock" style={{ marginRight: '8px' }}></i>
                  {t('blogReadTime')}
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
                {t(blog.description!)}
              </div>

              {/* Section 1 */}
              <div style={{ marginBottom: '50px' }}>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '20px' }}>
                  {renderTextWithBold(t(blog.section1Title!))}
                </p>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9' }}>
                  {renderTextWithBold(t(blog.section1Body!))}
                </p>
              </div>

              {/* Section 2 - Benefits with Icons */}
              <div style={{ marginBottom: '50px' }}>
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '25px',
                    lineHeight: '1.3',
                  }}
                >
                  {t(blog.section2Title!)}
                </h2>
                {(() => {
                  const lines = getOrderedLines(t(blog.section2Body!));

                  return (
                    <>
                      {lines.map((line, idx) => {
                        const isBullet = line.trim().startsWith('- ');
                        if (isBullet) {
                          return (
                            <div
                              key={idx}
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
                              {renderTextWithBold(line.replace(/^-\s*/, '').trim())}
                            </div>
                          );
                        }
                        return (
                          <p key={idx} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '15px' }}>
                            {renderTextWithBold(line.trim())}
                          </p>
                        );
                      })}
                    </>
                  );
                })()}
              </div>

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
                  {t('blogCTA.title')}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#e0f2fe', marginBottom: '25px' }}>
                  {t('blogCTA.description')}
                </p>
                <Link
                  href={getPath('/boat-tours-alcudia')}
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
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <span>{t('blogCTA.buttonText')}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

              {/* Section 3 - Feature Cards or Regular Content */}
              <div style={{ marginBottom: '50px' }}>
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '25px',
                  }}
                >
                  {t(blog.section3Title!)}
                </h2>

                {(() => {
                  // Check if there are subsections
                  const subsections = [
                    { subtitle: blog.section3sub1Subtitle, body: blog.section3sub1Body },
                    { subtitle: blog.section3sub2Subtitle, body: blog.section3sub2Body },
                    { subtitle: blog.section3sub3Subtitle, body: blog.section3sub3Body },
                    { subtitle: blog.section3sub4Subtitle, body: blog.section3sub4Body },
                    { subtitle: blog.section3sub5Subtitle, body: blog.section3sub5Body },
                    { subtitle: blog.section3sub6Subtitle, body: blog.section3sub6Body },
                    { subtitle: blog.section3sub7Subtitle, body: blog.section3sub7Body },
                    { subtitle: blog.section3sub8Subtitle, body: blog.section3sub8Body },
                    { subtitle: blog.section3sub9Subtitle, body: blog.section3sub9Body },
                    { subtitle: blog.section3sub10Subtitle, body: blog.section3sub10Body },
                    { subtitle: blog.section3sub11Subtitle, body: blog.section3sub11Body },
                    { subtitle: blog.section3sub12Subtitle, body: blog.section3sub12Body },
                  ].filter(section => section.subtitle && section.body);

                  const hasSubsections = subsections.length > 0;

                  if (hasSubsections) {
                    // Render with subsection cards
                    return (
                      <>
                        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
                          {renderTextWithBold(t(blog.section3Body!))}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          {subsections.map((section, idx) => {
                            const lines = getOrderedLines(t(section.body!));

                            return (
                              <div
                                key={idx}
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
                                    {idx + 1}
                                  </span>
                                  {renderTextWithBold(t(section.subtitle!))}
                                </h3>

                                {lines.map((line, lIdx) => {
                                  const isBullet = line.trim().startsWith('- ');
                                  if (isBullet) {
                                    return (
                                      <div
                                        key={lIdx}
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
                                        {renderTextWithBold(line.replace(/^-\s*/, '').trim())}
                                      </div>
                                    );
                                  }
                                  return (
                                    <p key={lIdx} style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }}>
                                      {renderTextWithBold(line.trim())}
                                    </p>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    );
                  } else {
                    // Render as regular section with bullet points
                    const lines = getOrderedLines(t(blog.section3Body!));

                    return (
                      <>
                        {lines.map((line, idx) => {
                          const isBullet = line.trim().startsWith('- ');
                          if (isBullet) {
                            return (
                              <div
                                key={idx}
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
                                {renderTextWithBold(line.replace(/^-\s*/, '').trim())}
                              </div>
                            );
                          }
                          return (
                            <p key={idx} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '15px' }}>
                              {renderTextWithBold(line.trim())}
                            </p>
                          );
                        })}
                      </>
                    );
                  }
                })()}
              </div>

              {/* Section 4 */}
              {blog.section4Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section4Title)}
                  </h2>
                  {(() => {
                    // Check if there are subsections for section4
                    const subsections = [
                      { subtitle: blog.section4sub1Subtitle, body: blog.section4sub1Body },
                      { subtitle: blog.section4sub2Subtitle, body: blog.section4sub2Body },
                      { subtitle: blog.section4sub3Subtitle, body: blog.section4sub3Body },
                    ].filter(section => section.subtitle && section.body);

                    const hasSubsections = subsections.length > 0;

                    if (hasSubsections) {
                      return (
                        <>
                          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
                            {renderTextWithBold(t(blog.section4Body!))}
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {subsections.map((section, idx) => {
                              const lines = getOrderedLines(t(section.body!));

                              return (
                                <div
                                  key={idx}
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
                                      {idx + 1}
                                    </span>
                                    {renderTextWithBold(t(section.subtitle!))}
                                  </h3>

                                  {lines.map((line, lIdx) => {
                                    const isBullet = line.trim().startsWith('- ');
                                    if (isBullet) {
                                      return (
                                        <div
                                          key={lIdx}
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
                                          {renderTextWithBold(line.replace(/^-\s*/, '').trim())}
                                        </div>
                                      );
                                    }
                                    return (
                                      <p key={lIdx} style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }}>
                                        {renderTextWithBold(line.trim())}
                                      </p>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      );
                    } else {
                      const lines = getOrderedLines(t(blog.section4Body!));

                      return (
                        <>
                          {lines.map((line, idx) => {
                            const isBullet = line.trim().startsWith('- ');
                            if (isBullet) {
                              return (
                                <div
                                  key={idx}
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
                                  {renderTextWithBold(line.replace(/^-\s*/, '').trim())}
                                </div>
                              );
                            }
                            return (
                              <p key={idx} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '15px' }}>
                                {renderTextWithBold(line.trim())}
                              </p>
                            );
                          })}
                        </>
                      );
                    }
                  })()}
                </div>
              )}

              {/* Section 5 */}
              {blog.section5Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section5Title)}
                  </h2>
                  {(() => {
                    // Check if there are subsections for section5
                    const subsections = [
                      { subtitle: blog.section5sub1Subtitle, body: blog.section5sub1Body },
                      { subtitle: blog.section5sub2Subtitle, body: blog.section5sub2Body },
                      { subtitle: blog.section5sub3Subtitle, body: blog.section5sub3Body },
                    ].filter(section => section.subtitle && section.body);

                    const hasSubsections = subsections.length > 0;

                    if (hasSubsections) {
                      return (
                        <>
                          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
                            {renderTextWithBold(t(blog.section5Body!))}
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {subsections.map((section, idx) => {
                              const lines = getOrderedLines(t(section.body!));

                              return (
                                <div
                                  key={idx}
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
                                      {idx + 1}
                                    </span>
                                    {renderTextWithBold(t(section.subtitle!))}
                                  </h3>

                                  {lines.map((line, lIdx) => {
                                    const isBullet = line.trim().startsWith('- ');
                                    if (isBullet) {
                                      return (
                                        <div
                                          key={lIdx}
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
                                          {renderTextWithBold(line.replace(/^-\s*/, '').trim())}
                                        </div>
                                      );
                                    }
                                    return (
                                      <p key={lIdx} style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }}>
                                        {renderTextWithBold(line.trim())}
                                      </p>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      );
                    } else {
                      const lines = getOrderedLines(t(blog.section5Body!));

                      return (
                        <>
                          {lines.map((line, idx) => {
                            const isBullet = line.trim().startsWith('- ');
                            if (isBullet) {
                              return (
                                <div
                                  key={idx}
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
                                  {renderTextWithBold(line.replace(/^-\s*/, '').trim())}
                                </div>
                              );
                            }
                            return (
                              <p key={idx} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '15px' }}>
                                {renderTextWithBold(line.trim())}
                              </p>
                            );
                          })}
                        </>
                      );
                    }
                  })()}
                </div>
              )}

              {/* Secondary Images Gallery */}
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
                      <div
                        style={{
                          position: 'relative',
                          height: '350px',
                          borderRadius: '15px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <Image
                          src={blog.secondaryImage1}
                          alt={blog.secondaryImage1Alt ? t(blog.secondaryImage1Alt) : `${t(blog.title)} - Coral Boats Mallorca`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    {blog.secondaryImage2 && (
                      <div
                        style={{
                          position: 'relative',
                          height: '350px',
                          borderRadius: '15px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <Image
                          src={blog.secondaryImage2}
                          alt={blog.secondaryImage2Alt ? t(blog.secondaryImage2Alt) : `${t(blog.title)} - Vista de Mallorca`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Section 6 */}
              {blog.section6Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section6Title)}
                  </h2>
                  {(() => {
                    // Check if there are subsections for section6
                    const subsections = [
                      { subtitle: blog.section6sub1Subtitle, body: blog.section6sub1Body },
                      { subtitle: blog.section6sub2Subtitle, body: blog.section6sub2Body },
                      { subtitle: blog.section6sub3Subtitle, body: blog.section6sub3Body },
                      { subtitle: blog.section6sub4Subtitle, body: blog.section6sub4Body },
                    ].filter(section => section.subtitle && section.body);

                    const hasSubsections = subsections.length > 0;

                    if (hasSubsections) {
                      return (
                        <>
                          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
                            {renderTextWithBold(t(blog.section6Body!))}
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {subsections.map((section, idx) => {
                              const subsectionContent = t(section.body!);
                              const { paragraphs, bullets } = processMarkdown(subsectionContent);

                              return (
                                <div
                                  key={idx}
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
                                      {idx + 1}
                                    </span>
                                    {renderTextWithBold(t(section.subtitle!))}
                                  </h3>

                                  {paragraphs.map((para, pIdx) => (
                                    <p key={`para-${pIdx}`} style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: bullets.length > 0 ? '15px' : '0' }}>
                                      {renderTextWithBold(para)}
                                    </p>
                                  ))}

                                  {bullets.length > 0 && (
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                      {bullets.map((bullet, bIdx) => (
                                        <li
                                          key={bIdx}
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
                                          {renderTextWithBold(bullet)}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      );
                    } else {
                      const section6Content = t(blog.section6Body!);
                      const { paragraphs, bullets } = processMarkdown(section6Content);

                      return (
                        <>
                          {paragraphs.map((para, idx) => (
                            <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : idx < paragraphs.length - 1 ? '15px' : '0' }}>
                              {renderTextWithBold(para)}
                            </p>
                          ))}

                          {bullets.length > 0 && (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  style={{
                                    fontSize: '1.05rem',
                                    color: '#475569',
                                    lineHeight: '1.8',
                                    marginBottom: bIdx < bullets.length - 1 ? '12px' : '0',
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
                                  {renderTextWithBold(bullet)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      );
                    }
                  })()}
                </div>
              )}

              {/* Section 7 */}
              {blog.section7Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section7Title)}
                  </h2>
                  {(() => {
                    // Check if there are subsections for section7
                    const subsections = [
                      { subtitle: blog.section7sub1Subtitle, body: blog.section7sub1Body },
                      { subtitle: blog.section7sub2Subtitle, body: blog.section7sub2Body },
                      { subtitle: blog.section7sub3Subtitle, body: blog.section7sub3Body },
                    ].filter(section => section.subtitle && section.body);

                    const hasSubsections = subsections.length > 0;

                    if (hasSubsections) {
                      return (
                        <>
                          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
                            {renderTextWithBold(t(blog.section7Body!))}
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {subsections.map((section, idx) => {
                              const subsectionContent = t(section.body!);
                              const { paragraphs, bullets } = processMarkdown(subsectionContent);

                              return (
                                <div
                                  key={idx}
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
                                      {idx + 1}
                                    </span>
                                    {renderTextWithBold(t(section.subtitle!))}
                                  </h3>

                                  {paragraphs.map((para, pIdx) => (
                                    <p key={`para-${pIdx}`} style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: bullets.length > 0 ? '15px' : '0' }}>
                                      {renderTextWithBold(para)}
                                    </p>
                                  ))}

                                  {bullets.length > 0 && (
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                      {bullets.map((bullet, bIdx) => (
                                        <li
                                          key={bIdx}
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
                                          {renderTextWithBold(bullet)}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      );
                    } else {
                      const section7Content = t(blog.section7Body!);
                      const { paragraphs, bullets } = processMarkdown(section7Content);

                      return (
                        <>
                          {paragraphs.map((para, idx) => (
                            <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : idx < paragraphs.length - 1 ? '15px' : '0' }}>
                              {renderTextWithBold(para)}
                            </p>
                          ))}

                          {bullets.length > 0 && (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  style={{
                                    fontSize: '1.05rem',
                                    color: '#475569',
                                    lineHeight: '1.8',
                                    marginBottom: bIdx < bullets.length - 1 ? '12px' : '0',
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
                                  {renderTextWithBold(bullet)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      );
                    }
                  })()}
                </div>
              )}

              {/* Section 8 */}
              {blog.section8Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section8Title)}
                  </h2>
                  {(() => {
                    const section8Content = t(blog.section8Body!);
                    const { paragraphs, bullets } = processMarkdown(section8Content);

                    return (
                      <>
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : idx < paragraphs.length - 1 ? '15px' : '0' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '1.8',
                                  marginBottom: bIdx < bullets.length - 1 ? '12px' : '0',
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

              {/* Section 9 */}
              {blog.section9Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section9Title)}
                  </h2>
                  {(() => {
                    const section9Content = t(blog.section9Body!);
                    const { paragraphs, bullets } = processMarkdown(section9Content);

                    return (
                      <>
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : idx < paragraphs.length - 1 ? '15px' : '0' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '1.8',
                                  marginBottom: bIdx < bullets.length - 1 ? '12px' : '0',
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

              {/* Section 10 */}
              {blog.section10Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section10Title)}
                  </h2>
                  {(() => {
                    const section10Content = t(blog.section10Body!);
                    const { paragraphs, bullets } = processMarkdown(section10Content);

                    return (
                      <>
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : idx < paragraphs.length - 1 ? '15px' : '0' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '1.8',
                                  marginBottom: bIdx < bullets.length - 1 ? '12px' : '0',
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

              {/* Section 11 */}
              {blog.section11Title && (
                <div style={{ marginBottom: '50px' }}>
                  <h2
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '25px',
                    }}
                  >
                    {t(blog.section11Title)}
                  </h2>
                  {(() => {
                    const section11Content = t(blog.section11Body!);
                    const { paragraphs, bullets } = processMarkdown(section11Content);

                    return (
                      <>
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : idx < paragraphs.length - 1 ? '15px' : '0' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '1.8',
                                  marginBottom: bIdx < bullets.length - 1 ? '12px' : '0',
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

              {/* Section 12 - Conclusion */}
              {blog.section12Title && (
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
                    {t(blog.section12Title)}
                  </h2>
                  {(() => {
                    const section12Content = t(blog.section12Body!);
                    const { paragraphs, bullets } = processMarkdown(section12Content);

                    return (
                      <>
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : idx < paragraphs.length - 1 ? '15px' : '0' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '1.8',
                                  marginBottom: bIdx < bullets.length - 1 ? '12px' : '0',
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
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .magazine-feature-card:hover {
          border-color: #0891b2;
          box-shadow: 0 8px 25px rgba(8, 145, 178, 0.15);
          transform: translateY(-2px);
        }
        .benefit-card:hover {
          border-color: #0891b2;
          box-shadow: 0 8px 30px rgba(8, 145, 178, 0.2);
          transform: translateY(-3px);
        }
      `}</style>
    </article>
  );
};

export default MagazineLayout;
