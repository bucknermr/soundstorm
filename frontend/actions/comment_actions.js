import * as CommentsApiUtil from '../util/comments_api_util';

// Constants

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

// Action creators

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  commentId: comment.id
});

// Thunk action creators

export const createComment = (comment, trackId) => dispatch => (
  CommentsApiUtil.createComment(comment, trackId)
    .then(newComment => dispatch(receiveComment(newComment)))
);

export const deleteComment = (commentId) => dispatch => (
  CommentsApiUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)))
);
