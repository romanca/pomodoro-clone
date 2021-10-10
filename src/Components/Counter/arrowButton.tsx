import { Box, Button } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";
import Icon from "../Icon";

interface IProps {
  isActive: boolean;
  handleStopCounter?: () => void;
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
            width: theme.space[24],
            height: theme.space[24],
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            fontSize: theme.space[25],
            position: "absolute",
            right: theme.space[26],
            top: theme.space[27],
            background: "transparent",
            marginTop: -175,
            marginRight: -490,
          }}
        >
          <Icon name="rightArrow" />
          <Box
            sx={{
              width: theme.space[21],
              height: theme.space[21],
              fontSize: theme.space[28],
              marginTop: theme.space[29],
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              transform: "rotate(90deg)",
              position: "absolute",
              marginLeft: theme.space[30],
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
