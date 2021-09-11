import { Button } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";

interface IProps {
  valueSelect: string;
  startCounter: any;
  isActive: boolean;
  handleActive: any;
}

const CounterButton: React.FC<IProps> = ({
  valueSelect,
  startCounter,
  isActive,
  handleActive,
}) => {
  const switchColors =
    valueSelect === "pomodoroCounter"
      ? theme.colors.danger[1]
      : valueSelect === "shortBreakCounter"
      ? "rgb(70, 142, 145)"
      : valueSelect === "longBreakCounter"
      ? "rgb(67, 126, 168)"
      : theme.colors.danger[1];

  const handleStartCounter = () => {
    startCounter();
    handleActive();
  };

  return (
    <Button
      onClick={handleStartCounter}
      sx={{
        cursor: "pointer",
        border: "none",
        outline: "none",
        margin: "20px 0px 0px",
        borderRadius: theme.fontSizes[0],
        fontFamily: "ArialRoundedMTBold",
        fontSize: theme.fontSizes[6],
        height: theme.space[22],
        color: switchColors,
        fontWeight: theme.fontWeights[9],
        width: theme.space[23],
        backgroundColor: theme.colors.whites[8],
      }}
    >
      {isActive ? "STOP" : "START"}
    </Button>
  );
};

export default CounterButton;
