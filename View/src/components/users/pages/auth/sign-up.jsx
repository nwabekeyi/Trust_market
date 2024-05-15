import NavWrapper from "../../layouts/navWrapper";
import { TextField, ChildrenPropForm } from "../../../FormTemplate";
import * as Yup from 'yup';
import { useLocation } from "react-router-dom";



export function SignUpForm() {

  const location = useLocation().pathname;


  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('password is required'),
    retypePassword: Yup.string().required('password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const title = location === '/auth2/seller-register' ? 'Hi, welcome seller' : 'Hi, welcome to the best marketplace';


  return (
    <section className="w-full py-10 lg:w-2/5 border-[solid] border-[1px] border-greyLighter flex flex-col py-2 items-center justify-center rounded-[20px] bg-white shadow-lg mx-auto">      <div className=" w-4/5 mx-auto">
        <div className="text-center w-">
          <h1 className="text-3xl text-greyLight font- mb-1" style={{fontFamily: 'markazi'}}>Create an account</h1>

          {/* signUp form */}
         <div>
          <ChildrenPropForm
                      initialValues={{ userName: '', email: '', password: '', retypePassword: '' }}
                          validationSchema={validationSchema}
                          onSubmit={handleSubmit}
                          title = {title}
                          title2={'Explore the most secured marketplace '}
                          register
                  >
                      {/* Render form fields */}
                      <TextField label="UserName" name="userName" type="text" style={{textAlign : "left"}} />
                      <TextField label="Email" name="email" type="email" style={{textAlign : "left"}}/>
                      <TextField label="Password" name="password" type="password" style={{textAlign : "left"}} />
                      <TextField label="Confirm password" name="retypePassword" type="password" style={{textAlign : "left"}}/>
          </ChildrenPropForm>
         </div>
        </div>
      </div>
    </section>
  );
}
const MainSignUp = NavWrapper(SignUpForm)


const SignUp = ({signup}) =>{
    return(
        <div>
            <MainSignUp SignUp={signup} />
        </div>
    )
}


export default SignUp;
