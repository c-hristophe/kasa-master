import React from "react";
import '../styles/rating.css'
import redstar from "../images/redStar.svg";
import greystar from "../images/greyStar.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">

      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt="rating Red"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt="rating Grey"
          />
        )
      )}
    </div>
  );
};

export default Rating;