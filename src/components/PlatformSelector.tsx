import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Platforms, usePlatforms } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platforms) => void;
  selectedPlatform: Platforms | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) {
    return (
      <>
        <Text>Some Error</Text>
      </>
    );
  }
  return (
    <Menu>
      <MenuButton as={Button} paddingY={4}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((plat) => (
          <MenuItem onClick={() => onSelectPlatform(plat)} key={plat.id}>
            {plat.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
