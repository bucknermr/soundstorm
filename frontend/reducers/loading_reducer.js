import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  RECEIVE_TRACK_ERRORS,
  RECEIVE_TRACK_DETAIL,
  TRACK_LOADING,
  TRACK_INDEX_LOADING,
  TRACK_SAVING
} from '../actions/track_actions';
import {
  ARTIST_LOADING,
  RECEIVE_ARTIST,
  ARTIST_SAVING,
  UPDATE_ARTIST,
  RECEIVE_ARTIST_ERRORS
} from '../actions/artist_actions';
import merge from 'lodash/merge';


const defaultState = {
  trackDetail: false,
  trackIndex: false,
  artistDetail: false,
  saving: false
};

const loadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case TRACK_LOADING:
      return merge({}, state, { trackDetail: true });
    case RECEIVE_TRACK_DETAIL:
      return merge({}, state, { trackDetail: false });
    case TRACK_INDEX_LOADING:
      return merge({}, state, { trackIndex: true });
    case RECEIVE_TRACKS:
      return merge({}, state, { trackIndex: false });
    case ARTIST_LOADING:
      return merge({}, state, { trackIndex: true, artistDetail: true });
    case RECEIVE_ARTIST:
      return merge({}, state, { trackIndex: false, artistDetail: false });
    case TRACK_SAVING:
    case ARTIST_SAVING:
      return merge({}, state, { saving: true });
    case RECEIVE_TRACK:
    case RECEIVE_TRACK_ERRORS:
    case UPDATE_ARTIST:
    case RECEIVE_ARTIST_ERRORS:
      return merge({}, state, { saving: false });
    default:
      return state;
  }
};

export default loadingReducer;
