import { connect } from 'react-redux';
import { seekTrack } from '../../actions/audio_actions';
import Waveform from './waveform';


const mapStateToProps = ({ ui }, { audioUrl, container, trackId}) => ({
  position: ui.waveform[trackId],
  audioUrl,
  trackId
});

const mapDispatchToProps = dispatch => ({
  seekTrack: (position, trackId) => dispatch(seekTrack(position, trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waveform);
