import React from "react";
import { Box, Flex } from "theme-ui";
import useCounter from "../../hooks/useCounter";
import theme from "../../shared/theme";
import ArrowButton from "./arrowButton";
import CounterButton from "./counterButton";
import { useDispatch, useSelector } from "react-redux";
import {
  pomodoroCounterActions,
  soundActions,
} from "../../redux/actions/actions";
import SoundPlayer from "./soundPlayer";

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
    time.short
  );
  const dispatch = useDispatch();
  const rawCounterData = useSelector(
    (state: RootState) => state.pomodoroCounter.data
  );
  const sound = useSelector((state: RootState) => state.alarmSound.sound);

  const handleFinishPlayingSound = (value: boolean) => {
    setTimeout(() => {
      dispatch(soundActions.setPlayingSound(false));
    }, 10000);
  };

  const conditionalHandler = () => {
    if (autoBreakSwitch) {
      if (minutes === 0 && seconds === 0) {
        setTimeout(() => {
          dispatch(soundActions.setPlayingSound(false));
        }, 8000);
        setTimeout(() => {
          handleFalseACtive();
          stopCounter();
          dispatch(
            pomodoroCounterActions.switchCounter(rawCounterData[2].value)
          );
          dispatch(
            pomodoroCounterActions.setSelectedCounter(rawCounterData[2].value)
          );
          dispatch(soundActions.setPlayingSound(true));
        }, 1000);
      }
      if (minutes !== 0 && seconds === 0) {
        setTimeout(() => {
          handleActiveTrue();
          startCounter();
        }, 1000);
      }
    } else {
      if (minutes === 0 && seconds === 0) {
        setTimeout(() => {
          dispatch(soundActions.setPlayingSound(false));
        }, 8000);
        setTimeout(() => {
          handleFalseACtive();
          stopCounter();
          dispatch(
            pomodoroCounterActions.switchCounter(rawCounterData[2].value)
          );
          dispatch(
            pomodoroCounterActions.setSelectedCounter(rawCounterData[2].value)
          );
          dispatch(soundActions.setPlayingSound(true));
        }, 1000);
      }
    }
    return (
      <Flex>
        <Box>{minutes < 10 ? "0" + minutes : minutes}</Box>
        <Box>:</Box>
        <Box>{seconds < 10 ? "0" + seconds : seconds}</Box>
      </Flex>
    );
  };

  return (
    <Flex
      sx={{
        fontSize: theme.space[31],
        fontWeight: "bold",
        marginTop: theme.space[9],
        fontFamily: "ArialRoundedMTBold, ArialRoundedMT",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <SoundPlayer
        value={sound.value}
        onFinishedPlaying={() => handleFinishPlayingSound(false)}
      />
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
