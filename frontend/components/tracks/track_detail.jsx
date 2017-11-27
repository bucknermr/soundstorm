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

    return (
      <div>
        <h1> this is a track </h1>
        <img src={track.imageUrl} ></img>
        <ul>
          <li>Title: {track.title}</li>
          <li>Description: {track.description}</li>
        </ul>
        <button onClick={() => play(track)}>
          Play!
        </button>

        {
          track.id ? (
            <WaveformContainer
              audioUrl={track.audioUrl}
              trackId={track.id}
            />
          ) : null
        }
      </div>
    );
  }
}

export default TrackDetail;
