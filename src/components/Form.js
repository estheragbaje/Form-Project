import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  Heading,
  Divider,
  InputLeftAddon,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import CreditCardInput from 'react-credit-card-input';
import * as yup from 'yup';
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
  name: yup.string().required().min(3, 'Name is too short'),
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
   * It returns helper methods like `onChange`, `onBlur`, `value`, `name`.
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
    <Box
      p={12}
      bg="white"
      maxW="1100px"
      margin="auto"
      borderRadius={12}
 
    >
      <form onSubmit={formik.handleSubmit}>
        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
          <Box>
            <Heading textAlign="center" fontSize="2xl" paddingBottom={4}>
              Fill in your Details
            </Heading>
            <Image
              // src="https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              src="../handshake-colour-800px.png"
              alt="welcome"
              maxHeight="260px"
              objectFit="cover"
              width="100%"
            />
            <InputForm
              placeholder="Enter your Full name"
              label="Name"
              type="text"
              error={formik.errors.name}
              isInvalid={formik.errors.name && formik.touched.name}
              {...nameProps}
            />
            <SimpleGrid columns={2} spacing={4}>
              <InputForm
                placeholder="Enter your email"
                label="Email"
                type="email"
                error={formik.errors.email}
                isInvalid={formik.errors.email && formik.touched.email}
                {...emailProps}
              />
              <InputForm
                placeholder="Your phone number"
                label="Phone Number"
                type="number"
                error={formik.errors.phone}
                isInvalid={formik.errors.phone && formik.touched.phone}
                {...phoneProps}
              />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={4}>
              <InputForm
                placeholder="Enter password"
                label="Password"
                type="password"
                error={formik.errors.password}
                isInvalid={formik.errors.password && formik.touched.password}
                {...passwordProps}
              />
              <InputForm
                placeholder="Confirm password"
                label="Confirm Password"
                type="password"
                error={formik.errors.confirmPassword}
                isInvalid={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                }
                {...confirmPasswordProps}
              />
            </SimpleGrid>
          </Box>

          <Box>
            {/* <Divider orientation="vertical" /> */}
            <Heading fontSize="lg">Credit Card Details</Heading>

            <Image
              src="https://www.pngitem.com/pimgs/m/5-55223_visa-mastercard-logo-png-transparent-png.png"
              alt="welcome"
              maxH="40px"
              objectFit="cover"
            />
            <Box paddingTop={12}>
              <Divider bg="#1898cb" />
              <CreditCardInput
                fieldClassName="input"
                cardNumberInputProps={cardNumberProps}
                cardExpiryInputProps={cardExpiryProps}
                cardCVCInputProps={cardCvcProps}
              />
            </Box>
            <InputForm
              placeholder="Enter your pin"
              label="Pin"
              type="password"
              error={formik.errors.pin}
              isInvalid={formik.errors.pin && formik.touched.pin}
              {...pinProps}
            />
            <Button width="100%" size="lg" type="submit" variantColor="orange">
              Submit
            </Button>
          </Box>
        </SimpleGrid>
      </form>
    </Box>
  );
}

export default Form;
