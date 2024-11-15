import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface Props {
  children?: React.ReactNode;
  text: string;
  src?: string | StaticImageData;
  fontType: "primary" | "secondary";
}

const SimpleCard: React.FC<Props> = ({ children, text, src, fontType }) => {
    return (
      <Flex direction="column" 
            alignItems="center" 
            marginBottom={"65px"}
            
>
        <Box backgroundColor={"aca_primary.400"} 
             padding={"40px"} 
             marginTop={"60px"} 
             marginBottom={"40px"} 
             marginX={"100px"} 
             rounded={"50%"}>
          {src && (
            <Image
              src={src}
              alt={text}
              width={60}
              height={55}
            />
          )}
        </Box>
        <Text fontSize={{
          base: `${fontType}.mb`,
          md: `${fontType}.tb`,
          lg: `${fontType}.dt`,
          }}
          marginBottom={"40px"}>{text}</Text>
        {children}
      </Flex>
    );
  };

export default SimpleCard;
