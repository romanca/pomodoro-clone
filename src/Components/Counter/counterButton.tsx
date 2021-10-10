import { Button, Flex } from "@theme-ui/components";
import React from "react";
import { useSelector } from "react-redux";
import theme from "../../shared/theme";

interface IProps {
  startCounter: () => void;
  isActive: boolean;
  stopCounter: () => void;
  handleFalseACtive?: () => void;
  handleActiveTrue: () => void;
}

const CounterButton: React.FC<IProps> = ({
  startCounter,
  isActive,
  stopCounter,
  handleFalseACtive,
  handleActiveTrue,
}) => {
  const valueSelect = useSelector(
    (state: RootState) => state.pomodoroCounter.counter
  );
  const rawCounterData = useSelector(
    (state: RootState) => state.pomodoroCounter.data
  );

  const switchColors =
    valueSelect === rawCounterData[0].value
      ? theme.colors.danger[1]
      : valueSelect === rawCounterData[1].value
      ? theme.colors.success[2]
      : valueSelect === rawCounterData[2].value
      ? theme.colors.primary[1]
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
      <Button
        onClick={!isActive ? handleStartCounter : handleStopCounter}
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
        {!isActive ? "START" : "STOP"}
      </Button>
    </Flex>
  );
};

export default CounterButton;
