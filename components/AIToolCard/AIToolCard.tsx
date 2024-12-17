import More from "@/icons/More";
import { Box, Card, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { AITool } from "../AIToolsList/AIToolsList";
import ACAButton from "../ACAButton/ACAButton";
import HeartFill from "@/icons/HeartFill";
import Heart from "@/icons/Heart";

interface AIToolCardProps {
  tool: AITool;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ tool }) => {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      rounded={"none"}
      border={"none"}
      shadow={"lg"}
      w={"400px"}
      pos={"relative"}
    >
      <Flex
        pos={"absolute"}
        top={"15px"}
        left={"15px"}
        w={"50px"}
        h={"50px"}
        justify={"center"}
        align={"center"}
        rounded={"full"}
        shadow={"xl"}
        border={"none"}
      >
        {tool.isFav ? <HeartFill /> : <Heart />}
      </Flex>
      <Box
        w={{
          base: "280px",
          md: "400px",
        }}
        h={{
          base: "130px",
          md: "200px",
        }}
      />
      <Card.Body gap="2">
        <Card.Title
          dir="ltr"
          color={"aca_primary.400"}
          fontSize={{
            base: "16px",
            md: "23px",
          }}
          fontWeight={"700"}
          mt={"20px"}
          ms={"20px"}
        >
          {tool.title}
        </Card.Title>
        <Box dir="ltr" ms={"20px"}>
          {tool.tags.map((tag) => (
            <Text key={tag} display={"inline"} color={"aca_primary.400"}>
              {tag}
            </Text>
          ))}
        </Box>
        <Card.Description
          textAlign={{
            base: "center",
            md: "start",
          }}
          fontSize={{
            base: "14px",
            md: "17px",
          }}
          color={"aca_primary.400"}
          p={"40px"}
        >
          <Text h={"45px"}>{tool.description}</Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer as={Flex} gap="2" justifyContent={"center"} mb={"15px"}>
        <ACAButton
          size={"sm"}
          text="المزيد"
          bg="cyan"
          weight="700"
          icon={<More />}
        />
      </Card.Footer>
    </Card.Root>
  );
};

export default AIToolCard;
