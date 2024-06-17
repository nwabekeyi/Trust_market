import NavWrapper from "./navWrapper";
import { FcShop } from "react-icons/fc";
import { FaPeopleCarry } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Auth = ({ SignIn, children }) => {
    const navigate = useNavigate();

    const handleSignInBuyer = () =>{
        SignIn ? navigate("/auth1/buyer-sign-in") : navigate("/auth2/buyer-register");
    };
    const handleSignInSeller = () =>{
        SignIn ? navigate("/auth1/seller-sign-in") : navigate("/auth2/seller-register");
    }

    const data={
        buyerReg: "Register as a buyer",
        sellerReg: "Register as a seller",
        buyerSign: "Login as a buyer",
        sellerSign: "Login as a seller",
    };

    const buttonStyle = "block shadow-md drop-shadow-lg py-5 px-10 flex justify-center items-center w-[300px] hover:text-white active:bg-greylighter active:text-white border-[1px] mt-10 border-[solid] border-greyLighter rounded-md hover:bg-greyLighter"

  return (

    <div className="grid place-content-center h-[80vh]">
        <div className="px-10 py-16 md:shadow-xl rounded-lg bg-white">
        <h2 className="text-red text-center">Are you a buyer or a seller?</h2>
           <div className="space-y-5">
           <button onClick={handleSignInBuyer} className={buttonStyle}> <FaPeopleCarry className="mr-2" />
                <h1 className="text-xl">{SignIn ? data.buyerSign : data.buyerReg }</h1>
           </button>
            <button onClick={handleSignInSeller} className={buttonStyle}> <FcShop className="mr-2" />
                <h1 className="text-xl"> {SignIn ? data.sellerSign : data.sellerReg }</h1>
            </button>
           </div>
        </div>
            {children  && React.cloneElement(children, { ...props })}
    </div>
  );
};

const MainAuth = NavWrapper(Auth)

const PreAuth = ({signIn}) =>{
    return(
        <div>
            <MainAuth SignIn={signIn} />
        </div>
    )
}

export default PreAuth



