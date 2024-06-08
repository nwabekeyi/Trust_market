import { AiOutlineHome } from "react-icons/ai";
import { BsTextCenter } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const MobileFooter = () =>{

    const iconClass = "text-4xl text-greyLight hover:text-red"
    const iconContainerClass = "flex flex-col items-center hover:text-red scale-120"


    return(
        <div className=" flex lg:hidden justify-between items-center px-5">
           <div className={iconContainerClass}>
           <Link to='/'><AiOutlineHome className={iconClass}/></Link>
           <p>Home</p>
            </div>
            <div className={iconContainerClass}>
            <CiBadgeDollar className={iconClass}/>
            <p>Deals</p>
            </div>
            <div className={iconContainerClass}>
            <IoSearch className={iconClass}/>
            <p>Search</p>
            </div>
            <div className={iconContainerClass}>
            <BsTextCenter className={iconClass}/>
            <p>More</p>
            </div>

        </div>
    )
}

export default MobileFooter