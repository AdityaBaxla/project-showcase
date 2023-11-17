import React from "react";
import useGenre from "../hooks/useGenre";
import {
  HStack,
  Link,
  List,
  ListItem,
  VStack,
  Text,
  Image,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  if (error) return null;

  if (isLoading)
    return (
      <Box paddingY={5}>
        <Spinner></Spinner>
      </Box>
    );
  return (
    <>
      <List>
        {data &&
          data.map((genreObj) => (
            <ListItem paddingY={1} key={genreObj.id}>
              <HStack>
                {" "}
                <Image
                  blockSize={"30px"}
                  borderRadius={"10px"}
                  src={getCroppedImageUrl(genreObj.image_background)}
                />
                <Text fontSize={"lg"}>{genreObj.name}</Text>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
