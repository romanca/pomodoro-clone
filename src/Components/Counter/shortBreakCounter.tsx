import React from "react";
import { Box, Flex } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import theme from "../../shared/theme";
import ArrowButton from "./arrowButton";
import CounterButton from "./counterButton";
import { useSelector } from "react-redux";

interface IProps {
  valueSelect: string;
  isActive: boolean;
  handleStopCounter: () => void;
  handleFalseACtive: () => void;
  toggleContent: (content: string) => void;
  handleActiveTrue: () => void;
  autoBreakSwitch: boolean;
}

const ShortBreakCounter: React.FC<IProps> = ({
  valueSelect,
  isActive,
  handleStopCounter,
  handleFalseACtive,
  toggleContent,
  handleActiveTrue,
  autoBreakSwitch,
}) => {
  const time = useSelector((state: RootState) => state.pomodoroCounter);
  const { seconds, startCounter, minutes, stopCounter } = useCounter(
    0,
    time.short
  );
  

  const counter = () => {
    return (
      <Flex>
        <Box>{minutes < 10 ? "0" + minutes : minutes}</Box>
        <Box>:</Box>
        <Box>{seconds < 10 ? "0" + seconds : seconds}</Box>
      </Flex>
    );
  };

  const conditionalHandler = () => {
    if (autoBreakSwitch) {
      if (minutes === 0 && seconds === 0) {
        handleFalseACtive();
        toggleContent("longBreakCounter");
      }
      if (minutes !== 0 && seconds === 0) {
        setTimeout(() => {
          handleActiveTrue();
          startCounter();
        }, 1000);
      }
    } else {
      if (minutes === 0 && seconds === 0) {
        handleFalseACtive();
        toggleContent("longBreakCounter");
      }
    }
    return counter();
  };

  return (
    <Flex
      sx={{
        fontSize: theme.space[31],
        fontWeight: "bold",
        marginTop: theme.space[9],
        fontFamily: "ArialRoundedMTBold",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {conditionalHandler()}
      <CounterButton
        startCounter={startCounter}
        stopCounter={stopCounter}
        valueSelect={valueSelect}
        isActive={isActive}
        handleFalseACtive={handleFalseACtive}
        handleActiveTrue={handleActiveTrue}
      />
      <ArrowButton isActive={isActive} handleStopCounter={handleStopCounter} />
    </Flex>
  );
};

export default ShortBreakCounter;
