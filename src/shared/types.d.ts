interface TState {
  count: number;
  short: number;
  long: number;
}

type Action = {
  type: typeof ADD_POMODORO_TIME;
  payload: number;
};
type RootState = ReturnType<typeof rootReducer>;