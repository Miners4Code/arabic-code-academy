"use client";

import { Button, Fieldset, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { Field } from "../ui/field";
import SearchLens from "@/icons/SearchLens";

interface Props {
  //searchQuery?: string;
  //setSearchQuery?: (value: string) => void;
  placeholder: string;
}

const SearchForm: React.FC<Props> = ({
  placeholder,
  //searchQuery,
  //setSearchQuery,
}) => {
  //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  setSearchQuery(event.target.value);
  //};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //console.log(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root>
        <Fieldset.Content>
          <Field>
            <Flex
              width={{
                base: "300px",
                md: "770px",
                lg: "720px",
              }}
            >
              <Input
                height={{
                  base: "50px",
                  md: "75px",
                  lg: "65px",
                }}
                width={{
                  base: "82%",
                  md: "90%",
                }}
                placeholder={placeholder}
                borderWidth={"2px"}
                borderColor={"aca_primary.400"}
                borderLeft={"none"}
                roundedLeft={"none"}
                roundedRight={"full"}
                paddingX={"10px"}
                //value={searchQuery}
                //onChange={handleChange}
              />

              <Flex
                height={{
                  base: "50px",
                  md: "75px",
                  lg: "65px",
                }}
                width={{
                  base: "18%",
                  md: "10%",
                }}
                justify={"center"}
                align={"center"}
                borderWidth={"2px"}
                borderColor={"aca_primary.400"}
                roundedLeft={"full"}
              >
                <Button
                  type="submit"
                  width={"inherit"}
                  height={"inherit"}
                  bgColor={"transparent"}
                >
                  <SearchLens />
                </Button>
              </Flex>
            </Flex>
          </Field>
        </Fieldset.Content>
      </Fieldset.Root>
    </form>
  );
};

export default SearchForm;
