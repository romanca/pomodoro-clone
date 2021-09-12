import { Box, Button, Flex } from "@theme-ui/components";
import React from "react";
import Icon from "../Icon";

interface IProps {
  isActive: boolean;
  handleStopCounter: () => void;
}

const ArrowButton: React.FC<IProps> = ({ isActive, handleStopCounter }) => {
  return (
    <Box>
      {isActive ? (
        <Button
          onClick={handleStopCounter}
          sx={{
            cursor: "pointer",
            border: "none",
            width: 58,
            height: 58,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            fontSize: 35,
            position: "absolute",
            right: 540,
            top: 335,
            background: "transparent",
          }}
        >
          <Icon name="rightArrow" />
          <Box
            sx={{
              width: 28,
              height: 28,
              fontSize: 23,
              marginTop: 0,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              transform: "rotate(90deg)",
              position: "absolute",
              marginLeft: 3,
            }}
          >
            <Icon name="minus" />
          </Box>
        </Button>
      ) : null}
    </Box>
  );
};

export default ArrowButton;
