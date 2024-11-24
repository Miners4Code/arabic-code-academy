import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    justifyContent: "center",
    fontSize: {
      base: "secondary.mb",
      md: "secondary.tb",
      lg: "secondary.dt",
    },
  },
  variants: {
    size: {
      lg: {
        rounded: {
          base: "tiny",
          md: "normal",
          lg: "normal",
        },
        width: {
          base: "200px",
          md: "330px",
          lg: "310px",
        },
        height: {
          base: "60px",
          md: "85px",
          lg: "80px",
        },
      },
      md: {
        rounded: {
          base: "tiny",
          md: "normal",
          lg: "normal",
        },
        width: {
          base: "150px",
          md: "234px",
          lg: "200px",
        },
        height: {
          base: "50px",
          md: "70px",
          lg: "60px",
        },
      },
      sm: {
        rounded: {
          base: "tiny",
          md: "tiny",
          lg: "tiny",
        },
        width: {
          base: "100px",
          md: "160px",
          lg: "140px",
        },
        height: {
          base: "40px",
          md: "50px",
          lg: "44px",
        },
      },
    },
  },
});
