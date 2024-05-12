import React from 'react';
import { FiGlobe } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";


// Define the higher-order component
const AuthWrapper = (WrappedComponent) => {
  // Return a functional component
  return function WithNavbarWrapper(props) {
    // Render the wrapped component along with the navbar
    return (
      <div>
        {/* Navbar */}
        <nav className="flex h-[50px] justify-between shadow items-center bg-white text-white px-10">
        <div className="flex items-center">
            {/* Logo */}
                <h2 className="text-xl text-red ">Trust <span className="text-yellow">Market</span></h2>
            </div>
            <div className='flex'>
            <FiGlobe className='text-grey text-sm'/>
            <IoIosHelpCircle className='text-grey ml-5 text-md'/>
            </div>
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
