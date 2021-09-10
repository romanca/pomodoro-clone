import React from "react";
import { Box, Flex } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import CounterButton from "./counterButton";

interface IProps {
  valueSelect: string;
}

const PomodoroCounter: React.FC<IProps> = ({ valueSelect }) => {
  const { seconds, minutes, startCounter, isActive }: any = useCounter(0, 11);

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
      />
    </Flex>
  );
};

export default PomodoroCounter;
