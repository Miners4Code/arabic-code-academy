import Carousel from "@/components/Carousel/Carousel";
import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UpcomingSlider = ({ children }: Props) => {
  return (
    <>
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
        {children}
      </Carousel>
    </>
  );
};

export default UpcomingSlider;
