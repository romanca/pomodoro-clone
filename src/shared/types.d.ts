interface TState {
  count: number;
  short: number;
  long: number;
  autoBreak: boolean;
  counter: string;
  selectedCounter: string;
  data: TCounter[];
}

type Action = {
  type: typeof ADD_POMODORO_TIME;
  payload: number;
};

interface TCounter {
  title: string;
  value: string;
  id: number;
}

type RootState = ReturnType<typeof rootReducer>;
