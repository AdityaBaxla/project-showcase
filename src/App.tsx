import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem area={"nav"} bg={"fuchsia"}>
          <Navbar />
        </GridItem>
      </Show>
      <GridItem area={"aside"} bg={"darkturquoise"}>
        {" "}
        aside
      </GridItem>
      <GridItem area={"main"} bg={"steelblue"}>
        main
      </GridItem>
    </Grid>
  );
};

export default App;
