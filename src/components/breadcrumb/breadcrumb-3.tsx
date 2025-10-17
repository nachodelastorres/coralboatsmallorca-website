'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
// import { useTranslation } from 'react-i18next';

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
}

const Breadcrumb3 = ({ title, subtitle }: BreadcrumbProps) => {
  const { getPath } = useLocale();
  // const { t } = useTranslation('common'); 
  return (
    <div
      className="it-breadcrumb-area it-breadcrumb-bg-3"
      style={{
        backgroundImage: `url('/assets/img/galeria_tour/tourGallery/sea-sand-beach.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#e6f5ee', // color neutro acorde a la paleta
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="it-breadcrumb-content">
              <div className="it-breadcrumb-title-box">
                <h3 className="it-breadcrumb-title-3">
                  {/* ✅ Asegúrate de que title se muestra correctamente */}
                  {title.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
              </div>
              {/* ✅ Si tienes un subtítulo */}
              {subtitle && (
                <div className="it-breadcrumb-list-wrap text-center">
                  <div className="it-breadcrumb-list-content">
                    <span>
                      <Link href={getPath('/')}>{subtitle}</Link>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb3;