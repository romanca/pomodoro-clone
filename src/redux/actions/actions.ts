import { ADD_POMODORO_TIME } from "./actionTypes";

export const addPomodoroTime = (payload: TState) => {
  return {
    type: ADD_POMODORO_TIME,
    payload,
  };
};
