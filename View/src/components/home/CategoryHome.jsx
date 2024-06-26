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
import { Link } from 'react-router-dom';







const CategoryHome = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: homeAppliances },
    { id: 2, name: 'Phones and Laptops', image: laptops },
    { id: 3, name: 'Fasions and Apparels', image: fashion },
    { id: 10, name: 'Kithen Utensils', image: kitchen },
    { id: 11, name: 'Office supplies', image: office },
    { id: 12, name: 'Jewelries and watches', image: jewelries },
    { id: 4, name: 'Furniture', image: furniture },
    { id: 5, name: 'Baby accesories', image: babyAccessories },
    { id: 6, name: 'Video games and accessories', image: games },
    { id: 7, name: 'Sports and fitness', image: sports },
    { id: 8, name: 'Automobiles', image: autombiles },
    { id: 9, name: 'Travels and luggage', image: travels },
    // Add more categories as needed
  ];

  return (
  <div >
   <h1 className='text-grey text-xs md:text-lg lg:text-2xl font-light text-center mt-5 mb-5 '>Featured Categories</h1>
   <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8  ">
     {categories.map(category => (
      <div key={category.id} className=" w-full h-[auto]  rounded overflow-hidden shadow-md mx-auto cursor-pointer transform hover:scale-110 transition-all duration-500">
        <img className="w-full h-[70%] lg:h-[80%]" src={category.image} alt={category.name} />
        <div className="pt-2  lg:pt-3 lg:py-4 lg:pb-0 ">
          <h2 className=" text-[8px] lg:text-[1em] text-center text-greyLight">{category.name}</h2>
        </div>
      </div>
    ))}
    </div>
    <Link to= "/categories" className='text-greylight flex justify-center text-[8px]  lg:text-sm hover:text-red cursor-pointer mt-2'>Browse more categories</Link>
  </div>
  );
};

export default CategoryHome;
