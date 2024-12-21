"use client";

import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
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

interface Props {
  tools: AITool[]; // Accept filtered tools as a prop
}

const AIToolsList: React.FC<Props> = ({ tools }) => {
  if (tools.length === 0) {
    return <Text textAlign="center">لا توجد أدوات متاحة حالياً</Text>;
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
      {tools.map((tool) => (
        <GridItem key={tool.tool_id}>
          <AIToolCard tool={tool} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default AIToolsList;
