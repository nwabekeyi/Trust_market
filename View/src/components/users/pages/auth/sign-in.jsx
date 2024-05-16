import { Link } from "react-router-dom";
import loginImage from "../../../../assets/login-image.svg"
import NavWrapper from "../../layouts/navWrapper";
import { ChildrenPropForm, TextField} from "../../../FormTemplate"
import sellerLogin from "../../../../assets/seller-login.webp"
import { useLocation } from "react-router-dom";
import * as Yup from 'yup';


const SignIncontent = () =>{

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Full Name is required'),
    password: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };
  const location = useLocation();
  return(


    <div className="mx-20 flex gap-2 items-center ">

       <div className="w-1/2 h-full hidden lg:block ">
       <img
            src={location.pathname === "/auth1/buyer-sign-in" ? loginImage : sellerLogin}
            className="h-full w-full object-cover "
            alt="Login Image"
          />

      </div>
      <div className=" h-8/10 lg:w-3/5 mt-2 mx-auto shadow">
        <div className=" w-[70%] mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
        <div>
        <h2 className="bold text-xl">LOGIN</h2>

      <ChildrenPropForm
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    login
                    title={'Hi, welcome back to the best market place '}
                 >
                     {/* Render form fields */}
                     <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    </ChildrenPropForm>
            </div>
        </div>

      </div>
    </div>
  )
}

const MainSigin = NavWrapper(SignIncontent)


export function SignIn() {
  return (
    <section >
      <MainSigin />
    </section>
  );
}

export default SignIn;
