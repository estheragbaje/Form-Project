import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

function DashboardItem({ menu, ...rest }) {
  return (
    <Box textAlign="left">
      <Heading my={8} size="sm" color="white" as="button" {...rest}>
        {menu}
      </Heading>
    </Box>
  );
}

export default DashboardItem;
