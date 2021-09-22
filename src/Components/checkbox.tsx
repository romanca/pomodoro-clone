import { Box, Flex } from "@theme-ui/components";
import React from "react";
import theme from "../shared/theme";

const Checkbox = () => {
  return (
    <Flex
      sx={{
        cursor: "pointer",
        width: theme.space[5],
        height: theme.space[4],
        borderRadius: theme.borderRadiuss[3],
        position: "relative",
        alignItems: "center",
        background: theme.colors.success[1],
      }}
    >
      <Box
        sx={{
          position: "absolute",
          // left: "2px",
          right: theme.space[19],
          width: theme.space[21],
          height: theme.space[21],
          borderRadius: theme.borderRadiuss[3],
          background: "white",
        }}
      ></Box>
    </Flex>
  );
};

export default Checkbox;
