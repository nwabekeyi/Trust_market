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







const CategoryHome = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: homeAppliances },
    { id: 2, name: 'Phones and Laptops', image: laptops },
    { id: 3, name: 'Fasions and Apparels', image: fashion },
    { id: 1, name: 'Kithen Utensils', image: kitchen },
    { id: 2, name: 'Office supplies', image: office },
    { id: 3, name: 'Jewelries and watches', image: jewelries },
    { id: 1, name: 'Furniture', image: furniture },
    { id: 2, name: 'Baby accesories', image: babyAccessories },
    { id: 3, name: 'Video games and accessories', image: games },
    { id: 1, name: 'Sports and fitness', image: sports },
    { id: 2, name: 'Automobiles', image: autombiles },
    { id: 3, name: 'Travels and luggage', image: travels },
    // Add more categories as needed
  ];

  return (
  <div >
   <h1 className='text-greenDark text-5xl font-bold text-center mt-5'>Featured Categories</h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 pb-2 ">
     {categories.map(category => (
      <div key={category.id} className=" w-full h-[300px] rounded overflow-hidden shadow-md mx-auto cursor-pointer transform hover:scale-110 transition-all duration-500">
        <img className="w-full h-[80%]" src={category.image} alt={category.name} />
        <div className="pt-6 py-4 pb-0">
          <h2 className="font-bold text-md text-center text-greenDark">{category.name}</h2>
        </div>
      </div>
    ))}
    </div>
    <h2 className='greenDark text-center font-semibold text-sm hover:text-red cursor-pointer mb-8'>Browse more categories</h2>
  </div>
  );
};

export default CategoryHome;
