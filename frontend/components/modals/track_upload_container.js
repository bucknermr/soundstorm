import { connect } from 'react-redux';
import { createTrack } from '../../actions/track_actions';
import TrackUpload from './track_upload';

const mapDispatchToProps = dispatch => ({
  createTrack: formData => dispatch(createTrack(formData))
});

export default connect(
  null,
  mapDispatchToProps
)(TrackUpload);
