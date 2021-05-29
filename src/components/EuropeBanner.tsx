import { Flex, Image } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const EuropeBanner: React.FC = () => {
  return (
    <Flex
      as="div"
      width="100%"
      flexDir="column"
      display="flex"
      justifyContent="center"
    >
      <Image src="/europe.svg" w="100%" />
    </Flex>
  );
};

export default EuropeBanner;
