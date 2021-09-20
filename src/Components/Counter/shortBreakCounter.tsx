import React from "react";
import { Box, Flex } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import theme from "../../shared/theme";
import ArrowButton from "./arrowButton";
import CounterButton from "./counterButton";
import {useSelector} from "react-redux"

interface IProps {
  valueSelect: string;
  handleActive: () => void;
  isActive: boolean;
  handleStopCounter: () => void;
}

const ShortBreakCounter: React.FC<IProps> = ({
  valueSelect,
  handleActive,
  isActive,
  handleStopCounter,
}) => {
  const time = useSelector((state: RootState) => state.pomodoroCounter);
  const { seconds, startCounter, minutes } = useCounter(0, time.short);

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

export default ShortBreakCounter;
