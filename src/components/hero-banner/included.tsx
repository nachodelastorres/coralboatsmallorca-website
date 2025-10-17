'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const IncludedAccordion = () => {
  const { t } = useTranslation('common');

  const items = [
    { label: t('includes.items.0.label'), image: 'paseo2.webp' },
    { label: t('includes.items.1.label'), image: 'faro2.webp' },
    { label: t('includes.items.2.label'), image: 'salto_proa2.webp' },
    { label: t('includes.items.3.label'), image: 'snorkel.webp' },
    { label: t('includes.items.4.label'), image: 'paddle.webp' },
    { label: t('includes.items.5.label'), image: 'comida23.webp' },
    { label: t('includes.items.6.label'), image: 'brindis_de32.webp' },
    { label: t('includes.items.7.label'), image: 'cunill2.webp' },
  ];
  {/* Preload hidden images */}
<div style={{ display: 'none' }}>
  {items.map((item) => (
    <Image
      key={item.image}
      src={`/assets/img/galeria_tour/${item.image}`}
      alt={item.label}
      width={10}
      height={10}
      priority={false} // no bloquea LCP
    />
  ))}
</div>


  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="included" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-2" style={{ color: '#045454' }}>
          {t('includes.title')}
        </h2>

        <p className="text-center text-muted mb-5" style={{ fontSize: '0.95rem' }}>
          {t('includes.subtitle')}
        </p>

   {/* VERSIÓN MÓVIL */}
          <div className="d-block d-md-none mt-4">
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.4), rgba(255,255,255,0.5)), url(/assets/img/galeria_tour/${items[activeIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                padding: '2rem 1.5rem',
                minHeight: '360px',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <ul className="list-group list-group-flush bg-transparent">
                {items.map((item, index) => {
                  const isActive = index === activeIndex;
                
                  return (
                    <li
                      key={index}
                      className="list-group-item bg-transparent"
                      style={{
                        cursor: 'pointer',
                        border: 'none',
                        padding: '0.75rem 1rem',
                        marginBottom: '8px',
                        borderRadius: '8px',
                        backgroundColor: isActive
                          ? 'rgba(0, 0, 0, 0.55)'
                          : 'rgba(0, 0, 0, 0.25)',
                        // color: isActive ? '#ffffff' : '#eaeaea',
                        color: isActive ? '#000' : '#222',
                        fontWeight: isActive ? 700 : 500,
                        transition: 'all 0.3s ease',
                        boxShadow: isActive
                          ? '0 4px 12px rgba(0, 0, 0, 0.4)' // 🌟 sombra visible
                          : 'none',
                      }}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                          e.currentTarget.style.color = '#ffffff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
                          e.currentTarget.style.color = '#eaeaea';
                        }
                      }}
                    >
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>


        {/* VERSIÓN ESCRITORIO */}
        <div className="row justify-content-center align-items-center d-none d-md-flex">
          {/* Lista */}
          <div className="col-md-6 d-flex justify-content-center">
            <ul className="list-group list-group-flush w-100" style={{ maxWidth: '520px' }}>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center"
                  style={{
                    cursor: 'pointer',
                    backgroundColor: index === activeIndex ? '#E6F5EE' : 'transparent',
                    border: 'none',
                    padding: '1rem 1.25rem',
                    fontWeight: 500,
                    color: index === activeIndex ? '#2B2D42' : '#444',
                    transition: 'background-color 0.3s ease',
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      marginRight: '12px',
                      backgroundColor: index === activeIndex ? '#2B2D42' : '#ccc',
                      borderRadius: '2px',
                      flexShrink: 0,
                    }}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Imagen */}
          <div className="col-md-6 d-flex align-items-center justify-content-center position-relative">
            <div
              className="fade-in"
              key={items[activeIndex].image}
              style={{
                width: '100%',
                maxWidth: '500px',
                position: 'relative',
              }}
            >
              <Image
                src={`/assets/img/galeria_tour/${items[activeIndex].image}`}
                alt={items[activeIndex].label}
                width={400}
                height={600}
                className="img-fluid rounded shadow"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  maxHeight: '500px',
                  height: 'auto',
                  borderRadius: '12px',
                  transition: 'opacity 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos adicionales */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .img-fluid {
            max-height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default IncludedAccordion;
