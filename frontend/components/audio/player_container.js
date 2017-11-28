import { connect } from 'react-redux';
import { seekWaveform, play, pause } from '../../actions/audio_actions';
import Player from './player';

const mapStateToProps = ({ ui }) => ({
  track: ui.audio.track,
  position: ui.audio.position,
  paused: ui.audio.paused
});

const mapDispatchToProps = dispatch => ({
  seekWaveform: (position, trackId) => dispatch(seekWaveform(position, trackId)),
  play: (track) => dispatch(play(track)),
  pause: (track) => dispatch(pause(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
