import ACAButton from "@/components/ACAButton/ACAButton";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import datLang from "@/assets/dat-lang.png";
import Document from "@/icons/Document";

const ArabicLang = () => {
  return (
    <Flex
      bgImg={"url(/arabic-language-section.png)"}
      flexDir={{
        base: "column",
        lg: "row",
      }}
      paddingY={"300px"}
      paddingX={{
        base: "50px",
        md: "200px",
        lg: "300px"
      }}
      justify={"center"}
      gap={{
        base: "10px",
        md: "40px",
        lg: "0px",
      }}
    >
      <Box
        width="fit"
        marginLeft={{
          base: "0px",
          lg: "150px",
        }}
      >
        <Flex justify={"center"} flexDir={"column"} align={"center"}>
          <Image src={datLang} alt="Arabic language" />
          <Heading
            as={"h2"}
            fontSize={{
              base: "40px",
              md: "50px",
              lg: "80px",
            }}
            color={"white"}
            textAlign={"center"}
            marginTop={"80px"}
          >
            لغة ضاد
          </Heading>
        </Flex>
      </Box>
      <Box
        width={{
          base: "100%",
          lg: "50%",
        }}
      >
        <Text
          color={"white"}
          fontSize={"27px"}
          lineHeight={"40px"}
          fontWeight={"700"}
          marginBottom={"40px"}
          textAlign={{
            base: "center",
            lg: "start",
          }}
        >
          في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى تعليمي
          يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة العربية. ومن
          هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي شخص، سواء
          كان مبتدئًا أو محترفًا، من فهمها واستيعابها بسهولة. نحرص على أن تكون
          الشروحات دقيقة وشاملة، مع توفير أمثلة عملية تساعد المتعلمين على تطبيق
          ما يتعلمونه بشكل فعّال.
        </Text>
        <Box
          width={"fit"}
          marginX={{
            base: "auto",
            lg: "0px",
          }}
        >
          <ACAButton
            size="md"
            weight="700"
            text="لغة ضاد"
            bg="tomato"
            icon={<Document />}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default ArabicLang;
