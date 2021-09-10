import React from "react";

const useCounter = (initSeconds: number, initMinutes: number) => {
  const [seconds, setSeconds] = React.useState(initSeconds);
  const [minutes, setMinutes] = React.useState(initMinutes);
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const startCounter = () => {
    setIsActive(!isActive);
  };

  const resetCounter = () => {
    setSeconds(5);
    setMinutes(1);
    setIsActive(false);
  };

  React.useEffect(() => {
    var interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds: number) => seconds - 1);
        setMinutes((minutes: number) => minutes);
      }, 1000);
    }
    if (isActive && minutes !== 0 && seconds === 0) {
      setSeconds(59);
      setMinutes((minutes: number) => minutes - 1);
    }
    if (isActive && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      setIsActive(!isActive);
      setSeconds(5);
      setMinutes(1);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return { seconds, minutes, isActive, startCounter };
};

export default useCounter;
