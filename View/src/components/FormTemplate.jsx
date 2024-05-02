import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './Button';

const ChildrenPropForm = ({ initialValues, validationSchema, onSubmit, title, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-sm ">
          {title && <h3 className='text-sm font-bold text-grey'>{title}</h3>} {/* Render title only if it's provided */}

          {/* Render children dynamically */}
          {React.Children.map(children, child => {
            return React.cloneElement(child, { // Pass props to children
              className: "mb-4", // Example: Add className to all children
            });
          })}
          <SubmitButton isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

const TextField = ({ label, name, type, ...rest }) => ( // Spread rest props
  <div {...rest}>
    <h3>
    <label htmlFor={name} className="block text-md  text-grey font-semibold">
      {label}
    </label>
    </h3>
    <Field
      type={type}
      id={name}
      name={name}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="border-2 border-grey rounded-lg w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline hover:border-red"
    />
    <ErrorMessage name={name} component="div" className="text-red text-sm mt-1" />
  </div>
);

const TextAreaField = ({ label, name, ...rest }) => ( // Spread rest props
  <div {...rest}>
   <h3>
   <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
   </h3>
    <Field
      as="textarea"
      id={name}
      name={name}
      placeholder={`Enter ${label.toLowerCase()}`}
      rows="4"
      className="border-2 border-grey rounded-lg w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline hover:border-red"
    />
    <ErrorMessage name={name} component="div" className="text-red text-sm mt-1" />
  </div>
);

const SubmitButton = ({ isSubmitting }) => (
  <div className="flex items-center justify-center mb-4">
    <Button
      type="submit"
      disabled={isSubmitting}
      primary
      getStarted
    >
      Submit
    </Button>
  </div>
);

export { ChildrenPropForm, TextField, TextAreaField };
