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
          {title && <h2 className='text-xs mb-10 text-grey'>{title}</h2>} {/* Render title only if it's provided */}

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
    <h1>
    <label htmlFor={name} className="block text-md  text-grey">
      {label}
    </label>
    </h1>
    <Field
      type={type}
      id={name}
      name={name}
      className="border-[1px] blue-gray-200 focus:border-gray-900 focus:border-2 rounded-lg w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
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
