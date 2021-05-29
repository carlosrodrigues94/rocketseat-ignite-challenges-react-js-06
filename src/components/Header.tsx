import React from "react";
import { useRouter } from "next/router";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
export const Header: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <Flex
      w="100%"
      as="header"
      h="76"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {asPath === "/europe" && (
        <Link href="/">
          <Image
            src="/go_back.svg"
            width="16px"
            position="absolute"
            left="7%"
          />
        </Link>
      )}
      <Image src="/logo.svg" width="140px" />
    </Flex>
  );
};
