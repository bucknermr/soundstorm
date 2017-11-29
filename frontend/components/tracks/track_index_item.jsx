import React from 'react';

const TrackIndexItem = ({ track }) => {
  return (
    <div className="track-index-item">
      <img src={track.imageUrl}/>
      <div>This is a track index item!</div>
    </div>
  );
};

export default TrackIndexItem;
