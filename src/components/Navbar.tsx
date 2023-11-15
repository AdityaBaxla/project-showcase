import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import React from "react";

const Navbar = () => {
  return (
    <HStack>
      <Box boxSize={"60px"}>
        <Image src={logo} />
      </Box>
      <Text> NavBar </Text>
    </HStack>
  );
};

export default Navbar;
