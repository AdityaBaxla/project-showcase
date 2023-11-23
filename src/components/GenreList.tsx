import useGenre, { Genre } from "../hooks/useGenre";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Box,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
                {genreObj.name == selectedGenre?.name ? (
                  <Button
                    onClick={() => onSelectGenre(genreObj)}
                    fontSize={"lg"}
                    variant={"link"}
                    colorScheme="pink"
                    whiteSpace={"pre-line"}
                    textAlign={"left"}
                  >
                    {genreObj.name}
                  </Button>
                ) : (
                  <Button
                    onClick={() => onSelectGenre(genreObj)}
                    fontSize={"lg"}
                    variant={"link"}
                    whiteSpace={"pre-line"}
                    textAlign={"left"}
                  >
                    {genreObj.name}
                  </Button>
                )}
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
