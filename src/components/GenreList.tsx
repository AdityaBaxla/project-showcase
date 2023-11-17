import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, Link, List, ListItem, VStack } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { genre, error, isLoading } = useGenre();
  return (
    <>
      <List>
        {genre &&
          genre.map((genreObj) => (
            <ListItem key={genreObj.id}> {genreObj.name}</ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
