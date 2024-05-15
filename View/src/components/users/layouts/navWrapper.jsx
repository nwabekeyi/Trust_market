import { FiGlobe } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Button';
import { FiSmartphone, FiShoppingCart, FiHelpCircle } from 'react-icons/fi';
import { useState } from 'react';
import Dropdown from '../../Dropdown';
import { Navigate } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";



// Define the higher-order component
const NavWrapper = (WrappedComponent) => {
  // Return a functional component
  return function WithNavbarWrapper({ SignUp, ...props}) {
    const path = useLocation("/auth1");

    const location = path.pathname

    console.log(location)
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

    // Render the wrapped component along with the navbar

    return (
      <div>
        {/* Navbar */}
        { location === "/"  ?
        <header>
        <nav className=" flex justify-between mx-20  items-center bg-white py-4 h-[80px] my-0 ">
          {/* Logo */}
          <div className="flex items-center">
      {/* Logo */}
        <Link to="/" className="text-3xl text-red cursor">Trust <span className="text-yellow">Market</span></Link>
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
      :
       <div>
       <nav className="flex h-[50px] justify-between shadow items-center bg-white text-white px-10 ">
        <div className="flex items-center">
            {/* Logo */}
                <Link to= "/" className="text-xl text-red cursor ">Trust <span className="text-yellow">Market</span></Link>
            </div>
            {location === '/auth2' ?
            <div className='text-grey'>
              <h2 className='text-[10px]'> Already have an acouunt? <Link className='text-red underline hover:text-greyLight'>Login</Link> </h2>
              <Link className='text-[10px] hover:text-red'>Forget your user ID or password?</Link>
              </div>
              :
              <div className='flex'>
             <FiGlobe className='text-grey text-sm'/>
            <IoIosHelpCircle className='text-grey ml-5 text-md'/>
            </div>

        }
        </nav>
        </div>
  }
        {/* Render the wrapped component */}
        <div className="container mx-auto py-4">
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

// Example of a component that will be wrapped with the navbar

export default NavWrapper;
