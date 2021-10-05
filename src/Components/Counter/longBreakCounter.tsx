import React from "react";
import { Box, Flex } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import theme from "../../shared/theme";
import ArrowButton from "./arrowButton";
import CounterButton from "./counterButton";
import { useDispatch, useSelector } from "react-redux";
import { switchCounter } from "../../redux/actions/actions";

interface IProps {
  isActive: boolean;
  handleStopCounter: () => void;
  handleFalseACtive: () => void;
  handleActiveTrue: () => void;
  autoBreakSwitch: boolean;
}

const ShortBreakCounter: React.FC<IProps> = ({
  isActive,
  handleStopCounter,
  handleFalseACtive,
  handleActiveTrue,
  autoBreakSwitch,
}) => {
  const time = useSelector((state: RootState) => state.pomodoroCounter);
  const { seconds, startCounter, minutes, stopCounter } = useCounter(
    0,
    time.long
  );
  const dispatch = useDispatch();

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
        dispatch(switchCounter("pomodoroCounter"));
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
        dispatch(switchCounter("pomodoroCounter"));
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
        position: "relative",
      }}
    >
      {conditionalHandler()}
      <CounterButton
        startCounter={startCounter}
        stopCounter={stopCounter}
        isActive={isActive}
        handleFalseACtive={handleFalseACtive}
        handleActiveTrue={handleActiveTrue}
      />
      <ArrowButton isActive={isActive} handleStopCounter={handleStopCounter} />
    </Flex>
  );
};

export default ShortBreakCounter;
