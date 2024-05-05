import { Link, useNavigate } from 'react-router-dom';
import logoSvg from '../../assets/trust_maket.svg';
import Button from '../Button';
import { FiSmartphone, FiShoppingCart, FiHelpCircle } from 'react-icons/fi';
import { useState } from 'react';
import Dropdown from '../Dropdown';
import { Navigate } from 'react-router-dom';


const HomePageNav = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

const navigate = useNavigate();

//handle login navigation
const handleLoginNav = () =>{
  navigate('dashboard')
}
// Sample function to update the cart item count
const updateCartItemCount = (count) => {
  setCartItemCount(count);

  const help = ""
};
  return (
    <header>
         <nav className="w-full px-10 mx-0 flex justify-between items-center h-[50px] bg-greenDark">
      <div className='flex items-center'>
        <FiSmartphone size={32} color="white" />
        <h2 className='text-white text-bold ml-5'>Download our Mobile App</h2>
      </div>

      <div className='flex item-center'>
        <input type='search' className='rounded-3xl shadow-sm focus:outline-none focus:border border-2 focus:ring-indigo-500 focus:border-greenLight sm:text-sm transition duration-300 hover:border-greenLight w-[350px] px-2 h-[30px]' 
      placeholder='Search products, categories and brands' />
      </div>


      <div className="flex items-center text-white">

        {/* help dropdown */}
        <div className='flex mr-5 item-center justify-between'>
        <FiHelpCircle className="mx-1 text-white my-auto" />
        <Dropdown title="Help" className='text-white text-bold ml-5'>
        <Link to="/" className="text-greenDark hover:text-red text-xl">
            Home
          </Link>
          <Link to="/about" className="text-greenDark hover:text-red text-xl">
            Shop/Sell
          </Link>
          <Link to="/contact" className="text-greenDark hover:text-red text-xl">
            Contact
          </Link>
        </Dropdown>
        </div>

        <FiShoppingCart size={24} color="white" />
          {cartItemCount && (
            <span className="font-md rounded-full pl-5 py-1 text-xs absolute top-0 right-0 -mt-1 -mr-1">
              {cartItemCount}
            </span>
          )}

      </div>
    </nav>
      <nav className=" flex justify-between px-10 items-center bg-white py-4 h-[80px] my-0 ">
        {/* Logo */}
        <div className="flex items-center">
    {/* Logo */}
    <Link to="/">
      <img src={logoSvg} alt="Logo" className="h-[8em] w-[16em]" />
    </Link>
    </div>
        {/* Navigation Links */}
        <div className="flex space-x-0 pr-20 pl-10 justify-around flex-grow">
          <Link to="/" className="text-greenDark hover:text-red text-xl">
            Home
          </Link>
          <Link to="/about" className="text-greenDark hover:text-red text-xl">
            Shop/Sell
          </Link>
          <Link to="/contact" className="text-greenDark hover:text-red text-xl">
            Contact
          </Link>
          <Link to="/contact" className="text-greenDark hover:text-red text-xl">
            About Us
          </Link>
          <Link to="/contact" className="text-greenDark hover:text-red text-xl">
            Blog
          </Link>
        </div>
        {/* Register/Login Button */}
        <div>
          <Link to= 'register' className="text-xl text-greenDark hover:text-red">
            Register <span className='text-2xl'>/</span>
          </Link>
            <Button onClick={handleLoginNav}primary login  >
                Login
            </Button>
        </div>
    </nav>
    </header>
  );
};

export default HomePageNav;
