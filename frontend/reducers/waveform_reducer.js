import { SEEK_WAVEFORM } from '../actions/audio_actions';
import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';
import merge from 'lodash/merge';

// Format:
// { trackId: trackPosition }

const waveformReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;

  switch(action.type) {
    case RECEIVE_TRACK:
      newState = merge({}, state);
      newState[action.track.id] = 0;
      return newState;
    case RECEIVE_TRACKS:
      newState = merge({}, state);
      Object.keys(action.tracks).forEach(id => {
        newState[id] = 0;
      });
      return newState;
    case SEEK_WAVEFORM:
      newState = merge({}, state);
      newState[action.trackId] = action.position;
      return newState;
    default:
      return state;
  }
};

export default waveformReducer;