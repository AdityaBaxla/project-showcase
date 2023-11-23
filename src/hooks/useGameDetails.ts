import useData from "./useData";
import { Games } from "./useGames";

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description: string;
  metacritic: string;
}

interface Props {
  game: Games;
}

const useGameDetails = ({ game }: Props) =>
  useData<GameDetails>(
    "/games",
    {
      params: {
        id: game.id,
      },
    },
    [game.id]
  );
