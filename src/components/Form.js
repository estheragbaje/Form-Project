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

const validPhones = [
  '703',
  '706',
  '803',
  '806',
  '810',
  '813',
  '814',
  '816',
  '903',
  '705',
  '805',
  '811',
  '815',
  '905',
  '701',
  '708',
  '802',
  '808',
  '812',
  '902',
  '809',
  '817',
  '818',
  '909',
  '804',
];

const validationSchema = yup.object().shape({
  name: yup.string().required().min(3, 'Name is too short'),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .test(
      'digits',
      'Must be valid Nigerian number (e.g. 0818-XXX-XXXX)',
      (val) => {
        // ensure phone matches at least of the prefix
        if (!val) return false;
        return validPhones.some((prefix) => {
          return val.startsWith('0' + prefix);
        });
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
              <FormSubHeading Children="Personal Details" />
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
              <FormSubHeading Children="Credit Card Details" />

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
