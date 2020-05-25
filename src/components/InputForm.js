import React from 'react';
import {
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core';

function InputForm({
  placeholder,
  name,
  type,
  label,
  isInvalid,
  error,
  ...rest
}) {
  return (
    <FormControl isInvalid={isInvalid} py={2}>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        label={label}
        name={name}
        type={type}
        focusBorderColor="#1898cb"
        errorBorderColor="crimson"
        variant="flushed"
        {...rest}
      />
      <FormErrorMessage fontFamily="body">{error}</FormErrorMessage>
    </FormControl>
  );
}

export default InputForm;
