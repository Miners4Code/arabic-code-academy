import Navbar from "@/sections/Navbar/Navbar"
import Hero from "@/sections/Hero/Hero";
import ArabicLang from "@/sections/ArabicLang/ArabicLang";
import Footer from "@/sections/Footer/Footer";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as={"main"} flexDir={"column"} gridRowStart={2}>
      <Navbar />
      <Hero />
      <ArabicLang />
      <Footer />
    </Flex>
  );
}
