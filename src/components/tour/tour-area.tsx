'use client';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import TourItemOne from './tour-item/tour-item-one';
import TourOne from './tour-one';
import { tourPackagesData } from '@/data/tour-packages-data';
import { useTranslation } from 'react-i18next';

const TourList = () => {
  const { t } = useTranslation('common'); // ✅ Importamos el contexto de traducción
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // ✅ Traducimos directamente los datos usando `map`
  const translatedTours = tourPackagesData().map((tour) => ({
    ...tour,
    title: t(tour.title), // 🔥 Traducción directa
    title2: t(tour.title2),
    address: t(tour.address),
    description: t(tour.description ?? 'Descripción no disponible'),
    btnText: t(tour.btnText),
  }));

  // ✅ Calculamos qué tours mostrar en la página actual
  const offset = currentPage * itemsPerPage;
  const currentTours = translatedTours.slice(offset, offset + itemsPerPage);

  // ✅ Calculamos el número total de páginas
  const pageCount = Math.ceil(translatedTours.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="it-tour-area it-tour-style it-featured pt-120 pb-90 p-relative">
      <div className="container">
        <div className="it-featured-item-wrap">
          <div className="row">
            {currentTours.map((tour) => (
              <div key={tour.slug} className="col-xl-4 col-lg-6 col-md-6">
                <TourItemOne tour={tour} />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-pagination">
              <ReactPaginate
                previousLabel={<i className="fa-solid fa-arrow-left-long"></i>}
                nextLabel={<i className="fa-solid fa-arrow-right-long"></i>}
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                activeClassName="active"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
