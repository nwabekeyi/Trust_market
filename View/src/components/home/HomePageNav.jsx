import { FiSmartphone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/Trust_logo.svg';
import Button from '../Button';

const HomePageNav = () => {
  return (
    <header>
        <nav className="w-full px-10 mx-0 flex justify-between items-center h-[50px] bg-greenDark">
            <div className='flex items-center'>
            <FiSmartphone size={32} color="white" />
                <h2 className='text-white text-bold ml-5'>Download our Mobile App</h2>
            </div>
            <input type='search' className=' rounded-xl shadow-sm focus:outline-none focus:border border-2 focus:ring-indigo-500 focus:border-red sm:text-sm transition duration-300 hover:border-greenLight w-[300px] px-2 h-[25px]' placeholder='Search products' />
      </nav>
      <nav className="bg-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/">
          <img src={logoSvg} alt="Logo" className="h-11 w-21" />
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="greenDark hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-greenDark hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-greenDark hover:text-gray-300">
            Contact
          </Link>
        </div>
        {/* Register/Login Button */}
        <div>
          <Link className="">
            Register/
          </Link>
            <Button primary >
                Login
            </Button>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default HomePageNav;
