import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { audioUrl, position, trackId } = this.props;

    const wavesurfer = WaveSurfer.create({
      container: `#waveform-${trackId}`
    });
    wavesurfer.load(audioUrl);
    wavesurfer.on('ready', () => {
      wavesurfer.seekTo(position / wavesurfer.getDuration());
    });

    wavesurfer.on('seek', float => {
      this.props.seekTrack(float * wavesurfer.getDuration(), trackId);
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
      });
    } else {
      wavesurfer.seekTo(position / wavesurfer.getDuration());
    }
    wavesurfer.on('seek', float => {
      this.props.seekTrack(float * wavesurfer.getDuration(), trackId);
    });

  }

  render() {

    return (
      <div id={`waveform-${this.props.trackId}`} className="waveform">
      </div>
    );
  }
}

export default Waveform;
