import "../styles/App.scss";

interface StarRatingProps {
  value?: number;
  onUpdate?: (rating: number) => Promise<void>;
}

const StarRating = ({ value = 0, onUpdate }: StarRatingProps) => {
  const handleStarClick = (star: number) => {
    if (onUpdate === undefined) return;
    onUpdate(star);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= value ? "star highlighted" : "star"}
          onClick={() => handleStarClick(star)}
        >
          {/* этот код это окрашенная звезда */}
          &#9733;{" "}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
