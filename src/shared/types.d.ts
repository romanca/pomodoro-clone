interface TState {
  count: number;
  short: number;
  long: number;
  autoBreak: boolean;
  counter: string;
}

type TValue = "pomodoroCounter" | "shortBreakCounter" | "longBreakCounter";

type Action = {
  type: typeof ADD_POMODORO_TIME;
  payload: number;
};

type RootState = ReturnType<typeof rootReducer>;
