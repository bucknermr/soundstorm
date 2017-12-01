import React from 'react';
import { Link } from 'react-router-dom';

const InlineTrackStats = ({ track, detail }) => {
  return (
    <div className="inline-track-stats">
      {
        track.playCount ? (
          <p>
            <i className="fa fa-play" aria-hidden="true"></i>{track.playCount}
          </p>
        ) : null
      }
      {
        track.commentCount && !detail ? (
          <Link to={`/tracks/${track.id}`}>
            <i class="fa fa-comment" aria-hidden="true"></i>{track.commentCount}
          </Link>
        ) : null
      }
    </div>
  );
};

export default InlineTrackStats;
