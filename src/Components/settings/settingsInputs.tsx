import { Box } from "@theme-ui/components";
import React from "react";
import LongBreakInput from "./longBreakInput";
import PomodoroInput from "./pomodoroInput";
import ShortBreakInput from "./shortBreakInput";

const SettingsInputs = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(182, 165, 166, 0.2)",
        borderBottom: "1px solid rgba(182, 165, 166, 0.2)",
        padding: "20px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "ArialRoundedMTBold",
      }}
    >
      <Box
        sx={{
          color: "rgb(85, 85, 85)",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        Time (minutes)
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <PomodoroInput />
        <ShortBreakInput />
        <LongBreakInput />
      </Box>
    </Box>
  );
};

export default SettingsInputs;
