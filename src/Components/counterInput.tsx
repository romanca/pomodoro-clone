import { Input } from "@theme-ui/components";
import React from "react";
import theme from "../shared/theme";

interface IProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const CounterInput: React.FC<IProps> = ({ value, onChange, name }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      name={name}
      type="number"
      min="0"
      sx={{
        borderRadius: theme.space[34],
        background: theme.colors.greys[1],
        fontSize: theme.space[3],
        padding: theme.space[35],
        boxShadow: "none",
        border: "none",
        outline: "none",
        color: theme.colors.greys[2],
        width: theme.space[47],
        boxSizing: "border-box",
        fontFamily: "ArialRoundedMTBold",
      }}
    />
  );
};

export default CounterInput;
