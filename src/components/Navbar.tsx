import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import React from "react";
import ColorModeScript from "./ColorModeScript";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Box boxSize={"60px"}>
        <Image src={logo} />
      </Box>
      <ColorModeScript />
    </HStack>
  );
};

export default Navbar;
