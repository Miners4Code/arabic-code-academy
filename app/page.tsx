import Navbar from "@/sections/Navbar/Navbar"
import Hero from "@/sections/Hero/Hero";
import ArabicLang from "@/sections/ArabicLang/ArabicLang";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as={"main"} flexDir={"column"} gap={"32px"} gridRowStart={2}>
      <Navbar />
      <Hero />
      <ArabicLang />
    </Flex>
  );
}