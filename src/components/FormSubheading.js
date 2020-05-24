import React from 'react';
import { Box, Heading, Divider } from '@chakra-ui/core';

function FormSubHeading({ Children, ...rest }) {
  return (
    <Box {...rest} paddingBottom={2}>
      <Heading size="sm">{Children}</Heading>
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
