import React from 'react';
import { Box, Input, Text } from '@chakra-ui/core';

function InputForm({ placeholder, name, type, label, ...props }) {
  return (
    <Box my={8}>
      <Text fontSize={14} textAlign="left">
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        label={label}
        name={name}
        type={type}
        focusBorderColor="#1898cb"
        errorBorderColor="crimson"
        variant="flushed"
        py={2}
      />
    </Box>
  );
}

export default InputForm;
