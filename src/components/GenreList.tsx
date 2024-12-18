import React from "react";
import useGenres from "../hooks/useGenres";
import { Text, HStack, Image, List, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={data.image_background}
            />
            <Text fontSize="lg">{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
