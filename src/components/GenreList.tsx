import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(data.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(data)}
                fontSize="lg"
                variant="link"
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
