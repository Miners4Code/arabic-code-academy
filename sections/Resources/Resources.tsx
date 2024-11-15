import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import { Box } from "@chakra-ui/react";

export const Resources = () => {
  const card = [
    { id: 1, name: "Test1" },
    { id: 2, name: "Test2" },
    { id: 3, name: "Test3" },
  ];
  return (
    <Box
      width={"50%"}
      marginX={"auto"}
      marginY={"100px"}
      shadow="0px 4px 20px 10px #00000040"
    >
      <Carousel
        slidesToShow={{
          lg: 3,
          md: 2,
          base: 1,
        }}
        arrowGaps={{
          base: "10%",
          md: "20%",
          lg: "40%",
        }}
      >
        
       {/* {{card.map((item) => (
          <Box key={item.id}>{item.name}</Box>
        ))}} */}
      </Carousel>
    </Box>
  );
};
