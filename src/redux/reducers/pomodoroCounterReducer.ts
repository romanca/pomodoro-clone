import { ADD_POMODORO_TIME, AUTO_BREAK } from "./../actions/actionTypes";

const initialState: TState = {
  count: 25,
  short: 5,
  long: 15,
  autoBreak: false,
};

const pomodoroCounter = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POMODORO_TIME:
      return {
        ...state,
        ...action.payload,
      };
    case AUTO_BREAK:
      return {
        ...state,
        autoBreak: !state.autoBreak,
      };
    default:
      return state;
  }
};

export default pomodoroCounter;
