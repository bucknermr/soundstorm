import React from 'react';
import { Link } from 'react-router-dom';
import timeago from 'timeago.js';
import CommentDeleteContainer from '../buttons/comment_delete_container';

const CommentIndexItem = (props) => {

  const { comment, artist, background, ownComment } = props;

  return (
    <div className={`comment-index-item ${background}`}>
      <Link to={`/artists/${artist.id}`}>
        <img className="profile-icon-round-small" src={artist.imageUrl} />
      </Link>
      <div className="comment-index-item-content">
        <div className="comment-name-timestamp">
          <Link to={`/artists/${artist.id}`} className="artist-link-name" >
            {artist.name}
          </Link>
          <p className="timeago">{timeago().format(comment.createdAt)}</p>
        </div>
        <div className="comment-body-container">
          <p className="comment-body">{comment.body}</p>

          {
            ownComment ? (
              <CommentDeleteContainer commentId={comment.id}/>
            ) : null
          }

        </div>
      </div>
    </div>
  );
};

export default CommentIndexItem;
