import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[] | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
        setLoading(false);
      });

    //return () => controller.abort();
  }, []);

  return { genre, error, isLoading };
};

export default useGenre;
