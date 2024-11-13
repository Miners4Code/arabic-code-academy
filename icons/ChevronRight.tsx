import React from "react";
import { Icon } from "@chakra-ui/react";

interface Props {
  arrowColor: "white" | "primary";
}

const ChevronRight: React.FC<Props> = ({ arrowColor }) => {
  return (
    <Icon
    //fontSize={{
    //  base: "22px",
    //  md: "38px",
    //  lg: "34px",
    //}}
    >
      <svg viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.3158 18.5342L5.15461 33.5281C4.47164 34.2513 3.36436 34.2513 2.68146 33.5281L1.02979 31.7793C0.347983 31.0574 0.346671 29.8874 1.02688 29.1638L12.2498 17.2248L1.02688 5.28596C0.346671 4.56236 0.347983 3.39235 1.02979 2.67043L2.68146 0.921631C3.36443 0.198486 4.47171 0.198486 5.15461 0.921631L19.3157 15.9156C19.9987 16.6386 19.9987 17.811 19.3158 18.5342Z"
          fill={arrowColor === "primary" ? "#783BA2" : "#ffffff"}
        />
      </svg>
    </Icon>
  );
};

export default ChevronRight;
