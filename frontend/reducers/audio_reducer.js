import { PLAY_TRACK, SEEK_TRACK } from '../actions/audio_actions';
import merge from 'lodash/merge';

const _nullAudio = {
  track: null,
  trackId: null,
  position: 0,
};

const audioReducer = (state = _nullAudio, action) => {
  Object.freeze(state);

  let newState;

  switch(action.type) {
    case PLAY_TRACK:
      return action.payload;
    case SEEK_TRACK:
      if (action.trackId === state.trackId) {
        newState = merge({}, state);
        newState.position = action.position;
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default audioReducer;
