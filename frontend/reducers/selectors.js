import values from 'lodash/values';
import merge from 'lodash/merge';

export const tracksArray = state => {
  return values(state.entities.tracks);
};

export const commentsArray = state => {
  return values(state.entities.comments).map(comment => {
    return merge({}, comment, { createdAt: Date.parse(comment.createdAt) });
  });
};
