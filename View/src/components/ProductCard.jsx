import React from 'react';

const ProductCard = ({ categories, columns = 3, gap = 4, imageWidth = 150, imageHeight = 150, children, ...rest }) => {
  const gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;

  return (
    <div className={`grid grid-cols-${columns} gap-${gap}`} style={{ gridTemplateColumns }} {...rest}>
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={category.imageUrl} alt={category.name} className={`w-${imageWidth} h-${imageHeight} object-cover rounded-full`} />
          <p className="mt-2 text-center">{category.name}</p>
        </div>
      ))}
      {children}
    </div>
  );
}

export default ProductCard;
