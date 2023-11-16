import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem area={"nav"} bgColor={"fuchsia"}>
          <Navbar />
        </GridItem>
      </Show>
      <GridItem area={"aside"}></GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
