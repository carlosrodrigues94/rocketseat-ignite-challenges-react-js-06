import React from "react";
import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export const EuropeDetails: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="article"
      display="flex"
      padding="12 16"
      justifyContent="space-evenly"
      alignItems="center"
      minH="250"
    >
      <Text as="p" fontSize={!isWideVersion ? "sm" : "x-large"} w="50%">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Image src="/europe_details.svg" width="30%" />
    </Flex>
  );
};
