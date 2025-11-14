'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';
import { IBlogDT } from '@/types/blog-d-t';

interface StorytellingLayoutProps {
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

// Helper function to render text with bold markers
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} style={{ fontWeight: '700', color: '#0e7490' }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const StorytellingLayout = ({ blog }: StorytellingLayoutProps) => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <article style={{ background: '#ffffff' }}>
      {/* Immersive Hero with Parallax-Style Image */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '700px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Image
            src={blog.detailsImg!}
            alt={t(blog.title)}
            fill
            style={{ objectFit: 'cover', transform: 'scale(1.05)' }}
            priority
          />
        </div>
        {/* Gradient overlay with artistic vignette */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%)',
          }}
        />

        {/* Centered Content */}
        <div
          className="container"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              {/* Badge */}
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  marginBottom: '30px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                {t(blog.badgeTitle!)}
              </div>

              {/* Title with dramatic styling */}
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '30px',
                  lineHeight: '1.1',
                  textShadow: '0 8px 40px rgba(0,0,0,0.7)',
                  letterSpacing: '-1px',
                }}
              >
                {t(blog.title)}
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '1.35rem',
                  color: '#f0f9ff',
                  maxWidth: '900px',
                  margin: '0 auto 40px',
                  lineHeight: '1.8',
                  textShadow: '0 2px 15px rgba(0,0,0,0.5)',
                  fontWeight: '300',
                }}
              >
                {t(blog.description!)}
              </p>

              {/* Metadata */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '30px',
                  flexWrap: 'wrap',
                  color: '#e0f2fe',
                  fontSize: '1rem',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-calendar-days"></i>
                  {t(blog.publishedDate)}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-clock"></i>
                  6 min read
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-glass-citrus"></i>
                  Coral Boats Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
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

      {/* Main Content with Narrative Flow */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">

              {/* Section 1 - Opening Story */}
              <div style={{ marginBottom: '70px' }}>
                <h2
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#0e7490',
                    marginBottom: '30px',
                    lineHeight: '1.2',
                  }}
                >
                  {renderTextWithBold(t(blog.section1Title!))}
                </h2>
                <div style={{ fontSize: '1.2rem', color: '#334155', lineHeight: '2', fontWeight: '300' }}>
                  {renderTextWithBold(t(blog.section1Body!))}
                </div>
              </div>

              {/* Decorative Divider */}
              <div
                style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #0891b2 0%, #06b6d4 100%)',
                  margin: '60px auto',
                  borderRadius: '2px',
                }}
              />

              {/* Section 2 - Feature Grid with Icons */}
              <div style={{ marginBottom: '70px' }}>
                <h2
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '20px',
                    textAlign: 'center',
                  }}
                >
                  {t(blog.section2Title!)}
                </h2>

                {(() => {
                  const section2Content = t(blog.section2Body!);
                  const { paragraphs, bullets } = processMarkdown(section2Content);

                  return (
                    <div style={{ marginTop: '50px' }}>
                      {paragraphs.map((para, idx) => (
                        <p key={`para-${idx}`} style={{ fontSize: '1.15rem', color: '#475569', lineHeight: '1.9', marginBottom: '40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                          {renderTextWithBold(para)}
                        </p>
                      ))}

                      {bullets.length > 0 && (
                        <div className="row g-4" style={{ marginTop: '40px' }}>
                          {bullets.map((bullet, idx) => (
                            <div key={idx} className="col-md-6">
                              <div
                                style={{
                                  padding: '30px',
                                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                                  borderRadius: '20px',
                                  border: '2px solid #e0f2fe',
                                  boxShadow: '0 10px 30px rgba(8, 145, 178, 0.1)',
                                  transition: 'all 0.3s ease',
                                  minHeight: '140px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  textAlign: 'center',
                                }}
                                className="storytelling-feature-card"
                              >
                                <div
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    boxShadow: '0 6px 20px rgba(8, 145, 178, 0.4)',
                                  }}
                                >
                                  <i className="fa-solid fa-glass-cheers" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                                </div>
                                <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.8', margin: 0 }}>
                                  {renderTextWithBold(bullet)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Immersive Quote/CTA */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0e7490 0%, #0891b2 100%)',
                  padding: '60px 50px',
                  borderRadius: '25px',
                  textAlign: 'center',
                  marginBottom: '70px',
                  boxShadow: '0 20px 60px rgba(8, 145, 178, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative elements */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <i className="fa-solid fa-quote-left" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}></i>
                  <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#ffffff', marginBottom: '20px', lineHeight: '1.4' }}>
                    Ready to Taste the Mediterranean?
                  </h3>
                  <p style={{ fontSize: '1.2rem', color: '#e0f2fe', marginBottom: '35px', maxWidth: '700px', margin: '0 auto 35px' }}>
                    Join us for an unforgettable boat tour and experience our legendary homemade sangria
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
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    }}
                    className="cta-button"
                  >
                    <span>Explore Our Tours</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* Section 3 - Story Cards */}
              <div style={{ marginBottom: '70px' }}>
                <h2
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '25px',
                    textAlign: 'center',
                  }}
                >
                  {t(blog.section3Title!)}
                </h2>
                <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: '1.9', marginBottom: '50px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
                  {renderTextWithBold(t(blog.section3Body!))}
                </p>

                {/* Story cards with alternating layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  {[
                    { subtitle: blog.section3sub1Subtitle, body: blog.section3sub1Body, icon: 'fa-water' },
                    { subtitle: blog.section3sub2Subtitle, body: blog.section3sub2Body, icon: 'fa-sun' },
                    { subtitle: blog.section3sub3Subtitle, body: blog.section3sub3Body, icon: 'fa-users' },
                  ].map((section, idx) => {
                    const subsectionContent = t(section.body!);
                    const { paragraphs, bullets } = processMarkdown(subsectionContent);

                    return (
                      <div
                        key={idx}
                        style={{
                          padding: '40px',
                          background: idx % 2 === 0 ? 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' : '#ffffff',
                          borderRadius: '25px',
                          border: '2px solid #bae6fd',
                          boxShadow: '0 10px 40px rgba(8, 145, 178, 0.08)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                          <div
                            style={{
                              width: '70px',
                              height: '70px',
                              borderRadius: '20px',
                              background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              boxShadow: '0 8px 25px rgba(8, 145, 178, 0.3)',
                            }}
                          >
                            <i className={`fa-solid ${section.icon}`} style={{ color: '#ffffff', fontSize: '2rem' }}></i>
                          </div>
                          <h3
                            style={{
                              fontSize: '1.8rem',
                              fontWeight: '700',
                              color: '#0e7490',
                              lineHeight: '1.3',
                              margin: '10px 0 0 0',
                            }}
                          >
                            {renderTextWithBold(t(section.subtitle!))}
                          </h3>
                        </div>

                        {paragraphs.map((para, pIdx) => (
                          <p key={`para-${pIdx}`} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '20px' : '0' }}>
                            {renderTextWithBold(para)}
                          </p>
                        ))}

                        {bullets.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0' }}>
                            {bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                style={{
                                  fontSize: '1.05rem',
                                  color: '#475569',
                                  lineHeight: '1.8',
                                  marginBottom: '12px',
                                  paddingLeft: '35px',
                                  position: 'relative',
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '6px',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <i className="fa-solid fa-check" style={{ color: '#ffffff', fontSize: '0.7rem' }}></i>
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

              {/* Section 4 - List Feature */}
              {blog.section4Title && (
                <div style={{ marginBottom: '70px' }}>
                  <h2
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      marginBottom: '25px',
                      textAlign: 'center',
                    }}
                  >
                    {t(blog.section4Title)}
                  </h2>
                  {(() => {
                    const section4Content = t(blog.section4Body!);
                    const { paragraphs, bullets } = processMarkdown(section4Content);

                    return (
                      <div
                        style={{
                          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                          padding: '50px',
                          borderRadius: '25px',
                          border: '2px solid #e2e8f0',
                        }}
                      >
                        {paragraphs.map((para, idx) => (
                          <p key={`para-${idx}`} style={{ fontSize: '1.15rem', color: '#334155', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '30px' : '0' }}>
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
                                  marginBottom: '15px',
                                  paddingLeft: '40px',
                                  position: 'relative',
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '5px',
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '8px',
                                    background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <i className="fa-solid fa-star" style={{ color: '#ffffff', fontSize: '0.8rem' }}></i>
                                </span>
                                {renderTextWithBold(bullet)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Section 5 - Conclusion with CTA */}
              {blog.section5Title && (
                <div
                  style={{
                    padding: '60px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    borderRadius: '25px',
                    color: '#ffffff',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative background pattern */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #ffffff 35px, #ffffff 70px)' }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: '#ffffff',
                        marginBottom: '30px',
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
                            <p key={`para-${idx}`} style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.9', marginBottom: bullets.length > 0 ? '30px' : idx < paragraphs.length - 1 ? '20px' : '0', maxWidth: '900px', margin: '0 auto 20px' }}>
                              {renderTextWithBold(para)}
                            </p>
                          ))}

                          {bullets.length > 0 && (
                            <div style={{ marginTop: '40px', textAlign: 'left', maxWidth: '700px', margin: '40px auto 0' }}>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {bullets.map((bullet, bIdx) => (
                                  <li
                                    key={bIdx}
                                    style={{
                                      fontSize: '1.05rem',
                                      color: '#e2e8f0',
                                      lineHeight: '1.8',
                                      marginBottom: bIdx < bullets.length - 1 ? '15px' : '0',
                                      paddingLeft: '40px',
                                      position: 'relative',
                                    }}
                                  >
                                    <span
                                      style={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '5px',
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: '#0891b2',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <i className="fa-solid fa-check" style={{ color: '#ffffff', fontSize: '0.8rem' }}></i>
                                    </span>
                                    {renderTextWithBold(bullet)}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        .storytelling-feature-card:hover {
          border-color: #0891b2;
          box-shadow: 0 15px 40px rgba(8, 145, 178, 0.25);
          transform: translateY(-5px);
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }
      `}</style>
    </article>
  );
};

export default StorytellingLayout;
