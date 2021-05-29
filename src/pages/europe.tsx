import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import EuropeBanner from "../components/EuropeBanner";
import { EuropeDetails } from "../components/Details";
import Cities from "../components/Cities";

export default function Europe() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      w="100"
      minH="100vh"
      display="flex"
      overflowY="auto"
      maxWidth="1440px"
      m="0 auto"
    >
      <Header />
      <EuropeBanner />
      <EuropeDetails />
      <Cities />
    </Flex>
  );
}
