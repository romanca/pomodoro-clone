import { Box, Input } from "@theme-ui/components";
import React from "react";

const PomodoroInput = () => {
  return (
    <Box sx={{ width: "98px" }}>
      <Box
        sx={{
          display: "block",
          fontSize: "14px",
          color: "rgb(187, 187, 187)",
          marginBottom: "4px",
        }}
      >
        Pomodoro
      </Box>
      <Input
        value={25}
        sx={{
          borderRadius: "4px",
          background: "rgb(239, 239, 239)",
          fontSize: "16px",
          padding: "10px",
          boxShadow: "none",
          border: "none",
          color: "rgb(85, 85, 85)",
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "ArialRoundedMTBold",
        }}
      />
    </Box>
  );
};

export default PomodoroInput;
