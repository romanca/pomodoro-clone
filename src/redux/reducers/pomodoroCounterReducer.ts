import { items } from "../../shared/mockData";
import {
  ADD_POMODORO_TIME,
  AUTO_BREAK,
  FETCH_ITEMS,
  SET_SELECTED_COUNTER,
  SWITCH_COUNTER,
} from "./../actions/actionTypes";

const initialState: TState = {
  count: 25,
  short: 5,
  long: 15,
  autoBreak: false,
  counter: "pomodoroCounter",
  selectedCounter: "pomodoroCounter",
  data: items,
};

const pomodoroCounter = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_POMODORO_TIME:
      return {
        ...state,
        ...(action.payload as {}),
      };

    case AUTO_BREAK:
      return {
        ...state,
        autoBreak: !state.autoBreak,
      };

    case SWITCH_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };

    case SET_SELECTED_COUNTER:
      return {
        ...state,
        selectedCounter: action.payload,
      };

    case FETCH_ITEMS:
      return {
        ...state,
        data: state.data,
      };

    default:
      return state;
  }
};

export default pomodoroCounter;
