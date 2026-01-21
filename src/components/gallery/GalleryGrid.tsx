'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const GalleryGrid = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { file: 'faro-alcanada-excursion-barco-alcudia-mallorca.webp', titleKey: 'premium.gallery.image_alcanada_lighthouse' },
    { file: 'coral-boats-navegando-isla-alcanada-alcudia.webp', titleKey: 'premium.gallery.image_boat_alcanada' },
    { file: 'turistas-paseo-barco-aguas-cristalinas-mallorca.webp', titleKey: 'premium.gallery.image_boat_fun' },
    { file: 'interior-barco-coral-boats-puerto-alcudia.webp', titleKey: 'premium.gallery.image_boat_interior' },
    { file: 'excursion-matutina-snorkel-paddle-surf-alcudia.webp', titleKey: 'premium.gallery.image_card_morning' },
    { file: 'charter-privado-lujo-grupos-alcudia-mallorca.webp', titleKey: 'premium.gallery.image_card_private' },
    { file: 'crucero-atardecer-sunset-magic-alcudia.webp', titleKey: 'premium.gallery.image_card_sunset' },
    { file: 'barco-clasico-madera-coral-boats-mallorca.webp', titleKey: 'premium.gallery.image_classic_boat' },
    { file: 'vistas-costa-norte-mallorca-excursion-barco.webp', titleKey: 'premium.gallery.image_coastline_views' },
    { file: 'cala-secreta-accesible-barco-alcudia-mallorca.webp', titleKey: 'premium.gallery.image_cove' },
    { file: 'tripulacion-profesional-sirviendo-paseo-barco-alcudia.webp', titleKey: 'premium.gallery.image_crew_service' },
    { file: 'amigos-excursion-barco-bahia-alcudia.webp', titleKey: 'premium.gallery.image_friends_enjoy' },
    { file: 'amigos-recuerdos-paseo-barco-calas-mallorca.webp', titleKey: 'premium.gallery.image_friends_fun' },
    { file: 'celebracion-grupo-charter-privado-alcudia-mallorca.webp', titleKey: 'premium.gallery.image_friends_group' },
    { file: 'hora-dorada-mediterraneo-crucero-mallorca.webp', titleKey: 'premium.gallery.image_golden_hour' },
    { file: 'calas-escondidas-norte-mallorca-excursion-barco.webp', titleKey: 'premium.gallery.image_hidden_coves' },
    { file: 'excursion-barco-isla-alcanada-puerto-alcudia.webp', titleKey: 'premium.gallery.image_island_boat' },
    { file: 'ninos-actividades-acuaticas-excursion-familiar-mallorca.webp', titleKey: 'premium.gallery.image_kids_fun' },
    { file: 'paisaje-costero-mallorca-barco-excursiones-alcudia.webp', titleKey: 'premium.gallery.image_mallorca_views' },
    { file: 'tapas-mallorquinas-tradicionales-bordo-paseo-barco.webp', titleKey: 'premium.gallery.image_mallorcan_tapas' },
    { file: 'relax-colchoneta-flotante-aguas-alcudia.webp', titleKey: 'premium.gallery.image_matress' },
    { file: 'comida-mediterranea-excursion-barco-mallorca.webp', titleKey: 'premium.gallery.image_meal' },
    { file: 'paddle-surf-aguas-turquesas-excursion-alcudia.webp', titleKey: 'premium.gallery.image_paddel_board' },
    { file: 'vista-panoramica-playa-muro-bahia-alcudia.webp', titleKey: 'premium.gallery.image_panoramic_beach' },
    { file: 'pareja-crucero-romantico-atardecer-mallorca.webp', titleKey: 'premium.gallery.image_partners' },
    { file: 'tripulacion-experta-coral-boats-alcudia.webp', titleKey: 'premium.gallery.image_professional_crew' },
    { file: 'sangria-espanola-tapas-excursion-barco-mallorca.webp', titleKey: 'premium.gallery.image_sangria_tapas' },
    { file: 'atardecer-espectacular-mar-bahia-alcudia.webp', titleKey: 'premium.gallery.image_sunset' },
    { file: 'puesta-sol-mediterranea-crucero-sunset-magic-mallorca.webp', titleKey: 'premium.gallery.image_sunset_image' },
    { file: 'luz-dorada-atardecer-aguas-alcudia-mallorca.webp', titleKey: 'premium.gallery.image_sunset_light' },
    { file: 'puerto-alcudia-atardecer-barcos-excursiones.webp', titleKey: 'premium.gallery.image_sunset_port' },
    { file: 'pasajeros-excursion-barco-coral-boats-mallorca.webp', titleKey: 'premium.gallery.image_tour' },
    { file: 'actividades-acuaticas-snorkel-paddle-surf-alcudia.webp', titleKey: 'premium.gallery.image_water_fun' },
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
                      background: 'rgba(0,0,0,0.3)', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center', 
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <i className="fa-solid fa-expand" style={{ fontSize: '2rem', color: '#ffffff' }}></i> 
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
                      <li>
                        <Link href={getPath('/alcudia-morning-boat-tour')} style={{ color: '#0891b2', textDecoration: 'none', fontWeight: '600' }}>
                          {t('premium.gallery.tour_morning').replace(/<[^>]*>/g, '')}
                        </Link>
                      </li>
                      <li>
                        <Link href={getPath('/alcudia-sunset-boat-tour')} style={{ color: '#0891b2', textDecoration: 'none', fontWeight: '600' }}>
                          {t('premium.gallery.tour_sunset').replace(/<[^>]*>/g, '')}
                        </Link>
                      </li>
                      <li>
                        <Link href={getPath('/alcudia-private-boat-charter')} style={{ color: '#0891b2', textDecoration: 'none', fontWeight: '600' }}>
                          {t('premium.gallery.tour_private').replace(/<[^>]*>/g, '')}
                        </Link>
                      </li>
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

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <Link href={getPath('/tours')} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 30px',
                    background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(8, 145, 178, 0.3)',
                    transition: 'all 0.3s ease',
                  }}>
                    <i className="fa-solid fa-ship"></i>
                    <span>{t('premium.gallery.view_tours_button', 'View Our Tours')}</span>
                  </Link>
                  <Link href={getPath('/contact')} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 30px',
                    background: '#ffffff',
                    color: '#0891b2',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    border: '2px solid #0891b2',
                    transition: 'all 0.3s ease',
                  }}>
                    <i className="fa-solid fa-envelope"></i>
                    <span>{t('premium.gallery.contact_button', 'Contact Us')}</span>
                  </Link>
                </div>

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
                background: 'rgba(0,0,0,0.5)',
                padding: '10px 25px',
                borderRadius: '25px',
                backdropFilter: 'blur(10px)',
              }}
            >
 <p style={{ fontSize: '1rem', margin: 0, fontWeight: '500' }}> 
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
