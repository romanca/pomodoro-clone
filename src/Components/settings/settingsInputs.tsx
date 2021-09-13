import { Box, Flex } from "@theme-ui/components";
import React from "react";
import LongBreakInput from "./longBreakInput";
import PomodoroInput from "./pomodoroInput";
import ShortBreakInput from "./shortBreakInput";

const SettingsInputs = () => {
  return (
    <Flex
      sx={{
        borderTop: "1px solid rgba(182, 165, 166, 0.2)",
        borderBottom: "1px solid rgba(182, 165, 166, 0.2)",
        padding: "20px 0px",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "ArialRoundedMTBold",
      }}
    >
      <Flex
        sx={{
          color: "rgb(85, 85, 85)",
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        Time (minutes)
      </Flex>
      <Flex
        sx={{
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <PomodoroInput />
        <ShortBreakInput />
        <LongBreakInput />
      </Flex>
    </Flex>
  );
};

export default SettingsInputs;
