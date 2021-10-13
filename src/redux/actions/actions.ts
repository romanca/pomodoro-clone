import {
  ADD_POMODORO_TIME,
  AUTO_BREAK,
  FETCH_ITEMS,
  FETCH_SOUNDS,
  SET_SELECTED_COUNTER,
  SET_SOUND_TITLE,
  SET_SOUND_VALUE,
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

export const soundActions = {
  fetchSounds: () => ({ type: FETCH_SOUNDS } as const),
  setSoundValue: (payload: string) =>
    ({ type: SET_SOUND_VALUE, payload } as const),
  setSoundTitle: (payload: string) =>
    ({ type: SET_SOUND_TITLE, payload } as const),
};
