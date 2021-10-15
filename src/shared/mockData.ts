import bell from "../assets/bell.mp3";
import bird from "../assets/bird.mp3";
import fall from "../assets/fall.mp3";
import kitchen from "../assets/kitchen.mp3";
import popUp from "../assets/popUp.mp3";

export const items: TCounter[] = [
  {
    title: "Pomodoro",
    value: "pomodoroCounter",
    id: 1,
  },
  {
    title: "Short Break",
    value: "shortBreakCounter",
    id: 2,
  },
  {
    title: "Long Break",
    value: "longBreakCounter",
    id: 3,
  },
];

export const soundOptions: TSound[] = [
  {
    title: "Bell",
    value: bell,
    id: 1,
  },
  {
    title: "Bird",
    value: bird,
    id: 2,
  },
  {
    title: "Fall",
    value: fall,
    id: 3,
  },
  {
    title: "Kitchen",
    value: kitchen,
    id: 4,
  },
  {
    title: "popUp",
    value: popUp,
    id: 5,
  },
];
