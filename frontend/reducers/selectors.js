import values from 'lodash/values';
import merge from 'lodash/merge';

export const tracksArray = state => {
  return values(state.entities.tracks);
};

export const commentsArray = state => {
  const comments = values(state.entities.comments);
  comments.forEach(comment => {
    comment.createdAt = Date.parse(comment.createdAt);
  });
  return comments;
};
