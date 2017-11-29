import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackIndex = ({ tracks, artists }) => {
  return (
    <div className="track-index">
      {
        tracks.map(track => (
          <TrackIndexItem
            key={`track-${track.id}`}
            track={track}
            artist={artists[track.artistId]}
          />
        ))
      }
    </div>
  );
};

export default TrackIndex;
