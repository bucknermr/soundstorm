import { connect } from 'react-redux';
import { seekWaveform, play, pause } from '../../actions/audio_actions';
import { incrementPlayCount } from '../../actions/track_actions';
import Player from './player';

const mapStateToProps = ({ ui }) => ({
  track: ui.audio.track,
  position: ui.audio.position,
  paused: ui.audio.paused
});

const mapDispatchToProps = dispatch => ({
  seekWaveform: (position, trackId) => dispatch(seekWaveform(position, trackId)),
  incrementPlayCount: trackId => dispatch(incrementPlayCount(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
