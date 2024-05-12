import AuthWrapper from "./authWrapper";
import { FcShop } from "react-icons/fc";
import { FaPeopleCarry } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Auth = ({ SignIn, children }) => {
    const navigate = useNavigate();

    const handleSignInBuyer = () =>{
        SignIn ? navigate("/auth1/buyer-sign-in") : navigate("register");
    };
    const handleSignInSeller = () =>{
        SignIn ? navigate("/auth1/seller-sign-in") : navigate("register");
    }

    const data={
        buyerReg: "Register as a buyer",
        sellerReg: "Register as a seller",
        buyerSign: "Login as a buyer",
        sellerSign: "Login as a seller",
    };

    const buttonStyle = "block shadow-md drop-shadow-lg py-5 px-10 flex justify-center items-center w-[300px] hover:text-red active:bg-grey active:text-white"

  return (

    <div className="container flex items-center justify-center mx-auto py-8">
        <div className="px-10 py-16 shadow rounded-lg">
        <h2 className="text-red text-center">Are you a buyer or a seller?</h2>
           <div className="space-y-5">
           <div></div><button onClick={handleSignInBuyer} className={buttonStyle}> <FaPeopleCarry className="mr-2" />
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

const MainAuth = AuthWrapper(Auth)

const PreAuth = ({signIn}) =>{
    return(
        <div>
            <MainAuth SignIn={signIn} />
        </div>
    )
}

export default PreAuth



