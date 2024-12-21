"use client";

import React, { useEffect, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import AIToolsList from "@/components/AIToolsList/AIToolsList";
import SearchForm from "@/components/SearchForm/SearchForm";
import { getAITools, searchAITools } from "@/api/ai-tools";

const AITools = () => {
  const [tools, setTools] = useState<[]>([]); // Store tools (all or filtered)
  const [isSearching, setIsSearching] = useState(false); // Track search state

  // Fetch and display all AI tools on initial render
  useEffect(() => {
    const fetchAllTools = async () => {
      const result = await getAITools();

      if (result.status === "success") {
        setTools(result.data.data); // Set the initial list of tools
      } else {
        console.error(result.error);
      }
    };

    fetchAllTools();
  }, []);

  // Handle search and fetch filtered tools
  const handleSearch = async (query: string) => {
    if (!query) {
      // If the search query is empty, fetch all tools again
      setIsSearching(false);
      const result = await getAITools();

      if (result.status === "success") {
        setTools(result.data.data);
      } else {
        console.error(result.error);
      }
    } else {
      setIsSearching(true);
      const result = await searchAITools(query);

      if (result.status === "success") {
        setTools(result.data.data); // Set the filtered tools
      } else {
        console.error(result.error);
      }
      setIsSearching(false); // Stop the loading state after the search is done
    }
  };

  return (
    <Box py={"150px"}>
      <SearchForm placeholder="...chatgpt" onSearch={handleSearch} />
      {isSearching ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </Box>
      ) : (
        <AIToolsList tools={tools} /> // Pass tools to AIToolsList
      )}
    </Box>
  );
};

export default AITools;
