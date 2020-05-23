import React from 'react';
import { Box, Button } from '@chakra-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CreditCardInput from 'react-credit-card-input';
import InputForm from './InputForm';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  pin: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().required().min(2, 'Name is too short'),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup
    .string()
    .required('Please enter your password')
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 6 characters, one uppercase, one number and one special case character'
    ),
  confirmpassword: yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Needs to be the same as password value'),
    }),
  pin: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(4, 'Must be exactly 4 digits')
    .max(4, 'Must be exactly 4 digits'),
  cardNumber: yup.string().required(),
  expiry: yup.string().required(),
  cvc: yup.string().required(),
});

function Form({ onSubmit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });

  /**
   * getFieldProps is a way to reduce boilerplate (repetitive) code.
   * It returns a helper methods like `onChange`, `onBlur`, `value`, `name`.
   *
   * @see Formik https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
   */

  const nameProps = formik.getFieldProps('name');
  const emailProps = formik.getFieldProps('email');
  const phoneProps = formik.getFieldProps('phone');
  const passwordProps = formik.getFieldProps('password');
  const confirmPasswordProps = formik.getFieldProps('confirmPassword');
  const pinProps = formik.getFieldProps('pin');
  const cardNumberProps = formik.getFieldProps('cardNumber');
  const cardExpiryProps = formik.getFieldProps('expiry');
  const cardCvcProps = formik.getFieldProps('cvc');

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <InputForm
          name="name"
          placeholder="Enter your Full name"
          label="Name"
          type="text"
          {...nameProps}
        />
        <InputForm
          name="email"
          placeholder="Enter your email"
          label="Email"
          type="email"
          {...emailProps}
        />
        <InputForm
          name="phone-number"
          placeholder="Your phone number"
          label="Phone Number"
          type="number"
          {...phoneProps}
        />
        <InputForm
          name="password"
          placeholder="Enter password"
          label="Password"
          type="password"
          {...passwordProps}
        />
        <InputForm
          name="confirm-password"
          placeholder="Confirm password"
          label="Confirm Password"
          type="password"
          {...confirmPasswordProps}
        />
        <CreditCardInput
          fieldClassName="input"
          cardNumberInputProps={cardNumberProps}
          cardExpiryInputProps={cardExpiryProps}
          cardCVCInputProps={cardCvcProps}
        />
        <InputForm
          name="pin"
          placeholder="Enter your pin"
          label="Pin"
          type="password"
          {...pinProps}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default Form;
