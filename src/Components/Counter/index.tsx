import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex } from "theme-ui";
import {
  pomodoroCounterActions,
  soundActions,
} from "../../redux/actions/actions";
import theme from "../../shared/theme";
import SwitchValueButton from "../switchValueButton";
import LongBreakCounter from "./longBreakCounter";
import PomodoroCounter from "./pomodoroCounter";
import ShortBreakCounter from "./shortBreakCounter";

const Counter = () => {
  const [isActive, setIsActive] = React.useState(false);
  const dispatch = useDispatch();
  const autoBreakSwitch = useSelector(
    (state: RootState) => state.pomodoroCounter.autoBreak
  );
  const valueSelect = useSelector(
    (state: RootState) => state.pomodoroCounter.counter
  );
  const selectedCounter = useSelector(
    (state: RootState) => state.pomodoroCounter.selectedCounter
  );
  const rawCounterData = useSelector(
    (state: RootState) => state.pomodoroCounter.data
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
    if (valueSelect === rawCounterData[0].value) {
      return (
        <PomodoroCounter
          isActive={isActive}
          handleStopCounter={handleStopCounter}
          handleFalseACtive={handleFalseACtive}
          handleActiveTrue={handleActiveTrue}
        />
      );
    } else if (valueSelect === rawCounterData[1].value) {
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

  const getValueHandler = React.useCallback(
    (value: string) => () => {
      if (isActive) {
        const alertMessage = window.confirm(
          "The timer is still running, are you sure you want to switch?"
        );
        if (alertMessage) {
          dispatch(pomodoroCounterActions.switchCounter(value));
          dispatch(pomodoroCounterActions.setSelectedCounter(value));
          handleFalseACtive();
          dispatch(soundActions.setStopPlayingSound(false));
        }
      } else {
        dispatch(pomodoroCounterActions.switchCounter(value));
        dispatch(pomodoroCounterActions.setSelectedCounter(value));
        dispatch(soundActions.setStopPlayingSound(false));
      }
    },
    [dispatch, isActive]
  );

  const handleStopCounter = () => {
    if (isActive) {
      const alertMessage = window.confirm(
        "Are you sure you wanto stop the counter?"
      );
      if (alertMessage && valueSelect === rawCounterData[0].value) {
        dispatch(pomodoroCounterActions.switchCounter(rawCounterData[1].value));
        dispatch(
          pomodoroCounterActions.setSelectedCounter(rawCounterData[1].value)
        );
        dispatch(soundActions.setStopPlayingSound(false));
        handleActive();
      } else {
        dispatch(pomodoroCounterActions.switchCounter(rawCounterData[0].value));
        dispatch(
          pomodoroCounterActions.setSelectedCounter(rawCounterData[0].value)
        );
        dispatch(soundActions.setStopPlayingSound(false));
        handleActive();
      }
    }
  };

  const renderCounterData = React.useCallback(() => {
    return rawCounterData.map((item: TCounter) => (
      <SwitchValueButton
        key={item.id}
        title={item.title}
        selected={item.value === selectedCounter}
        onClick={getValueHandler(item.value)}
      />
    ));
  }, [getValueHandler, rawCounterData, selectedCounter]);

  return (
    <Box
      sx={{
        width: theme.space[52],
        marginTop: theme.space[15],
        borderRadius: theme.borderRadiuss[1],
        "@media screen and (max-width: 768px)": {
          width: theme.space[8],
        },
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
          {renderCounterData()}
        </Flex>
        {switchCounters()}
      </Box>
    </Box>
  );
};

export default Counter;
