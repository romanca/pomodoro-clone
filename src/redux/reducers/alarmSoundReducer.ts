import { soundOptions } from "../../shared/mockData";
import { soundActions } from "../actions/actions";
import {
  FETCH_SOUNDS,
  SET_PLAYING_SOUND,
  SET_SOUND,
  SET_START_PLAYING_SOUND,
  SET_STOP_PLAYING_SOUND,
} from "../actions/actionTypes";

const initialSoundState = {
  sounds: soundOptions,
  isPlaying: false,
  sound: soundOptions[0],
};

export type TSoundAction = ReturnType<
  typeof soundActions[keyof typeof soundActions]
>;

const alarmSound = (state = initialSoundState, action: TSoundAction) => {
  switch (action.type) {
    case FETCH_SOUNDS:
      return {
        ...state,
        sounds: state.sounds,
      };

    case SET_SOUND:
      return {
        ...state,
        sound: action.payload,
      };

    case SET_PLAYING_SOUND:
      return {
        ...state,
        isPlaying: action.payload,
      };

    case SET_START_PLAYING_SOUND:
      return {
        ...state,
        isPlaying: action.payload,
      };

    case SET_STOP_PLAYING_SOUND:
      return {
        ...state,
        isPlaying: action.payload,
      };

    default:
      return state;
  }
};

export default alarmSound;
