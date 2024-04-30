import React from 'react';

const ProductCard = ({ image, name, price, rating, description, isBuyerPage }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        {isBuyerPage && (
          <>
            <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
            <p className="text-gray-700 text-base mb-2">Rating: {rating}/5</p>
            <p className="text-gray-700 text-base mb-2">Description: {description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
