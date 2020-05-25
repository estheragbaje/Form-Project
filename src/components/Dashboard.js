import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Text,
  Flex,
  Avatar,
  AvatarBadge,
} from '@chakra-ui/core';
import DashboardItem from './DashboardItem';

function Dashboard() {
  return (
    <Box my={-16}>
      <Flex direction={['column', 'column', 'row']}>
        <Box
          height="100vh"
          bg="#0B6487"
          minW="300px"
          margin="auto"
          flex="1"
          display={['none', 'none', 'block']}
          // py={-4}
        >
          <Box textAlign="center" paddingTop={12}>
            <Avatar
              name="Dan Abramov"
              src="https://bit.ly/dan-abramov"
              size="xl"
            >
              <AvatarBadge
                size="0.30em"
                bg="green.500"
                borderColor="green.500"
              />
            </Avatar>

            <Text color="white" fontSize="24px">
              Dan Abramov
            </Text>
          </Box>
          <Stack marginLeft="32px" marginTop={12}>
            <DashboardItem menu="DASHBOARD" color="orange.200" />
            <DashboardItem menu="PROFILE" />
            <DashboardItem menu="PAYMENT HISTORY" />
            <DashboardItem menu="NOTIFICATION" />
            <DashboardItem menu="SETTINGS" />
            <DashboardItem menu="LOGOUT" />
          </Stack>
        </Box>
        <Box bg="white" width="100%" py={8}>
          <Heading textAlign="center" height="100vh">
            Welcome to Softcom!
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default Dashboard;
