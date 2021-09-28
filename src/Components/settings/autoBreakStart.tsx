import { Box, Flex } from "@theme-ui/components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../shared/theme";
import CheckboxInput from "../checkbox";
import Checkbox from "../checkbox";

const AutoBreakStart = () => {
  return (
    <Flex
      sx={{
        borderTop: [theme.borders[0], theme.colors.danger[2]],
        paddingBottom: theme.space[9],
        paddingTop: theme.space[9],
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Flex
        sx={{
          width: theme.space[8],
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Flex
          sx={{
            color: theme.colors.greys[2],
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          Auto start Breaks?
        </Flex>
        <Box>
          <CheckboxInput />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AutoBreakStart;
