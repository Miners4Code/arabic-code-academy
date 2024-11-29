import Hero from "@/sections/Hero/Hero";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as={"main"} flexDir={"column"} gap={"32px"} gridRowStart={2}>
      <Hero />
    </Flex>
  );
}
