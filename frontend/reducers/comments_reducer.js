import { RECEIVE_TRACK_DETAIL } from '../actions/track_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {

  let newState;

  switch (action.type) {
    case RECEIVE_TRACK_DETAIL:
      return action.comments;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
