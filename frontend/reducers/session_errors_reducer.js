import {
  RECEIVE_CURRENT_ARTIST,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_ARTIST:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
