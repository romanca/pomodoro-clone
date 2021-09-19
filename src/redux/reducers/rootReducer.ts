import { combineReducers } from "redux";

import pomodoroCounter from "./pomodoroCounterReducer";

const rootReducer = combineReducers({
  pomodoroCounter,
});

export default rootReducer;
