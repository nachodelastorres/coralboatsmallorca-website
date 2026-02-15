interface FAQItem {
  question: string;
  answer: string;
}

interface CategoryFAQSSRProps {
  faqs: FAQItem[];
  sectionTitle: string;
}

const CategoryFAQSSR = ({ faqs, sectionTitle }: CategoryFAQSSRProps) => {
  return (
    <section style={{ padding: '60px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: '#e0f2fe',
                  color: '#0891b2',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                <i className="fa-solid fa-circle-question" style={{ marginRight: '8px' }}></i>
                FAQ
              </span>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                }}
              >
                {sectionTitle}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <summary
                    style={{
                      padding: '20px 25px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      listStyle: 'none',
                    }}
                  >
                    <i
                      className="fa-solid fa-plus"
                      style={{
                        color: '#0891b2',
                        fontSize: '0.85rem',
                        flexShrink: 0,
                      }}
                    ></i>
                    {faq.question}
                  </summary>
                  <div
                    style={{
                      padding: '0 25px 20px 25px',
                      marginLeft: '32px',
                      fontSize: '0.95rem',
                      color: '#475569',
                      lineHeight: '1.7',
                    }}
                  >
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFAQSSR;
