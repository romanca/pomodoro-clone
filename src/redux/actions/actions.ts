import {
  ADD_POMODORO_TIME,
  AUTO_BREAK,
  FETCH_ITEMS,
  FETCH_SOUNDS,
  SET_PLAYING_SOUND,
  SET_SELECTED_COUNTER,
  SET_SOUND,
  SET_START_PLAYING_SOUND,
  SET_STOP_PLAYING_SOUND,
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
  setSound: (payload: any) => ({ type: SET_SOUND, payload } as const),
  setPlayingSound: (payload: boolean) =>
    ({ type: SET_PLAYING_SOUND, payload } as const),
  setStartPlayingSound: (payload: boolean) =>
    ({ type: SET_START_PLAYING_SOUND, payload } as const),
  setStopPlayingSound: (payload: boolean) =>
    ({ type: SET_STOP_PLAYING_SOUND, payload } as const),
};
