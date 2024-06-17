import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usePostAPI } from './utils/services.js/apiHooks';
import useAuth from './utils/services.js/useAuth';
import Modal from './modalTemplate';

const ChildrenPropForm = ({
  initialValues,
  validationSchema,
  title,
  title2,
  login,
  register,
  url,
  children
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const registerRoute =
    location.pathname === "/auth1/buyer-sign-in"
      ? "/auth2/buyer-register"
      : "/auth2/seller-register";

  const loginRoute =
    location.pathname === "/auth2/buyer-register"
      ? "/auth1/buyer-sign-in"
      : "/auth1/seller-sign-in";

  const { submit: submitForm } = usePostAPI(url);
  const { login: authLogin } = useAuth();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log('Form Values on Submit:', values);
      const response = await (login ? authLogin(values, url) : submitForm(values));
      console.log('Form submission successful, response:', response);
      setModalIsOpen(true); // Show modal on success
      resetForm(); // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form className="w-full max-w-sm mx-auto">
            {title && <h2 className='text-xs mb-10 text-grey'>{title}</h2>}
            {title2 && <h2 className='text-xs mt-[-40px] mb-10 text-grey'>{title2}</h2>}

            {React.Children.map(children, child => {
              return React.cloneElement(child, {
                className: "mb-4",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values[child.props.name]
              });
            })}

            <SubmitButton isSubmitting={isSubmitting} />
            <div>
              {login &&
                <Link to="/forgot-password" className='text-xs text-greyLight flex justify-end mt-[-20px] hover:text-red'>
                  Forgot your password?
                </Link>
              }
              <p className='text-greyLight text-[10px] text-center mt-2'>By continuing you agree to our
                <Link className='text-red text-semi-bold hover:text-greyLight'> Terms & Conditions </Link>
                and <Link className='text-red text-semi-bold hover:text-greyLight'> Privacy Policy</Link>
              </p>
            </div>
            {(login || register) &&
              <div>
                <div className="space-y-4 mt-8 flex flex-col justify-center">
                  {/* Social login buttons */}
                </div>
                {register ? (
                  <p className="text-center text-greyLight text-sm font-medium mt-4">
                    Already have an account?
                    <Link to="/auth1" className="text-red hover:text-greyLight ml-1">Sign in</Link>
                  </p>
                ) : (
                  <p className="text-center text-greyLight text-sm font-medium mt-4">
                    Don't have an account?
                    <Link to={registerRoute} className="text-red hover:text-greyLight ml-1">Register</Link>
                  </p>
                )}
              </div>}
          </Form>
        )}
      </Formik>

      {modalIsOpen && register &&
        <Modal
          isOpen={modalIsOpen} // Pass isOpen prop
          onClose={() => setModalIsOpen(false)}
          title="You have successfully registered an account"
        >
          <p>
            Click <span onClick={() => navigate(loginRoute)} className='text-grey hover:text-red font-bold cursor-pointer'>here</span> to login to your account
          </p>
        </Modal>}
    </>
  );
};

const TextField = ({ label, name, type, ...rest }) => (
  <div {...rest}>
    <label htmlFor={name} className="block text-xs text-grey">
      {label}
    </label>
    <Field
      type={type}
      id={name}
      name={name}
      className="border-[1px] border-greyLighter focus:border-gray-900 focus:border-2 rounded-lg w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline hover:border-red"
    />
    <ErrorMessage name={name} component="div" className="text-red text-sm mt-1" />
  </div>
);

const TextFieldFooter = ({ name, type, ...rest }) => (
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

const TextAreaField = ({ label, name, ...rest }) => (
  <div {...rest}>
    <label htmlFor={name} className="block text-xs text-gray-700 mb-2">
      {label}
    </label>
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
  <div className="flex items-center justify-center mb-4 bold py-2">
    <Button
      type="submit"
      disabled={isSubmitting}
      primary
      getStarted
      full
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  </div>
);

export { ChildrenPropForm, TextField, TextAreaField, TextFieldFooter, SubmitButton };
