import React from "react";
import { Box } from "theme-ui";

const ShortBreakCounter = () => {
  return (
    <Box
      sx={{
        fontSize: 120,
        fontWeight: "bold",
        marginTop: 20,
        fontFamily: "ArialRoundedMTBold",
        color: "white",
      }}
    >
      5:00
    </Box>
  );
};

export default ShortBreakCounter;
