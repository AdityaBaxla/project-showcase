import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenre";
import useData from "./useData";
import { Platforms } from "./usePlatforms";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface FetchGamesResponse {
  count: number;
  results: Games[];
}

interface Props {
  selectedGenre: Genre | null;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platforms | null,
  selectedOrder: string
) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        ordering: selectedOrder,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedOrder]
  );

export default useGames;
