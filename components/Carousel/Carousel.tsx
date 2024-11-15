"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import CarouselArrow from "./CarouselArrow";

interface Props {
  children: React.ReactNode;
  buttonsColor?: "white" | "primary";
  slidesToShow: {
    lg: number;
    md: number;
    base: number;
  };
  arrowGaps: {
    base: string;
    md: string;
    lg: string;
  };
}

const Carousel: React.FC<Props> = ({
  children,
  buttonsColor = "primary",
  slidesToShow,
  arrowGaps,
}) => {
  return (
    <Box paddingX={{
      base: "16",
      md: "28"
    }}>
      <Slider
        infinite
        speed={500}
        slidesToScroll={1}
        slidesToShow={slidesToShow.lg}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slidesToShow.md,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToShow.base,
            },
          },
        ]}
        nextArrow={
          <CarouselArrow
            dir="right"
            buttonColor={buttonsColor}
            arrowsGap={arrowGaps}
          />
        }
        prevArrow={
          <CarouselArrow
            dir="left"
            buttonColor={buttonsColor}
            arrowsGap={arrowGaps}
          />
        }
        rtl
      >
        {children}
      </Slider>
    </Box>
  );
};

export default Carousel;
