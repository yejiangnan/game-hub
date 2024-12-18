import React from "react";
import useGenres from "../hooks/useGenres";
import { Text, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(data.image_background)}
            />
            <Text fontSize="lg">{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
