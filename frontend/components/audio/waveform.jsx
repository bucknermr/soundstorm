import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wavesurfer: '' };
    this.setOnSeek = this.setOnSeek.bind(this);
  }

  componentDidMount() {
    const { track, position, height, barHeight, progressColor, waveColor } = this.props;
    const wavesurfer = WaveSurfer.create({
      container: `#waveform-${track.id}`,
      barWidth: 2,
      cursorWidth: 0,
      height,
      barHeight,
      progressColor,
      waveColor
    });

    wavesurfer.load(track.audioUrl, track.peaks);
    wavesurfer.seekTo(position / track.duration);
    this.setOnSeek(wavesurfer, track);

    this.setState({ wavesurfer: wavesurfer });
  }

  componentWillReceiveProps({ track, position }) {
    const { wavesurfer } = this.state;
    wavesurfer.unAll();
    if (track.id !== this.props.track.id) {
      wavesurfer.load(track.audioUrl, track.peaks);
    }

    wavesurfer.seekTo(position / track.duration);
    this.setOnSeek(wavesurfer, track);
  }

  setOnSeek(wavesurfer = this.state.wavesurfer, track = this.props.track) {
    wavesurfer.on('seek', float => {
      this.props.seekTrack(float * track.duration, track.id);
    });
  }

  componentWillUnmount() {
    this.state.wavesurfer.unAll();
  }

  render() {
    return (
      <div id={`waveform-${this.props.track.id}`} className="waveform">
      </div>
    );
  }
}

export default Waveform;
