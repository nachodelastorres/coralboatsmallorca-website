interface CategoryHeroSSRProps {
  texts: {
    badge: string;
    title: string;
    subtitle: string;
  };
  breadcrumbs: {
    home: string;
    blog: string;
    category: string;
    blogHref: string;
    homeHref: string;
  };
  icon: string;
}

const CategoryHeroSSR = ({ texts, breadcrumbs, icon }: CategoryHeroSSRProps) => {
  return (
    <section className="premium-tour-hero" style={{ minHeight: '55vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/gallery_new/puesta-sol-mediterranea-crucero-sunset-magic-mallorca.webp"
          alt={texts.title}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="premium-tour-hero__content">
              {/* Breadcrumb */}
              <nav
                aria-label="breadcrumb"
                style={{ marginBottom: '20px' }}
              >
                <ol
                  style={{
                    display: 'flex',
                    gap: '8px',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '0.9rem',
                    color: '#cbd5e1',
                  }}
                >
                  <li>
                    <a href={breadcrumbs.homeHref} style={{ color: '#e0f2fe', textDecoration: 'none' }}>
                      {breadcrumbs.home}
                    </a>
                  </li>
                  <li style={{ color: '#94a3b8' }}>/</li>
                  <li>
                    <a href={breadcrumbs.blogHref} style={{ color: '#e0f2fe', textDecoration: 'none' }}>
                      {breadcrumbs.blog}
                    </a>
                  </li>
                  <li style={{ color: '#94a3b8' }}>/</li>
                  <li style={{ color: '#ffffff', fontWeight: '600' }}>
                    {breadcrumbs.category}
                  </li>
                </ol>
              </nav>

              <div className="hero-badge">
                <i className={`fa-solid ${icon}`}></i>
                <span>{texts.badge}</span>
              </div>

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

export default CategoryHeroSSR;
