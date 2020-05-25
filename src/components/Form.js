import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import CreditCardInput from 'react-credit-card-input';
import * as yup from 'yup';
import FormSubHeading from './FormSubheading';
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

const validPhonePrefix = [
  '0703',
  '0706',
  '0803',
  '0806',
  '0810',
  '0813',
  '0814',
  '0816',
  '0903',
  '0705',
  '0805',
  '0811',
  '0815',
  '0905',
  '0701',
  '0708',
  '0802',
  '0808',
  '0812',
  '0902',
  '0809',
  '0817',
  '0818',
  '0909',
  '0804',
];

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name')
    .min(2, 'Name must be at least 2 character'),
  email: yup.string().email().required('Email cannot be empty'),
  phone: yup
    .string()
    .required('Please enter your phone number')
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .test(
      'digits',
      'Must be valid Nigerian number (e.g. 0818-XXX-XXXX)',
      (phone) => {
        if (!phone) return false;
        // check that the phone number starts with one of the valid prefixes
        return validPhonePrefix.some((prefix) => phone.startsWith(prefix));
      }
    )
    .min(11, 'Phone must be 11 digits')
    .max(11, 'Phone must be 11 digits'),
  password: yup
    .string()
    .required('Please enter your password')
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 6 characters, one uppercase, one number and one special case character'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref('password')], "Password doesn't match"),
    }),
  pin: yup
    .string()
    .required('Please enter your pin')
    .matches(/^[0-9]+$/, 'Pin must be only digits')
    .min(4, 'Pin must be exactly 4 digits')
    .max(4, 'Pin must be exactly 4 digits'),
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
      backgroundImage="url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"
      backgroundSize="cover"
      backgroundColor="#193641"
      style={{ backgroundBlendMode: 'overlay' }}
      minHeight="100vh"
      paddingTop={16}
    >
      <Box
        p={12}
        bg="white"
        maxW="1100px"
        margin="auto"
        borderRadius={12}
        box-shadow="0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.36)"
      >
        <form onSubmit={formik.handleSubmit}>
          <SimpleGrid columns={[1, 1, 2]} spacing={12}>
            <Box>
              <Heading textAlign="center" size="lg" paddingBottom={4}>
                Kindly fill in all your details
              </Heading>

              <Avatar
                size="2xl"
                marginLeft="160px"
                name="Welcome"
                src="../handshake-colour-800px.png"
                bg="white"
              />
              <FormSubHeading children="Personal Details" />
              <InputForm
                placeholder="Enter your Full name"
                label="Name"
                type="text"
                error={formik.errors.name}
                isInvalid={formik.errors.name && formik.touched.name}
                {...nameProps}
              />
              <SimpleGrid columns={[1, 1, 2]} spacing={4}>
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
                  type="tel"
                  error={formik.errors.phone}
                  isInvalid={formik.errors.phone && formik.touched.phone}
                  {...phoneProps}
                />
              </SimpleGrid>
              <SimpleGrid columns={[1, 1, 2]} spacing={4}>
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
              <FormSubHeading children="Credit Card Details" />

              <Image
                src="https://www.pngitem.com/pimgs/m/5-55223_visa-mastercard-logo-png-transparent-png.png"
                alt="credit card details"
                maxH="40px"
                objectFit="cover"
              />
              <Box paddingTop={12}>
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
              <Box py={12}>
                <Button
                  width="100%"
                  size="lg"
                  type="submit"
                  variantColor="orange"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </form>
      </Box>
    </Box>
  );
}

export default Form;
