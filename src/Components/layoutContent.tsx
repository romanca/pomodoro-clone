import React from "react";
import { Box } from "theme-ui";
import theme from "../shared/theme";
import Counter from "./Counter";
import Header from "./header";

const LayoutContent = () => {
  return (
    <Box
      style={{
        width: theme.space[13],
      }}
    >
      <Header />
      <Box
        sx={{
          padding: "0px 12px",
          margin: "auto",
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box style={{ textAlign: "center", width: "100%" }}>
          <Counter />
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutContent;
