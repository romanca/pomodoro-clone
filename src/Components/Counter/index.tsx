import React from "react";
import { Box, Button, Flex } from "theme-ui";
import theme from "../../shared/theme";
import LongBreakCounter from "./longBreakCounter";
import PomodoroCounter from "./pomodoroCounter";
import ShortBreakCounter from "./shortBreakCounter";

interface IProps {
  valueSelect: string;
  toggleContent: (content: string) => void;
}

const Counter: React.FC<IProps> = ({ valueSelect, toggleContent }) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const handleActive = () => {
    setIsActive((current) => !current);
  };

  const handleFalseACtive = () => {
    setIsActive(false);
  };

  const switchCounters = () => {
    if (valueSelect === "pomodoroCounter") {
      return (
        <PomodoroCounter
          valueSelect={valueSelect}
          isActive={isActive}
          handleActive={handleActive}
          handleStopCounter={handleStopCounter}
          toggleContent={toggleContent}
          handleFalseACtive={handleFalseACtive}
        />
      );
    } else if (valueSelect === "shortBreakCounter") {
      return (
        <ShortBreakCounter
          valueSelect={valueSelect}
          handleActive={handleActive}
          isActive={isActive}
          handleStopCounter={handleStopCounter}
          toggleContent={toggleContent}
          handleFalseACtive={handleFalseACtive}
        />
      );
    }
    return (
      <LongBreakCounter
        valueSelect={valueSelect}
        handleActive={handleActive}
        isActive={isActive}
        handleStopCounter={handleStopCounter}
        toggleContent={toggleContent}
        handleFalseACtive={handleFalseACtive}
      />
    );
  };

  const getValueHandler = (value: string) => () => {
    if (isActive) {
      const alertMessage = window.confirm(
        "The timer is still running, are you sure you want to switch?"
      );
      if (alertMessage) {
        toggleContent(value);
        handleActive();
      }
    } else {
      toggleContent(value);
    }
  };

  const handleStopCounter = () => {
    if (isActive) {
      const alertMessage = window.confirm(
        "Are you sure you wanto stop the counter?"
      );
      if (alertMessage && valueSelect === "pomodoroCounter") {
        toggleContent("shortBreakCounter");
        handleActive();
      } else {
        toggleContent("pomodoroCounter");
        handleActive();
      }
    }
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
      </Box>
    </Box>
  );
};

export default Counter;
