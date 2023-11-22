import useData from "./useData";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () =>
  useData<Platforms>("/platforms/lists/parents");
