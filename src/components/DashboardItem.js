import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

function DashboardItem({ menu, ...rest }) {
  return (
    <Box textAlign="left" as="button" {...rest}>
      <Heading marginY={8} size="sm" color="white">
        {menu}
      </Heading>
    </Box>
  );
}

export default DashboardItem;
