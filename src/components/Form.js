import React from 'react';
import { Box, Button } from '@chakra-ui/core';
import InputForm from './InputForm';

function Form() {
  return (
    <Box>
      <form>
        <InputForm
          name="name"
          placeholder="Enter your Full name"
          label="Name"
          type="text"
        />
        <InputForm
          name="email"
          placeholder="Enter your email"
          label="Email"
          type="email"
        />
        <InputForm
          name="phone-number"
          placeholder="Your phone number"
          label="Phone Number"
          type="number"
        />
        <InputForm
          name="password"
          placeholder="Enter password"
          label="Password"
          type="password"
        />
        <InputForm
          name="confirm-password"
          placeholder="Confirm password"
          label="Confirm Password"
          type="password"
        />
        <InputForm
          name="pin"
          placeholder="Enter your pin"
          label="Pin"
          type="password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default Form;
