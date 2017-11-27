import { PLAY_TRACK, SEEK_TRACK } from '../actions/audio_actions';
import merge from 'lodash/merge';

const _nullAudio = {
  track: null,
  position: 0,
};

const audioReducer = (state = _nullAudio, action) => {
  Object.freeze(state);

  let newState;

  switch(action.type) {
    case PLAY_TRACK:
      newState = merge({}, state);
      newState.track = action.track;
      newState.position = action.position;
      return newState;
    case SEEK_TRACK:
      if (action.trackId === state.track.id) {
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
