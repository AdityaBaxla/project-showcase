import { Text, HStack, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeScript = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding={"6px"}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeScript;
