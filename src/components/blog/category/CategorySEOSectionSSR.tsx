interface CategorySEOSectionSSRProps {
  texts: {
    title: string;
    intro: string;
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    ctaTitle: string;
    ctaText: string;
  };
  icon: string;
}

const CategorySEOSectionSSR = ({ texts, icon }: CategorySEOSectionSSRProps) => {
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
                {texts.title}
              </h2>
              <p
                style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: texts.intro }}
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
                    <i className={`fa-solid ${icon}`} style={{ marginRight: '10px' }}></i>
                    {texts.card1Title}
                  </h3>
                  <p
                    style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}
                    dangerouslySetInnerHTML={{ __html: texts.card1Text }}
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
                    <i className="fa-solid fa-compass" style={{ marginRight: '10px' }}></i>
                    {texts.card2Title}
                  </h3>
                  <p
                    style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}
                    dangerouslySetInnerHTML={{ __html: texts.card2Text }}
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
                {texts.ctaTitle}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: '1.7',
                }}
                dangerouslySetInnerHTML={{ __html: texts.ctaText }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySEOSectionSSR;
