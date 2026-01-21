/**
 * GalleryHeroSSR - Server Component for SEO
 *
 * Renders H1, badge, and subtitle server-side.
 *
 * NO 'use client' directive - this is a Server Component
 */

export interface GalleryHeroTexts {
  badge: string;
  title: string;
  subtitle: string;
}

interface GalleryHeroSSRProps {
  texts: GalleryHeroTexts;
}

const GalleryHeroSSR = ({ texts }: GalleryHeroSSRProps) => {
  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/gallery_new/amigos-excursion-barco-bahia-alcudia.webp"
          alt="Coral Boats Mallorca Photo Gallery"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-camera"></i>
                <span>{texts.badge}</span>
              </div>

              {/* H1 - Critical for SEO - Server Rendered */}
              <h1 className="hero-title">
                {texts.title}
              </h1>

              <p className="hero-subtitle">
                {texts.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeroSSR;
