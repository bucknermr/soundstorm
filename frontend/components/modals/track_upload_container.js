import { connect } from 'react-redux';
import { createTrack } from '../../actions/track_actions';
import { hideModal } from '../../actions/modal_actions';
import TrackUpload from './track_upload';

const mapDispatchToProps = dispatch => ({
  createTrack: formData => dispatch(createTrack(formData)),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  null,
  mapDispatchToProps
)(TrackUpload);
