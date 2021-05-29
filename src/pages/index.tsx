import { Flex } from "@chakra-ui/layout";
import { Banner } from "../components/Banner";
import CarouselChooseLocation from "../components/CarouselChooseLocation";
import { Header } from "../components/Header";
import TextChooseLocation from "../components/TextChooseLocation";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex
      justifyContent="flex-start"
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
      <Banner />
      <TravelTypes />
      <TextChooseLocation />
      <CarouselChooseLocation />
    </Flex>
  );
}
