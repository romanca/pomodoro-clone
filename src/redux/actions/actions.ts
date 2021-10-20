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

export const pomodoroCounterActions = {
  addPomodoroTime: (payload: TState) =>
    ({ type: ADD_POMODORO_TIME, payload } as const),
  autoBreak: () => ({ type: AUTO_BREAK } as const),
  switchCounter: (payload: string) =>
    ({ type: SWITCH_COUNTER, payload } as const),
  setSelectedCounter: (payload: string) =>
    ({ type: SET_SELECTED_COUNTER, payload } as const),
  fetchItems: () => ({ type: FETCH_ITEMS } as const),
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
