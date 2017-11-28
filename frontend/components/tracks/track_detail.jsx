import React from 'react';
import WaveformContainer from '../audio/waveform_container';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      track: { title: '', description: '', imageUrl: '', id: '' },
      paused: true
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({ paused: false });
  }

  handlePause() {
    this.setState({ paused: true });
  }

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
    const audio = document.querySelector('.react-audio-player');
    audio.addEventListener('play', this.handlePlay);
    audio.addEventListener('pause', this.handlePause);
  }

  componentWillReceiveProps({ track, match }) {
    if (track) {
      this.setState({ track });
    } else {
      this.props.requestTrack(match.params.trackId);
    }
  }

  componentWillUnmount() {
    const audio = document.querySelector('.react-audio-player');
    audio.removeEventListener('play', this.handlePlay);
    audio.removeEventListener('pause', this.handlePause);
  }

  renderPlayPause() {
    const { track } = this.state;
    if (this.props.playing && !this.state.paused) {
      return (
        <div className="pause-button-large"
          onClick={() => this.props.pause(track)}></div>
      );
    } else {
      return (
        <div className="play-button-large"
          onClick={() => this.props.play(track)}></div>
      );
    }
  }

  render () {
    const { track } = this.state;
    const { play } = this.props;

    if (!track.id) { return null; }

    return (
      <div>
        <div className="track-hero-container">
          { this.renderPlayPause() }

          <WaveformContainer
            audioUrl={track.audioUrl}
            trackId={track.id}
            height={100}
            barHeight={3}
          />

          <img src={track.imageUrl} ></img>

        </div>

        <ul>
          <li>Title: {track.title}</li>
          <li>Description: {track.description}</li>
        </ul>
      </div>
    );
  }
}

export default TrackDetail;
