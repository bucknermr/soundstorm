import React from 'react';
import { Link } from 'react-router-dom';
import WaveformContainer from '../audio/waveform_container';
import PlayPauseContainer from '../buttons/play_pause_container';

class TrackDetail extends React.Component {

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps({ track, match }) {
    if (!track) {
      this.props.requestTrack(match.params.trackId);
    }
  }

  render () {
    const { track, play, artists, trackEditForm } = this.props;

    if (!track) { return null; }

    return (
      <div>
        <div className="track-hero-container">
          <PlayPauseContainer track={track} />

          <Link className="artist-name" to={`/artists/${track.artistId}`}>
            {artists[track.artistId].name}
          </Link>
          <h2 className="track-title">{track.title}</h2>

          <WaveformContainer
            audioUrl={track.audioUrl}
            trackId={track.id}
            height={100}
            barHeight={1.5}
            progressColor={'#fa5503'}
            waveColor={'#fff'}
          />

          <img src={track.imageUrl} ></img>

        </div>
        <section className="track-detail-content-container">
          <div className="comment-form-container">
          </div>
        </section>

        <p>{track.description}</p>

        <button className="editTrack" onClick={() => trackEditForm(track)} >
          Edit
        </button>
      </div>
    );
  }
}

export default TrackDetail;
