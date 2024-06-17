import { FiGlobe } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Button from '../../Button';
import { useState, useEffect } from 'react';
import Dropdown from '../../Dropdown';
import { Navigate } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import MobileNavbar from "../../mobileNav/index";
import Footer from "../../home/Footer";
import bg from "../../../assets/auth-bg.jpg"

// Define the higher-order component
const NavWrapper = (WrappedComponent) => {
  // Return a functional component
  return function WithNavbarWrapper({ SignUp, ...props}) {
    const[isActive, setIsActive] = useState('/');
    const [cartItemCount, setCartItemCount] = useState(0);
    const path = useLocation("/auth1");
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
      const token = localStorage.getItem('accessToken');
      console.log(token)
      if(token){
        setIsLoggedIn(true);
      }
  
    }, [])

    const location = path.pathname

    console.log(location)

    const navigate = useNavigate();
    // handle login navigation
    const handleLoginNav = () =>{
      navigate('auth2')
    }

    //navigate home
    const navigateHome = () =>{
      navigate('/')
    }


    // Sample function to update the cart item count
    const updateCartItemCount = (count) => {
      setCartItemCount(count);
    
    };
    const linkStyles = ({isActive}) => ( isActive ? "text-grey hover:border-b-2 hover:border-b-red hover:text-red hover:border-b-red hover:border-b-solid hover:border-b-5 text-sm link active:border-b border-red" : "text-grey hover:text-red text-sm link active:border-b border-red")
    const handleActive = ()=> {
      setIsActive
    }
    const sellRoute = isLoggedIn ? "/dashboard" : "auth1/seller-sign-in";
    const buyRoute = isLoggedIn ? "/dashboard" : "/auth1/buyer-sign-in";

    
    return (
      <div >

        { (
          location === "/"
          || location === "/home"
          || location === "/about"
          || location === "/contact"
          || location === "/categories"
        )
        ?
        <div>
        <header className="hidden lg:block">
        <nav className=" flex justify-between items-center bg-white py-4  lg:px-[30px] h-[80px] my-0 ">
          <div className="flex items-center">
        <NavLink onClick={navigateHome} className="text-3xl text-red cursor">Trust <span className="text-yellow">Market</span></NavLink>
      </div>
          {/* Navigation Links */}
          <div className="flex space-x-[-50px] justify-evenly flex-grow">
            <NavLink to="/home" className={linkStyles}>
              Home
            </NavLink>
            <NavLink to="/categories" className={linkStyles}>
              categories
            </NavLink>
            <NavLink to={buyRoute} className={linkStyles}>
              Shop
            </NavLink>
          <NavLink to={sellRoute} className={linkStyles}>
             Sell
            </NavLink>
            <NavLink to="/about" className={linkStyles}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkStyles}>
              Contact
            </NavLink>
          </div>
          {/* Register/Login Button */}
          <div className='flex items-center'>
          <MdOutlineShoppingBag />
          <Link to= '/auth1'  className="text-sm mx-5  text-red hover:text-grey underline">
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
      {/* mobile nav */}
      <MobileNavbar className="px-5" />
      </div>


      // navbar for authpages
      :
       <div>
       <nav className="flex h-[50px] justify-between shadow items-center bg-white text-white px-5 lg:px-10 ">
        <div className="flex items-center">
            {/* Logo */}
                <Link to= "/" className="text-xl text-red cursor ">Trust <span className="text-yellow">Market</span></Link>
            </div>
            {location === '/auth2' ?
            <div className='text-grey'>
              <h2 className='text-xs md:text-[12px]'> Already have an acouunt? <Link to="/auth1" className='text-red underline hover:text-greyLight'>Login</Link> </h2>
              <Link className='text-xs md:text-[12px] hover:text-red'>Forget your user ID or password?</Link>
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
        <div className="container mx-auto py-4 px-5 md:px-0 lg:px-[10px]">
          <WrappedComponent {...props} />
        </div>
        <Footer/>
      </div>
    );
  };
};

// Example of a component that will be wrapped with the navbar

export default NavWrapper;
