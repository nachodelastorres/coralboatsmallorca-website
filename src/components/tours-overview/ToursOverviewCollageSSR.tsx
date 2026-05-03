/**
 * ToursOverviewCollageSSR - Server Component
 *
 * Visual breather between the SEO content block and the FAQs. Six curated
 * images tessellate perfectly on a 4-col grid (2 portraits 1×2 + 4 landscapes
 * 2×1 = 12 cells = 3 clean rows). Hover overlay reveals each image's caption.
 * Pure CSS hover (no React state) so it stays a Server Component.
 */

import Image from 'next/image';

type Tile = {
  src: string;
  alt: string;
  caption: string;
  span: 'portrait' | 'landscape';
  priority?: boolean;
};

export interface ToursOverviewCollageTexts {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  tiles: Tile[];
}

interface ToursOverviewCollageSSRProps {
  texts: ToursOverviewCollageTexts;
}

const ToursOverviewCollageSSR = ({ texts }: ToursOverviewCollageSSRProps) => {
  return (
    <section className="tours-overview-collage" style={{ padding: '80px 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="premium-section-header text-center" style={{ marginBottom: '50px' }}>
              <span className="premium-section-header__label">{texts.sectionLabel}</span>
              <h2 className="premium-section-header__title">{texts.sectionTitle}</h2>
              <p className="premium-section-header__description">{texts.sectionDescription}</p>
            </div>
          </div>
        </div>

        <div className="collage-grid-tours">
          {texts.tiles.map((tile, i) => (
            <div key={tile.src} className={`collage-tile-tours ${tile.span === 'portrait' ? 'span-portrait' : 'span-landscape'}`}>
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes={tile.span === 'portrait' ? '(max-width: 600px) 50vw, (max-width: 992px) 33vw, 25vw' : '(max-width: 600px) 100vw, (max-width: 992px) 67vw, 50vw'}
                style={{ objectFit: 'cover' }}
                priority={tile.priority}
              />
              <div className="collage-overlay">
                <p className="collage-caption">
                  <i className="fa-solid fa-location-dot" style={{ color: '#06b6d4', marginRight: '8px' }}></i>
                  {tile.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .collage-grid-tours {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          grid-auto-flow: dense;
          gap: 14px;
        }
        .collage-tile-tours {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .collage-tile-tours:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
        }
        .span-landscape { grid-column: span 2; grid-row: span 1; }
        .span-portrait  { grid-column: span 1; grid-row: span 2; }

        .collage-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 55%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 18px;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .collage-tile-tours:hover .collage-overlay { opacity: 1; }
        .collage-caption {
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 500;
          line-height: 1.45;
          margin: 0;
          text-shadow: 0 1px 3px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
        }

        @media (max-width: 992px) {
          .collage-grid-tours { grid-auto-rows: 170px; }
        }
        @media (max-width: 600px) {
          .collage-grid-tours {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 150px;
            gap: 10px;
          }
          /* On mobile show the caption permanently — touch UX */
          .collage-overlay { opacity: 1; padding: 14px; }
          .collage-caption { font-size: 0.78rem; }
        }
      `}</style>
    </section>
  );
};

export default ToursOverviewCollageSSR;
