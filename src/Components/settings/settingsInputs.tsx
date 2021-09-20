import { Box } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";
import LongBreakInput from "./longBreakInput";
import PomodoroInput from "./pomodoroInput";
import ShortBreakInput from "./shortBreakInput";

interface IProps {
  values: TState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SettingsInputs: React.FC<IProps> = ({ values, onChange }) => {
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
        <PomodoroInput value={values.count} onChange={onChange} name="count" />
        <ShortBreakInput
          value={values.short}
          onChange={onChange}
          name="short"
        />
        <LongBreakInput value={values.long} onChange={onChange} name="long" />
      </Box>
    </Box>
  );
};

export default SettingsInputs;
