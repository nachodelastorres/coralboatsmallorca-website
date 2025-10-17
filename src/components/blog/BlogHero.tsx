'use client';

const BlogHero = () => {
  return (
    <section className="premium-tour-hero" style={{ minHeight: '60vh' }}>
      <div className="premium-tour-hero__background">
        <img
          src="/assets/img/premium/gallery_new/sunset.webp"
          alt="Coral Boats Blog - Boat Tours in Mallorca"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="premium-tour-hero__overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="premium-tour-hero__content">
              <div className="hero-badge">
                <i className="fa-solid fa-book-open"></i>
                <span>Coral Boats Blog</span>
              </div>

              <h1 className="hero-title">
                Your Guide to Boat Tours in Mallorca
              </h1>

              <p className="hero-subtitle">
                Discover insider tips, local secrets, and everything you need to know about boat tours in Alcudia Bay.
                From hidden coves to the best snorkeling spots, we share our knowledge to make your Mallorca boat tour unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
