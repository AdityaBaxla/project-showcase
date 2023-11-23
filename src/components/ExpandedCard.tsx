import {
  Badge,
  Button,
  Card,
  CardBody,
  CloseButton,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Games } from "../hooks/useGames";

// name , description, rating, bg image, playtime, metacritic score, platforms

export interface GameDetails {
  name: string;
  description: string;
  rating: number;
  background_image: string;
  playtime: number;
  platforms: Object[];
}

interface Props {
  expanded: (isExpanded: boolean) => void;
  selectedGame: Games;
}

const ExpandedCard = ({ expanded, selectedGame }: Props) => {
  //const[gameDetails] = useGameDetails()
  return (
    <>
      <Card
        maxW={"lg"}
        position={"fixed"}
        zIndex={1}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        borderRadius={7}
        overflow={"hidden"}
      >
        <CloseButton
          position={"absolute"}
          colorScheme="red"
          onClick={() => expanded(false)}
        />
        <Image
          backgroundSize={"contain"}
          padding={2}
          src={selectedGame.background_image}
        />
        <Stack paddingX={4} paddingY={2}>
          <Heading size={"md"}>{selectedGame.name}</Heading>
          <Text>{/* {selectedGame.} */}</Text>
          <CardBody>
            <Divider />
            <HStack justifyContent={"space-between"} paddingTop={3}>
              <Button>visit Website</Button>
              <Badge>10</Badge>
            </HStack>
          </CardBody>
        </Stack>
      </Card>
      ;
    </>
  );
};

export default ExpandedCard;
