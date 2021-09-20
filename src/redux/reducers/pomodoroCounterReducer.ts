import { ADD_POMODORO_TIME } from "./../actions/actionTypes";

const initialState: TState = {
  count: 25,
  short: 5,
  long: 15,
};

const pomodoroCounter = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POMODORO_TIME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default pomodoroCounter;
