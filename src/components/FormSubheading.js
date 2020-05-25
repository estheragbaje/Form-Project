import React from 'react';
import { Box, Heading, Divider } from '@chakra-ui/core';

function FormSubHeading({ children, ...rest }) {
  return (
    <Box paddingBottom={2} {...rest}>
      <Heading size="sm">{children}</Heading>
      <Divider
        borderWidth="5px"
        width="5%"
        borderColor="#1898cb"
        borderRadius="full"
      />
    </Box>
  );
}

export default FormSubHeading;
