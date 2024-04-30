import React from 'react';

const CategoryHome = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
    // Add more categories as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
    {categories.map(category => (
      <div key={category.id} className=" w-full rounded overflow-hidden shadow-lg mx-auto">
        <img className="w-full" src={category.image} alt={category.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{category.name}</div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default CategoryHome;
