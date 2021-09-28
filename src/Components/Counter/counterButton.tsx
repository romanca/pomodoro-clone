import { Button, Flex } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";

interface IProps {
  valueSelect: string;
  startCounter: () => void;
  isActive: boolean;
  stopCounter: () => void;
  handleFalseACtive?: () => void;
  handleActiveTrue: () => void;
}

const CounterButton: React.FC<IProps> = ({
  valueSelect,
  startCounter,
  isActive,
  stopCounter,
  handleFalseACtive,
  handleActiveTrue,
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
    handleActiveTrue();
  };

  const handleStopCounter = () => {
    handleFalseACtive && handleFalseACtive();
    stopCounter();
  };

  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isActive ? (
        <Button
          onClick={handleStartCounter}
          sx={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            marginTop: theme.space[16],
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
          START
        </Button>
      ) : (
        <Button
          onClick={handleStopCounter}
          sx={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            marginTop: theme.space[16],
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
          STOP
        </Button>
      )}
    </Flex>
  );
};

export default CounterButton;
