import React from "react";

const useCounter = (initSeconds: number, initMinutes: number) => {
  const [seconds, setSeconds] = React.useState(initSeconds);
  const [minutes, setMinutes] = React.useState(initMinutes);
  const [start, setStart] = React.useState<boolean>(false);

  const startCounter = () => {
    setStart(!start);
  };

  const resetCounter = () => {
    setSeconds(5);
    setMinutes(1);
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
      setStart(!start);
      setSeconds(5);
      setMinutes(1);
    }
    return () => clearInterval(interval);
  }, [start, seconds, minutes]);

  return { seconds, minutes, start, startCounter };
};

export default useCounter;
