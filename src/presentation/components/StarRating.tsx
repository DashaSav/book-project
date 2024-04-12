import React, { useState } from "react";
import "../styles/App.scss";

interface StarRatingProps {
  initialValue?: number;
}

const StarRating = ({ initialValue = 0 }: StarRatingProps) => {
  const [rating, setRating] = useState(initialValue);

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star highlighted" : "star"}
          onClick={() => handleStarClick(star)}
        >
          &#9733;{" "}
        </span>
      ))}
      <p>{rating} звезд(ы)</p>
    </div>
  );
};

export default StarRating;
