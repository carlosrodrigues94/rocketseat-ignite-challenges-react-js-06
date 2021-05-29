import React from "react";
import { Flex, Image } from "@chakra-ui/react";

// import { Container } from './styles';

const TravelTypes: React.FC = () => {
  return (
    <Flex
      as="article"
      display="flex"
      w="100%"
      justifyContent="center"
      position="relative"
    >
      <Image src="/travel_types.svg" w="70%" margin="30px 0" />
      <Flex
        as="span"
        h="1"
        w="80px"
        borderRadius="4"
        position="absolute"
        bottom="-50"
        bg="gray.200"
        mt="20"
      />
    </Flex>
  );
};

export default TravelTypes;
