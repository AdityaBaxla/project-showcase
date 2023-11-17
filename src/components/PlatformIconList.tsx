import {
  RiJavascriptFill,
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import {
  FaJava,
  FaNodeJs,
  FaAngular,
  FaDocker,
  FaEthereum,
  FaDatabase,
} from "react-icons/fa6";
import { SiSolidity, SiMysql } from "react-icons/si";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //index signature synatx []
    //always use slug for mapping
    pc: RiReactjsFill,
    playstation: FaJava,
    xbox: FaEthereum,
    ios: FaAngular,
    android: FaDatabase,
    mac: FaDocker,
    nintendo: RiCss3Fill,
    linux: SiMysql,
    web: RiHtml5Fill,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color="grey" as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
