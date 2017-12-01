import React from 'react';
import { Link } from 'react-router-dom';
import WaveformContainer from '../audio/waveform_container';
import PlayPauseContainer from '../buttons/play_pause_container';
import InlineTrackStats from './inline_track_stats';

const TrackIndexItem = ({ track, artist }) => {
  return (
    <div className="track-index-item">
      <Link to={`/tracks/${track.id}`} className="track-index-item-image">
        <img src={track.imageUrl}/>
      </Link>
      <div className="track-index-item-content">
        <PlayPauseContainer track={track} />
        <span className="artist-link-container">
          <Link to={`/artists/${artist.id}`} className="artist-link" >
            {artist.name}
          </Link>
        </span>
        <span className="track-link-container">
          <Link to={`/tracks/${track.id}`} className="track-link" >
            {track.title}
          </Link>
        </span>
        <WaveformContainer
          audioUrl={track.audioUrl}
          trackId={track.id}
          height={60}
          barHeight={1.5}
          progressColor={'#fa5503'}
          waveColor={'#666'}
        />

        <InlineTrackStats track={track} detail={false} />
      </div>
    </div>
  );
};

export default TrackIndexItem;
