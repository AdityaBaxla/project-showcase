import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, Link, List, ListItem, VStack } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <>
      <List>
        {data &&
          data.map((genreObj) => (
            <ListItem key={genreObj.id}> {genreObj.name}</ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
