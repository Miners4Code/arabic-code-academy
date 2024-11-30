import ArabicLang from "@/sections/ArabicLang/ArabicLang";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDir={"column"} gap={"32px"} gridRowStart={2}>
      <ArabicLang />
    </Flex>
  );
}
