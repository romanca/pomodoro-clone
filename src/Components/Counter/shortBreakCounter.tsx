import React from "react";
import { Box, Flex } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import theme from "../../shared/theme";
import ArrowButton from "./arrowButton";
import CounterButton from "./counterButton";
import { useSelector } from "react-redux";

interface IProps {
  valueSelect: string;
  handleActive: () => void;
  isActive: boolean;
  handleStopCounter: () => void;
  handleFalseACtive: () => void;
  toggleContent: (content: string) => void;
}

const ShortBreakCounter: React.FC<IProps> = ({
  valueSelect,
  handleActive,
  isActive,
  handleStopCounter,
  handleFalseACtive,
  toggleContent,
}) => {
  const time = useSelector((state: RootState) => state.pomodoroCounter);
  const { seconds, startCounter, minutes } = useCounter(0, time.short);

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
    if (minutes === 0 && seconds === 0) {
      handleFalseACtive();
      toggleContent("longBreakCounter");
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
        valueSelect={valueSelect}
        isActive={isActive}
        handleActive={handleActive}
      />
      <ArrowButton isActive={isActive} handleStopCounter={handleStopCounter} />
    </Flex>
  );
};

export default ShortBreakCounter;
