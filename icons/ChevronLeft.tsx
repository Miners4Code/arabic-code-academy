import React from "react";
import { Icon } from "@chakra-ui/react";

interface Props {
  arrowColor: "white" | "primary";
}

const ChevronLeft: React.FC<Props> = ({ arrowColor }) => {
  return (
    <Icon>
      <svg viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.684244 18.5342L14.8454 33.5281C15.5284 34.2513 16.6356 34.2513 17.3185 33.5281L18.9702 31.7793C19.652 31.0574 19.6533 29.8874 18.9731 29.1638L7.75017 17.2248L18.9731 5.28596C19.6533 4.56236 19.652 3.39235 18.9702 2.67043L17.3185 0.921631C16.6356 0.198486 15.5283 0.198486 14.8454 0.921631L0.684319 15.9156C0.00134277 16.6386 0.00134087 17.811 0.684244 18.5342Z"
          fill={arrowColor === "primary" ? "#783BA2" : "#ffffff"}
        />
      </svg>
    </Icon>
  );
};

export default ChevronLeft;
