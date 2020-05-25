import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

function DashboardItem({ children, isActive, ...rest }) {
  return (
    <Box textAlign="left" as="button" {...rest}>
      <Heading
        textTransform="uppercase"
        color={isActive ? 'orange.200' : 'white'}
        size="sm"
      >
        {children}
      </Heading>
    </Box>
  );
}

export default DashboardItem;
