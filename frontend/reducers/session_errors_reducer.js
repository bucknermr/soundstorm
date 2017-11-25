import {
  RECEIVE_CURRENT_ARTIST,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_CURRENT_ARTIST:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
