import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './Button';
import {
  Typography
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";


const ChildrenPropForm = ({ initialValues, validationSchema, onSubmit, title, title2, login, register, children }) => {
  const location = useLocation();

  const registerRoute =
    location.pathname === "/auth1/buyer-sign-in"
      ? "/auth2/buyer-register"
      : "/auth2/seller-register";


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-sm mx-auto ">
          {title && <h2 className='text-xs mb-10 text-grey'>{title}</h2>} {/* Render title only if it's provided */}
          {title2 && <h2 className='text-xs mt-[-40px] mb-10 text-grey'>{title2}</h2>} {/* Render title only if it's provided */}

          {/* Render children dynamically */}
          {React.Children.map(children, child => {
            return React.cloneElement(child, { // Pass props to children
              className: "mb-4", // Example: Add className to all children
            });
          })}
            <SubmitButton isSubmitting={isSubmitting} />
            <div>
            {login &&
            <Link className='text-xs text-greyLight flex justify-end mt-[-20px] hover:text-red'>
              Forgot your password?
            </Link>
            }
            <p className='text-greyLight text-[10px] text-center mt-2'>By continuing you agree to our
            <Link className='text-red text-semi-bold hover:text-greyLight'> Terms & Conditions </Link>and <Link className='text-red text-semi-bold hover:text-greyLight'> Privacy Policy</Link></p>
            </div>
          {(login || register) &&
          <div>
           <div className="space-y-4 mt-8 flex flex-col justify-center">
                <Button size="lg" color="white" className="flex text-lg w-2/3 m-auto p-2 border-[solid] border-greyLighter border-[1px] rounded-md text-xs items-center gap-2 justify-center shadow-md hover:bg-grey hover:text-white active:bg-greyLighter" >
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
                  {login ? <span>Sign in With Google</span> : <span>Register With Google</span>}
                </Button>
                <Button size="lg" color="white" className="flex text-lg w-2/3 m-auto p-2 border-[solid] border-greyLighter border-[1px] rounded-md text-xs items-center gap-2 justify-center shadow-md hover:bg-grey hover:text-white active:bg-greyLighter">
                  <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
                  {login ? <span>Sign in With Facebbook</span> : <span>Register With Facebook</span>}
                </Button>
              </div>
              {
              register ? 
              <Typography variant="paragraph" className="text-center text-greyLight text-sm font-medium mt-4">
                Already have an account?
                <Link to="/auth/sign-in" className="text-red hover:text-greyLight ml-1 ">Sign in</Link>
              </Typography>
              :
              <Typography variant="paragraph" className="text-center text-greyLight text-sm font-medium mt-4">
                Don't have an account?
                <Link to= {registerRoute} className="text-red hover:text-greyLight ml-1">Register</Link>
              </Typography>
}

              </div>}
        </Form>
      )}
    </Formik>
  );
};

const TextField = ({ label, name, type, ...rest }) => ( // Spread rest props
  <div {...rest}>
    <h1>
    <label htmlFor={name} className="block text-xs  text-grey">
      {label}
    </label>
    </h1>
    <Field
      type={type}
      id={name}
      name={name}
      className="border-[1px] border-greyLighter focus:border-gray-900 focus:border-2 rounded-lg w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline hover:border-red"
    />
    <ErrorMessage name={name} component="div" className="text-red text-sm mt-1" />
  </div>
);

const TextFieldFooter = ({ name, type, ...rest }) => ( // Spread rest props
  <div {...rest}>
    
    <Field
      type={type}
      id={name}
      name={name}
      className="border-2 border-grey rounded-lg w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline hover:border-red"
    />
    <ErrorMessage name={name} component="div" className="text-red text-sm mt-1" />
  </div>
);

const TextAreaField = ({ label, name, ...rest }) => ( // Spread rest props
  <div {...rest}>
   <h3>
   <label htmlFor={name} className="block text-xs text-gray-700  mb-2">
      {label}
    </label>
   </h3>
    <Field
      as="textarea"
      id={name}
      name={name}
      placeholder={`Enter ${label.toLowerCase()}`}
      rows="4"
      className="border-[1px] border-greyLighter rounded-lg w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline hover:border-red"
    />
    <ErrorMessage name={name} component="div" className="text-red text-sm mt-1" />
  </div>
);

const SubmitButton = ({ isSubmitting }) => (
  <h2 className="flex items-center justify-center mb-4 bold py-2">
    <Button
      type="submit"
      disabled={isSubmitting}
      primary
      getStarted
      full
    >
      Submit
    </Button>
  </h2>
);

export { ChildrenPropForm, TextField, TextAreaField, TextFieldFooter, SubmitButton };
