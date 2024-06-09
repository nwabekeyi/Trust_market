import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import loginImage from "../../../../assets/login-image.svg";
import NavWrapper from "../../layouts/navWrapper";
import { ChildrenPropForm, TextField } from "../../../FormTemplate";
import sellerLogin from "../../../../assets/seller-login.webp";
import { endpoints } from "../../../utils/constant";

const SignInContent = () => {
  const location = useLocation();
  const apiURL = location.pathname === "/auth1/buyer-sign-in" ? endpoints.buyerLogin : endpoints.sellerLogin;
  console.log(apiURL)

  const formValue = { email: '', password: '' };

  console.log(formValue)


  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="mx-5 lg:mx-20 flex gap-2 items-center">
      <div className="w-1/2 h-full hidden lg:block">
        <img
          src={location.pathname === "/auth1/buyer-sign-in" ? loginImage : sellerLogin}
          className="h-full w-full object-cover"
          alt="Login Image"
        />
      </div>
      <div className="w-[100vw] h-8/10 lg:w-3/5 mt-2 mx-auto lg:shadow">
        <div className="w-[100%] mb-2 mx-auto max-w-screen-lg lg:w-1/2">
          <div>
            <h2 className="bold text-xl">LOGIN</h2>
            <ChildrenPropForm
              initialValues={formValue}
              validationSchema={validationSchema}
              title={'Hi, welcome back to the best market place'}
              url={apiURL}
              login
            >
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
            </ChildrenPropForm>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainSignIn = NavWrapper(SignInContent);

export function SignIn() {
  return (
    <section>
      <MainSignIn />
    </section>
  );
}

export default SignIn;
