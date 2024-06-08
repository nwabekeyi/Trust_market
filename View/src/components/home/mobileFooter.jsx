import { AiOutlineHome } from "react-icons/ai";
import { BsTextCenter } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const MobileFooter = () =>{

    const iconClass = "text-2xl font-light text-greyLight hover:text-red"
    const iconContainerClass = "flex flex-col items-center hover:text-red scale-120"
    const textClass = " text-xs font-light text-karla"

    const location = useLocation();
    const isAuthPath = location.pathname.includes('auth');


    return(
        <div className={`${isAuthPath ? 'hidden' : 'flex'} fixed bg-white bottom-0 w-full lg:hidden justify-between items-center px-10 py-3`}
            style={{zIndex: "100"}}>
           <div className={iconContainerClass}>
           <Link to='/'><AiOutlineHome className={iconClass}/></Link>
           <p className={textClass}>Home</p>
            </div>

            <div className={iconContainerClass}>
            <CiBadgeDollar className={iconClass}/>
            <p className={textClass}>Deals</p>
            </div>

            <div className={iconContainerClass}>
            <IoSearch className={iconClass}/>
            <p className={textClass}>Search</p>
            </div>

            <div className={iconContainerClass}>
            <MdOutlineShoppingBag className={iconClass}/>  
            <p className={textClass}>Cart</p>
            </div>

            <div className={iconContainerClass}>
            <BsTextCenter className={iconClass}/>
            <p className={textClass}>More</p>
            </div>

        </div>
    )
}

export default MobileFooter