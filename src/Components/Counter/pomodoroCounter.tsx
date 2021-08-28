import React from "react";
import { Box } from "theme-ui";

const PomodoroCounter = () => {
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
      25:00
    </Box>
  );
};

export default PomodoroCounter;
