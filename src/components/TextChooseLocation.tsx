import React from "react";
import { Text, useBreakpointValue } from "@chakra-ui/react";

// import { Container } from './styles';

const TextChooseLocation: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Text
        as="h4"
        mt="100"
        fontSize={!isWideVersion ? "sm" : "3xl"}
        letterSpacing="2.5px"
      >
        Vamos nessa?
      </Text>
      <Text
        as="h4"
        fontSize={!isWideVersion ? "sm" : "3xl"}
        letterSpacing="2.5px"
      >
        Então escolha seu continente
      </Text>
    </>
  );
};

export default TextChooseLocation;
