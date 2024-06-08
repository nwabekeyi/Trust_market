import ProductCardTemplate from '../productCardTemplate';

const cardData = [
  {
    cardImg: 'https://via.placeholder.com/150',
    productName: 'Product 1',
    productPrice: '$100',
    rating: 4,
    city: 'New York',
    country: 'USA'
  },
  {
    cardImg: 'https://via.placeholder.com/150',
    productName: 'Product 2',
    productPrice: '$150',
    rating: 5,
    city: 'Los Angeles',
    country: 'USA'
  }
];

const BestSelling = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductCardTemplate cardData={cardData} />
    </div>
  );
};

export default BestSelling;
