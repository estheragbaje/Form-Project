import React from 'react';
import { Box, Input, Text } from '@chakra-ui/core';

function InputForm({ placeholder, name, type }) {
  return (
    <Box>
      <Text fontSize={14}>{name}</Text>
      <Input
        placeholder={placeholder}
        name={name}
        type={type}
        focusBorderColor="#1898cb"
        variant="flushed"
        py={2}
      />
    </Box>
  );
}

export default InputForm;
