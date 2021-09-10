interface ISettingsModel {
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
}

interface IPomodoroCounter {
  currentTimerMode: "shortBreak" | "longBreak" | "focusTime";
  isRunning: boolean;
  timeOfStart: number;
}

interface IPomodoroLog {
  finnished: boolean;
  startTime: Date;
  endTime: Date;
  totalTime: number;
  estimatedTime: number;
  mode: "shortBreak" | "longBreak" | "focusTime";
}
