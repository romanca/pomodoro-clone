import { Box } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";
import LongBreakInput from "./longBreakInput";
import PomodoroInput from "./pomodoroInput";
import ShortBreakInput from "./shortBreakInput";

const SettingsInputs = () => {
  return (
    <Box
      sx={{
        borderTop: `${theme.space[36]} solid ${theme.colors.danger[2]}`,
        borderBottom: `${theme.space[36]} solid ${theme.colors.danger[2]}`,
        paddingTop: theme.space[16],
        paddingBottom: theme.space[16],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "ArialRoundedMTBold",
      }}
    >
      <Box
        sx={{
          color: theme.colors.greys[2],
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
          marginTop: theme.space[35],
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
