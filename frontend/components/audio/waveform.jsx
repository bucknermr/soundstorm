import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wavesurfer: '' };
    this.setOnSeek = this.setOnSeek.bind(this);
  }

  componentDidMount() {
    const { audioUrl, position, trackId, height, barHeight, progressColor, waveColor } = this.props;
    const wavesurfer = WaveSurfer.create({
      container: `#waveform-${trackId}`,
      barWidth: 2,
      cursorWidth: 0,
      height,
      barHeight,
      progressColor,
      waveColor
    });
    wavesurfer.load(audioUrl);
    wavesurfer.on('ready', () => {
      wavesurfer.seekTo(position / wavesurfer.getDuration());
      this.setOnSeek(wavesurfer, trackId);
    });

    this.setState({ wavesurfer: wavesurfer });
  }

  componentWillReceiveProps({ trackId, audioUrl, position }) {
    const { wavesurfer } = this.state;
    wavesurfer.unAll();
    if (trackId !== this.props.trackId) {
      wavesurfer.load(audioUrl);
      wavesurfer.on('ready', () => {
        wavesurfer.seekTo(position / wavesurfer.getDuration());
        this.setOnSeek(wavesurfer, trackId);
      });
    } else {
      wavesurfer.seekTo(position / wavesurfer.getDuration());
      this.setOnSeek(wavesurfer, trackId);
    }
  }

  setOnSeek(wavesurfer, trackId) {
    wavesurfer.on('seek', float => {
      this.props.seekTrack(float * wavesurfer.getDuration(), trackId);
    });
  }

  componentWillUnmount() {
    this.state.wavesurfer.unAll();
  }

  render() {
    return (
      <div id={`waveform-${this.props.trackId}`} className="waveform">
      </div>
    );
  }
}

export default Waveform;
