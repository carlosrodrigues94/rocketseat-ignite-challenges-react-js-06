import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Cities: React.FC = () => {
  return (
    <Flex as="div" w="100%" mt="30" mb="50" justifyContent="center">
      <Image src="/cities.svg" />
    </Flex>
  );
};

export default Cities;
