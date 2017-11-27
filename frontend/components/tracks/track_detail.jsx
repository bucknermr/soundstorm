import React from 'react';
import WaveformContainer from '../audio/waveform_container';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      track: { title: '', description: '', imageUrl: '', id: '' }
    };
  }

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps({ track, match }) {
    if (track) {
      this.setState({ track });
    } else {
      this.props.requestTrack(match.params.trackId);
    }
  }

  render () {
    const { track } = this.state;
    const { play } = this.props;

    if (!track.id) { return null; }

    return (
      <div>
        <div className="track-hero-container">
          <img src={track.imageUrl} ></img>

          <WaveformContainer
            audioUrl={track.audioUrl}
            trackId={track.id}
            height={100}
            barHeight={3}
          />

        </div>

        <ul>
          <li>Title: {track.title}</li>
          <li>Description: {track.description}</li>
        </ul>
        <button onClick={() => play(track)}>
          Play!
        </button>
      </div>
    );
  }
}

export default TrackDetail;
