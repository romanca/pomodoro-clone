import React from "react";
import LongBreakCounter from "../Components/Counter/longBreakCounter";
import PomodoroCounter from "../Components/Counter/pomodoroCounter";
import ShortBreakCounter from "../Components/Counter/shortBreakCounter";

const useToggleContent = () => {
  const [valueSelect, setValueSelect] =
    React.useState<string>("pomodoroCounter");

  const toggleContent = (e: any) => {
    setValueSelect(e.target.value);
  };

  const switchContent = (value: string) => {
    switch (value) {
      case "pomodoroCounter":
        return <PomodoroCounter />;
      case "shortBreakCounter":
        return <ShortBreakCounter />;
      case "longBreakCounter":
        return <LongBreakCounter />;
      default:
        return null;
    }
  };

  return {
    valueSelect,
    setValueSelect,
    toggleContent,
    switchContent,
  };
};
export default useToggleContent;
