import { Link, useNavigate } from 'react-router-dom';
import cart from '../../assets/cart.svg';
import Button from '../Button';
import { FiSmartphone, FiShoppingCart, FiHelpCircle } from 'react-icons/fi';
import { useState } from 'react';
import Dropdown from '../Dropdown';
import { Navigate } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";


const HomePageNav = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

const navigate = useNavigate();

// handle login navigation
const handleLoginNav = () =>{
  navigate('auth2')
}
// Sample function to update the cart item count
const updateCartItemCount = (count) => {
  setCartItemCount(count);

};
const linkStyles = "text-grey hover:text-red text-sm link active:border-b border-red";

  return (
    <header>
      <nav className=" flex justify-between px-[70px] items-center bg-white py-4 h-[80px] my-0 ">
        {/* Logo */}
        <div className="flex items-center">
    {/* Logo */}
      <h2 className="text-3xl text-red ">Trust <span className="text-yellow">Market</span></h2>
    </div>
        {/* Navigation Links */}
        <div className="flex space-x-[-50px] pr-2 pl-10 justify-evenly flex-grow">
          <Link to="/" className={linkStyles}>
            Home
          </Link>
          <Link to="/about" className={linkStyles}>
            Shop/Sell
          </Link>
          <Link to="/contact" className={linkStyles}>
            Contact
          </Link>
        <Link to="/contact" className={linkStyles}>
            About Us
          </Link>
          <Link to="/contact" className={linkStyles}>
            Blog
          </Link>
        </div>
        {/* Register/Login Button */}
        <div className='flex items-center'>
        <MdOutlineShoppingBag />
        <Link to= 'auth1'  className="text-sm mx-5  text-red hover:text-grey underline">
            Sign in
          </Link>
            <Button
            onClick={handleLoginNav}
            primary
            login
            >
                Sign up
            </Button>
        </div>
    </nav>
    </header>
  );
};

export default HomePageNav;
