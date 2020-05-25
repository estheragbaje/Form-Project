import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import DashboardItem from './DashboardItem';

function Dashboard() {
  return (
    <Box>
      {/* Passing array values to flexDirection is how Chakra UI handles responsive design */}
      <Flex direction={['column', 'column', 'row']}>
        <Box
          height="100vh"
          bg="#0B6487"
          minWidth="300px"
          margin="auto"
          display={['none', 'none', 'block']}
        >
          <Box textAlign="center" paddingTop={12}>
            <Avatar
              name="Folasade Agbaje"
              src="https://avatars3.githubusercontent.com/u/53586167?s=460&u=48c4b82a10336f52e2e64d67b488347de79519b8&v=4"
              size="xl"
            />

            <Text color="white" fontSize="18px" paddingTop={4}>
              Folasade Agbaje
            </Text>
          </Box>
          <Stack paddingX="32px" marginTop={12} spacing={12}>
            <DashboardItem isActive>Dashboard</DashboardItem>
            <DashboardItem>Profile</DashboardItem>
            <DashboardItem>Payment History</DashboardItem>
            <DashboardItem>Notification</DashboardItem>
            <DashboardItem>Settings</DashboardItem>
            <DashboardItem>Logout</DashboardItem>
          </Stack>
        </Box>
        <Box bg="white" flex={1}>
          <Heading textAlign="center" marginTop="64px">
            Welcome to Softcom!
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default Dashboard;
