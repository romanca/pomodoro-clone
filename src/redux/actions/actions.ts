import {
  ADD_POMODORO_TIME,
  AUTO_BREAK,
  FETCH_ITEMS,
  SET_SELECTED_COUNTER,
  SWITCH_COUNTER,
} from "./actionTypes";

export const addPomodoroTime = (payload: TState) => {
  return {
    type: ADD_POMODORO_TIME,
    payload,
  };
};

export const autoBreak = () => {
  return { type: AUTO_BREAK };
};

export const switchCounter = (payload: string) => {
  return {
    type: SWITCH_COUNTER,
    payload,
  };
};

export const setSelectedCounter = (payload: string) => {
  return {
    type: SET_SELECTED_COUNTER,
    payload,
  };
};

export const fetchItems = () => {
  return {
    type: FETCH_ITEMS,
  };
};
