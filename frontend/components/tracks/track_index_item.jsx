import React from 'react';
import { Link } from 'react-router-dom';
import WaveformContainer from '../audio/waveform_container';

const TrackIndexItem = ({ track, artist }) => {

  return (
    <div className="track-index-item">
      <Link to={`/tracks/${track.id}`} className="track-index-item-image">
        <img src={track.imageUrl}/>
      </Link>
      <div className="track-index-item-content">
        <Link to={`/artists/${artist.id}`} className="artist-link">
          {artist.name}
        </Link>
        <Link to={`/tracks/${track.id}`} className="track-link">
          {track.title}
        </Link>
        <WaveformContainer
          audioUrl={track.audioUrl}
          trackId={track.id}
          height={60}
          barHeight={3}
          progressColor={'#fa5503'}
        />
      </div>
    </div>
  );
};

export default TrackIndexItem;
