import { RECEIVE_TRACK_ERRORS,
  CLEAR_TRACK_ERRORS,
  RECEIVE_TRACK,
  RECEIVE_TRACKS
} from '../actions/track_actions';

const trackErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    case CLEAR_TRACK_ERRORS:
    case RECEIVE_TRACK:
    case RECEIVE_TRACKS:
      return [];
    default:
      return state;
  }
};

export default trackErrorsReducer;
