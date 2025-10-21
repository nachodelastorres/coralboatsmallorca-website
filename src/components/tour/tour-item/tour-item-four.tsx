import Image from 'next/image';
import Link from 'next/link';
import { ITourDT } from '@/types/tour-packages-d-t';
import { updatePrice } from '@/utils/helper';

interface TourItemProps {
  tour: ITourDT;
}

// Helper function to get the correct route for each tour
const getTourRoute = (slug: string): string => {
  const routeMap: { [key: string]: string } = {
    'morning-tour': '/alcudia-morning-boat-tour',
    'day-tour': '/alcudia-morning-boat-tour',
    'sunset-tour': '/alcudia-sunset-boat-tour',
  };
  return routeMap[slug] || `/alcudia-morning-boat-tour`;
};

const TourItemFour = ({ tour }: TourItemProps) => {
  const tourRoute = getTourRoute(tour.slug);

  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-4-thumb p-relative">
        <Image
          src={tour.image}
          alt={tour.title}
          width={370}
          height={250}
          style={{ height: 'auto' }}
        />
        <div className="it-featured-content">
          <div className="it-featured-meta mb-5">
            <a href="https://www.google.com/maps">
              <i className="fa-solid fa-location-dot"></i> {tour.address}
            </a>
          </div>
          <h3 className="it-featured-title">
            <Link href={tourRoute}>{tour.title}</Link>
          </h3>
          <div className="it-featured-review-box pb-25 mb-25 d-flex align-items-center justify-content-between">
            <div className="it-featured-price d-flex align-items-center">
              <i className="fa-regular fa-circle-dollar"></i>
              <p>
                From <span>${Math.round(updatePrice(tour)).toFixed(2)}</span>{' '}
                {tour.badgeTitle && <del>${tour.price.toFixed(2)}</del>}
              </p>
            </div>
            <div className="it-featured-review d-flex align-items-center">
              <i className="fa-solid fa-star"></i>
              <p>
                {/* <span>{tour.rating}</span> ({tour.review}k review) */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="it-featured-top z-index d-flex align-items-center">
        {tour.badgeTitle && (
          <div className="it-featured-offer">
            <span>{tour.badgeTitle} off</span>
          </div>
        )}
        {tour.isFeature && (
          <div className="it-featured-categories">
            <span>featured</span>
          </div>
        )}
      </div>
      <div className="it-featured-react-box z-index">
        <div className="it-featured-react">
          <button>
            <span>
              <i className="fa-light fa-heart"></i>
            </span>
          </button>
        </div>
        <div className="it-featured-react">
          <button>
            <span>
              <i className="fa-regular fa-camera"></i>
            </span>
          </button>
        </div>
        <div className="it-featured-react">
          <button>
            <span>
              <i className="fa-regular fa-video"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TourItemFour;
