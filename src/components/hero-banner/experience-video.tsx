'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/hooks/useLocale';

const ExperienceVideoBanner = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <div className="experience-video-banner position-relative">
      {/* ✅ Vídeo de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="video-bg"
        poster="/images/poster-coralboats.jpg"
        title="Vídeo de la experiencia Coral Boats en Mallorca"
      >
        <source src="/assets/img/galeria_tour/Clip2editado2.mp4" type="video/mp4" />
        Tu navegador no soporta vídeo HTML5.
      </video>

      {/* ✅ Capa oscura para legibilidad */}
      <div className="overlay-dark"></div>

      {/* ✅ Contenido encima del vídeo */}
      <div className="container h-100 position-relative z-index-2">
        <div className="row justify-content-center align-items-center h-100 text-center">
          <div className="col-lg-10 col-md-11">
            <h2 className="text-white mb-4">
                {t('experience.title')}</h2>
            <p className="lead text-white mb-4">
              {t('experience.description')}
            </p>
            <Link href={getPath('/boat-tours-alcudia')} className="it-btn-primary">
              {t('book_now')}
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Estilos in-line + mobile friendly */}
      <style jsx>{`
        .experience-video-banner {
          position: relative;
          height: 100vh;
          max-height: 900px;
          overflow: hidden;
        }

        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .overlay-dark {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .z-index-2 {
          z-index: 2;
        }

        @media (max-width: 768px) {
          .experience-video-banner {
            height: 70vh;
          }

          h2 {
            font-size: 1.8rem;
          }

          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceVideoBanner;
