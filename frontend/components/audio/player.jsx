import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track: { id: '', title: '', imageUrl: '', audioUrl: '' },
      position: 0
    };

    this.updateWaveformPosition = this.updateWaveformPosition.bind(this);
    this.play = this.play.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  updateWaveformPosition(pos) {
    this.props.seekWaveform(pos, this.state.track.id);
  }

  play() {
    this.props.play(this.state.track);
  }


  togglePlayPause() {
    const { audioEl } = this.rap;
    const { play, pause } = this.props;
    if(audioEl.paused) {
      play(this.state.track);
    } else {
      pause(this.state.track);
    }
  }

  handleKeyDown({ keyCode }) {
    if (keyCode === 32) { this.togglePlayPause(); }
  }

  componentDidMount () {
    this.rap.audioEl.setAttribute('controlsList', 'nodownload');
    document.addEventListener('keydown', e => this.handleKeyDown(e));
  }

  componentWillReceiveProps({ track, position, paused }) {
    const { audioEl } = this.rap;
    if (paused && !audioEl.paused) {
      audioEl.pause();
    } else if (audioEl.paused) {
      audioEl.play();
    }

    this.setState({ track, position });
  }

  componentWillUnmount() {
    document.removeEventLIstener('keydown');
  }

  componentDidUpdate() {
    this.rap.audioEl.currentTime = this.state.position;
  }

  render () {
    const { track, position } = this.state;

    return (
      <div>
        <ReactAudioPlayer
          src={track.audioUrl}
          ref={(element) => { this.rap = element; }}
          autoPlay
          controls
          onPlay={this.play}
          listenInterval={100}
          onListen={this.updateWaveformPosition}
          onSeeked={ e => (
            this.updateWaveformPosition(e.srcElement.currentTime)
          )}
        />
      </div>
    );
  }
}

export default Player;
