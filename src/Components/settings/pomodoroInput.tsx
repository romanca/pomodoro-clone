import { Box } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";
import CounterInput from "../counterInput";

interface IProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const PomodoroInput: React.FC<IProps> = ({ value, onChange, name }) => {
  return (
    <Box sx={{ width: theme.space[32] }}>
      <Box
        sx={{
          display: "block",
          fontSize: theme.space[33],
          color: theme.colors.greys[0],
          marginBottom: theme.space[34],
        }}
      >
        Pomodoro
      </Box>
      <CounterInput value={value} onChange={onChange} name={name} />
    </Box>
  );
};

export default PomodoroInput;
