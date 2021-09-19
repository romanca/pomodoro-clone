import { ADD_POMODORO_TIME } from "./../actions/actionTypes";

const initialState: TState = {
  count: 23,
};

const pomodoroCounter = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_POMODORO_TIME:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default pomodoroCounter;
