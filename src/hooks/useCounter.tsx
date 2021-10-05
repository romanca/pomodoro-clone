import React from "react";

const useCounter = (initSeconds: number, initMinutes: number) => {
  const [seconds, setSeconds] = React.useState(initSeconds);
  const [minutes, setMinutes] = React.useState(initMinutes);
  const [start, setStart] = React.useState(false);

  const startCounter = () => {
    setStart(true);
  };

  const stopCounter = () => {
    setStart(false);
  };

  React.useEffect(() => {
    setSeconds(initSeconds);
    setMinutes(initMinutes);
  }, [initMinutes, initSeconds]);

  React.useEffect(() => {
    var interval: any = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds((seconds: number) => seconds - 1);
        setMinutes((minutes: number) => minutes);
      }, 1000);
    }
    if (start && minutes !== 0 && seconds === 0) {
      setSeconds(59);
      setMinutes((minutes: number) => minutes - 1);
    }
    if (start && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      setStart(false);
      setSeconds(0);
      setMinutes(0);
    }
    return () => clearInterval(interval);
  }, [start, seconds, minutes]);

  return {
    seconds,
    minutes,
    start,
    startCounter,
    stopCounter,
  };
};

export default useCounter;
