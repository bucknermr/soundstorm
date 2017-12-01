import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = (props) => {
  const { comments, artists, trackArtistId, currentArtistId } = props;
  if (comments.length === 0) {
    return (
      <div>Something here</div>
    );
  }

  return (
    <div className="comment-index">
      <p className="comment-count">
        <i className="fa fa-comment" aria-hidden="true"></i>
        {comments.length} comment{comments.length > 1 ? 's' : ''}
      </p>
      {
        comments.map(comment => (
          <CommentIndexItem
            background={
              trackArtistId === comment.authorId ? (
                'off-white-background') : ' '
            }
            ownComment={currentArtistId === comment.authorId}
            key={comment.id}
            comment={comment}
            artist={artists[comment.authorId]}
          />
        ))
      }
    </div>
  );
};

export default CommentIndex;
