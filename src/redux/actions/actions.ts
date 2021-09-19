import { ADD_POMODORO_TIME } from "./actionTypes";

export const addPomodoroTime = (count: number) => {
  return { type: ADD_POMODORO_TIME, payload: count };
};
