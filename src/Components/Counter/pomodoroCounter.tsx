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
  handleActive: () => void;
  handleStopCounter: () => void;
}

const PomodoroCounter: React.FC<IProps> = ({
  valueSelect,
  isActive,
  handleActive,
  handleStopCounter,
}) => {
  const time = useSelector((state: RootState) => state.pomodoroCounter);
  const { seconds, minutes, startCounter } = useCounter(0, time.count);

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
      <Flex>
        <Box>{minutes < 10 ? "0" + minutes : minutes}</Box>
        <Box>:</Box>
        <Box>{seconds < 10 ? "0" + seconds : seconds}</Box>
      </Flex>
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

export default PomodoroCounter;
