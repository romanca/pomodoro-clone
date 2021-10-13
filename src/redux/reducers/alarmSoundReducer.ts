import { soundOptions } from "../../shared/mockData";
import { soundActions } from "../actions/actions";
import {
  FETCH_SOUNDS,
  SET_SOUND_TITLE,
  SET_SOUND_VALUE,
} from "../actions/actionTypes";

const initialSoundState = {
  sounds: soundOptions,
  value: null,
  title: null,
};

// export type TSoundState = typeof initialSoundState;
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

    case SET_SOUND_VALUE:
      return {
        ...state,
        value: action.payload,
      };

    case SET_SOUND_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    default:
      return state;
  }
};

export default alarmSound;
