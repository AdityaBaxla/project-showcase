import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Games } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletion from "./GameCardSkeletion";
import { Genre } from "../hooks/useGenre";
import { Platforms } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platforms | null;
  selectedOrder: string;
  onSelectGame: (selectedGame: Games) => void;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedOrder,
  onSelectGame,
}: Props) => {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedOrder
  );
  const skeletion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding={"10px"}
      >
        {isLoading && skeletion.map((key) => <GameCardSkeletion key={key} />)}
        {data
          ? data.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onSelectGame={(game) => onSelectGame(game)}
              />
            ))
          : null}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
