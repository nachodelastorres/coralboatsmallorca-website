import Image from 'next/image';
import { DislikeSvg, LikeSvg } from '@/components/svg';
import TourReviewForm from '@/components/form/tour-review-form';

import avatarImg1 from '@/assets/img/inner-page/discover/client-1-1.jpg';
import avatarImg2 from '@/assets/img/inner-page/discover/client-1-2.jpg';
import avatarImg3 from '@/assets/img/inner-page/discover/client-1-3.jpg';

const clientData = [
  {
    id: 1,
    avatar: avatarImg1,
    author: 'Jenny Wilson',
    publishedDate: 'March 8, 2020',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus
                    in metus. Sem et tortor consequat id porta. Et malesuada fames ac turpis egestas`,
  },
  {
    id: 2,
    avatar: avatarImg2,
    author: 'Katy Perry',
    publishedDate: 'January 21, 2022',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus
                    in metus. Sem et tortor consequat id porta. Et malesuada fames ac turpis egestas`,
  },
  {
    id: 3,
    avatar: avatarImg3,
    author: 'Idhika Paul',
    publishedDate: 'November 25, 2023',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus
                    in metus. Sem et tortor consequat id porta. Et malesuada fames ac turpis egestas`,
  },
];

const ReviewBox = () => {
  return (
    <>
      <h3 className="it-discover-title mb-35">
        {clientData.length} thoughts on “Discovery Island Kayak Tour”
      </h3>
      <div className="it-discover-client-wrap">
        {clientData.map((client) => (
          <div key={client.id} className="it-discover-client-item">
            <div className="it-discover-client-top mb-15 d-flex">
              <div className="it-discover-client-thumb">
                <Image
                  src={client.avatar}
                  alt={client.author}
                  width={80}
                  height={80}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-discover-client-content">
                <div className="it-discover-client-info mb-15 d-flex justify-content-between">
                  <div className="it-discover-client-left d-flex align-items-center">
                    <h3 className="it-discover-client-title">
                      {client.author}
                    </h3>
                    <span className="it-discover-client-meta">
                      {client.publishedDate}
                    </span>
                  </div>
                  <div className="it-discover-client-right">
                    <div className="it-discover-client-notification d-flex align-items-center">
                      <span>Was this review helpful?</span>
                      <div className="it-discover-client-support d-flex align-items-center">
                        <div className="it-discover-client-support-icon">
                          <span>
                            <LikeSvg />
                          </span>
                          <p>7</p>
                        </div>
                        <div className="it-discover-client-support-icon">
                          <span>
                            <DislikeSvg />
                          </span>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="it-discover-client-review d-flex align-items-center">
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">Quality</h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">
                      Location
                    </h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">
                      Amenities
                    </h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">Price</h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>{client.description}</p>
          </div>
        ))}
      </div>
      <h3 className="it-discover-title mb-25">Add a Comment</h3>
      <span>Your email address will not be published.</span>
      <div className="it-discover-reviwe-box mb-30">
        <div className="row align-items-center">
          <div className="col-xl-8">
            <div className="it-discover-client-review d-flex align-items-center">
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Quality</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Location</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Amenities</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Services</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Price</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="it-discover-rating-box text-center">
              <span>5.00</span>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
        <div className="it-discover-review-form mt-30">
          <TourReviewForm />
        </div>
      </div>
    </>
  );
};
export default ReviewBox;
