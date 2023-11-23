import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" 
               "main"`,
        lg: `"nav nav" 
             "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"} bgColor={"fuchsia"}>
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={3}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack paddingY={4} spacing={5} marginLeft={3}>
          <PlatformSelector
            onSelectPlatform={(plat) => setSelectedPlatform(plat)}
            selectedPlatform={selectedPlatform}
          ></PlatformSelector>
          <SortSelector onSelectOrder={(order) => setSelectedOrder(order)} />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
