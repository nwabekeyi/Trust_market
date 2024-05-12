import React from 'react';
import { FiGlobe } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";
import bg from "../../../assets/seller-login.webp"
import SignUp from '../pages/auth/sign-up';



// Define the higher-order component
const AuthWrapper = (WrappedComponent) => {
  // Return a functional component
  return function WithNavbarWrapper(SignUp, ...props) {
    // Render the wrapped component along with the navbar
    var bgImage = {
      backgroundImage: `url(${SignUp ? bg : 'none'})`,
      backgroundSize: 'cover', // Cover the entire element with the background image
      backgroundPosition: 'center'
    }
    return (
      <div style={bgImage}>
        {/* Navbar */}
        <nav className="flex h-[50px] justify-between shadow items-center bg-white text-white px-10">
        <div className="flex items-center">
            {/* Logo */}
                <h2 className="text-xl text-red ">Trust <span className="text-yellow">Market</span></h2>
            </div>
            {/* //signup prop receivded from sign-up form component */}
            {SignUp ?
            <div className='text-grey'>
              <h2 className='text-[10px]'> Already have an acouunt? <span className='text-red underline'>Login</span> </h2>
              <h2 className='text-[10px]'>Forget your user ID or password?</h2>
              </div>
              :
              <div className='flex'>
            <FiGlobe className='text-grey text-sm'/>
            <IoIosHelpCircle className='text-grey ml-5 text-md'/>
            </div>}
        </nav>
        {/* Render the wrapped component */}
        <div className="container mx-auto py-4">
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

// Example of a component that will be wrapped with the navbar

export default AuthWrapper;
