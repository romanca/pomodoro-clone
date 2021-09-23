import React from "react";

const useToggleContent = () => {
  const [valueSelect, setValueSelect] =
    React.useState<string>("pomodoroCounter");

  React.useEffect(() => {
    setValueSelect("pomodoroCounter");
  }, []);

  const toggleContent = (content: string) => {
    setValueSelect(content);
  };

  return {
    valueSelect,
    setValueSelect,
    toggleContent,
  };
};
export default useToggleContent;
