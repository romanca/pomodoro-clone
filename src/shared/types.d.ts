interface TState {
  count: number;
}

type Action = { type: typeof ADD_POMODORO_TIME; payload: number };
type RootState = ReturnType<typeof rootReducer>;
