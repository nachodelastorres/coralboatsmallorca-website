'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { IBlogDT } from '@/types/blog-d-t';

interface MagazineLayoutProps {
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
    } else if (!line.startsWith('**¿Qué significa esto para ti?**') && !line.startsWith('**What does this mean for you?**')) {
      paragraphs.push(line.trim());
    }
  });

  return { paragraphs, bullets };
};

// Helper function to render text with bold markers
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} style={{ fontWeight: '700', color: '#1e293b' }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const MagazineLayout = ({ blog }: MagazineLayoutProps) => {
  const { t } = useTranslation('common');

  return (
    <article style={{ background: '#ffffff' }}>
      {/* Hero Section with Overlay Text */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '500px' }}>
        <Image
          src={blog.detailsImg!}
          alt={t(blog.title)}
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
                  5 min read
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
                  const section2Content = t(blog.section2Body!);
                  const { paragraphs, bullets } = processMarkdown(section2Content);

                  return (
                    <>
                      {paragraphs.map((para, idx) => (
                        <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
                          {renderTextWithBold(para)}
                        </p>
                      ))}

                      {bullets.length > 0 && (
                        <div className="row g-4">
                          {bullets.map((bullet, idx) => (
                            <div key={idx} className="col-md-6">
                              <div
                                style={{
                                  display: 'flex',
                                  gap: '15px',
                                  padding: '25px',
                                  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                                  borderRadius: '15px',
                                  border: '2px solid #e0f2fe',
                                  boxShadow: '0 4px 15px rgba(8, 145, 178, 0.08)',
                                  transition: 'all 0.3s ease',
                                  minHeight: '120px',
                                }}
                                className="benefit-card"
                              >
                                <div
                                  style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: '0 4px 12px rgba(8, 145, 178, 0.3)',
                                  }}
                                >
                                  <i className="fa-solid fa-check" style={{ color: '#ffffff', fontSize: '1.2rem' }}></i>
                                </div>
                                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', margin: 0 }}>
                                  {renderTextWithBold(bullet)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
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
                  Ready to Experience It Yourself?
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#e0f2fe', marginBottom: '25px' }}>
                  Book your unforgettable boat tour in Alcudia today
                </p>
                <Link
                  href="/boat-tours-alcudia"
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
                  <span>View Our Tours</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

              {/* Section 3 - Feature Cards */}
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
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: '30px' }}>
                  {renderTextWithBold(t(blog.section3Body!))}
                </p>

                {/* Sub-sections as cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  {[
                    { subtitle: blog.section3sub1Subtitle, body: blog.section3sub1Body },
                    { subtitle: blog.section3sub2Subtitle, body: blog.section3sub2Body },
                    { subtitle: blog.section3sub3Subtitle, body: blog.section3sub3Body },
                  ].map((section, idx) => {
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
                    const section4Content = t(blog.section4Body!);
                    const { paragraphs, bullets } = processMarkdown(section4Content);

                    return (
                      <>
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : '0' }}>
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
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Section 5 - Conclusion */}
              {blog.section5Title && (
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
                    {t(blog.section5Title)}
                  </h2>
                  {(() => {
                    const section5Content = t(blog.section5Body!);
                    const { paragraphs, bullets } = processMarkdown(section5Content);

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
