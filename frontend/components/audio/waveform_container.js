import { connect } from 'react-redux';
import { seekTrack } from '../../actions/audio_actions';
import Waveform from './waveform';

import { updateTrack } from '../../actions/track_actions';


const mapStateToProps = ({ ui }, { track }) => ({
  position: ui.waveform[track.id],
});

const mapDispatchToProps = dispatch => ({
  seekTrack: (position, trackId) => dispatch(seekTrack(position, trackId)),
  updateTrack: (formData, trackId) => dispatch(updateTrack(formData, trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waveform);
