import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import { Box } from "@chakra-ui/react";
import eduLogo from "@/assets/eduLogo.png";
import bookIcon from "@/assets/bookIcon.png";
import testQuiz from "@/assets/testQuiz.png";
import SimpleCard from "@/components/SimpleCard/SimpleCard";
import ACAButton from "@/components/ACAButton/ACAButton";
import More from "@/icons/More"
import type { StaticImageData } from "next/image";

export const Resources = () => {
  // Define the CardItem interface
  interface CardItem {
    id: string;
    src: string|StaticImageData;
    text: string;
    button: {
      text: string;
      icon?: React.ReactNode;
      bg: "tomato" | "cyan";
      weight: "400" | "500" | "600" | "700" | "900";
      size: "lg" | "md" | "sm";
    };
  }

  // Define the card array
  const card: CardItem[] = [
    {
      id: "card1",
      src: eduLogo,
      text: "قاموس المصطلحات التقنية",
      button: {
        text: "المسارات التعليمية",
        icon: <More/>, // Replace with the actual icon component if available
        bg: "cyan",
        weight: "900",
        size: "md",
      },
    },
    {
      id: "card2",
      src: bookIcon,
      text: "دروس وانماط الميدجورني",
      button: {
        text: "المسارات التعليمية",
        icon: <More/>, // Replace with the actual icon component if available
        bg: "cyan",
        weight: "900",
        size: "md",
      },
    },
    {
      id: "card3",
      src: testQuiz,
      text: "بنك الأسئلة التقنية",
      button: {
        text: "المسارات التعليمية",
        icon: <More/>, // Replace with the actual icon component if available
        bg: "cyan",
        weight: "900",
        size: "md",
      },
    },
  ];

  return (
    <Box
      width={"60%"}
      rounded={"normal"}
      marginX={"auto"}
      marginTop={10}
      shadow="0px 1px 20px 3px #00000040"
    >
      <Carousel
        slidesToShow={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        arrowGaps={{
          base: "50px",
          md: "100px",
          lg: "200px",
        }}
      >
        {card.map((item) => (
          <Box key={item.id}>
            <SimpleCard text={item.text} src={item.src} fontType="another">
              <ACAButton
                text={item.button.text}
                icon={item.button.icon}
                bg={item.button.bg}
                weight={item.button.weight}
                size={item.button.size}
              />
            </SimpleCard>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Resources;
