import { combineReducers } from "redux";
import pomodoroCounter from "./pomodoroCounterReducer";
import alarmSound from "./alarmSoundReducer";

const rootReducer = combineReducers({
  pomodoroCounter,
  alarmSound,
});

export default rootReducer;
