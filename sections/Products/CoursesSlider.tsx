import Carousel from "@/components/Carousel/Carousel";
import SearchForm from "@/components/SearchForm/SearchForm";
import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CoursesSlider = ({ children }: Props) => {
  return (
    <>
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
        <SearchForm placeholder="مقدمة لمحرك األعاب اليونتي" />
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

export default CoursesSlider;
