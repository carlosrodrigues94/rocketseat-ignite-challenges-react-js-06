import { Image, Flex, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const CarouselChooseLocation: React.FC = () => {
  return (
    <Flex as="div" w="100%" mt="50" mb="50" justifyContent="center">
      <Link href="/europe">
        <ChakraLink
          display="flex"
          justifyContent="center"
          color="gray.100"
          w="100%"
        >
          <Image src="/carousel.svg" width="80%" />
        </ChakraLink>
      </Link>
    </Flex>
  );
};

export default CarouselChooseLocation;
