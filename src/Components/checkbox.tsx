import { Switch } from "@theme-ui/components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTO_BREAK } from "../redux/actions/actionTypes";
import theme from "../shared/theme";

const CheckboxInput = () => {
  const autoSwitch = useSelector(
    (state: RootState) => state.pomodoroCounter.autoBreak
  );
  const dispatch = useDispatch();
 

  const handleChange = () => {
    dispatch({ type: AUTO_BREAK });
  };

  return (
    <Switch
      checked={autoSwitch}
      onChange={handleChange}
      sx={{
        cursor: "pointer",
        background: autoSwitch
          ? theme.colors.success[1]
          : theme.colors.greys[4],
      }}
    />
  );
};

export default CheckboxInput;
