import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Platforms, usePlatforms } from "../hooks/usePlatforms";
import {
  FaBookAtlas,
  FaBootstrap,
  FaChevronDown,
  FaDownLong,
} from "react-icons/fa6";

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
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || "Platforms"}{" "}
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
