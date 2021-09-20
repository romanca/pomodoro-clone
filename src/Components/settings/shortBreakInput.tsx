import { Box, Input } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";

interface IProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const ShortBreakInput: React.FC<IProps> = ({ value, onChange, name }) => {
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
        Short Break
      </Box>
      <Input
        value={value}
        onChange={onChange}
        name={name}
        type="number"
        sx={{
          borderRadius: theme.space[34],
          background: theme.colors.greys[1],
          fontSize: theme.space[3],
          padding: theme.space[35],
          boxShadow: "none",
          border: "none",
          color: theme.colors.greys[2],
          width: theme.space[8],
          boxSizing: "border-box",
          fontFamily: "ArialRoundedMTBold",
        }}
      />
    </Box>
  );
};

export default ShortBreakInput;
