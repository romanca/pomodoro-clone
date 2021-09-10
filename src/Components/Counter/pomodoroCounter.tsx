import React from "react";
import { Box, Flex, Button } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import theme from "../../shared/theme";

interface IProps {
  valueSelect: string;
}

const PomodoroCounter: React.FC<IProps> = ({ valueSelect }) => {
  const { seconds, minutes, startCounter, isActive }: any = useCounter(0, 11);
  const switchColors =
    valueSelect === "pomodoroCounter"
      ? theme.colors.danger[1]
      : valueSelect === "shortBreakCounter"
      ? "rgb(70, 142, 145)"
      : valueSelect === "longBreakCounter"
      ? "rgb(67, 126, 168)"
      : theme.colors.danger[1];
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
      <Button
        onClick={startCounter}
        sx={{
          cursor: "pointer",
          border: "none",
          outline: "none",
          margin: "20px 0px 0px",
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
        {isActive ? "STOP" : "START"}
      </Button>
    </Flex>
  );
};

export default PomodoroCounter;
