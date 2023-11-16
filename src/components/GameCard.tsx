import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CritScore from "./CritScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => (
  <Card borderRadius={"10px"} overflow={"hidden"}>
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <Heading fontSize={"2xl"}>{game.name}</Heading>
      <HStack justifyContent={"space-between"}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CritScore critScore={game.metacritic} />
      </HStack>
    </CardBody>
  </Card>
);

export default GameCard;
