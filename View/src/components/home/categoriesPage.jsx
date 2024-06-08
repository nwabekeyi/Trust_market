import NavWrapper from '../users/layouts/navWrapper';
import { Link } from 'react-router-dom';
import autombiles from '../../assets/autombiles.jpeg';
import babyAccessories from '../../assets/baby-accesories.jpeg';
import fashion from '../../assets/fashions-and-apparel.jpeg';
import furniture from '../../assets/furnitures.jpeg';
import office from '../../assets/office-supplies.jpeg';
import homeAppliances from '../../assets/home-appliances.png';
import laptops from '../../assets/phones-and-laptops.jpeg';
import jewelries from '../../assets/jewelries-and-watches.jpeg';
import kitchen from '../../assets/kitchen-utensils.jpeg';
import sports from '../../assets/sports-and-fitness.jpeg';
import travels from '../../assets/travels.jpeg';
import games from '../../assets/video-games.jpeg';

const Component = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: homeAppliances },
    { id: 2, name: 'Phones and Laptops', image: laptops },
    { id: 3, name: 'Fashions and Apparels', image: fashion },
    { id: 4, name: 'Kitchen Utensils', image: kitchen },
    { id: 5, name: 'Office Supplies', image: office },
    { id: 6, name: 'Jewelries and Watches', image: jewelries },
    { id: 7, name: 'Furniture', image: furniture },
    { id: 8, name: 'Baby Accessories', image: babyAccessories },
    { id: 9, name: 'Video Games and Accessories', image: games },
    { id: 10, name: 'Sports and Fitness', image: sports },
    { id: 11, name: 'Automobiles', image: autombiles },
    { id: 12, name: 'Travels and Luggage', image: travels },
    { id: 13, name: 'Books', image: 'book image URL' },
    { id: 14, name: 'Beauty and Personal Care', image: 'image URL' },
    { id: 15, name: 'Home Improvement', image: 'image URL' },
    { id: 16, name: 'Health and Household', image: 'image URL' },
    { id: 17, name: 'Grocery and Gourmet Food', image: 'image URL' },
    { id: 18, name: 'Tools and Home Improvement', image: 'image URL' },
    { id: 19, name: 'Movies and TV', image: 'image URL' },
    { id: 20, name: 'Pet Supplies', image: 'image URL' },
    { id: 21, name: 'Arts, Crafts and Sewing', image: 'image URL' },
    { id: 22, name: 'Industrial and Scientific', image: 'image URL' },
    { id: 23, name: 'Software', image: 'image URL' },
    { id: 24, name: 'Music', image: 'image URL' },
    { id: 25, name: 'Kindle Store', image: 'image URL' },
    { id: 26, name: 'Beauty and Personal Care', image: 'image URL' },
    { id: 27, name: 'Home Improvement', image: 'image URL' },
    { id: 28, name: 'Health and Household', image: 'image URL' },
    { id: 29, name: 'Grocery and Gourmet Food', image: 'image URL' },
    { id: 30, name: 'Tools and Home Improvement', image: 'image URL' },
    // Add more categories as needed
  ];

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
        {categories.map(category => (
          <div key={category.id} className="w-full h-[auto] rounded overflow-hidden shadow-md mx-auto cursor-pointer transform hover:scale-110 transition-all duration-500">
            <img className="w-full h-[70%] lg:h-[80%]" src={category.image} alt={category.name} />
            <div className="pt-2 lg:pt-3 lg:py-4 lg:pb-0">
              <h2 className="text-[8px] lg:text-[1em] text-center text-greyLight">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryPage = NavWrapper(Component)

export default CategoryPage;
