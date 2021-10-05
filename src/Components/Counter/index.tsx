import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex } from "theme-ui";
import { switchCounter } from "../../redux/actions/actions";
import theme from "../../shared/theme";
import SwitchValueButton from "../switchValueButton";
import LongBreakCounter from "./longBreakCounter";
import PomodoroCounter from "./pomodoroCounter";
import ShortBreakCounter from "./shortBreakCounter";

const Counter = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const autoBreakSwitch = useSelector(
    (state: RootState) => state.pomodoroCounter.autoBreak
  );
  const valueSelect = useSelector(
    (state: RootState) => state.pomodoroCounter.counter
  );

  const handleActive = () => {
    setIsActive((current) => !current);
  };

  const handleFalseACtive = () => {
    setIsActive(false);
  };

  const handleActiveTrue = () => {
    setIsActive(true);
  };

  const switchCounters = () => {
    if (valueSelect === "pomodoroCounter") {
      return (
        <PomodoroCounter
          isActive={isActive}
          handleStopCounter={handleStopCounter}
          handleFalseACtive={handleFalseACtive}
          handleActiveTrue={handleActiveTrue}
        />
      );
    } else if (valueSelect === "shortBreakCounter") {
      return (
        <ShortBreakCounter
          isActive={isActive}
          handleStopCounter={handleStopCounter}
          handleFalseACtive={handleFalseACtive}
          autoBreakSwitch={autoBreakSwitch}
          handleActiveTrue={handleActiveTrue}
        />
      );
    }
    return (
      <LongBreakCounter
        isActive={isActive}
        handleStopCounter={handleStopCounter}
        handleFalseACtive={handleFalseACtive}
        handleActiveTrue={handleActiveTrue}
        autoBreakSwitch={autoBreakSwitch}
      />
    );
  };

  const getValueHandler = (value: string) => () => {
    if (isActive) {
      const alertMessage = window.confirm(
        "The timer is still running, are you sure you want to switch?"
      );
      if (alertMessage) {
        dispatch(switchCounter(value));
        handleFalseACtive();
      }
    } else {
      dispatch(switchCounter(value));
    }
  };

  const handleStopCounter = () => {
    if (isActive) {
      const alertMessage = window.confirm(
        "Are you sure you wanto stop the counter?"
      );
      if (alertMessage && valueSelect === "pomodoroCounter") {
        dispatch(switchCounter("shortBreakCounter"));
        handleActive();
      } else {
        dispatch(switchCounter("pomodoroCounter"));
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
          <SwitchValueButton
            onClick={getValueHandler("pomodoroCounter")}
            title={"Pomodoro"}
          />
          <SwitchValueButton
            onClick={getValueHandler("shortBreakCounter")}
            title={"Short Break"}
          />
          <SwitchValueButton
            onClick={getValueHandler("longBreakCounter")}
            title={"Long Break"}
          />
        </Flex>
        {switchCounters()}
      </Box>
    </Box>
  );
};

export default Counter;
