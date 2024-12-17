"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { getAITools } from "@/api/ai-tools";
import AIToolCard from "../AIToolCard/AIToolCard";

export interface AITool {
  tool_id: number;
  title: string;
  pricing: string[];
  subject: string[];
  tags: string[];
  isFav: boolean;
  imageURL: string;
  description: string;
}

const AIToolsList = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAITools()
      .then((response) => {
        console.log(response.data);
        setTools(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError("خطأ اثناء استرجاع البيانات");
      });
  }, []);

  if (error) {
    return (
      <Box>
        <Text color={"red.500"} textAlign={"center"} mt={"100px"}>
          {error}
        </Text>
      </Box>
    );
  }


  return (
    <Grid
      templateColumns={{
        lg: "repeat(4, 400px)",
        md: "repeat(2, 400px)",
        sm: "repeat(1, 280px)",
      }}
      gapX={{
        base: 0,
        md: "24px"
      }}
      gapY={{
        base: "50px",
        md: "80px",
        lg: "60px"
      }}
      mx={"auto"}
    >
      {tools.length > 0 ? (
        tools.map((tool) => (
          <GridItem key={tool.tool_id}>
            <AIToolCard tool={tool} />
          </GridItem>
        ))
      ) : (
        <Text textAlign="center">تحميل...</Text>
      )}
    </Grid>
  );
};

export default AIToolsList;
