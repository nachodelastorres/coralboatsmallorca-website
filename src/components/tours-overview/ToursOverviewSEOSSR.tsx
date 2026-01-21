/**
 * ToursOverviewSEOSSR - Server Component for SEO
 *
 * Renders SEO content with H2, H3, H4, paragraphs server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

export interface ToursOverviewSEOTexts {
  mainTitle: string;
  intro1: string;
  intro2: string;
  whyBookTitle: string;
  reason1Title: string;
  reason1Text: string;
  reason2Title: string;
  reason2Text: string;
  reason3Title: string;
  reason3Text: string;
  reason4Title: string;
  reason4Text: string;
  toursTitle: string;
  morningTitle: string;
  morningText1: string;
  morningText2: string;
  sunsetTitle: string;
  sunsetText1: string;
  sunsetText2: string;
  privateTitle: string;
  privateText1: string;
  privateText2: string;
  locationTitle: string;
  locationText1: string;
  locationText2: string;
  bookingTitle: string;
  bookingText: string;
  ctaMorning: string;
  ctaSunset: string;
  ctaPrivate: string;
}

interface ToursOverviewSEOSSRProps {
  texts: ToursOverviewSEOTexts;
}

const ToursOverviewSEOSSR = ({ texts }: ToursOverviewSEOSSRProps) => {
  return (
    <section style={{ background: '#ffffff', padding: '100px 0' }}>
      <div className="container">
        {/* Main SEO Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={{ marginBottom: '60px' }}>
              {/* H2 - Important for SEO - Server Rendered */}
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '25px', textAlign: 'center' }}>
                {texts.mainTitle}
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: texts.intro1 }} />
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: texts.intro2 }} />
            </div>

            {/* Why Choose Our Boat Tours */}
            <div style={{ marginBottom: '60px' }}>
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '30px' }}>
                {texts.whyBookTitle}
              </h3>
              <div className="row">
                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-star" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      {/* H4 - Server Rendered */}
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {texts.reason1Title}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: texts.reason1Text }} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-users" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {texts.reason2Title}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: texts.reason2Text }} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-water" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {texts.reason3Title}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: texts.reason3Text }} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6" style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ minWidth: '50px', height: '50px', background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-shield-alt" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                        {texts.reason4Title}
                      </h4>
                      <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: '1.7', margin: 0 }} dangerouslySetInnerHTML={{ __html: texts.reason4Text }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Tour Information */}
            <div style={{ marginBottom: '60px' }}>
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '30px' }}>
                {texts.toursTitle}
              </h3>

              {/* Morning Tour SEO */}
              <div style={{ marginBottom: '40px', padding: '30px', background: '#f0f9ff', borderRadius: '15px', borderLeft: '5px solid #0891b2' }}>
                {/* H4 - Server Rendered */}
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                  {texts.morningTitle}
                </h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: texts.morningText1 }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', margin: 0 }} dangerouslySetInnerHTML={{ __html: texts.morningText2 }} />
              </div>

              {/* Sunset Tour SEO */}
              <div style={{ marginBottom: '40px', padding: '30px', background: '#fef3f2', borderRadius: '15px', borderLeft: '5px solid #ec4899' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ec4899', marginBottom: '15px' }}>
                  {texts.sunsetTitle}
                </h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: texts.sunsetText1 }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', margin: 0 }} dangerouslySetInnerHTML={{ __html: texts.sunsetText2 }} />
              </div>

              {/* Private Charter SEO */}
              <div style={{ marginBottom: '40px', padding: '30px', background: '#faf5ff', borderRadius: '15px', borderLeft: '5px solid #8b5cf6' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#8b5cf6', marginBottom: '15px' }}>
                  {texts.privateTitle}
                </h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: texts.privateText1 }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.8', margin: 0 }} dangerouslySetInnerHTML={{ __html: texts.privateText2 }} />
              </div>
            </div>

            {/* Location SEO */}
            <div style={{ marginBottom: '60px' }}>
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '25px' }}>
                {texts.locationTitle}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: texts.locationText1 }} />
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: texts.locationText2 }} />
            </div>

            {/* Booking SEO */}
            <div style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
              {/* H3 - Important for SEO - Server Rendered */}
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                {texts.bookingTitle}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }} dangerouslySetInnerHTML={{ __html: texts.bookingText }} />
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#morning-tour" style={{
                  padding: '16px 35px',
                  background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <span>{texts.ctaMorning}</span>
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
                <a href="#sunset-tour" style={{
                  padding: '16px 35px',
                  background: 'linear-gradient(135deg, #ec4899, #db2777)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 20px rgba(236, 72, 153, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <span>{texts.ctaSunset}</span>
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
                <a href="#private-charter" style={{
                  padding: '16px 35px',
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <span>{texts.ctaPrivate}</span>
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursOverviewSEOSSR;
