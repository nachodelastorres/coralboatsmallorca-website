import Image from 'next/image';
import { tourPackagesData } from '@/data/tour-packages-data';
import TourItemOne from './tour-item/tour-item-one';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

import shapeImg2 from '@/assets/img/home-1/featured/shape/logo transparente sobre claro.png';
import shapeImg3 from '@/assets/img/home-1/featured/shape/logo transparente sobre claro - copia.png';

import { FiMap, FiCalendar, FiMail } from 'react-icons/fi';



const TourOne = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  // ✅ Traducimos y prevenimos valores undefined con el operador ?? ''
  const translatedTours = tourPackagesData().map((tour) => ({
    ...tour,
    title: t(tour.title ?? ''), // ✅ Si undefined, muestra una cadena vacía
    title2: t(tour.title2 ?? ''),
    address: t(tour.address ?? ''),
    description: t(tour.description ?? ''),
    btnText: t(tour.btnText ?? ''),
  }));

const IntroBlock = () => {
  const { t } = useTranslation('common');
  const { getPath } = useLocale();

  return (
    <section
      className="it-tour-intro-wrapper"
      style={{
        backgroundImage: "url('/assets/img/home-1/about/img/aucanada-faro.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        margin: '0 calc(-50vw + 50%)', // para ocupar ancho completo
        position: 'relative',
      }}
    >
      {/* Capa translúcida encima */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: '80px',
          paddingBottom: '60px',
        }}
      >
 {/* Botón de título */}
<div className="text-center mb-4">
  <div className="d-flex justify-content-center">
    <Link
      href={getPath('/boat-tours-alcudia')}
      // className="btn btn-primary btn-lg px-5 py-3"
      className="it-btn-testtour"
      style={{
        fontSize: '1.2rem',
        fontWeight: 600,
        // backgroundColor: '#045454',
        // borderColor: '#045454',
        // borderRadius: '12px',
        // color: '#fff',
        textTransform: 'uppercase',
      }}
    >
      {t('intro_banner.title')}
    </Link>
  </div>

  <p
    className="mt-3"
    style={{
      fontSize: '1.1rem',
      color: '#000',
      fontWeight: 500,
    }}
  >
    {t('intro_banner.description')}
  </p>
</div>


        {/* Steps en formato de cartas */}
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4">
            <div className="step-card text-center">
              <FiMap size={52} color="#045454" />
              <h4>{t('intro_banner.step1_title')}</h4>
              <p>{t('intro_banner.step1_subtext')}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="step-card text-center">
              <FiCalendar size={52} color="#045454" />
              <h4>{t('intro_banner.step2_title')}</h4>
              <p>{t('intro_banner.step2_subtext')}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="step-card text-center">
              <FiMail size={52} color="#045454" />
              <h4>{t('intro_banner.step3_title')}</h4>
              <p>{t('intro_banner.step3_subtext')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos JSX */}
      <style jsx>{`
        .step-card {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 30px 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          background-color: #f5fcfd; /* muy claro de tu gama */
        }

        .step-card h4 {
          font-size: 1.2rem;
          margin-top: 15px;
          margin-bottom: 10px;
          color: #045454;
          font-weight: 600;
        }
              
        .step-card p {
          font-size: 1rem;
          color: #045454;
          font-weight: 400;
          margin: 0;
        }

      `}</style>
    </section>
    
  
  );
  
};

   
  

  return (
   <>


    <div className="it-featured-area pt-30 pb-120 p-relative">
      <div className="it-featured-shape-box">
        <div className="it-featured-shape-2">
          <Image
            src={shapeImg2}
            alt="Shape Img"
            width={138}
            height={123}
            style={{ height: 'auto' }}
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="it-featured-title-box mb-50 text-center">
                {/* ✅ Traducción del título */}
                <h3 className="it-section-title">{t('our_excursions')}</h3>
                  {/* <div className="it-tour-global-badge mt-3">
                    🔥 {t('limited_seats')}
                  </div> */}
              </div>
            </div>
          </div>
          <div className="it-featured-item-wrap">
            <div className="row">
              {translatedTours.map((tour) => (
                <div
                  key={tour.slug}
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <TourItemOne tour={tour} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <IntroBlock />
<div
  style={{
    width: '100%',
    height: '80px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)',
  }}
></div>
    </>
    
  );
};

export default TourOne;
