'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const GalleryGrid = () => {
  const { t } = useTranslation('common');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { file: 'alcanada_lighthouse.webp', titleKey: 'premium.gallery.image_alcanada_lighthouse' },
    { file: 'boat_alcanada.webp', titleKey: 'premium.gallery.image_boat_alcanada' },
    { file: 'boat_fun.webp', titleKey: 'premium.gallery.image_boat_fun' },
    { file: 'boat_interior.webp', titleKey: 'premium.gallery.image_boat_interior' },
    { file: 'card_morning.webp', titleKey: 'premium.gallery.image_card_morning' },
    { file: 'card_private.webp', titleKey: 'premium.gallery.image_card_private' },
    { file: 'card_sunset.webp', titleKey: 'premium.gallery.image_card_sunset' },
    { file: 'classic_boat.webp', titleKey: 'premium.gallery.image_classic_boat' },
    { file: 'coastline_views.webp', titleKey: 'premium.gallery.image_coastline_views' },
    { file: 'cove.webp', titleKey: 'premium.gallery.image_cove' },
    { file: 'crew_service.webp', titleKey: 'premium.gallery.image_crew_service' },
    { file: 'friends_enjoy.webp', titleKey: 'premium.gallery.image_friends_enjoy' },
    { file: 'friends_fun.webp', titleKey: 'premium.gallery.image_friends_fun' },
    { file: 'friends_group.webp', titleKey: 'premium.gallery.image_friends_group' },
    { file: 'golden_hour.webp', titleKey: 'premium.gallery.image_golden_hour' },
    { file: 'hidden_coves.webp', titleKey: 'premium.gallery.image_hidden_coves' },
    { file: 'island_boat.webp', titleKey: 'premium.gallery.image_island_boat' },
    { file: 'kids_fun.webp', titleKey: 'premium.gallery.image_kids_fun' },
    { file: 'mallorca_views.webp', titleKey: 'premium.gallery.image_mallorca_views' },
    { file: 'mallorcan_tapas.webp', titleKey: 'premium.gallery.image_mallorcan_tapas' },
    { file: 'matress.webp', titleKey: 'premium.gallery.image_matress' },
    { file: 'meal.webp', titleKey: 'premium.gallery.image_meal' },
    { file: 'paddel_board.webp', titleKey: 'premium.gallery.image_paddel_board' },
    { file: 'panoramic_beach.webp', titleKey: 'premium.gallery.image_panoramic_beach' },
    { file: 'partners.webp', titleKey: 'premium.gallery.image_partners' },
    { file: 'professional_crew.webp', titleKey: 'premium.gallery.image_professional_crew' },
    { file: 'sangria_tapas.webp', titleKey: 'premium.gallery.image_sangria_tapas' },
    { file: 'sunset.webp', titleKey: 'premium.gallery.image_sunset' },
    { file: 'sunset_image.webp', titleKey: 'premium.gallery.image_sunset_image' },
    { file: 'sunset_light.webp', titleKey: 'premium.gallery.image_sunset_light' },
    { file: 'sunset_port.webp', titleKey: 'premium.gallery.image_sunset_port' },
    { file: 'tour.webp', titleKey: 'premium.gallery.image_tour' },
    { file: 'water_fun.webp', titleKey: 'premium.gallery.image_water_fun' },
  ];

  const getImageTitle = (index: number) => {
    return t(images[index].titleKey);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="premium-section-header text-center" style={{ marginBottom: '60px' }}>
                <span className="premium-section-header__label">{t('premium.gallery.section_label')}</span>
                <h2 className="premium-section-header__title">
                  {t('premium.gallery.section_title')}
                </h2>
                <p className="premium-section-header__description">
                  {t('premium.gallery.section_description')}
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {images.map((image, index) => (
              <div key={image.file} className="col-lg-4 col-md-6">
                <div
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                  style={{
                    position: 'relative',
                    height: '350px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Image
                    src={`/assets/img/premium/gallery_new/${image.file}`}
                    alt={t(image.titleKey)}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                  <div
                    className="gallery-item__overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '20px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: '#ffdd57', textShadow: '0 2px 10px rgba(0,0,0,1)' }}>
                        {t(image.titleKey)}
                      </h4>
                      <p style={{ fontSize: '0.9rem', margin: '5px 0 0', fontWeight: '500', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,1)' }}>
                        <i className="fa-solid fa-expand" style={{ marginRight: '8px' }}></i>
                        {t('premium.gallery.click_to_view')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                  {t('premium.gallery.seo_title')}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: t('premium.gallery.seo_intro') }} />
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '15px', height: '100%' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                      <i className="fa-solid fa-ship" style={{ marginRight: '10px' }}></i>
                      {t('premium.gallery.tours_title')}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: t('premium.gallery.tours_description') }} />
                    <ul style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', paddingLeft: '20px' }}>
                      <li dangerouslySetInnerHTML={{ __html: t('premium.gallery.tour_morning') }} />
                      <li dangerouslySetInnerHTML={{ __html: t('premium.gallery.tour_sunset') }} />
                      <li dangerouslySetInnerHTML={{ __html: t('premium.gallery.tour_private') }} />
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '15px', height: '100%' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                      <i className="fa-solid fa-location-dot" style={{ marginRight: '10px' }}></i>
                      {t('premium.gallery.why_alcudia_title')}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: t('premium.gallery.why_alcudia_description') }} />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px', padding: '30px', background: '#fff7ed', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                  <i className="fa-solid fa-umbrella-beach" style={{ marginRight: '10px' }}></i>
                  {t('premium.gallery.beaches_title')}
                </h3>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: t('premium.gallery.beaches_p1') }} />
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: t('premium.gallery.beaches_p2') }} />
              </div>

              <div style={{ marginTop: '40px', padding: '30px', background: '#e0f2fe', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0891b2', marginBottom: '15px' }}>
                  {t('premium.gallery.book_title')}
                </h3>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: t('premium.gallery.book_description') }} />
                <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
                  {t('premium.gallery.book_footer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#ffffff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              zIndex: 10001,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <i className="fa-solid fa-times"></i>
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              left: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#ffffff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              zIndex: 10001,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#ffffff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              zIndex: 10001,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '95vw',
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 80px)' }}>
              <Image
                src={`/assets/img/premium/gallery_new/${images[selectedImage].file}`}
                alt={t(images[selectedImage].titleKey)}
                fill
                style={{ objectFit: 'contain' }}
                sizes="95vw"
                priority
              />
            </div>
            <div
              style={{
                marginTop: '20px',
                color: '#ffffff',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                background: 'rgba(0,0,0,0.5)',
                padding: '15px 30px',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '5px' }}>
                {t(images[selectedImage].titleKey)}
              </h3>
              <p style={{ fontSize: '1rem', opacity: 1, fontWeight: '500' }}>
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15) !important;
        }
        .gallery-item:hover .gallery-item__overlay {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
};

export default GalleryGrid;
