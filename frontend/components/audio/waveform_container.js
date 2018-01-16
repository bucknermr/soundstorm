import { connect } from 'react-redux';
import { seekTrack } from '../../actions/audio_actions';
import Waveform from './waveform';

const mapStateToProps = ({ ui }, { track }) => ({
  position: ui.waveform[track.id]
});

const mapDispatchToProps = dispatch => ({
  seekTrack: (position, trackId) => dispatch(seekTrack(position, trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waveform);
