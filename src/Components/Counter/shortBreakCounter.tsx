import React from "react";
import { Box, Flex } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import ArrowButton from "./arrowButton";
import CounterButton from "./counterButton";

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
  const { seconds, startCounter, minutes } = useCounter(0, 5);

  return (
    <Flex
      sx={{
        fontSize: 120,
        fontWeight: "bold",
        marginTop: 20,
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
