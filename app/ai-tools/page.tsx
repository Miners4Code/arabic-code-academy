"use client";

import React from 'react'
import { Box } from '@chakra-ui/react'
import AIToolsList from '@/components/AIToolsList/AIToolsList';

const AITools = () => {
  return (
    <Box py={"150px"}>
      <AIToolsList />
    </Box>
  )
}

export default AITools;
