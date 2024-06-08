import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import Button from "../Button";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';



const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMobilenav = () => {
    setIsVisible(!isVisible);
  };
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
  // Sample function to update the cart item count
  const updateCartItemCount = (count) => {
    setCartItemCount(count);

  };
  const linkStyles = "text-white text-xs md:text-2xl hover:text-red link border-red font-light text-karla hover:text-red text-xl link active:scale(1.2)"
  const handleActive = ()=> {
    setIsActive
  }
  const sellRoute = isLoggedIn ? "/dashboard" : "auth1/seller-sign-in";
  const buyRoute = isLoggedIn ? "/dashboard" : "/auth1/buyer-sign-in";


  return (
    <div className="relative justify-center lg:hidden px-5 pt-3 pb-5 absolute text-white fixed top-0 left-0 z-10 ">
      <nav className="bg-white h-auto flex items-center justify-between fixed w-full pr-10 bg-white py-3 md:py-5 lg:py-8 top-0 ">
      <motion.div>
      <NavLink to="/" className="text-xl md:text-3xl text-red cursor">Trust <span className="text-yellow">Market</span></NavLink>
      </motion.div>

        <div onClick={toggleMobilenav} className="cursor-pointer space-y-1  z-20 relative">
          <motion.div
            className="h-1 w-6 bg-red md:w-8"
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: isVisible ? 45 : 0,
              y: isVisible ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="h-1 w-6 bg-red md:w-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className='h-1 w-6 bg-red md:w-8'
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: isVisible ? -45 : 0,
              y: isVisible ? -11 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </nav>

      {isVisible && (
        <motion.div
          className="bg-black text-white fixed top-0 left-0 w-[80vw] h-full flex flex-col items-left justify-left space-y-5 md:space-y-7  z-10 p-8"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        >
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
            <hr />
            <div className="flex flex-col space-y-5 ">

              <NavLink className={linkStyles}>Become a Verified Supplier </NavLink>
              <NavLink className={linkStyles}>Partnership </NavLink>
              <NavLink className={linkStyles}>Blog </NavLink>
            </div>
            <hr />

            <div className="flex flex-col space-y-5 ">
              <NavLink className={linkStyles}>FAQ </NavLink>
              <NavLink className={linkStyles}>Customer service </NavLink>
              <NavLink className={linkStyles}>Career </NavLink>
              <NavLink className={linkStyles}> Refunds </NavLink>
            </div>
            <hr />

            <motion.div className='flex items-center space-x-10'>
          <Link to= '/auth1'  className="  text-red hover:text-white underline">
              Sign in
            </Link>
            <Button
              onClick={handleLoginNav}
              primary
              login
              >
                  Sign up
              </Button>

          </motion.div>

          <article>
            <h2 className='text-greyLighter flex items-center '><span className='text-red text-karla text-sm md:text-lg mr-3 md:mr-6'>Follow us:</span>
                <FaInstagram size={20} style={{display:'inline', marginRight:"15px"}} />
                <FaFacebook size={20} style={{display:'inline', marginRight:"15px"}}  />
                <FaLinkedin size={20} style={{display:'inline', marginRight:"15px"}}  />
                <FaTwitter size={20} style={{display:'inline'}}  />
            </h2>
            </article>

        </motion.div>
      )}
    </div>
  );
};

export default MobileNavbar;



