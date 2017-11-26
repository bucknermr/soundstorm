import { PLAY_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const _nullAudio = {
  track: null
};

const audioReducer = (state = _nullAudio, action) => {
  Object.freeze(state);

  switch(action.type) {
    case PLAY_TRACK:
      return { track: action.track, playing: true };
    default:
      return state;
  }
};

export default audioReducer;
