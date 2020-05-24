import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Button,
// } from '@chakra-ui/core';

// function Dashboard() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [placement, setPlacement] = React.useState('left');
//   const handlePlacementChange = (event) => setPlacement(event.target.value);

//   return (
//     <>
//       <Drawer placement="left">
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
//           <DrawerBody>
//             <Text>Profile</Text>
//             <Text>Settings</Text>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }
function Dashboard() {
  return (
    <Box>
      <Heading textAlign="center" color="white">
        Welcome to Softcom!
      </Heading>
    </Box>
  );
}

export default Dashboard;
