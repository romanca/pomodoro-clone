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
  toggleContent: (content: string) => void;
  handleFalseACtive: () => void;
  handleActiveTrue: () => void;
}

const PomodoroCounter: React.FC<IProps> = ({
  valueSelect,
  isActive,
  handleStopCounter,
  toggleContent,
  handleFalseACtive,
  handleActiveTrue,
}) => {
  const time = useSelector((state: RootState) => state.pomodoroCounter);
  const { seconds, minutes, startCounter, stopCounter } = useCounter(
    0,
    time.count
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
    if (minutes === 0 && seconds === 55) {
      setTimeout(() => {
        stopCounter();
        handleFalseACtive();
      });
      toggleContent("shortBreakCounter");
    } else {
      return counter();
    }
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

export default PomodoroCounter;
