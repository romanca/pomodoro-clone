import React from "react";
import { Box, Button, Flex } from "theme-ui";
import theme from "../../shared/theme";
import LongBreakCounter from "./longBreakCounter";
import PomodoroCounter from "./pomodoroCounter";
import ShortBreakCounter from "./shortBreakCounter";

interface IProps {
  valueSelect: string;
  toggleContent: any;
}

const Counter: React.FC<IProps> = ({ valueSelect, toggleContent }) => {
  const switchColors =
    valueSelect === "pomodoroCounter"
      ? theme.colors.danger[1]
      : valueSelect === "shortBreakCounter"
      ? "rgb(70, 142, 145)"
      : valueSelect === "longBreakCounter"
      ? "rgb(67, 126, 168)"
      : theme.colors.danger[1];

  const switchCounters = () => {
    if (valueSelect === "pomodoroCounter") {
      return <PomodoroCounter />;
    } else if (valueSelect === "shortBreakCounter") {
      return <ShortBreakCounter />;
    }
    return <LongBreakCounter />;
  };

  const getValueHandler = (value: string) => () => {
    toggleContent(value);
  };

  return (
    <Box
      sx={{
        width: theme.space[14],
        margin: "auto",
        marginTop: theme.space[15],
        borderRadius: theme.borderRadiuss[1],
      }}
    >
      <Box
        sx={{
          background: theme.colors.whites[9],
          padding: [theme.space[16], theme.space[17], theme.space[18]],
          borderRadius: theme.borderRadiuss[1],
          marginBottom: theme.space[9],
          width: theme.space[8],
        }}
      >
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={getValueHandler("pomodoroCounter")}
            sx={{
              border: "none",
              outline: "none",
              borderRadius: theme.borderRadiuss[0],
              fontFamily: "ArialRoundedMTBold",
              fontSize: theme.fontSizes[1],
              height: theme.space[21],
              cursor: "pointer",
              background:
                valueSelect === "pomodoroCounter"
                  ? theme.colors.blacks[11]
                  : "transparent",
              color: theme.colors.whites[8],
              opacity: theme.opacities[1],
              fontWeight: theme.fontWeights[9],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Pomodoro
          </Button>
          <Button
            onClick={getValueHandler("shortBreakCounter")}
            sx={{
              border: "none",
              color: theme.colors.whites[8],
              borderRadius: theme.borderRadiuss[0],
              fontFamily: "ArialRoundedMTBold",
              fontSize: theme.fontSizes[1],
              height: theme.space[21],
              cursor: "pointer",
              fontWeight: theme.fontWeights[9],
              background:
                valueSelect === "shortBreakCounter"
                  ? theme.colors.blacks[11]
                  : "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Short Break
          </Button>
          <Button
            onClick={getValueHandler("longBreakCounter")}
            sx={{
              border: "none",
              outline: "none",
              color: theme.colors.whites[8],
              borderRadius: theme.borderRadiuss[0],
              fontFamily: "ArialRoundedMTBold",
              fontSize: theme.fontSizes[1],
              height: theme.space[21],
              cursor: "pointer",
              background:
                valueSelect === "longBreakCounter"
                  ? theme.colors.blacks[11]
                  : "transparent",
              fontWeight: theme.fontWeights[9],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Long Break
          </Button>
        </Flex>
        {switchCounters()}
        <Button
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
          START
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
