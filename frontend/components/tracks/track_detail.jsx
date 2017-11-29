import React from 'react';
import WaveformContainer from '../audio/waveform_container';
import PlayPauseContainer from '../buttons/play_pause_container';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      track: { title: '', description: '', imageUrl: '', id: '' },
      paused: true
    };

    // this.handlePlay = this.handlePlay.bind(this);
    // this.handlePause = this.handlePause.bind(this);
  }

  // handlePlay() {
  //   this.setState({ paused: false });
  // }
  //
  // handlePause() {
  //   this.setState({ paused: true });
  // }

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
    // const audio = document.querySelector('.react-audio-player');
    // audio.addEventListener('play', this.handlePlay);
    // audio.addEventListener('pause', this.handlePause);
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

  render () {
    const { track } = this.state;
    const { play } = this.props;

    if (!track.id) { return null; }

    return (
      <div>
        <div className="track-hero-container">
          <PlayPauseContainer track={track} />

          <h3 className="artist-name">Artist Name</h3>
          <h2 className="track-title">{track.title}</h2>

          <WaveformContainer
            audioUrl={track.audioUrl}
            trackId={track.id}
            height={100}
            barHeight={3}
            progressColor={'#fa5503'}
            waveColor={'#fff'}
          />

          <img src={track.imageUrl} ></img>

        </div>
        <section className="track-detail-content-container">
          <div className=""></div>
        </section>

        <p>{track.description}</p>
      </div>
    );
  }
}

export default TrackDetail;
