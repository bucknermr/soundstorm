import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  RECEIVE_TRACK_DETAIL,
  TRACK_LOADING,
  TRACK_INDEX_LOADING
} from '../actions/track_actions';
import merge from 'lodash/merge';


const defaultState = {
  trackDetail: false,
  trackIndex: false
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
    default:
      return state;
  }
};

export default loadingReducer;
