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
  }

  updateWaveformPosition(pos) {
    this.props.seekWaveform(pos, this.state.track.id);
  }


  componentDidMount () {
    this.rap.audioEl.setAttribute('controlsList', 'nodownload');
  }

  componentWillReceiveProps({ track, position }) {
    this.setState({ track, position });
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
          listenInterval={100}
          onListen={this.updateWaveformPosition}
        />
      </div>
    );
  }
}

export default Player;
