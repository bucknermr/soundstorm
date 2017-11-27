import { connect } from 'react-redux';
import { seekWaveform } from '../../actions/audio_actions';
import Player from './player';

const mapStateToProps = ({ ui }) => ({
  track: ui.audio.track,
  position: ui.audio.position
});

const mapDispatchToProps = dispatch => ({
  seekWaveform: (position, trackId) => dispatch(seekWaveform(position, trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
