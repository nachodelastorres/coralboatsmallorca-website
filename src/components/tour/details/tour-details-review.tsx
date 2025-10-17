import ProgressItem from '@/components/progress/progress-item';

interface ProgressItem {
  title: string;
  value: string;
}

interface IProps {
  rating: string;
  progresses: ProgressItem[];
}

const TourDetailsReview = ({ rating, progresses }: IProps) => {
  return (
    <div className="it-discover-review-wrap d-flex align-items-center">
      <div className="it-discover-review-box">
        <div className="it-discover-review-content">
          <h3 className="it-discover-review-number">{rating}</h3>
          <h3 className="it-discover-review-comment">Excellent</h3>
          <span className="it-discover-review-total">
            Based On 1582 Reviews
          </span>
        </div>
      </div>
      <div className="it-discover-progress">
        {progresses.map((progress, index) => (
          <div key={index} className="it-progress-bar__item">
            <label>{progress.title}</label>
            <ProgressItem value={progress.value} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TourDetailsReview;
