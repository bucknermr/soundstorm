import React from 'react';

const InlineTrackStats = ({ playCount, commentCount }, detail) => {

  return (
    <div>
      {
        playCount ? (
          <p>
            <i className="fa fa-play" aria-hidden="true"></i>{playCount}
          </p>
        ) : null
      }
      {
        commentCount && !detail ? (
          <p>
            <i class="fa fa-comment" aria-hidden="true"></i>{commentCount}
          </p>
        ) : null
      }
    </div>
  );
};

export default InlineTrackStats;
