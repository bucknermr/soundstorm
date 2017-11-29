import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;

  switch(action.type) {
    case RECEIVE_TRACKS:
    case RECEIVE_ARTIST:
      return action.tracks;
    case RECEIVE_TRACK:
      newState = merge({}, state);
      newState[action.track.id] = action.track;
      return newState;
    case REMOVE_TRACK:
      newState = merge({}, state);
      delete newState[state.trackId];
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
