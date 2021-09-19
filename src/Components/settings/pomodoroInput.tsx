import { Box, Input } from "@theme-ui/components";
import React from "react";
import theme from "../../shared/theme";
import { useDispatch, useSelector } from "react-redux";
import { addPomodoroTime } from "../../redux/actions/actions";

const PomodoroInput = () => {
  const counter = useSelector(
    (state: RootState) => state.pomodoroCounter.count
  );
  const [countTime, setCountTime] = React.useState(counter);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setCountTime(counter);
  }, [counter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountTime(Number(e.target.value));
  };

  return (
    <Box sx={{ width: theme.space[32] }}>
      <Box
        sx={{
          display: "block",
          fontSize: theme.space[33],
          color: theme.colors.greys[0],
          marginBottom: theme.space[34],
        }}
      >
        Long Break
      </Box>
      <Input
        type="number"
        value={countTime}
        onChange={handleChange}
        sx={{
          borderRadius: theme.space[34],
          background: theme.colors.greys[1],
          fontSize: theme.space[3],
          padding: theme.space[35],
          boxShadow: "none",
          border: "none",
          color: theme.colors.greys[2],
          width: theme.space[8],
          boxSizing: "border-box",
          fontFamily: "ArialRoundedMTBold",
        }}
      />
      <button onClick={() => dispatch(addPomodoroTime(countTime))}>add</button>
    </Box>
  );
};

export default PomodoroInput;
