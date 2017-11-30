import { RECEIVE_TRACK_DETAIL } from '../actions/track_actions';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK_DETAIL:
      return action.comments;
    default:
      return state;
  }
};

export default commentsReducer;
