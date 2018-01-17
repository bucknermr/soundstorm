import {
  RECEIVE_ARTIST_ERRORS,
  CLEAR_ARTIST_ERRORS
} from '../actions/artist_actions';

const artistErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ARTIST_ERRORS:
      return action.errors;
    case CLEAR_ARTIST_ERRORS:
      return [];
    default:
      return state;
  }
};

export default artistErrorsReducer;
