import {
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import loginImage from "../../../../assets/login-image.svg"
import AuthWrapper from "../../layouts/authWrapper";
import { ChildrenPropForm, TextField} from "../../../FormTemplate"
import sellerLogin from "../../../../assets/seller-login.webp"
import { useLocation } from "react-router-dom";


const SignIncontent = () =>{

  const location = useLocation();
  return(


    <div className="mx-20 flex gap-2 items-center ">

       <div className="w-1/2 h-9/10 hidden lg:block ">
       <img
            src={location.pathname === "/auth1/buyer-sign-in" ? loginImage : sellerLogin}
            className="h-full w-full object-cover rounded-3xl"
            alt="Login Image"
          />

      </div>
      <div className=" h-8/10 lg:w-3/5 mt-2 mx-auto shadow">
        <div className=" w-[70%] mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
        <div>
        <h2 className="bold text-xl">LOGIN</h2>

      <ChildrenPropForm
                    initialValues={{ email: '', password: '' }}

                    title={'Hi, welcome back to the best market place '}
                 >
                     {/* Render form fields */}
                     <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    </ChildrenPropForm>
      </div>
      <div className="flex items-center justify-between">
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start text-[12px] "
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="text-[12px] text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

            <Typography className="text-[12px]  text-gray-900">
              <a href="#">
                Forgot Password?
              </a>
            </Typography>
        </div>
          <div className="space-x-4 mt-8 flex">
            <button className="flex items-center gap-2 p-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="text-[10px]">Sign in With Google</h2>
            </button>
            <button   className="flex items-center p-2 gap-2 justify-center shadow-md" fullWidth>
              <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
              <h2 className="text-[10px]">Sign in With Twitter</h2>
            </button>
          </div>
          <Typography variant="paragraph" className="text-center text-sm text-blue-grey font-medium mt-4">
            Not registered?
            <Link to="/auth/sign-up" className="text-red text-sm ml-1">Create account</Link>
          </Typography>
        </div>

      </div>
    </div>
  )
}

const MainSigin = AuthWrapper(SignIncontent)


export function SignIn() {
  return (
    <section >
      <MainSigin />
    </section>
  );
}

export default SignIn;
