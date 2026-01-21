import { Dictionary, getNestedValue } from '@/lib/dictionaries';

interface BlogIndexSEOSectionSSRProps {
  dict: Dictionary;
}

const BlogIndexSEOSectionSSR = ({ dict }: BlogIndexSEOSectionSSRProps) => {
  const t = (key: string) => getNestedValue(dict as Record<string, unknown>, key);

  return (
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
                {t('blog_page.seo.title')}
              </h2>
              <p
                style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: t('blog_page.seo.intro') }}
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
                    {t('blog_page.seo.card1_title')}
                  </h3>
                  <p
                    style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}
                    dangerouslySetInnerHTML={{ __html: t('blog_page.seo.card1_text') }}
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
                    {t('blog_page.seo.card2_title')}
                  </h3>
                  <p
                    style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}
                    dangerouslySetInnerHTML={{ __html: t('blog_page.seo.card2_text') }}
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
                {t('blog_page.seo.cta_title')}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                }}
                dangerouslySetInnerHTML={{ __html: t('blog_page.seo.cta_text') }}
              />
              <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
                {t('blog_page.seo.footer_info')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndexSEOSectionSSR;
