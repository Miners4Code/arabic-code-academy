"use client";

import Carousel from "@/components/Carousel/Carousel";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Products: React.FC = () => {
  const cources = ["course1", "course2", "course3", "course4"];

  return (
    <Box
      as={"section"}
      paddingY={{
        base: "50px",
        md: "100px",
        lg: "80xp",
      }}
      paddingX={{
        base: "20px",
        md: "80px",
        lg: "50px",
      }}
    >
      <Flex
        flexDir={{
          base: "column-reverse",
          lg: "row",
        }}
        justify={{
          base: "center",
          lg: "space-between",
        }}
        align={{
          base: "center",
          lg: "center",
        }}
        gap={{
          base: "50px",
        }}
        paddingX={{
          base: "16",
          md: "28",
        }}
        marginX={"3"}
        marginBottom={{
          base: "20px",
          md: "20px",
          lg: "50px",
        }}
      >
        <Flex
          justify={{
            base: "center",
            md: "flex-start",
          }}
          width={{
            base: "100%",
            lg: "auto",
          }}
        >
          <Heading
            as={"h3"}
            textAlign={{
              base: "center",
              md: "right",
            }}
            width={"fit"}
            borderBottom={"solid"}
            borderColor={"aca_primary.500"}
            paddingEnd={"20px"}
            paddingStart={{
              base: "20px",
              md: "0",
            }}
          >
            الدورات التدريبية
          </Heading>
        </Flex>
        <Box
          // TODO: this box will be replaced with the search form when it gets merged to the dev branch
          width={{
            base: "300px",
            md: "770px",
            lg: "720px",
          }}
          height={{
            base: "50px",
            md: "75px",
            lg: "65px",
          }}
          borderWidth={"2px"}
          borderColor={"aca_primary.400"}
          rounded={"full"}
        ></Box>
      </Flex>
      <Carousel
        arrowGaps={{
          base: "50px",
          md: "100px",
          lg: "90px",
        }}
        slidesToShow={{
          base: 1,
          md: 2,
          lg: 4,
        }}
      >
        {cources.map((item) => (
          <Box padding={"3"} key={item}>
            <Box
              rounded={"normal"}
              height={"500px"}
              border={"1px"}
              shadow={"aca_shadow.mb"}
            >
              {item}
            </Box>
          </Box>
        ))}
      </Carousel>
      <Flex
        justify={{
          base: "center",
          md: "flex-start",
        }}
        width={{
          base: "100%",
          lg: "auto",
        }}
        marginTop={{
          base: "30px",
          md: "100px",
          lg: "50px",
        }}
        marginBottom={{
          base: "20px",
          md: "20px",
          lg: "50px",
        }}
        marginX={"3"}
        paddingX={{
          base: "16",
          md: "28",
        }}
      >
        <Heading
          as={"h3"}
          textAlign={{
            base: "center",
            md: "right",
          }}
          width={"fit"}
          borderBottom={"solid"}
          borderColor={"aca_primary.500"}
          paddingEnd={"20px"}
          paddingStart={{
            base: "20px",
            md: "0",
          }}
        >
          قريبا
        </Heading>
      </Flex>
      <Carousel
        arrowGaps={{
          base: "50px",
          md: "100px",
          lg: "90px",
        }}
        slidesToShow={{
          base: 1,
          md: 2,
          lg: 4,
        }}
      >
        {cources.map((item) => (
          <Box padding={"3"} key={item}>
            <Box
              rounded={"normal"}
              height={"500px"}
              border={"1px"}
              shadow={"aca_shadow.mb"}
            >
              {item}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Products;
