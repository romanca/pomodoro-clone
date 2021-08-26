import React from "react";
import { Box } from "theme-ui";
import theme from "../shared/theme";
import Header from "./header";

const LayoutContent = () => {
  return (
    <Box
      style={{
        width: theme.space[13],
      }}
    >
      <Header />
    </Box>
  );
};

export default LayoutContent;
