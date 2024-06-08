import React, { useState } from 'react';

const StarRating = ({ totalStars = 5, rating = 0 }) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setCurrentRating(index);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={index}
            className={`star ${starIndex <= (hoverRating || currentRating) ? 'filled' : ''}`}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};


const ProductCardTemplate = ({ cardData }) => {
  return (
    <div>
      {cardData.map((data, index) => (
        <div key={index}>
          <img src={data.cardImg} alt={data.productName} />
          <p>{data.productName}</p>
          <p>{data.productPrice}</p>
          <div>
            <StarRating rating={data.rating} />
            <p><span>{cardData.city}</span><span>{cardData.country}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardTemplate;
