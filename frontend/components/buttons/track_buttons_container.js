import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackButtons from './track_buttons';

import { showModal } from '../../actions/modal_actions';
import { deleteTrack } from '../../actions/track_actions';

const mapDispatchToProps = (dispatch) => ({
  trackEditForm: track => dispatch(showModal('track-edit', track)),
  deleteTrack: track => dispatch(deleteTrack(track.id))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(TrackButtons));
