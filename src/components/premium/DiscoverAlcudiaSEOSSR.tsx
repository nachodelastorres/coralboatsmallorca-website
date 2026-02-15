import Image from 'next/image';

export interface DiscoverAlcudiaSEOTexts {
  title: string;
  subtitle: string;
  introP1: string;
  introP2: string;
  beachesTitle: string;
  beachesP1: string;
  beachesP2: string;
  natureTitle: string;
  natureP1: string;
  natureP2: string;
  gastroTitle: string;
  gastroP1: string;
  gastroP2: string;
  stayTitle: string;
  stayP1: string;
  stayP2: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  ctaText: string;
  ctaButton: string;
  imgAltOldTown: string;
  imgAltPlayaMuro: string;
  imgAltFormentor: string;
  imgAltPuerto: string;
  imgCaptionOldTown: string;
  imgCaptionPlayaMuro: string;
  imgCaptionFormentor: string;
  imgCaptionPuerto: string;
}

interface DiscoverAlcudiaSEOSSRProps {
  texts: DiscoverAlcudiaSEOTexts;
}

const DiscoverAlcudiaSEOSSR = ({ texts }: DiscoverAlcudiaSEOSSRProps) => {
  return (
    <section className="discover-alcudia-seo" style={{ padding: '0 0 80px 0', background: '#ffffff' }}>
      {/* Hero banner with overlay */}
      <div
        style={{
          position: 'relative',
          height: '400px',
          marginBottom: '60px',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/assets/img/premium/gallery_new/panoramica-isla-alcanada-alcudia-mallorca-barcos.webp"
          alt="Panoramic view of Alcudia Bay and northern Mallorca coastline"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.7))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: '1.2',
              maxWidth: '800px',
            }}
          >
            {texts.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              lineHeight: '1.6',
            }}
          >
            {texts.subtitle}
          </p>
        </div>
      </div>

      <div className="container">
        {/* Intro paragraphs */}
        <div className="row justify-content-center" style={{ marginBottom: '50px' }}>
          <div className="col-lg-10">
            <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.8', marginBottom: '16px' }}>
              {texts.introP1}
            </p>
            <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.8' }}>
              {texts.introP2}
            </p>
          </div>
        </div>

        {/* Photo grid 2x2 */}
        <div className="row g-3" style={{ marginBottom: '60px' }}>
          {[
            {
              src: '/assets/img/premium/gallery_new/callejon-tipico-casco-historico-alcudia-mallorca.webp',
              alt: texts.imgAltOldTown,
              caption: texts.imgCaptionOldTown,
            },
            {
              src: '/assets/img/premium/gallery_new/playa-de-muro-alcudia-mallorca-mejor-zona-alojarse.webp',
              alt: texts.imgAltPlayaMuro,
              caption: texts.imgCaptionPlayaMuro,
            },
            {
              src: '/assets/img/premium/gallery_new/faro-de-cap-de-formentor-en-mallorca-al-atardecer.webp',
              alt: texts.imgAltFormentor,
              caption: texts.imgCaptionFormentor,
            },
            {
              src: '/assets/img/premium/gallery_new/puerto-alcudia-vista-aerea-barcos-mallorca.webp',
              alt: texts.imgAltPuerto,
              caption: texts.imgCaptionPuerto,
            },
          ].map((img, idx) => (
            <div key={idx} className="col-md-6">
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px 16px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}
                >
                  {img.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beaches & Nature - text left, image right */}
        <div className="row align-items-center" style={{ marginBottom: '60px' }}>
          <div className="col-lg-6" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
              {texts.beachesTitle}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '14px' }}>
              {texts.beachesP1}
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8' }}>
              {texts.beachesP2}
            </p>
          </div>
          <div className="col-lg-6">
            <div style={{ position: 'relative', height: '340px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="/assets/img/premium/gallery_new/playa-del-coll-baix-mallorca-alcudia.webp"
                alt="Coll Baix beach - hidden paradise only accessible by boat in Alcudia Mallorca"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Nature & Excursions - image left, text right */}
        <div className="row align-items-center" style={{ marginBottom: '60px' }}>
          <div className="col-lg-6 order-lg-1 order-2" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
              {texts.natureTitle}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '14px' }}>
              {texts.natureP1}
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8' }}>
              {texts.natureP2}
            </p>
          </div>
          <div className="col-lg-6 order-lg-0 order-1" style={{ marginBottom: '30px' }}>
            <div style={{ position: 'relative', height: '340px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="/assets/img/premium/gallery_new/cap-farrutx-reserva-natural-llevant-parc-playa-ruta-barco-betlem.webp"
                alt="Cap de Formentor and Serra de Tramuntana UNESCO World Heritage landscape Mallorca"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="row"
          style={{
            marginBottom: '60px',
            background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
            borderRadius: '16px',
            padding: '40px 20px',
            marginLeft: 0,
            marginRight: 0,
          }}
        >
          {[
            { value: texts.stat1Value, label: texts.stat1Label, icon: 'fa-sun' },
            { value: texts.stat2Value, label: texts.stat2Label, icon: 'fa-umbrella-beach' },
            { value: texts.stat3Value, label: texts.stat3Label, icon: 'fa-car' },
          ].map((stat, idx) => (
            <div key={idx} className="col-md-4 text-center" style={{ padding: '10px 20px' }}>
              <i
                className={`fa-solid ${stat.icon}`}
                style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', marginBottom: '10px', display: 'block' }}
              />
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffffff', lineHeight: '1.2' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Gastronomy - text left, image right */}
        <div className="row align-items-center" style={{ marginBottom: '60px' }}>
          <div className="col-lg-6" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
              {texts.gastroTitle}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '14px' }}>
              {texts.gastroP1}
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8' }}>
              {texts.gastroP2}
            </p>
          </div>
          <div className="col-lg-6">
            <div style={{ position: 'relative', height: '340px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="/assets/img/premium/gallery_new/mercado-semanal-alcudia-murallas-medievales.webp"
                alt="Alcudia weekly market near medieval walls - local gastronomy and culture"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Accommodation - image left, text right */}
        <div className="row align-items-center" style={{ marginBottom: '60px' }}>
          <div className="col-lg-6 order-lg-1 order-2" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
              {texts.stayTitle}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '14px' }}>
              {texts.stayP1}
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8' }}>
              {texts.stayP2}
            </p>
          </div>
          <div className="col-lg-6 order-lg-0 order-1" style={{ marginBottom: '30px' }}>
            <div style={{ position: 'relative', height: '340px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="/assets/img/premium/gallery_new/paseo-maritimo-puerto-alcudia-palmeras.webp"
                alt="Puerto Alcudia seafront promenade with palm trees and restaurants"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="row"
          style={{
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '16px',
            padding: '50px 30px',
            textAlign: 'center',
            marginLeft: 0,
            marginRight: 0,
          }}
        >
          <div className="col-12">
            <p
              style={{
                fontSize: '1.2rem',
                color: '#334155',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto 24px',
              }}
            >
              {texts.ctaText}
            </p>
            <a
              href="#booking"
              className="FH-booking-link"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                color: '#ffffff',
                padding: '14px 36px',
                borderRadius: '30px',
                fontSize: '1.05rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(8, 145, 178, 0.3)',
              }}
            >
              {texts.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAlcudiaSEOSSR;
