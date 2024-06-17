import React from 'react';
import { ChildrenPropForm, TextField } from '../../../FormTemplate';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import { endpoints } from '../../../utils/constant';
import Modal from '../../../modalTemplate';

export function SignUpForm() {
  const location = useLocation().pathname;
  const registerUrl =
    location === '/auth2/buyer-register' ? endpoints.buyerRegister : endpoints.sellerRegister;

  // Form state
  const formValues = {
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
  };

  console.log(registerUrl);

  // Validation schema for form fields
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phone_number: Yup.string()
      .matches(/^\d+$/, 'Invalid phone number')
      .required('Phone number is required'),
  });

  // Determine the title based on the location
  const title =
    location === '/auth2/seller-register' ? 'Hi, welcome seller' : 'Hi, welcome to the best marketplace';

  return (
    <section className="w-full h-[100vh] lg:h-[auto] py-10 lg:w-2/5 border-[solid] border-[1px] border-greyLighter flex flex-col py-2 items-center justify-center rounded-[20px] bg-white shadow-lg mx-auto">
      <div className="w-4/5 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-greyLight font- mb-1" style={{ fontFamily: 'markazi' }}>
            Create an account
          </h1>

          <div>
            <ChildrenPropForm
              initialValues={formValues}
              validationSchema={validationSchema}
              url={registerUrl} // Pass the URL here
              title={title}
              title2={'Explore the most secured marketplace '}
              register
              modal
            >
              <TextField label="Email" name="email" type="email" style={{ textAlign: 'left' }} />
              <TextField label="Username" name="userName" type="text" style={{ textAlign: 'left' }} />
              <TextField label="Password" name="password" type="password" style={{ textAlign: 'left' }} />
              <TextField label="Confirm Password" name="confirmPassword" type="password" style={{ textAlign: 'left' }} />
              <TextField label="Phone Number" name="phone_number" type="text" style={{ textAlign: 'left' }} />
            </ChildrenPropForm>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
